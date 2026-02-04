---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.4 the Chain Rule

## The Chain Rule

> [!theorem] **Theorem** (The Chain Rule)
> If $f$ and $g$ are differentiable functions, then
>
> $$
> \frac{d}{dx} f(g(x)) = f'(g(x)) \cdot  g'(x)
> $$

In other words, the derivative of a composite function is the product of the derivatives of the outside and inside functions. The derivative of the outside function must be evaluated at the
inside function.

## Problems

> [!question] **Question** (Exercises 1-33)
> In Exercises 1–33, find the derivatives. Assume that $𝑎$, $𝑏$, and $𝑐$ are constants.

Sure, here are the derivatives of the given functions in an align environment:

*Problem 1*

$$
\begin{align*}
f(x) &= (x + 1)^{99} \\
f'(x) &= 99(x + 1)^{98}
\end{align*}
$$

*Problem 2*

$$
\begin{align*}
w &= (t^3 + 1)^{100} \\
w' &= 100(t^3 + 1)^{99} \cdot 3t^2 = 300t^2(t^3 + 1)^{99}
\end{align*}
$$

*Problem 3*

$$
\begin{align*}
g(x) &= (4x^2 + 1)^{7} \\
g'(x) &= 7(4x^2 + 1)^{6} \cdot 8x = 56x(4x^2 + 1)^{6}
\end{align*}
$$

*Problem 4*

$$
\begin{align*}
f(x) &= \sqrt{1 - x^2} = (1 - x^2)^{1/2} \\
f'(x) &= \frac{1}{2}(1 - x^2)^{-1/2} \cdot (-2x) = \frac{-x}{\sqrt{1 - x^2}}
\end{align*}
$$

*Problem 5*

$$
\begin{align*}
y &= \sqrt{e^x + 1} \\
y' &= \frac{1}{2\sqrt{e^x + 1}} \cdot e^x = \frac{e^x}{2\sqrt{e^x + 1}}
\end{align*}
$$

*Problem 6*

$$
\begin{align*}
w &= (\sqrt{t} + 1)^{100} \\
w' &= 100(\sqrt{t} + 1)^{99} \cdot \frac{1}{2\sqrt{t}} = \frac{50(\sqrt{t} + 1)^{99}}{\sqrt{t}}
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
h(w) &= (w^4 - 2w)^{5} \\
h'(w) &= 5(w^4 - 2w)^{4} \cdot (4w^3 - 2) = 20w^3(w^4 - 2w)^{4} - 10(w^4 - 2w)^{4}
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
s(t) &= (3t^2 + 4t + 1)^{3} \\
s'(t) &= 3(3t^2 + 4t + 1)^{2} \cdot (6t + 4)
\end{align*}
$$

*Problem 9*

$$
\begin{align*}
w(r) &= \sqrt{r^4 + 1} = (r^4 + 1)^{1/2} \\
w' &= \frac{1}{2}(r^4 + 1)^{-1/2} \cdot 4r^3 = \frac{2r^3}{\sqrt{r^4 + 1}}
\end{align*}
$$

*Problem 10*

$$
\begin{align*}
k(x) &= (x^3 + e^x)^{4} \\
k' &= 4(x^3 + e^x)^{3} \cdot (3x^2 + e^x) = 12x^2(x^3 + e^x)^{3} + 4e^x(x^3 + e^x)^{3}
\end{align*}
$$

*Problem 11*

$$
\begin{align*}
f(x) &= \frac{e^{2x}}{x^2 + 5x} \\
f' &= \frac{(x^2 + 5x) \cdot 2e^{2x} - e^{2x} \cdot (2x + 5)}{(x^2 + 5x)^2} = \frac{2e^{2x}(x^2 + 5x) - e^{2x}(2x + 5)}{(x^2 + 5x)^2}
\end{align*}
$$

*Problem 12*

$$
\begin{align*}
y &= e^{3w/2} \\
y' &= e^{3w/2} \cdot \frac{3}{2} = \frac{3}{2}e^{3w/2}
\end{align*}
$$

*Problem 13*

$$
\begin{align*}
g(x) &= e^{\pi x} \\
g' &= e^{\pi x} \cdot \pi = \pi e^{\pi x}
\end{align*}
$$

*Problem 14*

$$
\begin{align*}
B &= 15e^{0.20t} \\
B' &= 15e^{0.20t} \cdot 0.20 = 3e^{0.20t}
\end{align*}
$$

*Problem 15*

$$
\begin{align*}
w &= 100e^{-x^2} \\
w' &= 100e^{-x^2} \cdot (-2x) = -200xe^{-x^2}
\end{align*}
$$

*Problem 16*

$$
\begin{align*}
f(\theta) &= 2^{-\theta} \\
f' &= 2^{-\theta} \cdot \ln 2 \cdot (-1) = -2^{-\theta} \ln 2
\end{align*}
$$

*Problem 17*

$$
\begin{align*}
y &= \pi(x + 2) \\
y' &= \pi
\end{align*}
$$

*Problem 18*

$$
\begin{align*}
g(x) &= 3(2x + 7) \\
g' &= 6
\end{align*}
$$

*Problem 19*

$$
\begin{align*}
f(t) &= te^{5-2t} \\
f' &= e^{5-2t} - 2te^{5-2t} = (1 - 2t)e^{5-2t}
\end{align*}
$$

*Problem 20*

$$
\begin{align*}
p(t) &= e^{4t+2} \\
p' &= e^{4t+2} \cdot 4 = 4e^{4t+2}
\end{align*}
$$

*Problem 21*

$$
\begin{align*}
v(t) &= t^2 e^{-ct} \\
v' &= 2te^{-ct} + t^2(-c)e^{-ct} = (2t - ct^2)e^{-ct}
\end{align*}
$$

*Problem 22*

$$
\begin{align*}
g(t) &= e^{(1 + 3t)^2} \\
g' &= e^{(1 + 3t)^2} \cdot 2(1 + 3t) \cdot 3 = 6(1 + 3t)e^{(1 + 3t)^2}
\end{align*}
$$

*Problem 23*

$$
\begin{align*}
w &= e^{\sqrt{s}} \\
w' &= e^{\sqrt{s}} \cdot \frac{1}{2\sqrt{s}} = \frac{e^{\sqrt{s}}}{2\sqrt{s}}
\end{align*}
$$

*Problem 24*

$$
\begin{align*}
y &= e^{-4t} \\
y' &= e^{-4t} \cdot (-4) = -4e^{-4t}
\end{align*}
$$

*Problem 25*

$$
\begin{align*}
y &= \sqrt{s^3 + 1} = (s^3 + 1)^{1/2} \\
y' &= \frac{1}{2}(s^3 + 1)^{-1/2} \cdot 3s^2 = \frac{3s^2}{2\sqrt{s^3 + 1}}
\end{align*}
$$

*Problem 26*

$$
\begin{align*}
y &= te^{-t^2} \\
y' &= e^{-t^2} + t \cdot e^{-t^2} \cdot (-2t) = e^{-t^2}(1 - 2t^2)
\end{align*}
$$

*Problem 27*

$$
\begin{align*}
f

(z) &= \sqrt{z} e^{-z} \\
f' &= \frac{1}{2\sqrt{z}}e^{-z} + \sqrt{z} \cdot e^{-z} \cdot (-1) = \frac{e^{-z}}{2\sqrt{z}} - \sqrt{z}e^{-z}
\end{align*}
$$

*Problem 28*

$$
\begin{align*}
z(x) &= 3\sqrt{2x + 5} = 3(2x + 5)^{1/2} \\
z' &= 3 \cdot \frac{1}{2}(2x + 5)^{-1/2} \cdot 2 = \frac{3}{\sqrt{2x + 5}}
\end{align*}
$$

*Problem 29*

$$
\begin{align*}
z &= 25t^{-3} \\
z' &= 25 \cdot (-3)t^{-4} = -75t^{-4}
\end{align*}
$$

*Problem 30*

$$
\begin{align*}
w &= \sqrt{x^2 \cdot 5x}^3 = \sqrt{5x^3}^3 = (5x^3)^{3/2} \\
w' &= \frac{3}{2}(5x^3)^{1/2} \cdot 15x^2 = \frac{45x^2}{2}(5x^3)^{1/2}
\end{align*}
$$

*Problem 31*

$$
\begin{align*}
f(y) &= \sqrt{10(5 - y)} = \sqrt{50 - 10y} = (50 - 10y)^{1/2} \\
f' &= \frac{1}{2}(50 - 10y)^{-1/2} \cdot (-10) = \frac{-5}{\sqrt{50 - 10y}}
\end{align*}
$$

*Problem 32*

$$
\begin{align*}
f(z) &= \frac{\sqrt{z}}{e^z} = z^{1/2} e^{-z} \\
f' &= \frac{1}{2}z^{-1/2} e^{-z} + z^{1/2} \cdot e^{-z} \cdot (-1) = \frac{e^{-z}}{2\sqrt{z}} - \sqrt{z}e^{-z}
\end{align*}
$$

*Problem 33*

$$
\begin{align*}
y &= \frac{\sqrt{z}}{2z} = \frac{z^{1/2}}{2z} = \frac{1}{2}z^{-1/2} \\
y' &= \frac{1}{2} \cdot (-\frac{1}{2})z^{-3/2} = -\frac{1}{4}z^{-3/2}
\end{align*}
$$

