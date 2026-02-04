---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.9 Linear Approximation and the Derivative

## The Tangent line Approximation

Sometimes, we have functions that are difficult to properly characterize and deal with. Therefore, we opt to use an approximation method that a computer can appropriately handle. The best way to do this is to approximate a function with a line, called the *tangent line approximation*.

> [!definition] **Definition** (Tangent Line Approximation)
> Suppose $f$ is differentiable at $a$. Then, for values of $x$ near $a$, the tangent line approximation to $f(x)$ is
>
> $$
> f(x) \approx f(a) + f'(a)(x-a)
> $$
>
> The expression $f(a) + f'(a)(x-a)$ is called the *local linearization* of $f$ near $x=a$. We are thinking of $a$ as fixed, so that ${} f(a) {}$ and $f'(a)$ are constant.

Later on, tangent line approximations will be built on to provide quadratic, cubic, etc. approximations as well. These approximations are called Taylor polynomials, and are used in determining values of transcendental functions for calculators.

## Problems

> [!problem] **Problem** (Problem 1)
> Find the tangent line approximation for $\sqrt{1+x}$ near $x=0$.

$$
\begin{align*}
f(x) &= \sqrt{1 + x} \\
f'(x) &= \frac{1}{2\sqrt{1 + x}} \\
f'(0) &= \frac{1}{2\sqrt{1}} = \frac{1}{2} \\
\text{Tangent Line} &= f(0) + f'(0) \cdot x \\
&= \sqrt{1 + 0} + \frac{1}{2} \cdot x \\
&= 1 + \frac{1}{2}x
\end{align*}
$$

> [!problem] **Problem** (Problem 2)
> What is the tangent line approximation to $e^{x}$ near $x=0$?

$$
\begin{align*}
f(x) &= e^x \\
f'(x) &= e^x \\
f'(0) &= e^0 = 1 \\
\text{Tangent Line} &= f(0) + f'(0) \cdot x \\
&= e^0 + 1 \cdot x \\
&= 1 + x
\end{align*}
$$

> [!problem] **Problem** (Problem 3)
> Find the tangent line approximation to $\frac{1}{x}$ near $x=1$.

$$
\begin{align*}
f(x) &= \frac{1}{x} \\
f'(x) &= -\frac{1}{x^2} \\
f'(1) &= -\frac{1}{1^2} = -1 \\
\text{Tangent Line} &= f(1) + f'(1) \cdot (x - 1) \\
&= \frac{1}{1} - 1 \cdot (x - 1) \\
&= 1 - (x - 1) \\
&= 2 - x
\end{align*}
$$

> [!problem] **Problem** (Problem 4)
> Find the local linearization of $f(x)=x^{2}$ near $x=1$.

$$
\begin{align*}
f(x) &= x^2 \\
f'(x) &= 2x \\
f'(1) &= 2 \cdot 1 = 2 \\
\text{Local Linearization} &= f(1) + f'(1) \cdot (x - 1) \\
&= 1^2 + 2 \cdot (x - 1) \\
&= 1 + 2(x - 1) \\
&= 2x - 1
\end{align*}
$$

> [!problem] **Problem** (Problem 5)
> What is the local linearization of $e^{x^{2}}$ near $x=1$.

$$
\begin{align*}
f(x) &= e^{x^2} \\
f'(x) &= e^{x^2} \cdot 2x \\
f'(1) &= e^{1^2} \cdot 2 \cdot 1 = 2e \\
\text{Local Linearization} &= f(1) + f'(1) \cdot (x - 1) \\
&= e^1 + 2e \cdot (x - 1) \\
&= e + 2e(x - 1) \\
&= 2ex - e
\end{align*}
$$

> [!problem] **Problem** (Problem 6)
> Show that $1-\frac{x}{2}$ is the tangent line approximation to $\frac{1}{\sqrt{1+x}}$ near $x=0$.

$$
\begin{align*}
f(x) &= \frac{1}{\sqrt{1 + x}} \\
f'(x) &= -\frac{1}{2(1 + x)^{3/2}} \\
f'(0) &= -\frac{1}{2(1 + 0)^{3/2}} = -\frac{1}{2} \\
\text{Tangent Line} &= f(0) + f'(0) \cdot x \\
&= \frac{1}{\sqrt{1 + 0}} - \frac{1}{2} \cdot x \\
&= 1 - \frac{x}{2}
\end{align*}
$$

> [!problem] **Problem** (Problem 7)
> Show that $e^{-x} \approx 1-x$ near $x=0$.

$$
\begin{align*}
f(x) &= e^{-x} \\
f'(x) &= -e^{-x} \\
f'(0) &= -e^0 = -1 \\
\text{Tangent Line} &= f(0) + f'(0) \cdot x \\
&= e^0 - 1 \cdot x \\
&= 1 - x
\end{align*}
$$

