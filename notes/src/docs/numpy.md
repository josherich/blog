###  np api
```
np.repeat(n, 3)
np.arange(n)
np.full((3, 3), 1, dtype=bool)
out = np.where(arr % 2 == 1, -1, arr)
np.reshape()
np.repeat(a, 3)
np.tile(a, 3)
np.concatenate
np.vstack
np.hstack
np.r_[a, b]
np.intersect1d(a, b)
```

- From 'a' remove all of 'b'
```
np.setdiff1d(a,b)
```

- Get the positions where elements of a and b match
```
np.where(a == b)

```

- get index meeting condition
```

> Method 1
index = np.where((a >= 5) & (a <= 10))
a[index]

> Method 2:
index = np.where(np.logical_and(a>=5, a<=10))
a[index]
```

- vectorize functions
```
pair_max = np.vectorize(maxx, otypes=[float])
```

- reorder columns
```
arr[:, [1,0,2]]
```

- reverse rows
```
arr[::-1]
```

- generate random matrix distribution
```
rand_arr = np.random.randint(low=5, high=10, size=(5,3)) + np.random.random((5,3))
> or
rand_arr = np.random.uniform(5,10, size=(5,3))
```

- pretty print, scientific notation
```
np.set_printoptions(precision=3)
np.set_printoptions(suppress=True, precision=6)
np.set_printoptions(threshold=6)
np.set_printoptions(threshold=np.nan)
```

- keep text inact
```
iris = np.genfromtxt(url, delimiter=',', dtype='object')
```

- use columns when import
```
iris_2d = np.genfromtxt(url, delimiter=',', dtype='float', usecols=[0,1,2,3])
```

- normalize
```
Smax, Smin = sepallength.max(), sepallength.min()
S = (sepallength - Smin)/(Smax - Smin)
```

- softmax
```
def softmax(x):
  """Compute softmax values for each sets of scores in x.
  https://stackoverflow.com/questions/34968722/how-to-implement-the-softmax-function-in-python"""
  e_x = np.exp(x - np.max(x))
  return e_x / e_x.sum(axis=0)
```

- percentile
```
np.percentile(sepallength, q=[5, 95])
```

- insert random to random index
```
> Method 1
i, j = np.where(iris_2d)

i, j contain the row numbers and column numbers of 600 elements of iris_x
np.random.seed(100)
iris_2d[np.random.choice((i), 20), np.random.choice((j), 20)] = np.nan

> Method 2
np.random.seed(100)
iris_2d[np.random.randint(150, size=20), np.random.randint(4, size=20)] = np.nan
```

- Print first 10 rows
```
print(iris_2d[:10])
```

- find nan value
```
print("Number of missing values: \n", np.isnan(iris_2d[:, 0]).sum())
print("Position of missing values: \n", np.where(np.isnan(iris_2d[:, 0])))
```

- filter
```
condition = (iris_2d[:, 2] > 1.5) & (iris_2d[:, 0] < 5.0)
iris_2d[condition]
```

- correlation
```
np.corrcoef(iris[:, 0], iris[:, 2])[0, 1]

> Solution 2
from scipy.stats.stats import pearsonr
corr, p_value = pearsonr(iris[:, 0], iris[:, 2])
print(corr)
```

- find unique value
```
# Extract the species column as an array
species = np.array([row.tolist()[4] for row in iris])
```

- Get the unique values and the counts
```
np.unique(species, return_counts=True)
```

- num to category
```
> Bin petallength
petal_length_bin = np.digitize(iris[:, 2].astype('float'), [0, 3, 5, 10])

> Map it to respective category
label_map = {1: 'small', 2: 'medium', 3: 'large', 4: np.nan}
petal_length_cat = [label_map[x] for x in petal_length_bin]
```

- create new columns
```
> Compute volume
sepallength = iris_2d[:, 0].astype('float')
petallength = iris_2d[:, 2].astype('float')
volume = (np.pi * petallength * (sepallength2))/3


> Introduce new dimension to match iris_2d's
volume = volume[:, np.newaxis]

# Add the new column
out = np.hstack([iris_2d, volume])
```

- probabilistic sampling
```
> Get the species column
species = iris[:, 4]

> Approach 1: Generate Probablistically
np.random.seed(100)
a = np.array(['Iris-setosa', 'Iris-versicolor', 'Iris-virginica'])
species_out = np.random.choice(a, 150, p=[0.5, 0.25, 0.25])

# Approach 2: Probablistic Sampling (preferred)
np.random.seed(100)
probs = np.r_[np.linspace(0, 0.500, num=50), np.linspace(0.501, .750, num=50), np.linspace(.751, 1.0, num=50)]
index = np.searchsorted(probs, np.random.random(150))
species_out = species[index]
print(np.unique(species_out, return_counts=True))
```

- get value grouped by another column
```
> Get the species and petal length columns
petal_len_setosa = iris[iris[:, 4] == b'Iris-setosa', [2]].astype('float')

> Get the second last value
np.unique(np.sort(petal_len_setosa))[-2]
```

- sort by column
```
print(iris[iris[:,0].argsort()][:20])
```

- find most freq
```
> Solution:
vals, counts = np.unique(iris[:, 3], return_counts=True)
print(vals[np.argmax(counts)])
```

- cutoff value
```
> Solution 1: Using np.clip
np.clip(a, a_min=10, a_max=30)

> Solution 2: Using np.where
print(np.where(a < 10, 10, np.where(a > 30, 30, a)))
```

- generate one-hot array
```
def one_hot_encodings(arr):
    uniqs = np.unique(arr)
    out = np.zeros((arr.shape[0], uniqs.shape[0]))
    for i, k in enumerate(arr):
        out[i, k-1] = 1
    return out
```

- one_hot_encodings(arr)
```
array([[ 0.,  1.,  0.],
       [ 0.,  0.,  1.],
       [ 0.,  1.,  0.],
       [ 0.,  1.,  0.],
       [ 0.,  1.,  0.],
       [ 1.,  0.,  0.]])

> Method 2:
(arr[:, None] == np.unique(arr)).view(np.int8)
```

- create category id
```
> Solution:
output = [np.argwhere(np.unique(species_small) == s).tolist()[0][0] for val in np.unique(species_small) for s in species_small[species_small==val]]

> Solution: For Loop version
output = []
uniqs = np.unique(species_small)

for val in uniqs:  # uniq values in group
    for s in species_small[species_small==val]:  # each element in group
        groupid = np.argwhere(uniqs == s).tolist()[0][0]  # groupid
        output.append(groupid)

print(output)
```