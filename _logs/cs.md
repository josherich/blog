# CS

## recent list

> [new in apple file systems](https://devstreaming-cdn.apple.com/videos/wwdc/2019/710aunvynji5emrl/710/710_whats_new_in_apple_file_systems.pdf)

> hash benchmark https://github.com/rurban/smhasher

## CS talks

- [wwdc 2019](https://patrickbalestra.com/blog/2019/06/07/wwdc-2019-the-things-you-may-have-missed.html)

- Building Correct Programs - William Mansky, Princeton University

  - https://www.theregister.co.uk/2015/06/10/airbus_a400m_probe_torque_data/

  - https://www.reuters.com/article/us-airbus-a400m/airbus-knew-of-software-vulnerability-before-a400m-crash-idUSKBN1D819P

- Programming Abstractions for Data Stream Processing Systems - Konstantinos Mamouras, University of Pennsylvania

- Liquid Haskell: Usable Language-Based Program Verification - Niki Vazou, University of Maryland

- Towards Generalizable Imitation in Robotics - Animesh Garg, Stanford University

- Machine Learning for Computational Social Science - Jacob Eisenstein, Georgia Institute of Technology

- Knowledge from Language via Deep Understanding - Danqi Chen, Stanford University

## computation theory

### NP-hardness

> non-deterministic polynomial-time hardness

a problem H is NP-hard when every problem L in NP can be reduced in polynomial time to H; that is, assuming a solution for H takes 1 unit time, we can use H‎'s solution to solve L in polynomial time.

## algorithm

### P is not NP

> If P ≠ NP, then NP-hard problems cannot be solved in polynomial time.

![nphard](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/P_np_np-complete_np-hard.svg/800px-P_np_np-complete_np-hard.svg.png?1521031605731)


### tree

b- tree
b+ tree
b-link tree
b* tree

### hash

cuckoo hashing
linear hashing split pointer
murmurhash
google cityhash
google farmhash
clhash


## fast algorithm

### N-body problem

### FFT

$\sim 5NlogN$
$$u_j = \sum_{k=1}^N e^{2\pi ijk/N}\omega_k$$

## FMM
- Laplace equation
- fast Gauss transform
- Helmholtz equation

### degenerate kernel



## Books

### Asymptopia - Joel Spencer



## Misc algorithms

### Tomasulo out-of-order algorithm

https://www.wikiwand.com/en/Tomasulo_algorithm


## Formal method

- specification: functional behavior or non-functional properties
- modeling: extract formal models from specs, implementations, verification artifacts such as test benches
- implementation: build parts of system
- execution: run in simulation, VM, hardware
- validation: execute, evaluate using runtime assertion checking
- verification: check properties of a model for all inputs/envs

## parallel

- 1. create type

MPI_Type_contiguous(count...) MPI_Type_vector(count,...,stride...)
MPI_Type_indexed()
MPI_Type_create_subarray()
MPI_Type_create_struct()

- 2. commit

MPI_Type_commit()

## seminars

http://mad.cds.nyu.edu/micsem/

http://mad.cds.nyu.edu/seminar/

https://cs.nyu.edu/dynamic/news/colloquium/?semester=spring_2018


## reverse eng

- [flyover reverse eng](https://github.com/retroplasma/flyover-reverse-engineering) Reversing Apple's 3D satellite mode

## mongo source
https://github.com/mongodb/mongo/blob/master/src/mongo/base/concept/assignable.h

## ruby source
https://github.com/ruby/ruby/blob/trunk/object.c

## code query
https://github.com/ruben2020/codequery/blob/master/doc/HOWTO-LINUX.md

## AR

> ARKit

https://developer.apple.com/documentation/arkit

## type checking

> https://pyre-check.org/docs/gradual-typing.html

## pattern matching

> https://github.com/tc39/proposal-pattern-matching/blob/latest/CORE.md

## yacc JavaScript

> https://github.com/zaach/jison

## libs

- [document static site](https://github.com/facebook/docusaurus)

- open radar

- alamofire - http in swift

- [GCDwebserver](https://github.com/swisspol/GCDWebServer) server in ios

- angus - rest api framework in ruby

- bacon.js - functional reactive, TypeScript

- basil.js - JS persistent layer, dict, Unified localstorage, cookie and session storage JavaScript API

- [countable](https://github.com/RadLikeWhoa/Countable) - count paragraph, words

- cc500.c c compiler

- drake - robotic framework

- oryx - lambda arch

- [flashlight](https://github.com/facebookresearch/flashlight) standalone c++ ml

- immutable.js

- [falcor](https://netflix.github.io/falcor/) json data interface

- [promises test suite](https://github.com/promises-aplus/promises-tests)

- Vulcan.js React, GraphQL & Meteor

- manim

- sockeye - seq to seq, MXNet

- [sockeye recipe](https://github.com/kevinduh/sockeye-recipes)

- emsdk

- staticman

- ruby source code

- pdf.js - mobile version?

- spark-2.2.1-bin-hadoop2.7

- tushare financial data api

- sempre semantic parser, and voxelrun.com

- coffeescript

- [LambdaS5](https://github.com/brownplt/LambdaS5)

- Katex

- preact, minimal react clone

- corenlp, stanfordnlp

- word2vec slim

- react

- nn playground

- convnet.js

- openNMT

- [nmt](https://github.com/tensorflow/nmt#installing-the-tutorial) - nmt tutorial

- peloton - terrier

- [nn4nlp](https://github.com/neubig/nn4nlp-code)

- openrefine - clean messy data

- Quantum - microsoft q computing framework

- deck.gl map data visualization

- reason, react in ocaml

- [aframe](https://github.com/aframevr/aframe) - web vr

- parsy - parser in python

- comlink - web worker wrapper

- kmath - js numertical math

- [isometric contributions](isometric-contributions-master)

- [TextAnnotationGraphs](https://creativecodinglab.github.io/TextAnnotationGraphs/) text with annotation graph

- luigi - pipelines of batch jobs, dependency resolution, workflow management, visualization, hadoop support

- [simditor](https://simditor.tower.im/) text editor

- arxiv-sanity-preserver

- [mojs](https://github.com/mojs/mojs) - motion graphic

- zepto.js

- primer on [Beizier](https://pomax.github.io/bezierinfo/)

- [react-sketchapp](https://github.com/airbnb/react-sketchapp)

- tangle - interactive text

- recurrent net js

- nile lang - Declarative Stream Processing for Media Applications

- pysnooper, python tracer

- 500 lines or less

- bucklescript, ocaml web

- [ireading](https://github.com/attentiveness/reading) react-native reading app template

- [coremltools](https://github.com/apple/coremltools) convert ml model to coreML(Keras, Caffe, scikit-learn, libsvm, and XGBoost)

- opencc - convert simplified, traditional Chinese

- paperjs

- zalo.github

- polymer

- madge - generate codebase dep graph

- pokedex - pwa demo

- [stimulus](https://github.com/stimulusjs/stimulus) standalone mvc framework

- trapcc - proof the Intel MMU's fault handling mechanism is Turing complete

- [walt](https://github.com/ballercat/walt) accessible webassembly

- pollyjs, record, replay, stub, http actions

- dayjs, small moment.js

- [open sesame](https://github.com/swabhs/open-sesame), frame parser

- [voxel mesh](https://github.com/karimnaaji/voxelizer)

- [impact](https://github.com/phoboslab/Impact) web game engine, crosscode web demo

- [code forensics](https://github.com/smontanari/code-forensics)

- Sequelize - node ORM for sql databases

- [prisma](https://github.com/prisma/prisma) general ORM for different langs and databases

- [nethack web](https://github.com/coolwanglu/BrowserHack) emcc porting example

- tinycc

- minikube

- [fluent](https://github.com/fluent-project/fluent) anna kvs, and data-first computation built on it

- [light2d](https://github.com/SSS135/Light2D) - unity 2d ligth system

---


- [tensorly](https://github.com/tensorly/tensorly) tensor ops in python

- dm lab - deepmind lab for RL

- pycolab, grid world engine for RL

- [scws](http://www.xunsearch.com/scws/) - simple cn word seg

- jieba

- spaCy

- [bites corenlp](https://github.com/stardog-union/bites-corenlp) RDF extractor

- warplda

- [nevergrad](https://github.com/facebookresearch/nevergrad)

- [solid](https://github.com/100/Solid)

- hanabi learning

- snorkel - data programming, weakly supervised data

- [truskill rating system](https://github.com/sublee/trueskill)

- [fairseq](https://github.com/pytorch/fairseq)

- shogun - unified machine learning methods, many langs

- senteval - setence embedding benchmark

- [quootstrap](https://github.com/epfl-dlab/quootstrap) - extracting quotation-speaker pairs from large news corpora.

- [cove](https://github.com/salesforce/cove) Contextualized Word Vectors

- parlAI - framework for dialog AI

- drQA - Reading Wikipedia to Answer Open-Domain Questions

## dataset

