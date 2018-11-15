---
layout: post
title:  "Symbol Table FAQ"
description: ""
date:   2014-12-11 20:02:39
categories: compiler
tags: [Compiler, semantic]
---

1. 为什么需要符号表？
重新计算，或写进IR，读写IR磁盘的效率可能低于重新计算

2.符号表如何存储？
寄存器
对齐

3. 符号表如何处理作用域嵌套？

4. 符号表如何处理动态作用域（闭包）？

5. 什么是命令式风格符号表，函数式风格符号表
命令式风格指进入新作用域时修改直接修改符号表，或用开放散列法插入新的值。

函数式风格指不修改原符号表项，而是创建一个新表，实际操作中使用平衡二叉树，只复制部分树结构，就能达到创建新表的效果。

6. 符号表的接口
insert
lookUp 按照嵌套层次依次向外寻找


符号数据结构 lcc
name 名字，作为key
scope 常量，constant label global param local
Coordinate src 具体位置，文件，行列数
Symbol up symbol table的链表尾部
List uses 使用列表
int sclass 存储类型 auto register static extern
Type type 类型
float ref ref的次数，估计的，因此是float 10.3解释
Xsymbol x


符号表结构
level
previous
entry
  symbol
  entry

all
