---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 4.7 L'hopital's Rule

## L'hopital's Theorems

> [!theorem] **Theorem** (L'hopital's Rule)
> If $f$ and $g$ are differentiable and $f(a) = g(a) = 0$, then
>
> $$
> \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}  
> $$
>
> provided the limit on the right exists.

> [!theorem] **Theorem** (L'hopital's Rule for Limits Involving Infinity)
> Provided $f$ and $g$ are differentiable, given any real number $a$ or $\pm \infty$
> - When $\lim_{x \to a} f(x) = \pm\infty$ and $\lim_{x \to a} g(x) = \pm \infty$ or
> - When $\lim_{x \to \infty} f(x) = \lim_{x \to \infty} g(x) = 0$
>
> it can be shown that:
>
> $$
> \lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}  
> $$
>
> provided the limit on the right-hand side exists.

## Problems

> [!question] **Question** (Problems 1-12)
> In problems 1–12, for each limit, indicate whether L’Hopital’s rule applies. You do not have to evaluate the limits.

*Problem 1*

$$
\lim_{x \to 0} \frac{\sin(x)}{x} = \frac{0}{0} \to \text{L'hopital's Rule Applies}
$$

*Problem 3*

$$
\lim_{x \to 1} \frac{x^2 - 3x + 2}{x^2 - 1} = \frac{0}{0}\to \text{L'hopital's Rule Applies}
$$

*Problem 5*

$$
\lim_{x \to 0} \frac{\cos(x)}{x} = \frac{1}{0} \to \text{L'hopital's Rule Doesn't Apply}
$$

*Problem 7*

$$
\lim_{x \to 1} \frac{x^{2}-2x+5}{x^{2}-1} = \frac{4}{0}\to \text{L'hopital's Rule Doesn't Apply}
$$

*Problem 9*

$$
\lim_{x \to 0} \frac{2e^x - 2}{\cos x - 1} = \frac{0}{0} \to \text{L'hopital's Rule Applies}
$$

*Problem 11*

$$
\lim_{x \to 0} \frac{e^{x}}{\sin(x)} = \frac{1}{0} \to \text{L'hopital's Rule Doesn't Apply}
$$

> [!question] **Question** (Problems 13-38)
> In problems 13–38, find the limit. Use L’Hopital’s rule if it applies.

*Problem 13*

$$
\begin{align*}
\lim_{x \to 2} \frac{x - 2}{x^2 - 4} &= \lim_{x \to 2} \frac{x - 2}{(x - 2)(x + 2)} \\
&= \lim_{x \to 2} \frac{1}{x + 2} \\
&= \frac{1}{4}
\end{align*}
$$

*Problem 15*

$$
\begin{align*}
\lim_{x \to 1} \frac{x^6 - 1}{x^4 - 1} &= \lim_{x \to 1} \frac{(x^2 - 1)(x^4 + x^2 + 1)}{(x^2 - 1)(x^2 + 1)} \\
&= \lim_{x \to 1} \frac{x^4 + x^2 + 1}{x^2 + 1} \\
&= \frac{1 + 1 + 1}{1 + 1} \\
&= \frac{3}{2}
\end{align*}
$$

*Problem 17*

$$
\begin{align*}
\lim_{x \to 0} \frac{\sin x}{e^x} &= \frac{0}{1} \\
&= 0
\end{align*}
$$

*Problem 19*

$$
\begin{align*}
\lim_{x \to 0} \frac{e^{4x} - 1}{\cos x} &= \frac{0}{1} \\
&= 0
\end{align*}
$$

*Problem 21*

$$
\begin{align*}
\lim_{x \to a} \frac{\sqrt[3]{x} - \sqrt[3]{a}}{x - a} &= \lim_{x \to a} \frac{\frac{1}{3}x^{-2/3}}{1}\quad (\text{using L'Hopital's Rule}) \\
&= \frac{1}{3\sqrt[3]{a^{2}}}
\end{align*}
$$

*Problem 23*

$$
\begin{align*}
\lim_{x \to 1} \frac{x^3 - 5x^2 + 4}{3x^2 + 4x - 7} &= \lim_{x \to 1} \frac{(x-1)(x^2 - 4x - 4)}{(x-1)(3x + 7)} \\
&= \lim_{x \to 1} \frac{x^2 - 4x - 4}{(3x+7)} \\
&= \frac{1 - 4 - 4}{10} \\
&= - \frac{7}{10}
\end{align*}
$$

*Problem 25*

$$
\begin{align*}
\lim_{x \to 1} \frac{2x^5 - 2}{3x^4 - 3x} &= \lim_{x \to 1} \frac{10x^4}{12x^3 - 3} \quad (\text{using L'Hopital's Rule}) \\
&= \frac{10 \cdot 1^4}{12 \cdot 1^3 - 3} \\
&= \frac{10}{9}
\end{align*}
$$

*Problem 27*

$$
\begin{align*}
\lim_{x \to 0} \frac{\sin x + 5x}{8x} &= \lim_{x \to 0} \frac{\cos x + 5}{8} \quad (\text{using L'Hopital's Rule}) \\
&= \frac{1 + 5}{8} \\
&= \frac{6}{8} \\
&= \frac{3}{4}
\end{align*}
$$

*Problem 29*

$$
\begin{align*}
\lim_{x \to 0} \frac{\sin(5x)}{3x^2} &= \lim_{x \to 0} \frac{5\cos(5x)}{6x} \quad (\text{using L'Hopital's Rule}) \\
&= \frac{5}{0} \\
&= \text{Undefined}
\end{align*}
$$

*Problem 31*

$$
\begin{align*}
\lim_{x \to 0} \frac{e^{5x}}{\cos x - 1} &= \frac{1}{0} \quad (\text{which is undefined})
\end{align*}
$$

*Problem 33*

$$
\begin{align*}
\lim_{x \to 1} \frac{3x^2 + 4}{x^2 + 3x + 5} &= \frac{3 \cdot 1^2 + 4}{1^2 + 3 \cdot 1 + 5} \\
&= \frac{3 + 4}{1 + 3 + 5} \\
&= \frac{7}{9}
\end{align*}
$$

*Problem 35*

$$
\begin{align*}
\lim_{x \to \infty} \frac{\ln x}{x} &= \lim_{x \to \infty} \frac{\frac{1}{x}}{1} \quad (\text{using L'Hopital's Rule}) \\
&= \lim_{x \to \infty} \frac{1}{x} \\
&= 0
\end{align*}
$$

*Problem 37*

$$
\begin{align*}
\lim_{x \to \infty} \frac{5x + 1}{e^x} &= \lim_{x \to \infty} \frac{5}{e^x} \quad (\text{using L'Hopital's Rule}) \\
&= 0
\end{align*}
$$

