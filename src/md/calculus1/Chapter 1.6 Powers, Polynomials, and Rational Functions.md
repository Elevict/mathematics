---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 1.6 Powers, Polynomials, and Rational Functions

## Definitions

> [!definition] **Definition** (Power Function)
> A **power function** has the form
>
> $$
> f(x) = kx^{p}, \text{ where } k \text{ and } p \text{ are constant}.
> $$

> [!definition] **Definition** (Polynomials)
> Polynomials are the sums of power functions with nonnegative integer exponents:
>
> $$
> y = p(x) = a_{n}x^{n} + a_{n-1}x^{n-1} + \dots + a_{1}x + a_{0}
> $$

> [!definition] **Definition** (Asymptote)
> If the graph of $y = f(x)$ approaches a horizontal line $y = L$ as $x \to \infty$ or $x \to -\infty$, then the line $y = L$ is called a **horizontal asymptote.** This occurs when
>
> $$
> f(x) \to L \text{ as } x \to \infty \quad \text{ or } \quad f(x)\to L \text{ as } x \to -\infty
> $$
>
> If the graph of $y = f(x)$ approaches the vertical line $x=K$ as $x \to K$ from one side or the other, that is, if
>
> $$
> y \to \infty \text{ or } y \to -\infty \text{ when } x \to K,
> $$
>
> then the line $x = K$ is called a **vertical asymptote**

## Problems

> [!question] **Question** (Exercises 3-10)
> In Exercises 3–10, determine the end behavior of each function as $x \to +\infty$ and as $x \to -\infty$.

*Problem 3*

$$
\begin{align}
f(x) &= -10x^{4} \\
\lim_{ x \to \infty } f(x) &= -\infty \\
\lim_{ x \to -\infty } f(x) &= -\infty
\end{align}
$$

*Problem 4*

$$
\begin{align}
f(x) &= 3x^{5} \\
\lim_{ x \to \infty } f(x) &= \infty \\
\lim_{ x \to -\infty } f(x) &= -\infty
\end{align}
$$

*Problem 5*

$$
\begin{align}
f(x) &= 5x^{4}-25x^{3}-62x^{2}+5x+300\\
\lim_{ x \to \infty } f(x) &= \infty \\
\lim_{ x \to -\infty } f(x) &= \infty
\end{align}
$$

*Problem 6*

$$
\begin{align}
f(x) &= 1000-38x+50x^{2}-5x^{3}  \\
\lim_{ x \to \infty } f(x) &= -\infty \\
\lim_{ x \to -\infty } f(x) &= \infty
\end{align}
$$

*Problem 7*

$$
\begin{align}
f(x) &= [3x^{2}+5x+6][x^{2}-4]^{-1}  \\
\lim_{ x \to \infty } f(x) &= 3 \\
\lim_{ x \to -\infty } f(x) &= 3
\end{align}
$$

*Problem 8*

$$
\begin{align}
f(x) &= [10+5x^{2}-3x^{3}][2x^{3}-4x+12]^{-1} \\
\lim_{ x \to \infty } f(x) &= -\frac{3}{2} \\
\lim_{ x \to -\infty } f(x) &= -\frac{3}{2}
\end{align}
$$

*Problem 9*

$$
\begin{align}
f(x) &= 3x^{-4} \\
\lim_{ x \to \infty } f(x) &= 0 \\
\lim_{ x \to -\infty } f(x) &= 0
\end{align}
$$

*Problem 10*

$$
\begin{align}
f(x) &= e^{x} \\
\lim_{ x \to \infty } f(x) &= \infty \\
\lim_{ x \to -\infty } f(x) &= 0
\end{align}
$$

