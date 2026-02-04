---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.8 Hyperbolic Functions

## Hyperbolic Sine and Cosine

There are two combinations of $e^{x}$ and $e^{-x}$ which are used so often in engineering that they are given their own name. They are the hyperbolic sine, abbreviated $\sinh$, and the hyperbolic cosine, abbreviated $\cosh$. They are defined as follows:

> [!definition] **Definition** (Hyperbolic Sine and Cosine)
>
> $$
> \cosh x = \frac{e^{x} + e^{-x}}{2} \quad \quad \sinh x = \frac{e^{x} - e^{-x}}{2}
> $$

## Properties and Similarities to Trigonometric Functions

There are also some properties that these functions hold, such as the following:
- $\cosh 0 = 1$
- $\sinh 0 = 0$
- $\cosh(-x) = \cosh x$
- $\sinh(-x) = -\sinh x$

Conveniently, the $\sinh$ function has the same exact properties that the $\sin$ function does as the $\cosh$ function has the same exact properties that the $\cos$ function does. It also has a very similar looking identity,

$$
\cosh^{2} x - \sinh^{2} = 1
$$

This identity comes from the fact that these functions actually do what the original trigonometric functions do to the unit circle that has the formula $x^{2}+y^{2}=1$, except this time they are doing it on a hyperbola. Suppose $(x, y)$ is a point in the plane and $x = \cosh t$ and $y = \sinh t$ for some $t$. Then the point $(x, y)$ lies on the hyperbola $x^{2}-y^{2}=1$.

## Hyperbolic Tangent

Extending this analogy to the trigonometric functions, we define the $\tanh$ function.

$$
\tanh x = \frac{\sinh x}{\cosh x} = \frac{e^{x}-e^{-x}}{e^{x}+e^{-x}}
$$

## Derivatives of Hyperbolic Functions

Now, this is arguable the second easiest function to take the derivative of. It derivatives are proven and provided below:

> [!theorem] **Theorem** (Derivatives of Hyperbolic Sine and Cosine)
>
> $$
> \frac{d}{dx} (\cosh x) = \sinh x \quad \quad \frac{d}{dx} (\sinh x) = \cosh x
> $$

*Proof*

$$
\frac{d}{dx} (\cosh x) = \frac{d}{dx} \left( \frac{e^{x}+e^{-x}}{2} \right) = \frac{e^{x}-e^{-x}}{2} = \sinh x
$$

And we can find $\frac{d}{dx} (\sinh)$ in a similar manner.

$$
\tag*{\(\blacksquare\)}
$$

## Problems

> [!question] **Question** (Problems 1-11)
> In problems 1-11, find the derivative of the function.

*Problem 1*

$$
\begin{align*}
y &= \sinh(3z + 5) \\
\frac{dy}{dz} &= \cosh(3z + 5) \cdot 3 = 3\cosh(3z + 5)
\end{align*}
$$

*Problem 2*

$$
\begin{align*}
y &= \cosh(2x) \\
\frac{dy}{dx} &= \sinh(2x) \cdot 2 = 2\sinh(2x)
\end{align*}
$$

*Problem 3*

$$
\begin{align*}
g(t) &= \cosh^2(t) \\
\frac{dg}{dt} &= 2\cosh(t) \cdot \sinh(t) = 2\cosh(t)\sinh(t)
\end{align*}
$$

*Problem 4*

$$
\begin{align*}
f(t) &= \cosh(\sinh(t)) \\
\frac{df}{dt} &= \sinh(\sinh(t)) \cdot \cosh(t)
\end{align*}
$$

*Problem 5*

$$
\begin{align*}
f(t) &= t^3 \sinh(t) \\
\frac{df}{dt} &= 3t^2 \sinh(t) + t^3 \cosh(t)
\end{align*}
$$

*Problem 6*

$$
\begin{align*}
y &= \cosh(3t) \sinh(4t) \\
\frac{dy}{dt} &= \sinh(3t) \cdot 3 \sinh(4t) + \cosh(3t) \cdot 4 \cosh(4t) \\
&= 3\sinh(3t)\sinh(4t) + 4\cosh(3t)\cosh(4t)
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
y &= \tanh(12 + 18x) \\
\frac{dy}{dx} &= \text{sech}^2(12 + 18x) \cdot 18 = 18 \text{sech}^2(12 + 18x)
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
f(t) &= \cosh(e^{t^2}) \\
\frac{df}{dt} &= \sinh(e^{t^2}) \cdot e^{t^2} \cdot 2t = 2t e^{t^2} \sinh(e^{t^2})
\end{align*}
$$

*Problem 9*

$$
\begin{align*}
g(\theta) &= \ln (\cosh(1 + \theta)) \\
\frac{dg}{d\theta} &= \frac{1}{\cosh(1 + \theta)} \cdot \sinh(1 + \theta) = \tanh(1 + \theta)
\end{align*}
$$

*Problem 10*

$$
\begin{align*}
f(y) &= \sinh (\sinh(3y)) \\
\frac{df}{dy} &= \cosh (\sinh(3y)) \cdot \cosh(3y) \cdot 3 = 3 \cosh (\sinh(3y)) \cosh(3y)
\end{align*}
$$

*Problem 11*

$$
\begin{align*}
f(t) &= \cosh^2(t) - \sinh^2(t) \\
\frac{df}{dt} &= 2\cosh(t)\sinh(t) - 2\sinh(t)\cosh(t) \\
&= 2\cosh(t)\sinh(t) - 2\sinh(t)\cosh(t) = 0
\end{align*}
$$

> [!problem] **Problem** (Problem 12)
> Show that $\frac{d(\sinh x)}{dx} = \cosh x$.

$$
\begin{align*}
\frac{d}{dx}(\sinh(x)) &= \frac{d}{dx} \left(\frac{e^x - e^{-x}}{2}\right) \\
&= \frac{1}{2} \left(e^x + e^{-x}\right) \\
&= \cosh(x)
\end{align*}
$$

> [!problem] **Problem** (Problem 13)
> Show that $\frac{d(\sinh x)}{dx} = \cosh x$.

$$
\begin{align*}
\sinh(0) &= \frac{e^0 - e^{-0}}{2} \\
&= \frac{1 - 1}{2} = 0
\end{align*}
$$

> [!problem] **Problem** (Problem 14)
> Show that $\sinh(-x) = -\sinh(x)$.

$$
\begin{align*}
\sinh(-x) &= \frac{e^{-x} - e^{x}}{2} \\
&= -\frac{e^{x} - e^{-x}}{2} = -\sinh(x)
\end{align*}
$$

> [!question] **Question** (Problems 15-16)
> In problems 15-16, simplify the expressions.

*Problem 15*

$$
\begin{align*}
\cosh(\ln t) &= \frac{e^{\ln t} + e^{-\ln t}}{2} \\
&= \frac{t + \frac{1}{t}}{2} \\
&= \frac{t^2 + 1}{2t}
\end{align*}
$$

*Problem 16*

$$
\begin{align*}
\sinh(\ln t) &= \frac{e^{\ln t} - e^{-\ln t}}{2} \\
&= \frac{t - \frac{1}{t}}{2} \\
&= \frac{t^2 - 1}{2t}
\end{align*}
$$

