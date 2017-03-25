---
layout: post
title:  "现充也能看懂的Pandas教程"
description: ""
date:   2015-11-16 19:03:39
categories: Data
tags: [Jupyter, Python, data]
---

> 本文的目的在于教给 `现充` 我一点人生的经验，介绍一些 Jupyter Notebook 的良好体验。

> 知识准备：具有一定的人生经验

## -1. Jupyter Pandas 是什么

### Jupyter

一个在线 `Python` 编程环境，每行的代码在敲击 `Shift + Enter` 后单独执行，便于初学者快速掌握编程语言。
Jupyter 可以完美利用 Python 丰富的数据分析和科学计算的工具库，实现一些非大数据的分析计算需求。

### Pandas

用于操作行列数据，方便地实现各种数据分析的形式。

## 0. 安装本地环境

(现充请跳过本节，直接访问[线上地址](https://try.jupyter.org/)，点击 `Welcome to Python.ipynb`）

在命令行中输入：

```python
pip install jupyter
pip install pandas
pip install matplotlib
```

cd到指定目录，启动：

```python
jupyter notebook
```

## 1. 加载工具库

在 Jupyter Notebook 中，Pandas 是操作数据的工具，matplotlib 是执行作图的工具。

在 Cell 中输入并执行：
  
```python
import pandas as pd
import matplotlib.pyplot as plt
```

## 2. 读取数据文件或数据库
在 Cell 中输入并执行：

```python
df = pd.read_csv('[./data.csv](/assets/data.csv)', index_col='id')
```

由于在线环境无法创建文件，也可以执行以下语句创建一个 `DataFrame`：

```python
dates = pd.date_range('20130101', periods=6)
df = pd.DataFrame(np.random.randn(6,4), index=dates, columns=list('ABCD'))
```

> `index_col`的作用是索引，是为了高效查询建立的特殊数据结构，简单说（不准确）是黄页 
  
## 3. 想象这是Excel
现在想象你手边有Excel（当然你也可以真的开一个）显示如下表格：

date(索引)|A|         B|         C|         D
---|---|---|---|---
2013-01-01|  0.469112| -0.282863| -1.509059| -1.135632
2013-01-02|  1.212112| -0.173215|  0.119209| -1.044236
2013-01-03| -0.861849| -2.104569| -0.494929|  1.071804
2013-01-04|  0.721555| -0.706771| -1.039575|  0.271860
2013-01-05| -0.424972|  0.567020|  0.276232| -1.087401
2013-01-06| -0.673690|  0.113648| -1.478427|  0.524988


1. 行的选取

在 Cell 中输入并执行：

```python
rows = df[0:3]
```

> 选择第0行至第3行，结果如灰色区域所示：

<table id="select-1">
<thead>
<tr>
<th>date(索引)</th>
<th>A</th>
<th>B</th>
<th>C</th>
<th>D</th>
</tr>
</thead>

<tbody>
<tr class="cell-selected">
<td>2013-01-01</td>
<td>0.469112</td>
<td>-0.282863</td>
<td>-1.509059</td>
<td>-1.135632</td>
</tr>
<tr class="cell-selected">
<td>2013-01-02</td>
<td>1.212112</td>
<td>-0.173215</td>
<td>0.119209</td>
<td>-1.044236</td>
</tr>
<tr class="cell-selected">
<td>2013-01-03</td>
<td>-0.861849</td>
<td>-2.104569</td>
<td>-0.494929</td>
<td>1.071804</td>
</tr>
<tr class="cell-selected">
<td>2013-01-04</td>
<td>0.721555</td>
<td>-0.706771</td>
<td>-1.039575</td>
<td>0.271860</td>
</tr>
<tr>
<td>2013-01-05</td>
<td>-0.424972</td>
<td>0.567020</td>
<td>0.276232</td>
<td>-1.087401</td>
</tr>
<tr>
<td>2013-01-06</td>
<td>-0.673690</td>
<td>0.113648</td>
<td>-1.478427</td>
<td>0.524988</td>
</tr>
</tbody>
</table>

2.列的选取

``` 
cols = df[['A', 'B', 'C']]
```

> 选择列A，B，C，结果如灰色区域所示：

<table id="select-2">
<thead>
<tr>
<th>date(索引)</th>
<th>A</th>
<th>B</th>
<th>C</th>
<th>D</th>
</tr>
</thead>

<tbody>
<tr>
<td>2013-01-01</td>
<td class="cell-selected">0.469112</td>
<td class="cell-selected">-0.282863</td>
<td class="cell-selected">-1.509059</td>
<td>-1.135632</td>
</tr>
<tr>
<td>2013-01-02</td>
<td class="cell-selected">1.212112</td>
<td class="cell-selected">-0.173215</td>
<td class="cell-selected">0.119209</td>
<td>-1.044236</td>
</tr>
<tr>
<td>2013-01-03</td>
<td class="cell-selected">-0.861849</td>
<td class="cell-selected">-2.104569</td>
<td class="cell-selected">-0.494929</td>
<td>1.071804</td>
</tr>
<tr>
<td>2013-01-04</td>
<td class="cell-selected">0.721555</td>
<td class="cell-selected">-0.706771</td>
<td class="cell-selected">-1.039575</td>
<td>0.271860</td>
</tr>
<tr>
<td>2013-01-05</td>
<td class="cell-selected">-0.424972</td>
<td class="cell-selected">0.567020</td>
<td class="cell-selected">0.276232</td>
<td>-1.087401</td>
</tr>
<tr>
<td>2013-01-06</td>
<td class="cell-selected">-0.673690</td>
<td class="cell-selected">0.113648</td>
<td class="cell-selected">-1.478427</td>
<td>0.524988</td>
</tr>
</tbody>
</table>

3.块的选取

```
df.loc['20130102':'20130104',['A','B']]
```

> 选择行和列组成的数据块，结果如灰色区域所示：

<table id="select-3">
<thead>
<tr>
<th>date(索引)</th>
<th>A</th>
<th>B</th>
<th>C</th>
<th>D</th>
</tr>
</thead>

<tbody>
<tr>
<td>2013-01-01</td>
<td>0.469112</td>
<td>-0.282863</td>
<td>-1.509059</td>
<td>-1.135632</td>
</tr>
<tr>
<td>2013-01-02</td>
<td class="cell-selected">1.212112</td>
<td class="cell-selected">-0.173215</td>
<td>0.119209</td>
<td>-1.044236</td>
</tr>
<tr>
<td>2013-01-03</td>
<td class="cell-selected">-0.861849</td>
<td class="cell-selected">-2.104569</td>
<td>-0.494929</td>
<td>1.071804</td>
</tr>
<tr>
<td>2013-01-04</td>
<td class="cell-selected">0.721555</td>
<td class="cell-selected">-0.706771</td>
<td>-1.039575</td>
<td>0.271860</td>
</tr>
<tr>
<td>2013-01-05</td>
<td>-0.424972</td>
<td>0.567020</td>
<td>0.276232</td>
<td>-1.087401</td>
</tr>
<tr>
<td>2013-01-06</td>
<td>-0.673690</td>
<td>0.113648</td>
<td>-1.478427</td>
<td>0.524988</td>
</tr>
</tbody>
</table>

## 4. 操作行和块

Pandas 中的基本数据结构有二，`Series` 和 `Dataframe`。
`Series` 用来创建行，也可以理解为一维数组。
`Dataframe` 用来创建块，或称为矩阵，表格。

创建一个数组[1,1,2,3,5]：

```python
s = pd.Series([1,1,2,3,5])
```

创建一个 `6x4` 的表格块，单元格内容为随机数列名为 A，B，C，D。

```python
pd.DataFrame(np.random.randn(6,4), columns=list('ABCD'))
```

从已有的列创建一个新的列

```python
df['sumAB'] = pd.Series(df['A'] + df['B'], index=df.index)
df['10A'] = pd.Series(df['A']*10, index=df.index)
```

> `df['A'] + df['B']`表示两列对应单元格的相加

> `df['A']*10`表示列A每个单元格 *10

> 运算后df的值如下：

<table id="select-4">
<thead>
<tr>
<th>date(索引)</th>
<th>A</th>
<th>B</th>
<th>C</th>
<th>D</th>
<th>sumAB</th>
<th>10A</th>
</tr>
</thead>

<tbody>
<tr>
<td>2013-01-01</td>
<td>0.469112</td>
<td>-0.282863</td>
<td>-1.509059</td>
<td>-1.135632</td>
<td>0.186249</td>
<td>4.69112</td>
</tr>
<tr>
<td>2013-01-02</td>
<td>1.212112</td>
<td>-0.173215</td>
<td>0.119209</td>
<td>-1.044236</td>
<td>1.038897</td>
<td>12.12112</td>
</tr>
<tr>
<td>2013-01-03</td>
<td>-0.861849</td>
<td>-2.104569</td>
<td>-0.494929</td>
<td>1.071804</td>
<td>-2.966418</td>
<td>-8.61849</td>
</tr>
<tr>
<td>2013-01-04</td>
<td>0.721555</td>
<td>-0.706771</td>
<td>-1.039575</td>
<td>0.271860</td>
<td>0.014784</td>
<td>7.21555</td>
</tr>
<tr>
<td>2013-01-05</td>
<td>-0.424972</td>
<td>0.567020</td>
<td>0.276232</td>
<td>-1.087401</td>
<td>0.142048</td>
<td>-4.24972</td>
</tr>
<tr>
<td>2013-01-06</td>
<td>-0.673690</td>
<td>0.113648</td>
<td>-1.478427</td>
<td>0.524988</td>
<td>-0.560042</td>
<td>-6.73690</td>
</tr>
</tbody>
</table>

## 根据条件过滤行
在方括号中加入判断条件来过滤行，条件必需返回 `True` 或者 `False`

```
df[(df.index >= '2013-01-01') & (df.index <= '2013-01-03')]
df[df['A'] > 0]
```

## 窥视数据
为了快速了解数据的结构，一些值得掌握的指令如下：

```
# 查看表头5行
df.head(5)

# 查看表末5行
df.tail(5)

# 查看列的名字
df.columns

# 查看表格当前的值
df.values

# 查看所有列的统计描述，包括平均值，标准差，最大最小值，以及25%，50%，75%的 percentile 值
df.describe()

# 对表按照A列升序排序
df.sort_values(by='A')
```

## 作图
Pandas 与 matplotlib 配合使用，可以支持几乎所有常用的图表形式，这里以常用的直方图为例，来观察一个典型的独立随机变量的正态分布：

```python
# 首先打开图表行内显示
%matplotlib inline

# 生成600个随机数（符合正态分布），存放在 Series 或 DataFrame 的某一列中
nd = pd.Series(np.random.randn(600))

# bins 表示直方图的方块数
# range 表示图表显示的范围
nd.hist(bins=100, range=(-5,5))
```

结果如图所示：

<img src="data:image/png;base64,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"/>


## More

### Jupyter 的限制

由于 Python 本身的限制，如果需要计算的数据量太大，而无法一次载入内存，则需要分块导入数据，并对查询做相应的修改。

## 下一步

经过了这几节，想必现充们仅仅学会了例子中的代码，如果想进一步了解，请参考以下文档：

1.[Pandas 官方文档](http://pandas.pydata.org/pandas-docs/stable/api.html)

2.[Jupyter 演示版](https://try.jupyter.org/)

进一步的使用需要对 Python 和 Pandas 做全面的了解，可以参考以下书籍：

1.[利用Python进行数据分析](http://book.douban.com/subject/25779298/)

2.[Python Cookbook](http://book.douban.com/subject/4828875/)