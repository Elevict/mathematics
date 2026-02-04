---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.1 Powers and Polynomials

## Linearity of Derivatives

> [!theorem] **Theorem** (Derivative of a Constant Multiple)
> If $f$ is differentiable and $c$ is a constant, then
>
> $$
> \frac{d}{dx} [cf(x)] = cf'(x).
> $$

*Proof*

$$
\begin{align}
\frac{d}{dx} [cf(x)] &= \lim_{h \to 0} \frac{cf(x+h) - cf(x)}{h} = \lim_{h \to 0} c \frac{f(x+h)-f(x)}{h} \\
&= c \lim_{h \to 0} \frac{f(x+h)-f(x)}{h} = cf'(x).
\end{align}
$$

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (Derivative of Sum and Difference)
> If $f$ and $g$ are differentiable, then
>
> $$
> \begin{align}
> \frac{d}{dx} [f(x)+g(x)] = f'(x) + g'(x) \\[10pt]
> \frac{d}{dx} [f(x)-g(x)] = f'(x)-g'(x)
> \end{align}
> $$

*Proof*

Using the definition of the derivative, we have that

$$
\begin{align}
\frac{d}{dx} [f(x)+g(x)] &= \lim_{h \to 0} \frac{f(x+h)+g(x+h)-f(x)+g(x)}{h} \\
&= \lim_{h \to 0} \frac{f(x+h) - f(x) }{h} + \frac{g(x+h)-g(x)}{h} \\
&= f'(x) + g'(x)
\end{align}
$$

$$
\tag*{\(\blacksquare\)}
$$

Note that any function that has the property that it can pull out a constant and likewise be decomposed into its sums and differences is known as a linear transformation. Therefore, derivatives are known to be linear transforms.

## Problems

For exercises 6-49, find the derivatives of the given functions. Assume that $a$, $b$, $c$, and $k$ are constants.

*Problem 6*

$$
\begin{align*}
y &= x^{12} \\
y' &= 12x^{11}
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
y &= x^{11} \\
y' &= 11x^{10}
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
y &= -x^{-11} \\
y' &= 11x^{-12}
\end{align*}
$$

*Problem 9*

$$
\begin{align*}
y &= x^{-12} \\
y' &= -12x^{-13}
\end{align*}
$$

*Problem 10*

$$
\begin{align*}
y &= x^{3.2} \\
y' &= 3.2x^{2.2}
\end{align*}
$$

*Problem 11*

$$
\begin{align*}
y &= x^{-\frac{3}{4}} \\
y' &= -\frac{3}{4}x^{-\frac{7}{4}}
\end{align*}
$$

*Problem 12*

$$
\begin{align*}
y &= x^{\frac{4}{3}} \\
y' &= \frac{4}{3}x^{\frac{1}{3}}
\end{align*}
$$

*Problem 13*

$$
\begin{align*}
y &= x^{\frac{3}{4}} \\
y' &= \frac{3}{4}x^{-\frac{1}{4}}
\end{align*}
$$

*Problem 14*

$$
\begin{align*}
y &= x^2 + 5x + 7 \\
y' &= 2x + 5
\end{align*}
$$

*Problem 15*

$$
\begin{align*}
f(t) &= t^3 - 3t^2 + 8t - 4 \\
f'(t) &= 3t^2 - 6t + 8
\end{align*}
$$

*Problem 16*

$$
\begin{align*}
f(x) &= \frac{1}{x^4} \\
f'(x) &= -4x^{-5}
\end{align*}
$$

*Problem 17*

$$
\begin{align*}
g(t) &= \frac{1}{t^5} \\
g'(t) &= -5t^{-6}
\end{align*}
$$

*Problem 18*

$$
\begin{align*}
f(z) &= -\frac{1}{z^{6.1}} \\
f'(z) &= 6.1z^{-7.1}
\end{align*}
$$

*Problem 19*

$$
\begin{align*}
y &= \frac{1}{r^{7/2}} \\
y' &= -\frac{7}{2}r^{-\frac{9}{2}}
\end{align*}
$$

*Problem 20*

$$
\begin{align*}
y &= \sqrt{x} \\
y' &= \frac{1}{2}x^{-\frac{1}{2}}
\end{align*}
$$

*Problem 21*

$$
\begin{align*}
f(x) &= 4\sqrt{x} \\
f'(x) &= 2x^{-\frac{1}{2}}
\end{align*}
$$

*Problem 22*

$$
\begin{align*}
h(\theta) &= \frac{1}{\sqrt[3]{\theta}} \\
h'(\theta) &= -\frac{1}{3}\theta^{-\frac{4}{3}}
\end{align*}
$$

*Problem 23*

$$
\begin{align*}
f(x) &= \frac{1}{x^3} \\
f'(x) &= -3x^{-4}
\end{align*}
$$

*Problem 24*

$$
\begin{align*}
h(x) &= \ln(e^{ax}) \\
h'(x) &= a
\end{align*}
$$

*Problem 25*

$$
\begin{align*}
y &= 4x^{\frac{3}{2}} - 5x^{\frac{1}{2}} \\
y' &= 6x^{\frac{1}{2}} - \frac{5}{2}x^{-\frac{1}{2}}
\end{align*}
$$

*Problem 26*

$$
\begin{align*}
f(t) &= 3t^2 - 4t + 1 \\
f'(t) &= 6t - 4
\end{align*}
$$

*Problem 27*

$$
\begin{align*}
y &= 17x + 24x^{\frac{1}{2}} \\
y' &= 17 + 12x^{-\frac{1}{2}}
\end{align*}
$$

*Problem 28*

$$
\begin{align*}
y &= z + \frac{1}{2z} \\
y' &= 1 - \frac{1}{2}z^{-2}
\end{align*}
$$

*Problem 29*

$$
\begin{align*}
f(x) &= 5x^4 + \frac{1}{x^2} \\
f'(x) &= 20x^3 - 2x^{-3}
\end{align*}
$$

*Problem 30*

$$
\begin{align*}
h(w) &= -2w^{-3} + 3\sqrt{w} \\
h'(w) &= 6w^{-4} + \frac{3}{2}w^{-\frac{1}{2}}
\end{align*}
$$

*Problem 31*

$$
\begin{align*}
y &= -3x^4 - 4x^3 - 6x \\
y' &= -12x^3 - 12x^2 - 6
\end{align*}
$$

*Problem 32*

$$
\begin{align*}
y &= 3t^5 - 5\sqrt{t} + \frac{7}{t} \\
y' &= 15t^4 - \frac{5}{2}t^{-\frac{1}{2}} - \frac{7}{t^2}
\end{align*}
$$

*Problem 33*

$$
\begin{align*}
y &= 3t^2 + 12\sqrt{t} - \frac{1}{t^2} \\
y' &= 6t + 6t^{-\frac{1}{2}} + \frac{2}{t^3}
\end{align*}
$$

*Problem 34*

$$
\begin{align*}
y &= \sqrt{x}(x + 1) \\
y &= x^{\frac{3}{2}} + x^{\frac{1}{2}} \\
y' &= \frac{3}{2}x^{\frac{1}{2}} + \frac{1}{2}x^{-\frac{1}{2}}
\end{align*}
$$

*Problem 35*

$$
\begin{align*}
y &= t^{\frac{3}{2}} (2 + \sqrt{t}) \\
y &= 2t^{\frac{3}{2}} + t^2 \\
y' &= 3t^{\frac{1}{2}} + 2t
\end{align*}
$$

*Problem 36*

$$
\begin{align*}
h(t) &= \frac{3}{t} + \frac{4}{t^2} \\
h' (t) &= -\frac{3}{t^2} - \frac{8}{t^3}
\end{align*}
$$

*Problem 37*

$$
\begin{align*}
h(\theta) &= \theta\left(\theta^{-\frac{1}{2}} - \theta^{-2}\right) \\
h(\theta) &= \theta^{\frac{1}{2}} - \theta^{-1} \\
h'(\theta) &= \frac{1}{2}\theta^{-\frac{1}{2}} + \theta^{-2}
\end{align*}
$$

*Problem 38*

$$
\begin{align*}
y &= x^2 + \frac{1}{x} \\
y' &= 2x - \frac{1}{x^2}
\end{align*}
$$

*Problem 39*

$$
\begin{align*}
f(z) &= z^2 + \frac{1}{3z} \\
f' (z) &= 2z - \frac{1}{3z^2}
\end{align*}
$$

*Problem 40*

$$
\begin{align*}
g(x) &= x^2 + \sqrt{x} + \frac{1}{x^{\frac{3}{2}}} \\
g' (x) &= 2x + \frac{1}{2}x^{-\frac{1}{2}} - \frac{3}{2}x^{-\frac{5}{2}}
\end{align*}
$$

*Problem 41*

$$
\begin{align*}
y &= \theta - \frac{1}{\sqrt{\theta}} \\
y' &= 1 + \frac{1}{2}\theta^{-\frac{3}{2}}
\end{align*}
$$

*Problem 42*

$$
\begin{align*}
g(t) &= \frac{\sqrt{t}(1 + t)}{t^2} \\
g(t) &= t^{-\frac{3}{2}} + t^{-\frac{1}{2}} \\
g' (t) &= -\frac{3}{2}t^{-\frac{5}{2}} - \frac{1}{2}t^{-\frac{3}{2}}
\end{align*}
$$

*Problem 43*

$$
\begin{align*}
j(x) &= \frac{x^3}{a} + \frac{a}{b}x^2 - cx \\
j' (x) &= \frac{3x^2}{a} + \frac{2a}{b}x - c
\end{align*}
$$

*Problem 44*

$$
\begin{align*}
f(x) &= \frac{ax + b}{x} \\
f(x) &= a + \frac{b}{x} \\
f' (x) &= -\frac{b}{x^2}
\end{align*}
$$

*Problem 45*

$$
\begin{align*}
h(x) &= \frac{ax + b}{c} \\
h' (x) &= \frac{a}{c}
\end{align*}
$$

*Problem 46*

$$
\begin{align*}
V &= \frac{4}{3} \pi r^2 b \\
\frac{dV}{dr} &= \frac{8}{3} \pi rb
\end{align*}
$$

*Problem 47*

$$
\begin{align*}
w &= 3ab^2q \\
\frac{dw}{dq} &= 3ab^2
\end{align*}
$$

*Problem 48*

$$
\begin{align*}
y &= ax^2 + bx + c \\
y' &= 2ax + b
\end{align*}
$$

*Problem 49*

$$
\begin{align*}
P &= a + b\sqrt{t} \\
P' &= \frac{b}{2}t^{-\frac{1}{2}}
\end{align*}
$$

