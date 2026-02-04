---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 13.2 Limits and Continuity of Multivariable Functions

For single variable calculus, a limit exists if when we approach from the left and right sides to the same value. To extend this to the multivariable case, it must be the case that if we approach from any side that the limit value will always be the same. This is denoted as

> [!definition] **Definition** (Limit of a Multivariable Function)
>
> $$
> \lim_{(x, y) \to (a, b)}  f(x, y) = L
> $$

The problem we have is that we can approach from an infinite number of paths onto the specific point, whereas in the single variable case we only have two paths we can take.

- We can prove that a limit exists using the squeeze theorem
- We can prove that a limit does not exist by proving two paths give two different values.

> [!example] **Example** (Proving a Limit Does Not Exist)
> Prove that the following limit does not exist,
>
> $$
> \lim_{(x, y) \to (0, 0)} \frac{x^{2}-y^{2}}{2x^{2}+y^{2}}
> $$
>
> along the y-axis, we set $x=0$ and solve for the limit.
>
> $$
> \lim_{(0, y) \to (0, 0)} \frac{-y^{2}}{y^{2}} = -1
> $$
>
> along the x-axis, we set $y=0$ and solve for the limit.
>
> $$
> \lim_{(x, 0) \to (0, 0)} \frac{x^{2}}{2x^{2}} = \frac{1}{2}
> $$
>
> and therefore from two different paths, we have two different values. Therefore the limit does not exist.

1. Try $x=0$ and $y=0$ paths
2. If the above step doesn't work, choose another path
	1. Be certain the point in the limit is actually on our path
	2. Try to substitute degrees of the numerator and denominator that are equal
	3. Always use either $x=0$ or $y=0$ as one path

> [!example] **Example** (Proving a Limit Does Not Exist with ${} x=y {}$)
> Prove that the following limit does not exist
>
> $$
> \lim_{(x,y) \to (0, 0)} \frac{3xy}{3x^{2}+y^{2}}
> $$
>
> along the y-axis, we set $x=0$ and solve for the limit.
>
> $$
> \lim_{x \to 0} \frac{0}{y^{2}} = 0
> $$
>
> along the linear equation $x=y$, we have that
>
> $$
> \lim_{(x, x) \to (0, 0)} \frac{3x^{2}}{3x^{2}+x^{2}} = \frac{3x^{2}}{4x^{2}} = \frac{3}{4}
> $$
>
> and therefore from two different paths, we have two different values. Therefore the limit does not exist.

## Continuity

A function is continuous at any point on the region for which it is defined.
1. Polynomials are continuous everywhere
2. Rational functions are continuous everywhere except where the denominator is not explicitly 0 in the denominator.
3. Continuity holds for compositions of functions

> [!example] **Example** (Continuity)
>
> $$
> f(x, y) = \sqrt{x}e^{x/y}
> $$
>
> It is continuous everywhere except when $y = 0$ and $x < 0$.