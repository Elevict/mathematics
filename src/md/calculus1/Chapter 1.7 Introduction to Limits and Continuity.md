---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 1.7 Introduction to Limits and Continuity

## Continuity

> [!definition] **Definition** (Continuity)
> Roughly speaking, a function is said to be *continuous* on an interval if its graph has no breaks, jumps, or holes in that interval. Continuity is important because, as we shall see, continuous functions have many desirable properties.

## Intermediate Value Theorem

> [!theorem] **Theorem** (Intermediate Value Theorem)
> Suppose $f$ is continuous on a closed interval $[a, b]$. If $k$ is any number between $f(a)$ and $f(b)$, then there is at least one number c in $[a, b]$ such that $f(c) = k$.

## Problems

> [!question] **Question** (Exercises 11-14)
> In Exercises 11–14, show that there is a number $c$, with $0 \leq c \leq 1$, such that $f(c) = 0$.

> [!problem] **Problem 11**
>
> $$
> f(x) = x^{3} + x^{2} - 1
> $$

The function is continuous.

> [!problem] **Problem 12**
>
> $$
> f(x) = e^{x}-3x
> $$

The function is not continuous.

> [!problem] **Problem 13**
>
> $$
> f(x) = x - \cos x
> $$

The function is continuous.

> [!problem] **Problem 14**
>
> $$
> f(x) = 2^{x} - \frac{1}{x}
> $$

The function is continuous.

> [!question] **Question** (Problems 19-22)
> In Problems 19–22 find $k$ so that the function is continuous on any interval.

*Problem 19*

$$
f(x) = 
\begin{cases}
kx & \quad x \leq 3 \\
5 & \quad 3 < x
\end{cases}
$$

$$
\begin{align}
kx &= 5 \\
3k &= 5 \\
k &= \frac{5}{3}
\end{align}
$$

*Problem 20*

$$
f(x) = 
\begin{cases}
kx & \quad 0 \leq x < 2 \\
3x^{2} & \quad 2 \leq x
\end{cases}
$$

$$
\begin{align}
kx &= 3x^{2} \\
2k &= 12 \\
k &= 6
\end{align}
$$

*Problem 21*

$$
g(t) =
\begin{cases}
t+k \quad & t \leq 5 \\
kt \quad & 5 < t
\end{cases}
$$

$$
\begin{align}
kx &= x - 3 \\
k &= 4
\end{align}
$$

*Problem 22*

$$
h(x) =
\begin{cases}
k\cos x \quad & 0 \leq x \leq \pi \\
12 - x \quad & \pi < x
\end{cases}
$$

$$
\begin{align}
t+k &= kt \\
5+k &= 5k \\
4k &= 5 \\
k &= \frac{5}{4}
\end{align}
$$


