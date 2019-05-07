# computation theory

## NP-hardness

> non-deterministic polynomial-time hardness

a problem H is NP-hard when every problem L in NP can be reduced in polynomial time to H; that is, assuming a solution for H takes 1 unit time, we can use H‎'s solution to solve L in polynomial time.

## P is not NP

> If P ≠ NP, then NP-hard problems cannot be solved in polynomial time.

![nphard](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/P_np_np-complete_np-hard.svg/800px-P_np_np-complete_np-hard.svg.png?1521031605731)


# tree

b- tree
b+ tree
b-link tree
b* tree

# hash

cuckoo hashing
linear hashing split pointer
murmurhash
google cityhash
google farmhash
clhash

# fast algorithm

## N-body problem

### FFT

$\sim 5NlogN$
$$u_j = \sum_{k=1}^N e^{2\pi ijk/N}\omega_k$$

## FMM
- Laplace equation
- fast Gauss transform
- Helmholtz equation

### degenerate kernel



# Books

## Asymptopia - Joel Spencer



# Misc algorithms

## Tomasulo out-of-order algorithm

https://www.wikiwand.com/en/Tomasulo_algorithm


## CPP

> Cmake
```
cmake_minimum_required(VERSION 3.4)
project(MyFabulousProject LANGUAGES CXX)

# Will add targets for running tests, valgrind, etc.
include(CTest)

# Old packages
find_package(Blob REQUIRED)

# Recent packages
find_package(NicePackage REQUIRED COMPONENTS bim bam)

# Create our libs
add_library(foo 
  src/foo.cpp 
  src/foo_impl.cpp)
  
add_library(bar
  src/bar.cpp)

# Will add -Imy/3rdpary/folder to source files of foo
target_include_directories(foo PRIVATE my/3rdparty/folder)

# Will add -DBAR_ENABLE_FEATURE or equivalent
target_compile_definitions(bar PRIVATE BAR_ENABLE_FEATURE) 

# Will pass flags to the compiler
target_compile_options(bar PRIVATE -funroll-loops) 
  
# Will add relevant -l switches
target_link_libraries(bar PRIVATE 
  ${Blob_LIBRARIES}
  NicePackage::bim NicePackage::bam)
  
  
add_executable(foo_test 
  tests/foo_test.cpp)
  
add_executable(bar_test 
  tests/bar_test.cpp)
  
target_link_libraries(foo_test PRIVATE foo)


# Have everything we build use cpp14
set_target_properties(
  foo bar foo_test bar_test
  PROPERTIES CXX_STANDARD 14)

# Add our tests
add_test(foo_test  foo_test)
add_test(bar_test  bar_test)
add_test(bar_test2 bar_test --command-line-switch)
```

## emscripten
```
emcc src/vertexcodec.cpp src/indexcodec.cpp -Os -DNDEBUG -s EXPORTED_FUNCTIONS='["_meshopt_decodeVertexBuffer", "_meshopt_decodeIndexBuffer", "_malloc", "_free"]' -s ALLOW_MEMORY_GROWTH=1 -s MALLOC=emmalloc -s MODULARIZE=1 -s EXPORT_NAME=MeshoptDecoder --closure 1 --post-js decoder-post.js -o decoder.js
```

# Formal method

- specification: functional behavior or non-functional properties
- modeling: extract formal models from specs, implementations, verification artifacts such as test benches
- implementation: build parts of system
- execution: run in simulation, VM, hardware
- validation: execute, evaluate using runtime assertion checking
- verification: check properties of a model for all inputs/envs


# seminars

http://mad.cds.nyu.edu/micsem/

http://mad.cds.nyu.edu/seminar/

https://cs.nyu.edu/dynamic/news/colloquium/?semester=spring_2018


# CS talks

### Building Correct Programs - William Mansky, Princeton University

https://www.theregister.co.uk/2015/06/10/airbus_a400m_probe_torque_data/

https://www.reuters.com/article/us-airbus-a400m/airbus-knew-of-software-vulnerability-before-a400m-crash-idUSKBN1D819P

### Programming Abstractions for Data Stream Processing Systems - Konstantinos Mamouras, University of Pennsylvania

### Liquid Haskell: Usable Language-Based Program Verification - Niki Vazou, University of Maryland

### Towards Generalizable Imitation in Robotics - Animesh Garg, Stanford University

### Machine Learning for Computational Social Science - Jacob Eisenstein, Georgia Institute of Technology

### Knowledge from Language via Deep Understanding - Danqi Chen, Stanford University

# reverse eng

> https://github.com/retroplasma/flyover-reverse-engineering

apple map flyover

# mongo source
https://github.com/mongodb/mongo/blob/master/src/mongo/base/concept/assignable.h

# ruby source
https://github.com/ruby/ruby/blob/trunk/object.c

# code query
https://github.com/ruben2020/codequery/blob/master/doc/HOWTO-LINUX.md

# AR

> ARKit

https://developer.apple.com/documentation/arkit

# type checking

> https://pyre-check.org/docs/gradual-typing.html

## pattern matching

> https://github.com/tc39/proposal-pattern-matching/blob/latest/CORE.md

## yacc JavaScript

> https://github.com/zaach/jison

# cpp

> self compiling cpp
```cpp
#!/bin/bash
//usr/bin/tail -n +2 $0 | g++ -o main -x c++ - && exit
#include <cstdio>
int main(int argc,char * argv[])
{
  printf("Hello, world\n");
  return 0;
}
```

> compile run and delete
```cpp
#!/bin/bash
//usr/bin/tail -n +2 $0 | g++ -o main -x c++ - && ./main && rm main && exit
#include <cstdio>
int main(int argc,char * argv[])
{
  printf("Hello, world\n");
  return 0;
}
```
> with debugging
```cpp
#!/bin/bash
/*/../bin/ls > /dev/null
# BEGIN BASH SCRIPT 
source ~/.profile
export PS4=""
set -o xtrace       
printf "//" | cat - $0 | 
g++ -g -O0 -std=c++11 -o .main $TEMP && \ 
/Applications/Xcode.app/Contents/Developer/usr/bin/lldb -b -o r ./main -- "$@"
rm -f .main         
# END BASH SCRIPT
exit
*/
#include <cstdio>
int main(int argc,char * argv[])
{
  printf("Hello, world\n");
  return 0;
}
```