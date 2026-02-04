---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 13.1 Introduction to Multivariable Functions

## Domain and Range

To graph a function you must have 1 dimension more than the number of independent variables. Here are some examples.

$$
f(x) = x + 1 \to y = x+1 \quad \text{ 2-$D$ Graph}
$$

$$
g(x, y) = x^{2}+y^{2} \to z = x^{2}+y^{2} \quad \text{ 3-$D$ Graph}
$$

$$
h(x, y, z) = \frac{x^{2}+y^{2}}{z-3} \to w = \frac{x^{2}+y^{2}}{z-3} \quad \text{ 4-$D$ Graph}
$$

To graph the domain of a function, you must have the same dimension as the number of independent variables. That is because your domain is explicitly the inputs, which are your independent variables.

> [!example] **Example** (Finding Domain and Range)
>
> $$
> \begin{align}
> f(x, y) &= \frac{xy}{x-y} \\
> D&: \{ (x, y) \ | \ x\neq y \} \\
> R&: \{ z \ | -\infty < z < \infty \}
> \end{align}
> $$

How to Graph:

1. Set $f(x,y) = z$
2. Try to get a surface which you can identify by manipulating your two independent variables.
3. If you can't, use a computer to plot the three dimensional graph

> [!example] **Example** (Converting a Graph to Something You Recognize)
>
> $$
> \begin{align}
> g(x, y) &= \frac{1}{2}\sqrt{36 - 9x^{2}-36y^{2}} \\
> z &= \frac{1}{2}\sqrt{36 - 9x^{2}-36y^{2}}  \\
> 2z &= \sqrt{36 - 9x^{2}-36y^{2}} \\
> 4z^{2} &= 36 - 9x^{2}-36y^{2} \\
> 9z^{2} + 36y^{2} + 4z^{2} &= 36 \\
> \frac{x^{2}}{4}+\frac{y^{2}}{1} + \frac{z^{2}}{9} &= 1
> \end{align}
> $$

## Level Curves

Level curves are the shape we get when a plane intersects our surface at different levels along the axes of the dependent variable. A map of level curves is a contour plot. In order to find level curves, you set $f(\dots) = k$.

> [!example] **Example** (Finding Level Curves)
>
> $$
> \begin{align}
> f(x, y) &= \sqrt{16 - x^{2} - y^{2}} \\
> k &= \sqrt{16-x^{2}-y^{2}} \\
> k^{2} &= 16 - x^{2} - y^{2} \\
> x^{2}+y^{2} &= 16 - k^{2}
> \end{align}
> $$
>
> Circles of max radius 4 getting smaller until $k = 4$.