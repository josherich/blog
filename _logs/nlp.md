# NLP

## Recent paper list

> [Tree embedding](https://pair-code.github.io/interpretability/bert-tree/)

> [BERT chinese whole word masking](https://github.com/ymcui/Chinese-BERT-wwm)

> [visualize BERT](https://arxiv.org/pdf/1906.02715.pdf)

> [model lang model using quantum physics](https://arxiv.org/pdf/1904.05298.pdf)

  naacl 2019
  https://github.com/wabyking/qnn
  https://mp.weixin.qq.com/s/NbLnGQD4TjlbMGOXbfa8pg

> [TREC-CAR task](https://trec.nist.gov/pubs/trec27/papers/NYU-DL-CAR.pdf)

  TREC-CAR task:

  query is wikipedia title concatenated with section titles, answer is the wikipedia page text

  query_0 -> multi reformulator -> search results -> aggregator

  use RL to train reformulator agents (state is documents, reward r is )

  aggragator as meta-agent

   - accum rank score s_A, relavence(CNN/LSTM), top-k answer wrt s = s_R s_A


> [polysemy in word embedding](https://arxiv.org/pdf/1601.03764.pdf)

  multiple word senses reside in linear superposition within the wordembedding and simple sparse coding can re-cover vectors that approximately capture the senses.

  polysemy vector is linear combination of its monosemous vectors

  - linearity Assertion linear structure appears out of a highly nonlinearembedding

  - Word Sense Induction via sparse coding

> random walk on discourses

  random walk across micro-topics(discourse)

  there exists a linear relationship between the vector of aword and the vectors of the words in its contexts


> [Automated WordNet Construction Using Word Embeddings](https://www.aclweb.org/anthology/W17-1902)


> [Sentence Compression as Tree Transduction](http://homepages.inf.ed.ac.uk/mlap/Papers/jair09.pdf)

  tree-to-tree transduction method for sentence compression

> [memory and locality in NLP](http://socsci.uci.edu/~rfutrell/papers/futrell2017memory.pdf)


> [lstm preserve word order preference](http://socsci.uci.edu/~rfutrell/papers/futrell2019rnns.pdf)

> [code2vec](code2vec: Learning Distributed Representations of Code)

> [transformer 1 head](https://github.com/pmichel31415/are-16-heads-really-better-than-1)

> [Snorkel MeTaL basic](https://github.com/HazyResearch/metal/blob/master/tutorials/MMTL_Basics.ipynb)

> [knowledge base construction fonduer](https://github.com/hazyresearch/fonduer-tutorials)

> [multi task NLU](https://github.com/namisan/mt-dnn)

## recent post list

entity link: https://spaces.ac.cn/archives/6919

## corpus

- [natural questions](https://github.com/google-research-datasets/natural-questions)

- [parallel meaning bank](https://pmb.let.rug.nl/explorer/explore.php)

- [BooksCorpus]()

- [Eng wikipedia]()

- [Giga5 16GB]()

- [ClueWeb 2012B]()

- [CommonCrawl]()

- [cn corpus](https://github.com/OYE93/Chinese-NLP-Corpus)

- [streusle, lexical semantic annotation](https://github.com/nert-nlp/streusle)


## Datasets


### Multilingual

https://github.com/facebookresearch/MLDoc

### Chinese

[CMRC](https://github.com/ymcui/cmrc2018)

[DRCD](https://github.com/DRCKnowledgeTeam/DRCD)
  https://arxiv.org/pdf/1806.00920.pdf

[people daily NER/MSRA NER](http://sighan.cs.uchicago.edu/bakeoff2006/)

[THUCNews](http://thuctc.thunlp.org/#%E4%B8%AD%E6%96%87%E6%96%87%E6%9C%AC%E5%88%86%E7%B1%BB%E6%95%B0%E6%8D%AE%E9%9B%86THUCNews)


### NLU

[fever Fact Extraction and VERification](http://fever.ai/resources.html)

[spider](https://yale-lily.github.io/spider)

[LAMBADA dataset](https://arxiv.org/pdf/1606.06031.pdf)
  long dependency, predict last word

XNLI

SNLI, MNLI

babi

[mozilla voice](https://voice.mozilla.org/en)

[cn words](https://github.com/imhuster/funNLP)

[cn rumors weibo](https://github.com/thunlp/Chinese_Rumor_Dataset)

[wikitext-2]()
  'train': "https://s3.amazonaws.com/datasets.huggingface.co/wikitext-2/train.txt"
  'valid': "https://s3.amazonaws.com/datasets.huggingface.co/wikitext-2/valid.txt"

[wikitext-103]()
  'train': "https://s3.amazonaws.com/datasets.huggingface.co/wikitext-103/wiki.train.tokens"
  'valid': "https://s3.amazonaws.com/datasets.huggingface.co/wikitext-103/wiki.valid.tokens"

[simplebooks-2-raw]()
  : {'train': "https://s3.amazonaws.com/datasets.huggingface.co/simplebooks-2-raw/train.txt",
                     'valid': "https://s3.amazonaws.com/datasets.huggingface.co/simplebooks-2-raw/valid.txt"},
[simplebooks-92-raw]()
  : {'train': "https://s3.amazonaws.com/datasets.huggingface.co/simplebooks-92-raw/train.txt",
                      'valid': "https://s3.amazonaws.com/datasets.huggingface.co/simplebooks-92-raw/valid.txt"},
[imdb]()
  : {'train': "https://s3.amazonaws.com/datasets.huggingface.co/aclImdb/train.txt",
        'test': "https://s3.amazonaws.com/datasets.huggingface.co/aclImdb/test.txt"},
[trec]()
   {'train': "https://s3.amazonaws.com/datasets.huggingface.co/trec/train.txt",
        'test': "https://s3.amazonaws.com/datasets.huggingface.co/trec/test.txt"}


- [nlvr](http://lil.nlp.cornell.edu/nlvr/index.html)

- [conala](https://conala-corpus.github.io/), Code/Natural Language Challenge

- [room to room](https://bringmeaspoon.org/)

### text classification

  IMDB

  Yelp-2, Yelp-5

  DBpedia

  AG

  Amazon-2, Amazon-5

### Reading comprehension

  - common QA

  - [RACE reading compreh](http://www.qizhexie.com/data/RACE_leaderboard)
    100k in size
    >300 average length

  - [MCTest]()
    design for 7 years old
    500 stores and 2k questions

  > cloze-style

  - [CNN/Daily mail]()

  - [CBT children book test, book test]()

  - [who did what]()

  > span based

  - SQUAD
    unanswerable questions

  - NEWSQA

  - MSMARCO

  > exam based

  - [AI2 Elementary SchoolScience Questions]
    1080 questions

  - [NTCIR  QA  Lab]
    university entrance

  - [CLEF QA Track]

WSCR






## Tools

[syntok sent segment](https://github.com/fnl/syntok)

[BERT multi label](https://github.com/kaushaltrivedi/bert-toxic-comments-multilabel/blob/master/toxic-bert-multilabel-classification.ipynb)

[decanlp](https://decanlp.com/)

[tecent ai word embedding](https://ai.tencent.com/ailab/nlp/embedding.html)

[lang detector](https://github.com/CLD2Owners/cld2)

[fairseq](https://github.com/pytorch/fairseq)

[nevergrad](https://github.com/facebookresearch/nevergrad/blob/master/README.md)

[XLM](https://github.com/facebookresearch/XLM)

[cn words](https://github.com/imhuster/funNLP)

[sentence piece tokenizer](https://github.com/google/sentencepiece)






## Tasks

> Pairwise Relations
  - arc classification
  - arc prediction(binary)

> Preposition supersense disambiguation

  STREUSLE 4.0 corpus

> semantic tagging

> event factuality

  [Universal Decompositional Semantics It Happened v2](http://decomp.io/data/)

> Grammatical error detection

  https://ilexir.co.uk/datasets/index.html

> conjunct identification

  https://github.com/Jess1ca/CoordinationExtPTB

> Document-level Generation and Translation

  [2019 Shared Task](https://sites.google.com/view/wngt19/dgt-task)


> Dependency parsing

- head and dependent

- the structure must be connected, have a designated root node, and be acyclic or planar.

- each word has a single head.

- there is a single root node from which one can follow a unique directed path to each of the words in the sentence.

- projective, if there is a path from the head to every word that lies between the head and the dependent in the sentence.

- a tree is projective, if it can be drawn with no crossing edges.

- non-projective, seen in flexible langauages.

> Translation, text, audio

> Graph based dependency parsing

- score the tree with edge weights

- using maximum spanning tree, but might have cycles

- to eliminate cycles, Chu, Liu, Edmonds(1967):

1. for each vertex, incoming edge with max weight is chosen

2. subtract each incoming edges with max incoming weight.

3. select a cycle and collapse it into a single new node.

> higher order dependency parsing

Zhang and McDonald 2012












# Technique

## Tree embedding

  > https://pair-code.github.io/interpretability/bert-tree/

    𝑛  vectors completely at random from a unit Gaussian distribution in ℝ𝑚. If 𝑚≫𝑛, with high probability the result would be an approximate Pythagorean embedding.

    The reason is that in high dimensions, (1) vectors drawn from a unit Gaussian distribution have length very close to 1 with high probability; and (2) when 𝑚≫𝑛, a set of 𝑛 unit Gaussian vectors will likely be close to mutually orthogonal.

    Initialize with a completely random tree embedding, and in addition pick a special random vector for each vertex; then at each step, move each child node so that it is closer to its parent's location plus the child's special vector

    > [A Structural Probe for Finding Syntax in Word Representations](https://nlp.stanford.edu/pubs/hewitt2019structural.pdf)
      https://github.com/john-hewitt/structural-probes

## Byte Pair Encoding

## Subword Neural Machine Translation

https://github.com/rsennrich/subword-nmt

## weight sharing

https://github.com/deepmind/sonnet/blob/master/docs/README.md

## Gibbs sampling for posterior distribution

The idea in Gibbs sampling is to generate posterior samplesby  sweeping  through  each  variable  (or  block  of  variables)  to  sample  from  its  conditionaldistribution with the remaining variables fixed to their current values.


# methods, algorithms

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











# Misc theories

> [interpretable ML NIPS 2017](http://interpretable.ml/)

## level of NLP research

- Phonetics and phonology

- Morphology

- Syntax

- Lexical semantics

- Compositional semantics

- Pragmatics

- Discourse

## Vision-and-Language Navigation

andreas

[a discriminator that evalu-ates how well an instruction explains a givenpath in VLN task using multi-modal alignment](https://arxiv.org/pdf/1905.13358.pdf)

dataset: [room to room](http://bringmeaspoon.org/)

# Chomsky hierarchy of languages and grammars

> parsing technique

type 1

type 2

type 3

type 4


## Linguistics

> heavy NP Shift

verb + NP + PP(temporal adjunct), if NP is heavy enough, PP will be shifted after verb

> hrasal verbs and particle shift

give the habit up / give up the habit

> dative alternation

give the woman the object / give the object to the woman

double object / propositional object

> Genitive altenation

the woman's house / the house of the woman

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

> [Assessing the Ability of LSTMs to Learn Syntax-Sensitive Dependencies](https://arxiv.org/pdf/1611.01368.pdf)

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



## services, corps

https://github.com/marcocor/tagme-python

knowledge embedding TransE

masked language model, next sent prediction as pre-training obj

wit.ai

[write with transformer](huggingface)