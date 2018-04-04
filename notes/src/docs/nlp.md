# Dependency parsing

- head and dependent

- the structure must be connected, have a designated root node, and be acyclic or planar.

- each word has a single head.

- there is a single root node from which one can follow a unique directed path to each of the words in the sentence.

- projective, if there is a path from the head to every word that lies between the head and the dependent in the sentence.

- a tree is projective, if it can be drawn with no crossing edges.

- non-projective, seen in flexible langauages.

## Transition based dependency parsing

- configuration
  - stack, 
  - input buffer, 
  - relations

- arc standard
  - leftArc
  - rightArc
  - shift

- high accuracy on shorter denpendency relations but accurary declines significantly as the distance between head and dependent increases.

## Training oracle

1. generate training data, by simulation a given reference parse

one change to the rule: choose rightarc if it produces a correct relation given reference parsing, and, all dependents of the top word in stack have been assigned.

2. features

combine simples features, use feature template: __location.property__

- s: stack
- b: buffer
- w: word forms
- r: set of relations
- l: lemmas
- t: part-of-speech

3. learning


## Graph based dependency parsing

- score the tree with edge weights

- using maximum spanning tree, but might have cycles

- to eliminate cycles, Chu, Liu, Edmonds(1967):

1. for each vertex, incoming edge with max weight is chosen

2. subtract each incoming edges with max incoming weight.

3. select a cycle and collapse it into a single new node.

## higher order dependency parsing

Zhang and McDonald 2012


## Universal Dependency Set

- clausal relation, that describe syntatic roles with respect to predicate(often a verb)

- modifier relations, that categorize the ways that words can modify theirs heads.

Clausal Argument Relations | Description
--|--
NSUBJ | Nominal subject
DOBJ | Direct Object
IOBJ | Indirect Object
CCOMP | clausal complement
XCOMP | open clausal complement

Nominal Modifier Relations | Description
--|--
NMOD | Nominal Modifier
AMOD | Adjective modifier
NUMMOD | Numeric modifier
APPOS | appositional modifier
DET | determiner
CASE | Prepositions, postpositions and other case markers

others | Description
--|--
CONJ | Conjunct
CC | Coordinationg conjunction


# attention

## computing attention score

- dot product

- bilinear

- multi-layer perceptron