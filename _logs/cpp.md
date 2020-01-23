# CPP

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