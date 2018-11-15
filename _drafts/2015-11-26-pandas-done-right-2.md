---
layout: post
title:  "现充也能看懂的Pandas教程(-2)"
description: ""
date:   2015-11-26 19:03:39
categories: Data
tags: [Jupyter, Python, data]
---

> 这是本系列的倒数第二篇，当然本系列也可能有最后-1篇

## 时间序列
pd.date_range
pd.to_datetime
ts.resample('H', how='count',)
len(ts)
len(df)

## quick command

- %quickref
- auto reload submodules

## plotly
```python
%matplotlib inline
import matplotlib.pyplot as plt # side-stepping mpl backend
import matplotlib.gridspec as gridspec # subplots

import plotly.plotly as py
from plotly.graph_objs import *
import plotly.tools as tls

fig1 = plt.figure()
# Make a legend for specific lines.
import matplotlib.pyplot as plt
import numpy as np

t1 = np.arange(0.0, 2.0, 0.1)
t2 = np.arange(0.0, 2.0, 0.01)

# note that plot returns a list of lines.  The "l1, = plot" usage
# extracts the first element of the list into l1 using tuple
# unpacking.  So l1 is a Line2D instance, not a sequence of lines
l1, = plt.plot(t2, np.exp(-t2))
l2, l3 = plt.plot(t2, np.sin(2 * np.pi * t2), '--go', t1, np.log(1 + t1), '.')
l4, = plt.plot(t2, np.exp(-t2) * np.sin(2 * np.pi * t2), 'rs-.')

plt.xlabel('time')
plt.ylabel('volts')
plt.title('Damped oscillation')

plt.show()
```

## 
df.date = df.date.astype("datetime64")
df.groupby(df.date.dt.month).count().plot(kind="bar")
df.groupby([df.date.dt.year, df.date.dt.month]).count().plot(kind="bar")


## remove duplicate
http://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.drop_duplicates.html
dataframe.drop_duplicates()
