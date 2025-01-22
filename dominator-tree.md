---
layout: default
title: npm Dominator Tree
---

### Dominator Tree For NPM Dependencies

Find the [dominator tree](https://en.wikipedia.org/wiki/Dominator_(graph_theory)) of your npm dependencies.

1. run `npm list --json` in your project folder. (consider adding `--depth=n` and `--omit=dev`)

2. paste the output below.

The dominator tree is useful because of this nice property: if you remove a node in the dominator tree, the entire subtree beneath it is no longer reachable from the root. It means if a node has a **big number of descendants**, it's a good candidate for cutting down the dependency tree.

Here's the example output for `@babel/preset-react@7.16.7`
<textarea id="npm_list" style="width: 100%; height: 200px;"></textarea>

<div id="result">_</div>

<script>
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

  console.log(dedges, nodes, n)

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
          const colors = ['black', 'cadetblue', 'orange', 'red'];
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

// Example usage:
// const edges = [
//     [0, 1],
//     [1, 2],
//     [1, 7],
//     [2, 3],
//     [2, 4],
//     [3, 2],
//     [8, 3],
//     [4, 5],
//     [4, 6],
//     [5, 4],
//     [6, 1],
//     [6, 6]
// ];

// const edges = [
//     [0, 1],
//     [1, 2],
//     [1, 3],
//     [3, 4]
// ];

// console.log(buildDependencyTree(edges));


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

// Example usage:
const sampleInput = {
  "name": "@babel/preset-react",
  "version": "7.16.7",
  "from": "@babel/preset-react@7.16.7",
  "resolved": "https://registry.npmjs.org/@babel/preset-react/-/preset-react-7.16.7.tgz",
  "dependencies": {
    "@babel/core": {
      "version": "7.26.0",
      "from": "@babel/core@^7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz",
      "dependencies": {
        "@ampproject/remapping": {
          "version": "2.3.0",
          "from": "@ampproject/remapping@^2.2.0",
          "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
          "dependencies": {
            "@jridgewell/gen-mapping": {
              "version": "0.3.8",
              "from": "@jridgewell/gen-mapping@^0.3.5",
              "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz",
              "dependencies": {
                "@jridgewell/set-array": {
                  "version": "1.2.1",
                  "from": "@jridgewell/set-array@^1.2.1",
                  "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz"
                },
                "@jridgewell/sourcemap-codec": {
                  "version": "1.5.0",
                  "from": "@jridgewell/sourcemap-codec@^1.4.10",
                  "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz"
                },
                "@jridgewell/trace-mapping": {
                  "version": "0.3.25",
                  "from": "@jridgewell/trace-mapping@^0.3.25",
                  "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz"
                }
              }
            },
            "@jridgewell/trace-mapping": {
              "version": "0.3.25",
              "from": "@jridgewell/trace-mapping@^0.3.25",
              "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
              "dependencies": {
                "@jridgewell/resolve-uri": {
                  "version": "3.1.2",
                  "from": "@jridgewell/resolve-uri@^3.1.0",
                  "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz"
                },
                "@jridgewell/sourcemap-codec": {
                  "version": "1.5.0",
                  "from": "@jridgewell/sourcemap-codec@^1.4.10",
                  "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz"
                }
              }
            }
          }
        },
        "@babel/code-frame": {
          "version": "7.26.2",
          "from": "@babel/code-frame@^7.26.2",
          "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",
          "dependencies": {
            "@babel/helper-validator-identifier": {
              "version": "7.25.9",
              "from": "@babel/helper-validator-identifier@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz"
            },
            "js-tokens": {
              "version": "4.0.0",
              "from": "js-tokens@^4.0.0",
              "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz"
            },
            "picocolors": {
              "version": "1.1.1",
              "from": "picocolors@^1.0.0",
              "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz"
            }
          }
        },
        "@babel/generator": {
          "version": "7.26.5",
          "from": "@babel/generator@^7.26.5",
          "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.5.tgz",
          "dependencies": {
            "@babel/parser": {
              "version": "7.26.5",
              "from": "@babel/parser@^7.26.5",
              "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.5.tgz"
            },
            "@babel/types": {
              "version": "7.26.5",
              "from": "@babel/types@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz"
            },
            "@jridgewell/gen-mapping": {
              "version": "0.3.8",
              "from": "@jridgewell/gen-mapping@^0.3.5",
              "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz"
            },
            "@jridgewell/trace-mapping": {
              "version": "0.3.25",
              "from": "@jridgewell/trace-mapping@^0.3.25",
              "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz"
            },
            "jsesc": {
              "version": "3.1.0",
              "from": "jsesc@^3.0.2",
              "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz"
            }
          }
        },
        "@babel/helper-compilation-targets": {
          "version": "7.26.5",
          "from": "@babel/helper-compilation-targets@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.26.5.tgz",
          "dependencies": {
            "@babel/compat-data": {
              "version": "7.26.5",
              "from": "@babel/compat-data@^7.26.5",
              "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.5.tgz"
            },
            "@babel/helper-validator-option": {
              "version": "7.25.9",
              "from": "@babel/helper-validator-option@^7.16.7",
              "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz"
            },
            "browserslist": {
              "version": "4.24.4",
              "from": "browserslist@^4.24.0",
              "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.24.4.tgz",
              "dependencies": {
                "caniuse-lite": {
                  "version": "1.0.30001695",
                  "from": "caniuse-lite@^1.0.30001688",
                  "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001695.tgz"
                },
                "electron-to-chromium": {
                  "version": "1.5.84",
                  "from": "electron-to-chromium@^1.5.73",
                  "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.84.tgz"
                },
                "node-releases": {
                  "version": "2.0.19",
                  "from": "node-releases@^2.0.19",
                  "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.19.tgz"
                },
                "update-browserslist-db": {
                  "version": "1.1.2",
                  "from": "update-browserslist-db@^1.1.1",
                  "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.2.tgz",
                  "dependencies": {
                    "escalade": {
                      "version": "3.2.0",
                      "from": "escalade@^3.2.0",
                      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz"
                    },
                    "picocolors": {
                      "version": "1.1.1",
                      "from": "picocolors@^1.0.0",
                      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz"
                    }
                  }
                }
              }
            },
            "lru-cache": {
              "version": "5.1.1",
              "from": "lru-cache@^5.1.1",
              "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
              "dependencies": {
                "yallist": {
                  "version": "3.1.1",
                  "from": "yallist@^3.0.2",
                  "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz"
                }
              }
            },
            "semver": {
              "version": "6.3.1",
              "from": "semver@^6.3.1",
              "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz"
            }
          }
        },
        "@babel/helper-module-transforms": {
          "version": "7.26.0",
          "from": "@babel/helper-module-transforms@^7.26.0",
          "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",
          "dependencies": {
            "@babel/helper-module-imports": {
              "version": "7.25.9",
              "from": "@babel/helper-module-imports@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz"
            },
            "@babel/helper-validator-identifier": {
              "version": "7.25.9",
              "from": "@babel/helper-validator-identifier@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz"
            },
            "@babel/traverse": {
              "version": "7.26.5",
              "from": "@babel/traverse@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.5.tgz"
            }
          }
        },
        "@babel/helpers": {
          "version": "7.26.0",
          "from": "@babel/helpers@^7.26.0",
          "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",
          "dependencies": {
            "@babel/template": {
              "version": "7.25.9",
              "from": "@babel/template@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz"
            },
            "@babel/types": {
              "version": "7.26.5",
              "from": "@babel/types@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz"
            }
          }
        },
        "@babel/parser": {
          "version": "7.26.5",
          "from": "@babel/parser@^7.26.5",
          "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.5.tgz",
          "dependencies": {
            "@babel/types": {
              "version": "7.26.5",
              "from": "@babel/types@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz"
            }
          }
        },
        "@babel/template": {
          "version": "7.25.9",
          "from": "@babel/template@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz",
          "dependencies": {
            "@babel/code-frame": {
              "version": "7.26.2",
              "from": "@babel/code-frame@^7.26.2",
              "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz"
            },
            "@babel/parser": {
              "version": "7.26.5",
              "from": "@babel/parser@^7.26.5",
              "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.5.tgz"
            },
            "@babel/types": {
              "version": "7.26.5",
              "from": "@babel/types@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz"
            }
          }
        },
        "@babel/traverse": {
          "version": "7.26.5",
          "from": "@babel/traverse@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.5.tgz",
          "dependencies": {
            "@babel/code-frame": {
              "version": "7.26.2",
              "from": "@babel/code-frame@^7.26.2",
              "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz"
            },
            "@babel/generator": {
              "version": "7.26.5",
              "from": "@babel/generator@^7.26.5",
              "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.5.tgz"
            },
            "@babel/parser": {
              "version": "7.26.5",
              "from": "@babel/parser@^7.26.5",
              "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.5.tgz"
            },
            "@babel/template": {
              "version": "7.25.9",
              "from": "@babel/template@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.25.9.tgz"
            },
            "@babel/types": {
              "version": "7.26.5",
              "from": "@babel/types@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz"
            },
            "debug": {
              "version": "4.4.0",
              "from": "debug@^4.3.1",
              "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz"
            },
            "globals": {
              "version": "11.12.0",
              "from": "globals@^11.1.0",
              "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz"
            }
          }
        },
        "@babel/types": {
          "version": "7.26.5",
          "from": "@babel/types@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz",
          "dependencies": {
            "@babel/helper-string-parser": {
              "version": "7.25.9",
              "from": "@babel/helper-string-parser@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz"
            },
            "@babel/helper-validator-identifier": {
              "version": "7.25.9",
              "from": "@babel/helper-validator-identifier@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.25.9.tgz"
            }
          }
        },
        "convert-source-map": {
          "version": "2.0.0",
          "from": "convert-source-map@^2.0.0",
          "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz"
        },
        "debug": {
          "version": "4.4.0",
          "from": "debug@^4.3.1",
          "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
          "dependencies": {
            "ms": {
              "version": "2.1.3",
              "from": "ms@^2.1.3",
              "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz"
            }
          }
        },
        "gensync": {
          "version": "1.0.0-beta.2",
          "from": "gensync@^1.0.0-beta.2",
          "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz"
        },
        "json5": {
          "version": "2.2.3",
          "from": "json5@^2.2.3",
          "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz"
        },
        "semver": {
          "version": "6.3.1",
          "from": "semver@^6.3.1",
          "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz"
        }
      }
    },
    "@babel/helper-plugin-test-runner": {
      "version": "7.25.9",
      "from": "@babel/helper-plugin-test-runner@^7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-test-runner/-/helper-plugin-test-runner-7.25.9.tgz",
      "dependencies": {
        "@babel/helper-transform-fixture-test-runner": {
          "version": "7.26.5",
          "from": "@babel/helper-transform-fixture-test-runner@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/helper-transform-fixture-test-runner/-/helper-transform-fixture-test-runner-7.26.5.tgz",
          "dependencies": {
            "@babel/code-frame": {
              "version": "7.26.2",
              "from": "@babel/code-frame@^7.26.2",
              "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz"
            },
            "@babel/core": {
              "version": "7.26.0",
              "from": "@babel/core@^7.16.7",
              "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.26.0.tgz"
            },
            "@babel/helper-check-duplicate-nodes": {
              "version": "7.25.9",
              "from": "@babel/helper-check-duplicate-nodes@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/helper-check-duplicate-nodes/-/helper-check-duplicate-nodes-7.25.9.tgz",
              "dependencies": {
                "@babel/types": {
                  "version": "7.26.5",
                  "from": "@babel/types@^7.25.9",
                  "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz"
                }
              }
            },
            "@babel/helper-fixtures": {
              "version": "7.26.0",
              "from": "@babel/helper-fixtures@^7.26.0",
              "resolved": "https://registry.npmjs.org/@babel/helper-fixtures/-/helper-fixtures-7.26.0.tgz",
              "dependencies": {
                "@jridgewell/gen-mapping": {
                  "version": "0.3.8",
                  "from": "@jridgewell/gen-mapping@^0.3.5",
                  "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz"
                },
                "semver": {
                  "version": "6.3.1",
                  "from": "semver@^6.3.1",
                  "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz"
                }
              }
            },
            "@jridgewell/trace-mapping": {
              "version": "0.3.25",
              "from": "@jridgewell/trace-mapping@^0.3.25",
              "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz"
            },
            "fs-readdir-recursive": {
              "version": "1.1.0",
              "from": "fs-readdir-recursive@^1.1.0",
              "resolved": "https://registry.npmjs.org/fs-readdir-recursive/-/fs-readdir-recursive-1.1.0.tgz"
            },
            "jest-diff": {
              "version": "29.7.0",
              "from": "jest-diff@^29.6.4",
              "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-29.7.0.tgz",
              "dependencies": {
                "chalk": {
                  "version": "4.1.2",
                  "from": "chalk@^4.0.0",
                  "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
                  "dependencies": {
                    "ansi-styles": {
                      "version": "4.3.0",
                      "from": "ansi-styles@^4.1.0",
                      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
                      "dependencies": {
                        "color-convert": {
                          "version": "2.0.1",
                          "from": "color-convert@^2.0.1",
                          "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
                          "dependencies": {
                            "color-name": {
                              "version": "1.1.4",
                              "from": "color-name@~1.1.4",
                              "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz"
                            }
                          }
                        }
                      }
                    },
                    "supports-color": {
                      "version": "7.2.0",
                      "from": "supports-color@^7.1.0",
                      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
                      "dependencies": {
                        "has-flag": {
                          "version": "4.0.0",
                          "from": "has-flag@^4.0.0",
                          "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz"
                        }
                      }
                    }
                  }
                },
                "diff-sequences": {
                  "version": "29.6.3",
                  "from": "diff-sequences@^29.6.3",
                  "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-29.6.3.tgz"
                },
                "jest-get-type": {
                  "version": "29.6.3",
                  "from": "jest-get-type@^29.6.3",
                  "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-29.6.3.tgz"
                },
                "pretty-format": {
                  "version": "29.7.0",
                  "from": "pretty-format@^29.7.0",
                  "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-29.7.0.tgz",
                  "dependencies": {
                    "@jest/schemas": {
                      "version": "29.6.3",
                      "from": "@jest/schemas@^29.6.3",
                      "resolved": "https://registry.npmjs.org/@jest/schemas/-/schemas-29.6.3.tgz",
                      "dependencies": {
                        "@sinclair/typebox": {
                          "version": "0.27.8",
                          "from": "@sinclair/typebox@^0.27.8",
                          "resolved": "https://registry.npmjs.org/@sinclair/typebox/-/typebox-0.27.8.tgz"
                        }
                      }
                    },
                    "ansi-styles": {
                      "version": "5.2.0",
                      "from": "ansi-styles@^5.0.0",
                      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz"
                    },
                    "react-is": {
                      "version": "18.3.1",
                      "from": "react-is@^18.0.0",
                      "resolved": "https://registry.npmjs.org/react-is/-/react-is-18.3.1.tgz"
                    }
                  }
                }
              }
            },
            "lru-cache": {
              "version": "5.1.1",
              "from": "lru-cache@^5.1.1",
              "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz"
            },
            "make-dir": {
              "version": "2.1.0",
              "from": "make-dir@^2.1.0",
              "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-2.1.0.tgz",
              "dependencies": {
                "semver": {
                  "version": "5.7.2",
                  "from": "semver@^5.6.0",
                  "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.2.tgz"
                },
                "pify": {
                  "version": "4.0.1",
                  "from": "pify@^4.0.1",
                  "resolved": "https://registry.npmjs.org/pify/-/pify-4.0.1.tgz"
                }
              }
            }
          }
        }
      }
    },
    "@babel/helper-plugin-utils": {
      "version": "7.26.5",
      "from": "@babel/helper-plugin-utils@^7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.26.5.tgz"
    },
    "@babel/helper-validator-option": {
      "version": "7.25.9",
      "from": "@babel/helper-validator-option@^7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.25.9.tgz"
    },
    "@babel/plugin-transform-react-display-name": {
      "version": "7.25.9",
      "from": "@babel/plugin-transform-react-display-name@^7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-display-name/-/plugin-transform-react-display-name-7.25.9.tgz",
      "dependencies": {
        "@babel/helper-plugin-utils": {
          "version": "7.26.5",
          "from": "@babel/helper-plugin-utils@^7.16.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.26.5.tgz"
        }
      }
    },
    "@babel/plugin-transform-react-jsx": {
      "version": "7.25.9",
      "from": "@babel/plugin-transform-react-jsx@^7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.25.9.tgz",
      "dependencies": {
        "@babel/helper-annotate-as-pure": {
          "version": "7.25.9",
          "from": "@babel/helper-annotate-as-pure@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.25.9.tgz",
          "dependencies": {
            "@babel/types": {
              "version": "7.26.5",
              "from": "@babel/types@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz"
            }
          }
        },
        "@babel/helper-module-imports": {
          "version": "7.25.9",
          "from": "@babel/helper-module-imports@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.25.9.tgz",
          "dependencies": {
            "@babel/traverse": {
              "version": "7.26.5",
              "from": "@babel/traverse@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.26.5.tgz"
            },
            "@babel/types": {
              "version": "7.26.5",
              "from": "@babel/types@^7.25.9",
              "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz"
            }
          }
        },
        "@babel/helper-plugin-utils": {
          "version": "7.26.5",
          "from": "@babel/helper-plugin-utils@^7.16.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.26.5.tgz"
        },
        "@babel/plugin-syntax-jsx": {
          "version": "7.25.9",
          "from": "@babel/plugin-syntax-jsx@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.25.9.tgz",
          "dependencies": {
            "@babel/helper-plugin-utils": {
              "version": "7.26.5",
              "from": "@babel/helper-plugin-utils@^7.16.7",
              "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.26.5.tgz"
            }
          }
        },
        "@babel/types": {
          "version": "7.26.5",
          "from": "@babel/types@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.5.tgz"
        }
      }
    },
    "@babel/plugin-transform-react-jsx-development": {
      "version": "7.25.9",
      "from": "@babel/plugin-transform-react-jsx-development@^7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-development/-/plugin-transform-react-jsx-development-7.25.9.tgz",
      "dependencies": {
        "@babel/plugin-transform-react-jsx": {
          "version": "7.25.9",
          "from": "@babel/plugin-transform-react-jsx@^7.16.7",
          "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx/-/plugin-transform-react-jsx-7.25.9.tgz"
        }
      }
    },
    "@babel/plugin-transform-react-pure-annotations": {
      "version": "7.25.9",
      "from": "@babel/plugin-transform-react-pure-annotations@^7.16.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-pure-annotations/-/plugin-transform-react-pure-annotations-7.25.9.tgz",
      "dependencies": {
        "@babel/helper-annotate-as-pure": {
          "version": "7.25.9",
          "from": "@babel/helper-annotate-as-pure@^7.25.9",
          "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.25.9.tgz"
        },
        "@babel/helper-plugin-utils": {
          "version": "7.26.5",
          "from": "@babel/helper-plugin-utils@^7.16.7",
          "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.26.5.tgz"
        }
      }
    }
  }
};

function main(json_text) {
  try {
      const npmListOutput = JSON.parse(json_text);
      const dedges = extractDependencyEdges(npmListOutput);
      const tedges = getDominatorTree(dedges);
      const rendered = buildDependencyTree(tedges.slice(1)); // Skip the root node [0, 0]
      document.getElementById('result').innerHTML = `<pre><code>${rendered}</code></pre>`;
  } catch (e) {
      console.error(e);
      document.getElementById('result').innerHTML = 'Invalid JSON';
  }
}

document.getElementById('npm_list').addEventListener('change', function() {
    main(this.value);
});

document.getElementById('npm_list').value = JSON.stringify(sampleInput, null, 2);
main(document.getElementById('npm_list').value);

</script>
