---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# New Functions from Old

## Function Transformations

> [!corollary] **Corollary** (Function Transformations)
> - Multiplying a function by a constant, c, stretches the graph vertically (if $c > 1$) or shrinks
> the graph vertically (if $0 < c < 1$). A negative sign (if $c < 0$) reflects the graph about the
> $x$-axis, in addition to shrinking or stretching.
> - Replacing $y$ by $(y − k)$ moves a graph up by $k$ (down if $k$ is negative).
> - Replacing $x$ by $(x − h)$ moves a graph to the right by $h$ (to the left if $h$ is negative).

## Even and Odd Functions

> [!definition] **Definition** (Even and Odd Functions)
> For any function $f$,
> - $f$ is an **even** function if $f(-x) = f(x)$ for all $x$.
> - $f$ is an **odd** function if $f(-x) = -f(x)$ for all $x$.

## Definition of an Inverse

A function has an inverse if (and only if) its graph intersects any horizontal line at most once.

> [!definition] **Definition** (Inverse Function)
> If the function $f$ is invertible, its inverse is defined as follows:
>
> $$
> f^{-1}(y) = x \ \text{ means } \ y = f(x).
> $$

## Problems

> [!question] **Question** (Problems 9-11)
> For the functions $f$ and $g$ in Exercises 8–11, find
> **(a)** $f (g(1)) \quad$ **(b)** ${} g(f (1)) \quad {}$ **(c)** $f (g(x)) \quad$
> **(d)** $g(f (x)) \quad$ **(e)** $f(t)g(t) \quad$

> [!problem] **Problem** (Exercise 9)
>
> $$
> f(x) = x^2, \ g(x) = x + 1
> $$

*Problem 9a*

$$
g(1) = 2, f(2) = 4, f(g(1)) = 4
$$

*Problem 9b*

$$
f(1) = 1, g(1) = 2, g(f(1)) = 2
$$

*Problem 9c*

$$
f(g(x)) = (x+1)^2 - x^2+2x+1
$$

*Problem 9d*

$$
g(f(x)) = x^2 + 1
$$

*Problem 9e*

$$
f(t)g(t) = (t+1)t^2 = t^3+t^2
$$

> [!problem] **Problem** (Exercise 10)
> $$f(x) = \sqrt{x} + 4, \ g(x) = x^2$$

*Problem 10a*

$$
g(1) = 1, f(1)=\sqrt{ 5 }, f(g(1))=\sqrt{ 5 }
$$

*Problem 10b*

$$
f(1) = \sqrt{ 5 }, \ g(\sqrt{ 5 })=5, \ g(f(1))=5
$$

*Problem 10c*

$$
f(g(x)) = \sqrt{ x^2+4 }
$$

*Problem 10d*

$$
g(f(x)) = x+4
$$

*Problem 10e*

$$
g(t)f(t) = \sqrt{ t+4 }(t^2)
$$

> [!problem] **Problem** (Exercise 10)
> $$f(x) = e^{x}, \ g(x) = x^3$$

*Problem 11a*

$$
g(1) = 1, f(1) = e, f(g(1)) = e
$$

*Problem 11b*

$$
f(1) = e, g(e) = e^2
$$

*Problem 11c*

$$
f(g(x)) = e^{x^{2}}
$$

*Problem 11d*

$$
g(f(x)) = (e^{x})^{2} = e^{2x}
$$

*Problem 11e*

$$
g(t)f(t) = t^{2}e^{t}
$$


