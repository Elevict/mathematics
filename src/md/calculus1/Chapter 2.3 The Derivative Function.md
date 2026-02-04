---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 2.3 the Derivative Function

## Derivative Function

> [!definition] **Definition** (Derivative Function)
> For any function $f$, we define the **derivative function**, $f'$, by
>
> $$
> f'(x) = \text{Rate of change of $f$ at } x = \lim_{x \to 0} \frac{f(x+h)-f(x)}{h}
> $$
>
> For every $x$-value for which this limit exists, we say $f$ is *differentiable* at the $x$-value. If the limit exists for all $x$ in the domain of $f$, we say $f$ is differentiable everywhere.

## Derivative of a Constant Function

The graph of a constant function $f(x) = k$ is a horizontal line, with a slope of 0 everywhere. Therefore, its derivative is 0 everywhere.

> [!theorem] **Theorem** (Derivative of a Constant Function)
>
> $$
> \text{If } f(x) = k, \text{ then } f'(x) = 0.
> $$

## Derivative of a Linear Function

We already know that the slope of a straight line is constant. This tells us that the derivative of a linear function is also constant.

> [!theorem] **Theorem** (Derivative of a Linear Function)
>
> $$
> \text{If } f(x)=mx+b, \text{ then } f'(x) = \text{Slope} = m
> $$

## Derivative of a Power Function

Finding the derivative for a general power rule function is a little bit trickier, but we can do this by using the binomial theorem and the definition of the derivative. Here is exactly how,

*Proof*
Given the power rule $f(x) = x^n$, we want to show $f'(x) = nx^{n-1}$.

Using the definition of the derivative:

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

$$
f'(x) = \lim_{h \to 0} \frac{(x+h)^n - x^n}{h}
$$

Recall the choose function and expand $(x+h)^n$ using the binomial theorem:

$$
(x+h)^n = \sum_{k=0}^{n} \binom{n}{k} x^{n-k} h^k
$$

$$
(x+h)^n = \binom{n}{0}x^n + \binom{n}{1} x^{n-1} h + \binom{n}{2} x^{n-2} h^2 + \cdots + \binom{n}{n} h^n
$$

$$
(x+h)^n = x^n + n x^{n-1} h + \frac{n(n-1)}{2} x^{n-2} h^2 + \cdots + h^n
$$

Subtract $x^n$ on both sides:

$$
(x+h)^n - x^n = n x^{n-1} h + \frac{n(n-1)}{2} x^{n-2} h^2 + \cdots + h^n
$$

Divide by $h$ on both sides:

$$
\frac{(x+h)^n - x^n}{h} = n x^{n-1} + \frac{n(n-1)}{2} x^{n-2} h + \cdots + h^{n-1}
$$

Take the limit as $h \to 0$ on both sides, resulting in $f'(x)$ on the left:

$$
f'(x) = \lim_{h \to 0} \left( n x^{n-1} + \frac{n(n-1)}{2} x^{n-2} h + \cdots + h^{n-1} \right)
$$

Thus from all the $h$'s canceling, we get

$$
f'(x) = n x^{n-1}
$$

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (The Power Rule)
> If $f(x) = x^{n}$, then we have that
>
> $$
> f'(x) = n x^{n-1}
> $$

## Problems

For Exercises 14-27, find the derivative of each of the following functions.

*Problem 14*

$$
\begin{align}
f(x) &= 5x \\
f'(x) &= 5
\end{align}
$$

*Problem 15*

$$
\begin{align}
f(x) &= x^{2} \\
f'(x) &= 2x
\end{align}
$$

*Problem 16*

$$
\begin{align}
f(x) &= x(x-1) \\
f(x) &= x^{2} - x \\
f'(x) &= 2x-1
\end{align}
$$

*Problem 17*

$$
\begin{align}
f(x) &= e^{x} \\
f'(x) &= e^{x}
\end{align}
$$

*Problem 18*

$$
\begin{align}
f(x) &= \cos(x) \\
f'(x) &= -\sin(x)
\end{align}
$$

*Problem 19*

$$
\begin{align}
f(x) &= \ln(x) \\
f'(x) &= \frac{1}{x}
\end{align}
$$

*Problem 20*

$$
\begin{align}
k(x) &= x^{-1} \\
k'(x) &= -x^{-2}
\end{align}
$$

*Problem 21*

$$
\begin{align}
l(x) &= x^{-2} \\
l'(x) &= -2x^{-3}
\end{align}
$$

*Problem 22*

$$
\begin{align}
g(x) &=  2x^{2} - 3 \\
g'(x) &= 4x
\end{align}
$$

*Problem 23*

$$
\begin{align}
g(x) &= (x+1)^{-1} \\
g'(x) &= -(x+1)^{-2}
\end{align}
$$

*Problem 24*

$$
\begin{align}
g(x) &= 4x-5 \\
g'(x) &= 4
\end{align}
$$

*Problem 25*

$$
\begin{align}
g(x) &= x^{2} + 2x + 1 \\
g'(x) &= 2x+2
\end{align}
$$

*Problem 26*

$$
\begin{align}
g(x) &= x^{3}+1 \\
g'(x) &= 3x^{2}
\end{align}
$$

*Problem 27*

$$
\begin{align}
g(x) &= x^{-1/2} \\
g'(x) &= -\frac{1}{2}x^{-3/2}
\end{align}
$$

