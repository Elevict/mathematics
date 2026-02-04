---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.10 Theorems about Differentiable Functions

## Rolle's Theorem and the Mean Value Theorem

> [!theorem] **Theorem** (Rolle's Theorem)
> If $f$ is continuous and differentiable on $a < x < b$, and $f(a) = f(b)$, then there exists at least one $c$ with $a < c < b$, such that
>
> $$
> f'(c) = 0
> $$

In other words, if you have two points with the same exact y-coordinate then the path connecting the two points must have either a maximum or minimum, which implies $f'(c) = 0$. Otherwise, it is just a straight horizontal line, which is $f'(x) = 0$ everywhere.

Now, to generalize Rolle's theorem, we can choose to rotate our graph around the origin and have $f'(x)$ be a slope of that rotated coordinate axis. To make our new rotated coordinate axis, we can take two points on our function and then draw a secant line between them. We'll make that secant line our x-axis now. That way, Rolle's theorem can apply in this "rotated" graph and we can guarantee that this new x-axis sees new maximums and minimums, which instead of being $f'(x) = 0$ are now $f'(x) = a$, where $a$ is just the slope of our x-axis. This result is called the mean value theorem, and is provided below:

> [!theorem] **Theorem** (The Mean Value Theorem)
> If $f$ is continuous on $a \leq x \leq b$ and differentiable on $a < x < b$, then there exists a number $c$, with $a < c < b$, such that
>
> $$
> f'(c) = \frac{f(b)-f(a)}{b-a}
> $$
>
> In other words, $f(b) - f(a) = f'(c)(b-a)$.

In other words, Rolle's theorem is a specific case for the mean value theorem. That being that $f'(c) = 0$ since $f(a)=f(b) \text{ implies that }f(b) - f(a) = 0$.

## The Increasing Function Theorem

> [!theorem] **Theorem** (Increasing Function Theorem)
> Suppose that $f$ is continuous on $a \leq x \leq b$ and differentiable on $a < x < b$.
> - If $f'(x) > 0$ on $a < x < b$, then $f$ is **increasing** on $a \leq x \leq b$.
> - If $f'(x)\geq {0}$ on $a < x < b$, then $f$ is **nondecreasing** on $a \leq x \leq b$.

In other words, if the derivative is positive everywhere that means the slope everywhere is positive. That means it must be going up and cannot go down.

## The Constant Function Theorem

> [!theorem] **Theorem** (Constant Function Theorem)
> Suppose that $f$ is continuous on $a \leq x \leq b$ and differentiable on $a < x < b$. If $f'(x) = 0$ on $a < x < b$, then $f$ is constant on $a \leq x \leq b$.

If the slope is 0 everywhere, then that simply means that it is a horizontal line. In other words, just a constant function.


