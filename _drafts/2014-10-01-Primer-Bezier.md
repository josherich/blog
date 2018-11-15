
为了画出平面图形，我们经常依赖于两种线，一般分为两类：直线和曲线。第一类用计算机很容易画出。指定起点终点，耷拉~ 搞定。

曲线就麻烦了。人能徒手画，计算机必须有描述画法的函数。其实，直线也需要描述函数，只是比较简单，我们就直接忽略了，直线曲线其实都是函数。但这也意味着我们要相处个能快速计算的函数，才能在计算机上画出曲线。这种函数有很多，这里描述一种广受认可，用途很广的贝塞尔曲线。

这个名字来自于其发现者Pierre Bézier（在Renault工作，于1962发表了他的研究），真是他发现了这种适合设计工作的曲线，但他不是第一个，也不是唯一一个发现此类曲线的。有人说 Paul de Casteljau 是第一个发现者，（1959年发表，在雪铁龙工作）他想出了一种优雅的曲线画法。但 Casteljau 没有发表他的研究，因此很难说谁是第一个发现者。贝塞尔曲线本质上是’Bernstein多项式’，早在1912年，Sergei Natanovich Bernstein就发表了关于这类方程的研究。当然这不重要，你关心的应该是这些曲线很方便：你可以吧多条贝塞尔曲线连起来，看起来像一条曲线。如果你画过PS的paths，用过矢量作图软件Flash, Illustrator或Inkscape，你画的就是贝塞尔曲线。

如果你想自己编程实现呢？有哪些陷阱？怎么画？什么是弹性盒子？怎么判别交点？怎么去掉交点？简短说，就是：如果做到画曲线是随心所欲，本文主要内容是这一块，准备好做点数学吧。

##所有贝塞尔图形是可交互的

本文使用Processing举例子，使用Processing.js生成交互图形，如果你使用现代浏览器就不需要安装任何插件。数学公式使用 MathJax ，LaTeX语法。


###实例可以点击查看源码

光看别人笔画基本没用。你肯定同意。光听我说：看我编程多厉害，对你没什么用。本文所有的图形都有查看源码链接。点击拷贝代码，打开 Processing PDE ，粘贴代码，点击play。你应该能看到浏览器里一样的结果。你可以对代码一探究竟。不管你想不想这么做，我觉得很重要，最坏结果也就是代码在外传播。我都ok。随便你怎么干，这些代码对我来说也只是供展示用。

###什么是贝塞尔曲线

贝塞尔曲线是一个参数方程。数学上讲，参数函数是作弊，一个函数描述了任意个数的输入到一个输出的映射。多个数字输入，一个数字输出。输入的数字变化，输出的始终是一个数字。参数函数作弊，它会说：好吧，我想要多值输出，那就用多个方程。例如：我能有一个映射函数，称作x，用一些数字运算把一些值映射到另一些值。f(x)=sin(x)
f(x)是函数的标准形式输出依赖于单个值（这里是x），x变化，输出f(x)也变化。
现在来看参数函数是怎么作弊的，观察以下两个函数：

f(a)=sin(a)
f(b)=cos(b)

没有什么特别的，就是正弦余弦函数，但你会注意两个函数的输入名字不同。如果改变a，对f(b)没有影响，因为a在此函数中没有用到。参数函数的不同函数间共享一个变量，像这样：
多个函数，一个自变量。如果我们改变t的值，我们就同时改变了fa(t)和fb(t)。你会问这有什么用，答案非常简单，如果我们吧fa fb改成参数曲线的含义，看起来就很明显了：
x y 坐标轴，通过神秘的t连接起来。
有些参数曲线的y坐标不是通过x坐标来定义。在这里，他们都连接到一个控制变量。如果我们改变t的值，会得到两个值，我们可以用这两个值作为x y坐标。以上的函数生成一个圆上的点：我们使t从负无穷到正无穷，结果中得x y坐标总是在以原点为圆心，1为半径的圆上。如果t从0到5，我们就得到这样的图形。

贝塞尔曲线是参数函数，跟上面的例子不同，所有维度上都使用同一个基本方程。贝塞尔曲线对x y都是用二次多项式，那什么是二次多项式呢？略

###如何实现基本方程
  function Bezier(n,t):  sum = 0  for(k=0; k<n; k++):    sum += n!/(k!*(n-k)!) * (1-t)^(n-k) * t^(k)  return sumlut = [      [1],           // n=0            [1,1],          // n=1           [1,2,1],         // n=2          [1,3,3,1],        // n=3         [1,4,6,4,1],       // n=4        [1,5,10,10,5,1],    // n=5       [1,6,15,20,15,6,1]]  // n=6binomial(n,k):  while(n >= lut.length):    s = lut.length    nextRow = new array(size=s+1)    nextRow[0] = 1    for(i=1, prev=s-1; i<prev; i++):      nextRow[i] = lut[prev][i-1] + lut[prev][i]    nextRow[s] = 1    lut.add(nextRow)  return lut[n][k]function Bezier(n,t):  sum = 0  for(k=0; k<n; k++):    sum += binomial(n,k) * (1-t)^(n-k) * t^(k)  return sumfunction Bezier(2,t):  t2 = t * t  mt = 1-t  mt2 = mt * mt  return mt2 + 2*mt*t + t2function Bezier(3,t):  t2 = t * t  t3 = t2 * t  mt = 1-t  mt2 = mt * mt  mt3 = mt2 * mt  return mt3 + 3*mt2*t + 3*mt*t2 + t3

###控制曲率
贝塞尔曲线（像所有曲线一样）是一个插值函数，输入一系列点，方程输出点之间的值。（意味着不可能在控制点的轮廓外生成一个点，这个轮廓也叫做曲线的壳）实际上，我们可以知道每个控制点对最终函数值的贡献，从而辨别出曲线中的哪些点更重要。

下图展示了二次和三次曲线的插值函数，S代表了某一点对函数值的贡献。你可以点击或拖动来观察在每个t值下控制点的贡献百分比。

右图是15阶贝塞尔函数。你可以看到起点和终点比其他任何点的贡献都要大。

如果我们要改变曲线，就要改变每个点的权重，从而改变插值。做法很简单，给每个点乘上一个值。这些值称为权，我们把权加到贝塞尔曲线方程中：

\begin{align}

Bezier (n,t) = \sum_{i=0}^n \cdot \left( \begin{array}{c} n \\ i \end{array} \right) \cdot (1-t)^{n-i} t^{i} \mathbf{w_i}

\end{align}

看似复杂，其实权就是控制点的坐标。对一个\[n^{th}\]阶的曲线来说，w0就是起点坐标，wn是最后一个点的坐标，中间的点都是控制点坐标。如果我们有一个曲线起点是(120,160)，控制点是(35,200) (200,260)终点是(220,40)，那么曲线方程如下：
\begin{align}
\left\{ \begin{array}{rcl}
x=120\cdot(1-t)^3+35 \cdot 3 \cdot (1-t)^2 \cdot t + 220 \cdot 3 \cdot (1-t) \cdot t^2 + 220 \cdot t^3
\\y=160\cdot(1-t)^3+200 \cdot 3 \cdot (1-t)^2 \cdot t + 260 \cdot 3 \cdot (1-t) \cdot t^2 + 40 \cdot t^3
\end{array}\right.
\end{align}

如下图所示

用贝塞尔还能做什么？非常多。接下来说一些相关的算法和应用

###贝塞尔曲率的矩阵操作
我们也可以用矩阵来表示贝塞尔，把贝塞尔曲线的多项式基本方程，权重矩阵和实际的坐标表示成矩阵。比如以下三次曲线：
\begin{align}
B(t) = P_1 \cdot (1-t)^3 + P_2 \cdot 3 \cdot (1-t)^2 \cdot t + P_3 \cdot 3 \cdot (1-t) \cdot t^2 + P_4 \cdot t^3
\end{align}

先不管实际的坐标，有如下方程：
\begin{align}
B(t) = (1-t)^3 + 3 \cdot (1-t)^2 \cdot t + 3 \cdot (1-t) \cdot t^2 + t^3
\end{align}

写成四项的和：
\begin{matrix}
           ... & = & (1-t)^3 \\
             & + & 3 \cdot (1-t)^2 \cdot t \\
             & + & 3 \cdot (1-t) \cdot t^2 \\
             & + & t^3 \\
          \end{matrix}
展开多项式：
\begin{matrix}
           ... & = & ( -t^3 + 3 \cdot t^2 - 3 \cdot t + 1) \\
             & + & (3 \cdot t^3 - 6 \cdot t^2 + 3 \cdot t) \\
             & + & (-3 \cdot t^3 + 3 \cdot t^2) \\
             & + & (t^3) \\
          \end{matrix}
加零：
\begin{matrix}
 ... & = & -1 \cdot t^3 + 3 \cdot t^2 - 3 \cdot t + 1 \\
   & + & +3 \cdot t^3 - 6 \cdot t^2 + 3 \cdot t + 0 \\
   & + & -3 \cdot t^3 + 3 \cdot t^2 + 0 \cdot t + 0 \\
   & + & +1 \cdot t^3 + 0 \cdot t^2 + 0 \cdot t + 0 \\
\end{matrix}

表示成矩阵等式：
\begin{bmatrix}t^3 & t^2 & t & 1\end{bmatrix} \cdot \begin{bmatrix}-1 \\ 3 \\ -3 \\ 1\end{bmatrix}
          + \begin{bmatrix}t^3 & t^2 & t & 1\end{bmatrix} \cdot \begin{bmatrix}3 \\ -6 \\ 3 \\ 0\end{bmatrix}
          + \begin{bmatrix}t^3 & t^2 & t & 1\end{bmatrix} \cdot \begin{bmatrix}-3 \\ 3 \\ 0 \\ 0\end{bmatrix}
          + \begin{bmatrix}t^3 & t^2 & t & 1\end{bmatrix} \cdot \begin{bmatrix}1 \\ 0 \\ 0 \\ 0\end{bmatrix}
聚合成一个矩阵运算：
\begin{bmatrix}t^3 & t^2 & t & 1\end{bmatrix} \cdot \begin{bmatrix}
              -1 &  3 & -3 & 1 \\
               3 & -6 &  3 & 0 \\
              -3 &  3 &  0 & 0 \\
               1 &  0 &  0 & 0
            \end{bmatrix}

此类多项式表示一般用递增表示，因此我们翻转两个矩阵：
\begin{bmatrix}1 & t & t^2 & t^3\end{bmatrix} \cdot \begin{bmatrix}
               1 &  0 &  0 & 0 \\
              -3 &  3 &  0 & 0 \\
               3 & -6 &  3 & 0 \\
              -1 &  3 & -3 & 1
            \end{bmatrix}

最后，把实际坐标加入矩阵：
B(t) = \begin{bmatrix}
          1 & t & t^2 & t^3
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           1 &  0 &  0 & 0 \\
          -3 &  3 &  0 & 0 \\
           3 & -6 &  3 & 0 \\
          -1 &  3 & -3 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3 \\ P_4
          \end{bmatrix}

二次曲线也是同理可得：
B(t) = \begin{bmatrix}
          1 & t & t^2
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           1 &  0 & 0 \\
          -2 &  2 & 0 \\
           1 & -2 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3
          \end{bmatrix}

如果我们代入一个t值，计算矩阵，会得到和用原始多项式一样的结果。为什么要用矩阵呢？通过矩阵我们能发现更多有趣的性质。由以上推算可知，我们得到了一个表示曲线的三角矩阵，矩阵的行列式等于真实坐标的乘积。此矩阵也是可逆的，必定满足许多性质。当然，问题是这些性质对我们有什么用，答案是没有立即可见的用途，但你会看到某些曲线的性质可以用方程操作和矩阵来计算，或者矩阵计算在速度上有绝对优势。
先记住我们可以这样表示曲线，继续：

###5. de Casteljau 算法
要计算贝塞尔曲线，我们必须遍历t的值，从0到1，计算权重函数，得到x和y的值。当曲线很复杂时，计算量变得非常巨大。利用de Casteljau算法（一种几何画法），你可以轻易地用笔和尺画出曲线。

把 `t` 看做一个比例，`t=0` 代表线段的 `0%`，`t=1` 代表线段的 `100%`。
画出所有点的连线，对n阶曲线来说可以画出n条线。
在线上一定比例长度处做一个记号。比如t是0.2，就在开始处20%的地方做个记号。
把相邻的记号连线，得到n-1条线。
在这些新得到的线上同样用t为比例标记，
把相邻标记连成线，得到n-2根线，
这样重复下去。
直到剩下一根线。这根线上t的位置就是曲线t的位置。

点击下图

###6. 分割曲线
有了de Casteljau算法，我们可以得到曲线上的所有分割点，一个分割点把曲线分为两段。在de Casteljau算法过程中，当前t点之前的值构成一条曲线，之后的t值构成另一条曲线。

见下图：


###7. 用矩阵分割曲线
另一种分割曲线的方法是利用矩阵，上文提到过曲线的矩阵乘法表示，我们来看一下二次，三次曲线方程：

B(t) = \begin{bmatrix}
          1 & t & t^2
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           1 &  0 & 0 \\
          -2 &  2 & 0 \\
           1 & -2 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3
          \end{bmatrix}

和

B(t) = \begin{bmatrix}
          1 & t & t^2 & t^3
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           1 &  0 &  0 & 0\\
          -3 &  3 &  0 & 0\\
           3 & -6 &  3 & 0\\
          -1 &  3 & -3 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3 \\ P_4
          \end{bmatrix}

假设我们要在t=z处分割曲线，得到两条更小的贝塞尔曲线。我们用一些矩阵表示和线性代数来计算这两条曲线的坐标。首先，我们用矩阵乘法来表示曲线上的分割点：
B(t) =
          \begin{bmatrix}
          1 & (z \cdot t) & (z \cdot t)^2
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           1 &  0 & 0 \\
          -2 &  2 & 0 \\
           1 & -2 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3
          \end{bmatrix}
          =
          \begin{bmatrix}
          1 & t & t^2
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          1 & 0 & 0 \\
          0 & z & 0 \\
          0 & 0 & z^2
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           1 &  0 & 0 \\
          -2 &  2 & 0 \\
           1 & -2 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3
          \end{bmatrix}

和三次：
B(t) =
          \begin{bmatrix}
          1 & (z \cdot t) & (z \cdot t)^2 & (z \cdot t)^3
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           1 &  0 &  0 & 0 \\
          -3 &  3 &  0 & 0 \\
           3 & -6 &  3 & 0 \\
          -1 &  3 & -3 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3 \\ P_4
          \end{bmatrix}
          =
          \begin{bmatrix}
          1 & t & t^2 & t^3
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          1 & 0 & 0   & 0\\
          0 & z & 0   & 0\\
          0 & 0 & z^2 & 0\\
          0 & 0 & 0   & z^3
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           1 &  0 &  0 & 0 \\
          -3 &  3 &  0 & 0 \\
           3 & -6 &  3 & 0 \\
          -1 &  3 & -3 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3 \\ P_4
          \end{bmatrix}

如果我们把这些矩阵变回[t values] · [bezier matrix] · [column matrix]的形式，前两项保持不变，那么右边的column矩阵就是描述第一段贝塞尔曲线（从 t=0 到 t=z）的锚点坐标。做法很简单，只要应用一些线性代数的基本运算（如果你不关心过程，可以跳过演算过程）


####求新的轮廓坐标
分割曲线有几部运算，曲线的阶越高，运算越复杂。

B(t) =
            \begin{bmatrix}
            1 & t & t^2
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
            1 & 0 & 0 \\
            0 & z & 0 \\
            0 & 0 & z^2
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
             1 &  0 & 0 \\
            -2 &  2 & 0 \\
             1 & -2 & 1
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
            P_1 \\ P_2 \\ P_3
            \end{bmatrix}
    =
                \begin{bmatrix}
                1 & t & t^2
                \end{bmatrix}
                \cdot
                \underset{we\ turn\ this...}{\underbrace{Z \cdot M}}
                \cdot
                \begin{bmatrix}
                P_1 \\ P_2 \\ P_3
                \end{bmatrix}
    =
                \begin{bmatrix}
                1 & t & t^2
                \end{bmatrix}
                \cdot
                \underset{...into\ this!}{\underbrace{ M \cdot M^{-1} \cdot Z \cdot M }}
                \cdot
                \begin{bmatrix}
                P_1 \\ P_2 \\ P_3
                \end{bmatrix}
    =
                \begin{bmatrix}
                1 & t & t^2
                \end{bmatrix}
                \cdot
                M
                \cdot
                Q
                \cdot
                \begin{bmatrix}
                P_1 \\ P_2 \\ P_3
                \end{bmatrix}

这样做是因为[M, M^{-1}]是单位矩阵（有点像微积分中乘以dx/x，运算本身对其没有影响，但方便重写算式或拆分算式）。乘以单位矩阵不改变算式的值，但这样我们可以把[M /cdot sth]变成[sth /cdot M]，这样，如果知道[M-1 · Z · M]的值，我们就可以将其代入坐标，得到一个二次贝塞尔曲线的标准形式[T · M · P]，新的坐标代表了从t=0到t=z的一段曲线。

Q = M^{-1} \cdot Z \cdot M =
            \begin{bmatrix}
            1 & 0 & 0 \\
            1 & \frac{1}{2} & 0 \\
            1 & 1 & 1
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
            1 & 0 & 0 \\
            0 & z & 0 \\
            0 & 0 & z^2
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
             1 &  0 & 0 \\
            -2 &  2 & 0 \\
             1 & -2 & 1
            \end{bmatrix}
            =
            \begin{bmatrix}
            1 & 0 & 0 \\
            -(z-1) & z & 0 \\
            (z - 1)^2 & -2 \cdot (z-1) \cdot z & z^2
            \end{bmatrix}

精彩！现在组成新的二次曲线：

B(t) =
            \begin{bmatrix}
            1 & t & t^2
            \end{bmatrix}
            \cdot M \cdot Q \cdot
            \begin{bmatrix}
            P_1 \\ P_2 \\ P_3
            \end{bmatrix}
            =
            \begin{bmatrix}
            1 & t & t^2
            \end{bmatrix}
            \cdot
            M
            \cdot
            \left (
            Q
            \cdot
            \begin{bmatrix}
            P_1 \\ P_2 \\ P_3
            \end{bmatrix}
            \right )
    =
                \begin{bmatrix}
                1 & t & t^2
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                 1 &  0 & 0 \\
                -2 &  2 & 0 \\
                 1 & -2 & 1
                \end{bmatrix}
                \cdot
                \left (
                \begin{bmatrix}
                1 & 0 & 0 \\
                -(z-1) & z & 0 \\
                (z - 1)^2 & -2 \cdot (z-1) \cdot z & z^2
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                P_1 \\ P_2 \\ P_3
                \end{bmatrix}
                \right )
    =
                \begin{bmatrix}
                1 & t & t^2
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                 1 &  0 & 0 \\
                -2 &  2 & 0 \\
                 1 & -2 & 1
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                  P_1 \\
                  z \cdot P_2 - (z-1) \cdot P_1 \\
                  z^2 \cdot P_3 - 2 \cdot z \cdot (z-1) \cdot P_2 + (z - 1)^2 \cdot P_1
                \end{bmatrix}

精彩，如果想得到从t=0到t=z的一段曲线，我们就保留第一个坐标（因为起点不变），现在的控制点是原本控制点和原本起点的组合，新的终点看起来非常像度为2的berstein多项式，除了算式里出现的是(z-1)，而不是(1-z)。这些新坐标的运算还是很简单直接的。

当然，这只是一条曲线，要得到从t=z到t=1的曲线做法相同。容易观察到，我们运算第一段时因为t从0开始算式简化了，完整的算式是：

B(t) =
            \begin{bmatrix}
            1 & ( 0 + z \cdot t) & ( 0 + z \cdot t)^2
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
             1 &  0 & 0 \\
            -2 &  2 & 0 \\
             1 & -2 & 1
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
            P_1 \\ P_2 \\ P_3
            \end{bmatrix}
    =
                \begin{bmatrix}
                1 & t & t^2
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                1 & 0 & 0 \\
                0 & z & 0 \\
                0 & 0 & z^2
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                 1 &  0 & 0 \\
                -2 &  2 & 0 \\
                 1 & -2 & 1
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                P_1 \\ P_2 \\ P_3
                \end{bmatrix}
如果是[z, 1]，那么算式如下：
B(t) =
            \begin{bmatrix}
            1 & ( z + (1-z) \cdot t) & ( z + (1-z) \cdot t)^2
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
             1 &  0 & 0 \\
            -2 &  2 & 0 \\
             1 & -2 & 1
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
            P_1 \\ P_2 \\ P_3
            \end{bmatrix}
    =
                \begin{bmatrix}
                1 & t & t^2
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                1 & z & z^2 \\
                0 & 1-z & 2 \cdot z \cdot (1-z) \\
                0 & 0 & (1-z)^2
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                 1 &  0 & 0 \\
                -2 &  2 & 0 \\
                 1 & -2 & 1
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                P_1 \\ P_2 \\ P_3
                \end{bmatrix}

还是那招，把[M /cdot sth]变成[sth /cdot M]
Q' = M^{-1} \cdot Z' \cdot M =
            \begin{bmatrix}
            1 & 0 & 0 \\
            1 & \frac{1}{2} & 0 \\
            1 & 1 & 1
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
            1 & z & z^2 \\
            0 & 1-z & 2 \cdot z \cdot (1-z) \\
            0 & 0 & (1-z)^2
            \end{bmatrix}
            \cdot
            \begin{bmatrix}
             1 &  0 & 0 \\
            -2 &  2 & 0 \\
             1 & -2 & 1
            \end{bmatrix}
            =
            \begin{bmatrix}
            (z-1)^2 & -2 \cdot z \cdot (z-1) & z^2 \\
            0 & -(z-1) & z \\
            0 & 0 & 1
            \end{bmatrix}

最后，算式变成这样：
B(t) =
            \begin{bmatrix}
            1 & t & t^2
            \end{bmatrix}
            \cdot M \cdot Q \cdot
            \begin{bmatrix}
            P_1 \\ P_2 \\ P_3
            \end{bmatrix}
            =
            \begin{bmatrix}
            1 & t & t^2
            \end{bmatrix}
            \cdot
            M
            \cdot
            \left (
            Q'
            \cdot
            \begin{bmatrix}
            P_1 \\ P_2 \\ P_3
            \end{bmatrix}
            \right )
    =
                \begin{bmatrix}
                1 & t & t^2
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                 1 &  0 & 0 \\
                -2 &  2 & 0 \\
                 1 & -2 & 1
                \end{bmatrix}
                \cdot
                \left (
                \begin{bmatrix}
                (z-1)^2 & -2 \cdot z \cdot (z-1) & z^2 \\
                0 & -(z-1) & z \\
                0 & 0 & 1
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                P_1 \\ P_2 \\ P_3
                \end{bmatrix}
                \right )
    =
                \begin{bmatrix}
                1 & t & t^2
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                 1 &  0 & 0 \\
                -2 &  2 & 0 \\
                 1 & -2 & 1
                \end{bmatrix}
                \cdot
                \begin{bmatrix}
                  z^2 \cdot P_3 - 2 \cdot z \cdot (z-1) \cdot P_2 + (z-1)^2 \cdot P_1 \\
                  z \cdot P_3  - (z-1) \cdot P_2 \\
                  P_3
                \end{bmatrix}

可以看到，终点的坐标不变，起点和控制点是原本点的组合。

因此，用线性代数，我们可以得到在t=z处分割的两段贝塞尔曲线。
\begin{bmatrix}
          1 & 0 & 0 \\
          -(z-1) & z & 0 \\
          (z - 1)^2 & -2 \cdot (z-1) \cdot z & z^2
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3
          \end{bmatrix}
          =
          \begin{bmatrix}
            P_1 \\
            z \cdot P_2 - (z-1) \cdot P_1 \\
            z^2 \cdot P_3 - 2 \cdot z \cdot (z-1) \cdot P_2 + (z - 1)^2 \cdot P_1
          \end{bmatrix}
和
\begin{bmatrix}
          (z-1)^2 & -2 \cdot z \cdot (z-1) & z^2 \\
          0 & -(z-1) & z \\
          0 & 0 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
          P_1 \\ P_2 \\ P_3
          \end{bmatrix}
          =
          \begin{bmatrix}
            z^2 \cdot P_3 - 2 \cdot z \cdot (z-1) \cdot P_2 + (z-1)^2 \cdot P_1 \\
            z \cdot P_3  - (z-1) \cdot P_2 \\
            P_3
          \end{bmatrix}

三次曲线的分割后的方程：
\begin{bmatrix}
            1 & 0 & 0 & 0 \\
            -(z-1) & z & 0 & 0 \\
            (z-1)^2 & -2 \cdot (z-1) \cdot z & z^2 & 0 \\
            -(z-1)^3 & 3 \cdot (z-1)^2 \cdot z & -3 \cdot (z-1) \cdot z^2 & z^3
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           P_1 \\ P_2 \\ P_3 \\ P_4
          \end{bmatrix}
          =
          \begin{bmatrix}
            P_1 \\
            z \cdot P_2 - (z-1) \cdot P_1 \\
            z^2 \cdot P_3 - 2 \cdot z \cdot (z-1) \cdot P_2 + (z-1)^2 \cdot P_1 \\
            z^3 \cdot P_4 - 3 \cdot z^2 \cdot (z-1) \cdot P_3 + 3 \cdot z \cdot (z-1)^2 \cdot P_2 - (z-1)^3 \cdot P_1
          \end{bmatrix}
和
\begin{bmatrix}
            -(z-1)^3 & 3 \cdot (z-1)^2 \cdot z & -3 \cdot (z-1)^3 \cdot z^2 & z^3 \\
            0 & (z-1)^2 & -2 \cdot (z-1) \cdot z & z^2 \\
            0 & 0 & -(z-1) & z \\
            0 & 0 & 0 & 1
          \end{bmatrix}
          \cdot
          \begin{bmatrix}
           P_1 \\ P_2 \\ P_3 \\ P_4
          \end{bmatrix}
          =
          \begin{bmatrix}
            z^3 \cdot P_4 - 3 \cdot z^2 \cdot (z-1) \cdot P_3 + 3 \cdot z \cdot (z-1)^2 \cdot P_2 - (z-1)^3 \cdot P_1 \\
            z^2 \cdot P_4 - 2 \cdot z \cdot (z-1) \cdot P_3 + (z-1)^2 \cdot P_2 \\
            z \cdot P_4 - (z-1) \cdot P_3 \\
            P_4
          \end{bmatrix}

观察两个矩阵，可以看到只需计算一个，另一个矩阵可以推出。把Q矩阵每一行都向右推，直到0被全部推到左边，然后竖直颠倒矩阵。你立即得到了Q'。

这样计算分割曲线递归次数更少，只是带保存值的计算，在递归代价昂贵的机器上很高效。如果你在擅长矩阵运算的设备上计算，此法比de Casteljau更快。


###8. 升高或降低曲线的维数
贝塞尔曲线有一个有趣的性质：任何n阶的曲线都可以用n+1阶的曲线表示（已某些控制点为基础）。

某条有三个控制点的曲线，我们可以用一条四个控制点的曲线来等价表示，起点终点保持不变，其余两个控制点分别取值为 1/3起点 + 2/3原控制点，和2/3原控制点 + 1/3终点，这条曲线和原曲线一模一样，但其本身是三次曲线。

如下是提升维度时的一般规则：
Bézier(k,t) = \sum_{i=0}^{k}
                        \underset{binomial\ term}{\underbrace{\binom{k}{i}}}
                        \cdot\
                        \underset{polynomial\ term}{\underbrace{(1-t)^{k-i} \cdot t^{i}}}
                        \ \cdot \
                        \underset{new\ weights}{\underbrace{\left ( \frac{(k-i) \cdot w_i + i \cdot w_{i-1}}{k} \right )}}
          \ ,\ with\ k = n+1
这条规则也得出，安全无损的降低维度是不可能的，控制点不能随意就被去掉，去掉控制点后的曲线可能非常不一样。
下图中，你可以按键盘上下键来降低或增加曲线的维度。


###9. Derivatives
利用贝塞尔曲线的微分可以做一些有用的事情。贝塞尔曲线的微分还是贝塞尔曲线。实际上，贝塞尔曲线的微分十分明显直白，只需要一点数学就能明白。首先曲线的微分如下：
Bézier'(n,t) = n \cdot \sum_{i=0}^{n-1} (b_{i+1}-b_i) \cdot Bézier(n-1,t)_i


There's a number of useful things that you can do with Bézier curves based on their derivative, and one of the more amusing observations about Bézier curves is that their derivatives are, in fact, also Bézier curves. In fact, the derivation of a Bézier curve is relatively straight forward, although we do need a bit of math. First, let's look at the derivative rule for Bézier curves, which is:

Bézier′(n,t)=n⋅∑i=0n−1(bi+1−bi)⋅Bézier(n−1,t)i
which we can also write (observing that b in this formula is the same as our w weights, and that n times a summation is the same as a summation where each term is multiplied by n) as:

Bézier′(n,t)=∑i=0n−1Bézier(n−1,t)i⋅n⋅(wi+1−wi)
Or, in plain text: the derivative of an nth degree Bézier curve is an (n-1)th degree Bézier curve, with one fewer term, and new weights w'0...w'n-1 derived from the original weights as n(wi+1 - wi), so for a 3rd degree curve, with four weights, the derivative has three new weights w'0=3(w1-w0), w'1=3(w2-w1) and w'2= 3(w3-w2).


###10. Tangents and normals

If you want to move objects along a curve, or "away from" a curve, the two vectors you're most interested in are the tangent vector and normal vector for curve points. These are actually really easy to find. For moving, and orienting, along a curve we use the tangent, which indicates the direction travel at specific points, and is literally just the first derivative of our curve:


###11. Component functions

One of the first things people run into when they start using Bézier curves in their own programs is "I know how to draw the curve, but how do I determine the bounding box?". It's actually reasonably straight forward to do so, but it requires having some knowledge on exploiting math to get the values we need. For bounding boxes, we aren't actually interested in the curve itself, but only in its "extremities": the minimum and maximum values the curve has for its x- and y-axis values. If you remember your calculus (provided you ever took calculus, otherwise it's going to be hard to remember) we can determine function extremities using the first derivative of that function, but this poses a problem, since our function is parametric: every axis has its own function.

The solution: compute the derivative for each axis separately, and then fit them back together in the same way we do for the original.

Let's look at how a parametric Bézier curve "splits up" into two normal functions, one for the x-axis and one for the y-axis. Note the left-most figure is again an interactive curve, without labeled axes (you get coordinates in the graph instead). The center and right-most figures are the component functions for computing the x-axis value, given a value for t (between 0 and 1 inclusive), and the y-axis value, respectively.

If you move points in a curve sideways, you should only see the middle graph change; likely, moving points vertically should only show a change in the right graph.

###12. Finding extremities

Now that we understand (well, superficially anyway) the component functions, we can find the extremities of our Bézier curve by finding maxima and minima on the component functions, by solving the equations B'(t) = 0 and B''(t) = 0. Although, in the case of quadratic curves there is no B''(t), so we only need to compute B'(t) = 0.

The problem with this is that as the order of the curve goes up, we can't actually solve those equations the normal way. We can't take the function, and then work out what the solutions are. Not to mention that even solving a third order derivative (for a fourth order curve) is already a royal pain in the backside. We need a better solution. We need numerical approaches.

That's a fancy word for saying "rather than solve the function, treat the problem as a sequence of identical operations, the performing of which gets us closer and closer to the real answer". Finding solutions to any f(t) = 0 is called "root finding", and there is a really nice numerical root finding algorithm, called the Newton-Raphson root finding method (yes, after that Newton).


