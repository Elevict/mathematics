---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.6 the Chain Rule and Inverse Functions

## Derivative of $\ln x$

> [!theorem] **Theorem** (Derivative of the Natural Logairthm)
>
> $$
> \frac{d}{dx} (\ln x) = \frac{1}{x}
> $$

*Proof*
Since $e^{\ln x} = x$, we proceed forward by differentiating both sides:

$$
\begin{align*}
\frac{d}{dx} \left(e^{\ln x}\right) &= \frac{d}{dx} (x) \\
e^{\ln x} \cdot \frac{d}{dx} (\ln x) &= 1 \\
\frac{d}{dx} (\ln x) &= \frac{1}{e^{\ln x}} \\
&= \frac{1}{x}
\end{align*}
$$

$$
\tag*{\(\blacksquare\)}
$$

## Derivatives of Inverse Trigonometric Functions

> [!theorem] **Theorem** (Derivative of $\arctan x$)
>
> $$
> \frac{d}{dx} (\arctan x) = \frac{1}{1+x^{2}}
> 
> $$

*Proof*

$$
\begin{align*}
y &= \arctan x \\
\tan y &= x \\
\frac{d}{dx} (\tan y) &= \frac{d}{dx} (x) \\
\sec^2 y \cdot \frac{dy}{dx} &= 1 \\
\frac{dy}{dx} &= \frac{1}{\sec^2 y} \\
\sec^2 y &= 1 + \tan^2 y \\
\frac{dy}{dx} &= \frac{1}{1 + x^2}
\end{align*}
$$

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (Derivative of $\arcsin x$)
>
> $$
> \frac{d}{dx} (\arcsin x) = \frac{1}{\sqrt{1-x^{2}}}
> 
> $$

*Proof*

$$
\begin{align*}
y &= \arcsin x \\
\sin y &= x \\
\frac{d}{dx} (\sin y) &= \frac{d}{dx} (x) \\
\cos y \cdot \frac{dy}{dx} &= 1 \\
\frac{dy}{dx} &= \frac{1}{\cos y} \\
\cos^2 y &= 1 - \sin^2 y \\
\cos^2 y &= 1 - x^2 \\
\cos y &= \sqrt{1 - x^2} \\
\frac{dy}{dx} &= \frac{1}{\sqrt{1 - x^2}}
\end{align*}
$$

$$
\tag*{\(\blacksquare\)}
$$

## Derivative of a General Inverse Function

> [!theorem] **Theorem** (Derivative of a General Inverse Function)
>
> $$
> \frac{d}{dx} (f^{-1}(x)) = \frac{1}{f'(f^{-1}(x))}
> 
> 
> 
> 
> 
> $$

*Proof*

$$
\begin{align*}
f \left(f^{-1}(x)\right) &= x \\
\frac{d}{dx} \left(f \left(f^{-1}(x)\right)\right) &= 1 \\
f'\left(f^{-1}(x)\right) \cdot \frac{d}{dx} \left(f^{-1}(x)\right) &= 1 \\
\frac{d}{dx} \left(f^{-1}(x)\right) &= \frac{1}{f'\left(f^{-1}(x)\right)}
\end{align*}
$$

$$
\tag*{\(\blacksquare\)}
$$

## Problems

> [!question] **Question** (Exercises 5-26)
> For Exercises 5–26, find the derivative. It may be to your advantage to simplify before differentiating. Assume $𝑎$, $𝑏$, $𝑐$, and $𝑘$ are constants.

*Problem 5*

$$
\begin{align*}
y &= \arcsin(x + 1) \\
y' &= \frac{1}{\sqrt{1 - (x + 1)^2}}
\end{align*}
$$

*Problem 6*

$$
\begin{align*}
f(x) &= \arctan(3x) \\
f'(x) &= \frac{3}{1 + (3x)^2}
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
P &= 3 \ln(x^2 + 5x + 3) \\
P' &= \frac{6x + 15}{x^2 + 5x + 3}
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
Q &= a \ln(bx + c) \\
Q' &= \frac{ab}{bx + c}
\end{align*}
$$

*Problem 9*

$$
\begin{align*}
f(x) &= \ln(e^{2x}) \\
f'(x) &= 2
\end{align*}
$$

*Problem 10*

$$
\begin{align*}
f(x) &= e^{\ln(e^{2x^2 + 3})} \\
f(x) &= e^{2x^2 + 3} \\
f'(x) &= 4x e^{2x^2 + 3}
\end{align*}
$$

*Problem 11*

$$
\begin{align*}
f(x) &= \ln(1 - e^{-x}) \\
f'(x) &= \frac{e^{-x}}{1 - e^{-x}}
\end{align*}
$$

*Problem 12*

$$
\begin{align*}
f(\alpha) &= \ln(\sin \alpha) \\
f'(\alpha) &= \frac{\cos \alpha}{\sin \alpha} = \cot \alpha
\end{align*}
$$

*Problem 13*

$$
\begin{align*}
f(x) &= \ln(e^x + 1) \\
f'(x) &= \frac{e^x}{e^x + 1}
\end{align*}
$$

*Problem 14*

$$
\begin{align*}
y &= x \ln x - x + 2 \\
y' &= \ln x + 1 - 1 = \ln x
\end{align*}
$$

*Problem 15*

$$
\begin{align*}
j(x) &= \ln(e^{ax} + b) \\
j'(x) &= \frac{a e^{ax}}{e^{ax} + b}
\end{align*}
$$

*Problem 16*

$$
\begin{align*}
y &= x^3 \ln x \\
y' &= 3x^2 \ln x + x^2
\end{align*}
$$

*Problem 17*

$$
\begin{align*}
h(w) &= w^3 \ln(10w) \\
h'(w) &= 3w^2 \ln(10w) + w^2
\end{align*}
$$

*Problem 18*

$$
\begin{align*}
f(x) &= \ln(e^{7x}) \\
f'(x) &= 7
\end{align*}
$$

*Problem 19*

$$
\begin{align*}
f(x) &= e^{(\ln x) + 1} \\
f'(x) &= e^{(\ln x) + 1} \cdot \frac{1}{x} \\
&= e \cdot \frac{x}{x} = e
\end{align*}
$$

*Problem 20*

$$
\begin{align*}
f(\theta) &= \ln(\cos \theta) \\
f'(\theta) &= -\tan \theta
\end{align*}
$$

*Problem 21*

$$
\begin{align*}
f(t) &= \ln(e^{\ln t}) \\
f'(t) &= \frac{1}{t}
\end{align*}
$$

*Problem 22*

$$
\begin{align*}
f(y) &= \arcsin(y^2) \\
f'(y) &= \frac{2y}{\sqrt{1 - y^4}}
\end{align*}
$$

*Problem 23*

$$
\begin{align*}
s(x) &= \arctan(2 - x) \\
s'(x) &= \frac{-1}{1 + (2 - x)^2}
\end{align*}
$$

*Problem 24*

$$
\begin{align*}
g(\alpha) &= \sin(\arcsin \alpha) \\
g(\alpha) &= \alpha \\
g'(\alpha) &= 1
\end{align*}
$$

*Problem 25*

$$
\begin{align*}
g(t) &= e^{\arctan(3t^2)} \\
g'(t) &= e^{\arctan(3t^2)} \cdot \frac{6t}{1 + (3t^2)^2}
\end{align*}
$$

*Problem 26*

$$
\begin{align*}
g(t) &= \cos(\ln t) \\
g'(t) &= -\sin(\ln t) \cdot \frac{1}{t}
\end{align*}
$$

