# level of NLP research

- Phonetics and phonology

- Morphology

- Syntax

- Lexical semantics

- Compositional semantics

- Pragmatics

- Discourse

# Chomsky hierarchy of languages and grammars

> parsing technique

type 1

type 2

type 3

type 4

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

## char-based and subword-based models

namesake (Markov 1906)

Sutskever et el. 2011

Mikolov el al. 2012, Sennrich el al. 2015

## char-aware models

char and word level (Kang el al. 2011) (Ling el al. 2015) (Kim el al. 2016)

unsupervised morphology with log-bilinear model (Botha and Blunsom 2014)(Jozefowicz el al. 2016)

## open-vocabulary hybrid models

Brown el al. 1992

Chung el al. 2016

Luong and Manning 2016

## mixture model generation

combine count based and neural lm (Neubig Dyer 2016)

char based and word based to translate text and code (Ling el al 2016)

copy when UNK (Merity et al. 2016)


# technique

## Byte Pair Encoding

## Subword Neural Machine Translation

https://github.com/rsennrich/subword-nmt

## weight sharing

https://github.com/deepmind/sonnet/blob/master/docs/README.md

# NLP Talks

### NLP and Text as Data Speaker Series

https://cds.nyu.edu/text-data-speaker-series/

#### Towards Understanding Deep Learning for Natural Language Processing - Omer levy

https://levyomer.wordpress.com/publications/

#### What are Neural Sequence Models Doing - kevin knight

https://kevincrawfordknight.github.io/

#### Structured Embedding Models for Language Variation - Maja Rudolph

https://scholar.google.com/citations?user=QW_JZnsAAAAJ&hl=en

https://arxiv.org/pdf/1608.00778.pdf

#### Unsupervised Models of Conversational Dynamics - Justine Zhang

http://tisjune.github.io/research/

#### End-to-end Learning for Broad Coverage Semantics - Luke Zettlemoyer

https://www.cs.washington.edu/people/faculty/lsz/publications-by-year

#### What Can Neural Networks Teach us about Language?

http://www.phontron.com/

#### Unsupervised Methods for Extracting Political Positions from Text - Ben Lauderdale

http://benjaminlauderdale.net/

### Future Philologies - Digital Directions in Ancient World Text

  Institute for the Study of the Ancient World
  the ISAW Library
  NYU Center for Humanities
  NYU Division of Libraries
  NYU Center for Ancient Studies and NYU Department of Classics

https://diyclassics.github.io/future-philologies/

#### Kyle P. Johnson (Accenture), on historical text and natural language processing, "The Next 700 Classical Languages"

http://kyle-p-johnson.com/

#### Historical text and information retrieval, "Authorship and Translation: Bilingual Modeling of the Patrologia Graeca" - David Mimno and Laure Thompson

https://mimno.infosci.cornell.edu/

#### Historical text and machine learning, "Viral Texts and Networked Authors: Computational Models of Information Propagation" - David Smith

http://www.ccs.neu.edu/home/dasmith/

# CoLA

[Neural Network Acceptability Judgments](https://arxiv.org/pdf/1805.12471.pdf)

includes generative grammars of the type described by Chomsky (1957)

isolate a violation, so tend to be unacceptable for a single identifiable reason.

the artificial learner must not be ex-posed to any knowledge of language that could not plausibly be part of the input to a human learner

100k most frequent words in the British National Corpus

in-domain: training set (8551 examples), a development set (527), and a test set (530), 17 sources

out-domain development set (516) and a test set (533), 6 sources

human 86.1%

aggregate rating, yielding an average agreement of 93%

The encoders are trained on 100- 200 million tokens, which is within a factor of ten of the number of tokens human learners are ex- posed to during language acquisition

# Assessing the Ability of LSTMs to Learn Syntax-Sensitive Dependencies

[](https://arxiv.org/pdf/1611.01368.pdf)

subject-verb number agreement

highly sensitive to recent but irrelevant nouns

agreement attractors

one-hot encoding input lstm 50 units: 0.83% errors

nouns-only baseline: 4.5%

experiments:

distance between nouns and verbs

attractor: last intervening nouns

count of attractors

relative clauses

word representation learned the concept of singular and plural from scratch

word-by-word activation visualization

training obj

verb inflection: have verb's singular form before verb(give cue to syntactic clause boundary

grammaticality judge: (human rarely receive ungrammatical signals

LM

training only on hard dataset(with attractors)

Agreement attraction errors in humans are much more common when the attractor is plural than when it is singular

errors: 

noun-noun compounds

verbs similar to plural nouns are mistaken as nouns: The ship that the player drives has a very high speed.

limitation of the number prediction task, which jointly evaluates the model’s ability to identify the subject and its ability to assign the correct number to noun phrases

# Structural Supervision Improves Learning of Non-Local Grammatical Dependencies

Negative licensor: not none

Negative Polarity Item: any ever

filler-gap dependency

RNNG

word-synchronus beam search (Stern et al., 2017)

Wh-Licensing Interaction

Poverty of theStimulus Argument.

purely data-driven learning is not powerful enough to explain the richness and uniformity of human grammars

flashtext

[vi3k6i5/flashtext](https://github.com/vi3k6i5/flashtext)

