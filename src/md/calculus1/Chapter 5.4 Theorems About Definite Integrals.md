---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 5.4 Theorems about Definite Integrals

## Definite Integral Theorems

> [!theorem] **Theorem** (Properties of Limits of Integration)
> If $a$, $b$, and $c$ are any numbers and $f$ is a continuous function, then
>
> 1. $\int_{b}^{a} f(x) \, dx = -\int_{a}^{b} f(x) \, dx$
>
> 2. $\int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx = \int_{a}^{b} f(x) \, dx$
>
> In words:
> - The integral from $b$ to $a$ is the negative of the integral from $a$ to $b$.
> - The integral from $a$ and $c$ plus the integral from $c$ to $b$ is the integral from $a$ to $b$.

> [!theorem] **Theorem** (Properties of Sums and Constant Multiples of the Integrand)
> Let $f$ and $g$ be continuous functions and let $c$ be a constant.
> 1. $\int_{a}^{b} (f(x)\pm g(x)) \, dx = \int_{a}^{b} f(x) \, dx \pm \int_{a}^{b} g(x) \, dx$
> 2. $\int_{a}^{b} cf(x) \, dx = c \int_{a}^{b} f(x) \, dx$
>
> In words:
> - The integral of the sum (or difference) of two functions is the sum (or difference) of their integrals.
> - The integral of a constant times a function is that constant times the integral of the function.

> [!theorem] **Theorem** (Integral Symmetry)
> If $f$ is even, them $\int_{-a}^{a} f(x) \, dx = 2 \int_{0}^{a} f(x) \, dx$.
>
> If $g$ is odd, then $\int_{-a}^{a} g(x) \, dx$ = 0.

> [!theorem] **Theorem** (Comparison of Definite Integrals)
> Let $f$ and $g$ be continuous functions.
> 1. If $m \leq f(x) \leq M$ for $a \leq x \leq b$, then $m(b-a) \leq \int_{a}^{b} f(x) \, dx \leq M(b-a)$
> 2. If $f(x) \leq g(x)$ for $a \leq x \leq b$, then $\int_{a}^{b} f(x) \, dx \leq \int_{a}^{b} g(x) \, dx$

> [!definition] **Definition** (Average Value Integral)
> The average value of $f$ from an interval $[a, b]$ is the following,
>
> $$
> \frac{1}{b-a} \int_{a}^{b} f(x) \, dx 
> $$

## Problems
\
> [!question] **Question** (Problems 1-6)
> In problems 1-6, find the integral, given that $\int_{a}^{b} f(x) \, dx=8$, $\int_{a}^{b} (f(x))^{2} \, dx = 12$, $\int_{a}^{b} g(t) \, dt = 2$ and $\int_{a}^{b} (g(t))^{2} \, dt = 3$.

*Problem 1* 
$$
\begin{align*}
\int_a^b (f(x) + g(x)) \, dx &= \int_a^b f(x) \, dx + \int_a^b g(x) \, dx \\
&= 8 + 2 \\
&= 10
\end{align*}
$$

*Problem 2* 
$$
\begin{align*}
\int_a^b cf(z) \, dz &= c \cdot \int_a^b f(z) \, dz \\
&= 8c
\end{align*}
$$

*Problem 3* 
$$
\begin{align*}
\int_a^b \left((f(x))^2 − (g(x))^2\right) \, dx &= \int_a^b (f(x))^2 \, dx − \int_a^b (g(x))^2 \, dx \\
&= 12 − 3 \\
&= 9
\end{align*}
$$

*Problem 4* 
$$
\begin{align*}
\int_a^b (f(x))^2 \, dx − \left(\int_a^b f(x) \, dx\right)^2 &= 12 − 8^2 \\
&= 12 − 64 \\
&= -52
\end{align*}
$$

*Problem 5*
$$
\begin{align*}
\int_a^b \left(c_1 g(x) + (c_2 f(x))^2\right) \, dx &= \int_a^b c_1 g(x) \, dx + \int_a^b (c_2 f(x))^2 \, dx \\
&= 2c_1 + 12c_2^2
\end{align*}
$$

*Problem 6* 
$$
\begin{align*}
\int_{a+5}^{b+5} f(x - 5) \, dx &= \int_a^b f(u) \, du \\
&= 8
\end{align*}
$$
> [!question] **Question** (Problems 7-10)
> In problems 7-10, find the average value of the function over the given interval.

*Problem 7*
Average value of $g(t) = 1 + t$ over $[0, 2]$  
$$
\begin{align*}
\text{Average value} &= \frac{1}{2 - 0} \int_0^2 (1 + t) \, dt \\
&= \frac{1}{2} \left[(t + \frac{t^2}{2}) \Big|_0^2\right] \\
&= \frac{1}{2} \left[2 + \frac{4}{2}\right] \\
&= \frac{1}{2} \cdot 4 \\
&= 2
\end{align*}
$$

*Problem 8*
Average value of $g(t) = e^t$ over $[0, 10]$  
$$
\begin{align*}
\text{Average value} &= \frac{1}{10 - 0} \int_0^{10} e^t \, dt \\
&= \frac{1}{10} \left[e^t \Big|_0^{10}\right] \\
&= \frac{1}{10} (e^{10} - 1)
\end{align*}
$$

*Problem 9*
Average value of $f(x) = 2$ over $[a, b]$  
$$
\begin{align*}
\text{Average value} &= \frac{1}{b - a} \int_a^b 2 \, dx \\
&= \frac{1}{b - a} \cdot 2 (b - a) \\
&= 2
\end{align*}
$$

*Problem 10*
Average value of $f(x) = 4x + 7$ over $[1, 3]$  
$$
\begin{align*}
\text{Average value} &= \frac{1}{3 - 1} \int_1^3 (4x + 7) \, dx \\
&= \frac{1}{2} \left[2x^2 + 7x \Big|_1^3\right] \\
&= \frac{1}{2} \left[(2 \cdot 9 + 21) - (2 \cdot 1 + 7)\right] \\
&= \frac{1}{2} \cdot 19 \\
&= 9.5
\end{align*}
$$

