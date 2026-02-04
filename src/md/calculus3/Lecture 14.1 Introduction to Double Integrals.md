---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 14.1 Introduction to Double Integrals

In this section we want to integrate a function of two variables, $f(x, y)$. With functions of one variable we integrated over an interval and so it makes some sense then that when integrating a function of two variables we will integrate over a region of $\mathbb{R}^{2}$.

We will start out by assuming that the region in $\mathbb{R}^{2}$ is a rectangle which we will denote as follows,

$$
R = [a, b] \times  [c, d]
$$

This means that the ranges for $x$ and $y$ are $a \leq x \leq b$ and $c \leq y \leq d$.

Also, we will initially assume that $f(x, y) \geq 0$ although this doesn't really have to be the case. Let's start out with the graph of the surface $S$ given by graphing $f(x, y)$ over the rectangle $R$.

Now, just like with functions of one variable let's not worry about integrals quite yet. Let's first ask what the volume of the region under $S$ is.

We will approximate the volume much as we approximated the area above. We will first divide up $a \leq x \leq b$ in $n$ subintervals and divide up $c \leq y \leq d$ into $m$ subintervals. This will divide up $R$ into a series of smaller rectangles and from each of these we will choose a point $(x_{i}^{\star}, y_{j}^{\star})$.

Now, over each of these smaller rectangles we will construct a box whose height is given by $f(x_{i}^{\star}, y_{j}^{\star})$.

Each of the rectangles has a base area of $\Delta A$ and a height of $f(x_{i}^{\star}, y_{j}^{\star})$ so the volume of each of these boxes is $f(x_{i}^{\star}, y_{j}^{\star}) \Delta A$. The volume under the surface $S$ is then approximately,

$$
V \approx \sum_{i=1}^{n} \sum_{j=1}^{m} f(x_{i}^{\star}, y_{j}^{\star}) \Delta A
$$

We will have a double sum since we will need to add up volumes in both the $x$ and $y$ directions.

To get a better estimation of the volume we will take $n$ and $m$ larger and larger and to get the exact volume we will need to take the limit as both $n$ and $m$ go to infinity. In other words,

$$
V = \lim_{n,m \to \infty}  \sum_{i=1}^{n} \sum_{j=1}^{m} f(x_{i}^{\star}, y_{j}^{\star}) \Delta A
$$

Now, this should look familiar. This looks a lot like the definition of the integral of a function of single variable. In fact, this is also the definition of a double integral, or more exactly an integral of a function of two variables over a rectangle. So now we have the official definition of a double integral.

> [!definition] **Definition** (Definition of a Double Integral)
>
> $$
> \iint_{R} f(x, y) \ dA = \lim_{n,m \to \infty}  \sum_{i=1}^{n} \sum_{j=1}^{m} f(x_{i}^{\star}, y_{j}^{\star}) \Delta A
> $$