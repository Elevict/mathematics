---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.3 the Product and Quotient Rules

## The Product and Quotient Rule Theorems

> [!theorem] **Theorem** (The Product Rule)
> If $u = f(x)$ and $v = g(x)$ are differentiable, then
>
> $$
> (fg)' = f'g + fg'.
> $$
>
> The product rule can also be written as
>
> $$
> \frac{d(uv)}{dx} = \frac{du}{dx} \cdot v + u \cdot \frac{dv}{dx}
> $$

*Proof*

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (The Quotient Rule)
> If $u = f(x)$ and $v = g(x)$ are differentiable, then
>
> $$
> \left( \frac{f}{g} \right)' = \frac{f'g-fg'}{g^{2}}
> $$
>
> or equivalently,
>
> $$
> \frac{d}{dx}\left( \frac{u}{v} \right) = \frac{\frac{du}{dx}\cdot v-u\cdot \frac{dv}{dx}}{v^{2}}
> $$

*Proof*

$$
\tag*{\(\blacksquare\)}
$$

## Problems

> [!question] **Question** (Exercises 3-24)
> For Exercises 3–30, find the derivative. It may be to your advantage to simplify first. Assume that 𝑎, 𝑏, 𝑐, and 𝑘 are constants.

*Problem 3*

$$
\begin{align*}
f(x) &= xe^x \\
f'(x) &= e^x + xe^x
\end{align*}
$$

*Problem 4*

$$
\begin{align*}
y &= x \cdot 2^x \\
y' &= 2^x + x \cdot 2^x \ln 2
\end{align*}
$$

*Problem 5*

$$
\begin{align*}
y &= \sqrt{x} \cdot 2^x \\
y' &= \frac{1}{2\sqrt{x}} \cdot 2^x + \sqrt{x} \cdot 2^x \ln 2
\end{align*}
$$

*Problem 6*

$$
\begin{align*}
y &= (t^2 + 3)e^t \\
y' &= (2t e^t) + (t^2 + 3) e^t
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
f(x) &= (x^2 - \sqrt{x}) \cdot 3^x \\
f'(x) &= (2x - \frac{1}{2\sqrt{x}}) \cdot 3^x \ln 3 + (x^2 - \sqrt{x}) \cdot 3^x \ln 3
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
y &= (t^3 - 7t^2 + 1)e^t \\
y' &= (3t^2 - 14t)e^t + (t^3 - 7t^2 + 1)e^t
\end{align*}
$$

*Problem 9*

$$
\begin{align*}
f(x) &= \frac{x}{e^x} \\
f'(x) &= \frac{e^x - x e^x}{e^{2x}}
\end{align*}
$$

*Problem 10*

$$
\begin{align*}
g(x) &= \frac{25x^2}{e^x} \\
g'(x) &= \frac{25 \cdot e^x \cdot 2x - 25x^2 \cdot e^x}{e^{2x}} = \frac{25(2x - x^2)}{e^x}
\end{align*}
$$

*Problem 11*

$$
\begin{align*}
y &= \frac{t + 1}{2t} \\
y' &= \frac{(2 - (t + 1))}{4t^2} = \frac{1 - t}{4t^2}
\end{align*}
$$

*Problem 12*

$$
\begin{align*}
g(w) &= \frac{w^{3.2}}{5w} \\
g'(w) &= \frac{3.2w^{2.2} \cdot 5w - w^{3.2} \cdot 5}{25w^2}
\end{align*}
$$

*Problem 13*

$$
\begin{align*}
q(r) &= \frac{3r}{5r + 2} \\
q'(r) &= \frac{(5r + 2) \cdot 3 - 3r \cdot 5}{(5r + 2)^2} = \frac{6}{(5r + 2)^2}
\end{align*}
$$

*Problem 14*

$$
\begin{align*}
g(t) &= \frac{t - 4}{t + 4} \\
g'(t) &= \frac{(t + 4) - (t - 4)}{(t + 4)^2} = \frac{8}{(t + 4)^2}
\end{align*}
$$

*Problem 15*

$$
\begin{align*}
z &= \frac{3t + 1}{5t + 2} \\
z' &= \frac{3(5t+2) - 5(3t+1)}{(5t+2)^{2}} \\
z' &= \frac{15t+6 - 15t-5}{(5t+2)^{2}} \\
z' &= \frac{1}{(5t+2)^{2}}
\end{align*}
$$

*Problem 16*

$$
\begin{align*}
z &= \frac{t^2 + 5t + 2}{t + 3} \\
z' &= \frac{(t + 3) \cdot (2t + 5) - (t^2 + 5t + 2)}{(t + 3)^2} = \frac{2t^{2}+11t + 15 -t^{2}-5t-2}{(t+3)^{2}} = \frac{t^{2}+6t+13}{(t + 3)^2}
\end{align*}
$$

*Problem 17*

$$
\begin{align*}
f(t) &= 2t e^t - \frac{1}{\sqrt{t}} \\
f'(t) &= (2 e^t + 2t e^t) + \frac{1}{2} t^{-\frac{3}{2}}
\end{align*}
$$

*Problem 18*

$$
\begin{align*}
f(x) &= \frac{x^2 + 3}{x} \\
f'(x) &= \frac{2x \cdot x - (x^2 + 3)}{x^2} = \frac{x^2 - 3}{x^2}
\end{align*}
$$

*Problem 19*

$$
\begin{align*}
w &= \frac{y^3 - 6y^2 + 7y}{y} \\
w' &= \frac{3y^2 - 12y + 7 - (y^3 - 6y^2 + 7y)}{y^2} = \frac{-y^3 + 9y^2 - 7y}{y^2}
\end{align*}
$$

*Problem 20*

$$
\begin{align*}
g(t) &= \frac{4}{3 + \sqrt{t}} \\
g'(t) &= \frac{4 \cdot (-\frac{1}{2} t^{-\frac{1}{2}})}{(3 + \sqrt{t})^2} = \frac{-2t^{-\frac{1}{2}}}{(3 + \sqrt{t})^2}
\end{align*}
$$

*Problem 21*

$$
\begin{align*}
f(z) &= \frac{z^2 + 1}{\sqrt{z}} \\
f'(z) &= \frac{(2z \sqrt{z}) - (z^2 + 1) \cdot \frac{1}{2} z^{-\frac{3}{2}}}{z} = \frac{2z \sqrt{z} - \frac{z^2 + 1}{2z^{\frac{3}{2}}}}{z}
\end{align*}
$$

*Problem 22*

$$
\begin{align*}
w &= \frac{5 - 3z}{5 + 3z} \\
w' &= \frac{(-3 \cdot (5 + 3z)) - (5 - 3z) \cdot 3}{(5 + 3z)^2} = \frac{-15 - 9z - 15 + 9z}{(5 + 3z)^2} = \frac{-30}{(5 + 3z)^2}
\end{align*}
$$

*Problem 23*

$$
\begin{align*}
h(r) &= \frac{r^2}{2r + 1} \\
h'(r) &= \frac{(2r + 1) \cdot 2r - r^2 \cdot 2}{(2r + 1)^2} = \frac{2r^{2}+2r}{(2r+1)^{2}}
\end{align*}
$$

*Problem 24*

$$
\begin{align}
f(z) &= \frac{3z^2}{5z^2 + 7z} \\
f(z) &= \frac{3z}{5z+7} \\
f'(z) &= \frac{3(5z+7)-15z}{(5z+7)^{2}}
\end{align}
$$

