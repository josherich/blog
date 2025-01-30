class Arc {
  constructor(v, next) {
    this.v = v;
    this.next = next;
  }
}

class DominatorTree {
  constructor(n, m) {
    this.N = 100000;
    this.M = 500000;

    // Initialize arrays
    this.pool = new Array(2 * this.M + this.N).fill().map(() => new Arc(0, 0));
    this.pit = 0;  // Index into pool array

    this.e = new Array(this.N).fill(-1);
    this.ee = new Array(this.N).fill(-1);
    this.domch = new Array(this.N).fill(-1);
    this.tick = 0;
    this.dfn = new Array(this.N).fill(-1);
    this.rdfn = new Array(this.N).fill(0);
    this.uf = new Array(this.N).fill(0);
    this.sdom = new Array(this.N).fill(0);
    this.best = new Array(this.N).fill(0);
    this.idom = new Array(this.N).fill(0);
  }

  dfs(u) {
    this.dfn[u] = this.tick;
    this.rdfn[this.tick++] = u;

    for (let a = this.e[u]; ~a; a = this.pool[a].next) {
      const v = this.pool[a].v;
      if (this.dfn[v] < 0) {
        this.uf[v] = u;
        this.dfs(v);
      }
    }
  }

  eval(v, cur) {
    if (this.dfn[v] <= cur) {
      return v;
    }

    const u = this.uf[v];
    const r = this.eval(u, cur);

    if (this.dfn[this.sdom[this.best[u]]] < this.dfn[this.sdom[this.best[v]]]) {
      this.best[v] = this.best[u];
    }

    this.uf[v] = r;
    return r;
  }

  simpleLengauerTarjan(n, r) {
    // Initialize dfn array
    this.dfn.fill(-1);
    this.tick = 0;
    this.dfs(r);

    // Initialize sdom and best arrays
    for (let i = 0; i < n; i++) {
      this.sdom[i] = i;
      this.best[i] = i;
    }

    for (let i = this.tick; --i;) {
      const v = this.rdfn[i];
      let u;

      // First phase
      for (let a = this.ee[v]; ~a; a = this.pool[a].next) {
        u = this.pool[a].v;
        if (this.dfn[u] !== -1) {
          this.eval(u, i);
          if (this.dfn[this.sdom[this.best[u]]] < this.dfn[this.sdom[v]]) {
            this.sdom[v] = this.sdom[this.best[u]];
          }
        }
      }

      // Add to dominator tree
      this.pool[this.pit] = new Arc(v, this.domch[this.sdom[v]]);
      this.domch[this.sdom[v]] = this.pit++;

      // Second phase
      const prev = this.rdfn[i - 1];
      for (let a = this.domch[prev]; ~a; a = this.pool[a].next) {
        u = this.pool[a].v;
        this.eval(u, i - 1);
        this.idom[u] = this.sdom[this.best[u]] === prev ? prev : this.best[u];
      }
    }

    // Final phase
    for (let i = 1; i < this.tick; i++) {
      const v = this.rdfn[i];
      if (this.idom[v] !== this.sdom[v]) {
        this.idom[v] = this.idom[this.idom[v]];
      }
    }
  }

  // Add an edge to the graph
  addEdge(u, v) {
    // Forward edge
    this.pool[this.pit] = new Arc(v, this.e[u]);
    this.e[u] = this.pit++;

    // Backward edge for semi-dominators
    this.pool[this.pit] = new Arc(u, this.ee[v]);
    this.ee[v] = this.pit++;
  }

  // Main execution function
  execute(n, edges) {
    // Initialize arrays
    this.e.fill(-1);
    this.ee.fill(-1);
    this.domch.fill(-1);
    this.pit = 0;

    // Add all edges
    for (const [u, v] of edges) {
      this.addEdge(u, v);
    }

    // Run the algorithm
    this.simpleLengauerTarjan(n, 0);

    // Return the immediate dominators array
    return this.idom;
  }
}

// Example usage:
function getDominatorTree(edges) {
  // number of nodes
  const set = new Set(edges.flat());
  const nodes = Array.from(new Set(edges.flat()));
  const n = set.size;
  const dedges = edges.map(([from, to]) => [nodes.indexOf(from), nodes.indexOf(to)]);

  const domTree = new DominatorTree(n, dedges.length);
  const idoms = domTree.execute(n, dedges);

  // Print results
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([nodes[idoms[i]], nodes[i]]);
  }
  return result;
}

// ============= tree rendering =============

function buildDependencyTree(edges) {
    // Create adjacency list
    const graph = new Map();
    const inDegree = new Map();

    // Initialize maps
    edges.forEach(([from, to]) => {
        if (!graph.has(from)) graph.set(from, new Set());
        if (!graph.has(to)) graph.set(to, new Set());
        if (!inDegree.has(from)) inDegree.set(from, 0);
        if (!inDegree.has(to)) inDegree.set(to, 0);
    });

    // Build adjacency list and count incoming edges
    edges.forEach(([from, to]) => {
        graph.get(from).add(to);
        inDegree.set(to, inDegree.get(to) + 1);
    });

    // Find root (node with no incoming edges)
    const root = Array.from(inDegree.entries())
        .find(([node, degree]) => degree === 0)?.[0];

    if (root === undefined) {
        throw new Error("No root found. Graph might have cycles.");
    }

    // Helper function to generate the tree string
    function countDescendants(node, visited = new Set()) {
        if (visited.has(node)) return 0;
        visited.add(node);

        const children = Array.from(graph.get(node));
        return children.reduce((total, child) =>
            total + 1 + countDescendants(child, visited), 0);
    }

    // Pre-calculate descendant counts for all nodes
    const descendantCounts = new Map();
    for (const node of graph.keys()) {
        descendantCounts.set(node, countDescendants(node));
    }

    // Helper function to generate the tree string
    function generateTree(node, prefix = "", isLast = true, visited = new Set()) {
        if (visited.has(node)) {
            return `${prefix}${isLast ? "└" : "├"}-- ${node} (circular)\n`;
        }

        visited.add(node);
        const descendants = descendantCounts.get(node);
        const colorize = (count) => {
          const colors = ['antiquewhite', 'cadetblue', 'orange', 'red'];
          if (count < 5) return colors[0];
          if (count < 10) return colors[1];
          if (count < 20) return colors[2];
          return colors[3];
        }
        const formattedDes = descendants > 0 ? `<span style="color: ${colorize(descendants)}">(${descendants})</span>` : "";
        let result = `${prefix}${isLast ? "└" : "├"}-- ${formattedDes} ${node}\n`;

        const children = Array.from(graph.get(node));
        children.forEach((child, index) => {
            const isLastChild = index === children.length - 1;
            const newPrefix = prefix + (isLast ? "    " : "│   ");
            result += generateTree(child, newPrefix, isLastChild, new Set(visited));
        });

        return result;
    }

    // Generate the final tree string
    return generateTree(root).trim();
}

// ============== read npm list --json ==============

function extractDependencyEdges(npmListOutput) {
    const edges = [];

    // Helper function to process each package and its dependencies recursively
    function processPackage(pkg) {
        if (!pkg.dependencies) {
            return;
        }

        // Get the source package identifier (from key)
        const sourcePackage = pkg.from || pkg.name + '@' + (pkg.version || 'root');

        // Process each dependency
        Object.entries(pkg.dependencies).forEach(([depName, depInfo]) => {
            // Get the target package identifier
            const targetPackage = depInfo.from || depName + '@' + (depInfo.version || 'root');

            // Add the edge to our list
            edges.push([sourcePackage, targetPackage]);

            // Recursively process the dependency's dependencies
            processPackage(depInfo);
        });
    }

    // Start processing from the root
    processPackage(npmListOutput);

    return edges;
}
