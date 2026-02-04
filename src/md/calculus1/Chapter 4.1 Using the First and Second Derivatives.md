---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 4.1 Using the First and Second Derivatives

## Local Maxima and Minima

> [!definition] **Definition** (Maxima and Minima)
> Suppose $p$ is a point in the domain of $f$:
> - $f$ has a **local minimum** at $p$ if $f(p)$ is less than or equal to the values of $f$ for points near $p$.
> - $f$ has a **local maximum** at $p$ if $f(p)$ is greater than or equal to the values of $f$ for points near $p$.

> [!definition] **Definition** (Critical Points and Critical Values)
> For any function $f$, a point $p$ in the domain of $f$ where $f'(p)=0$, or $f'(p)$ is undefined is called a **critical point** of the function. In addition, the point $(p, f(p))$ on the graph of $f$ is also called a critical point. A **critical value** of $f$ is a value, $f(p)$ at a critical point, $p$.

> [!theorem] **Theorem** (Local Extrema and Critical Points)
> Suppose $f$ is defined on an interval and has a local maximum or minimum at the point $x=a$, which is not an endpoint of the interval. If $f$ is differentiable at $x=a$, then $f'(a)=0$. Thus, $a$ is a critical point.

In other words, every local maximum and local minimum is a critical point. However, note that it does not apply the other way around, meaning that not every critical point is a local maximum or minimum. To illustrate this, you can consider $f(x)=x^{3}$ which has a critical point at $x=0$ but that point is neither a maximum nor minimum.

## Techniques to Find Local Maxima and Minima

> [!theorem] **Theorem** (First-Derivative Test for Local Maxima and Minima)
> Suppose $p$ is a critical point of a continuous function $f$. Moving from left to right:
> - If $f$' changes from negative to positive at $p$, then $f$ has a local minimum at $p$.
> - If $f$' changes from positive to negative at $p$, then $f$ has a local maximum at $p$.

> [!theorem] **Theorem** (Second-Derivative Test for Local Maxima and Minima)
> - If $f'(p) = 0$ and $f''(p)>0$ then $f$ has a local minimum at $p$.
> - If $f'(p) = 0$ and $f''(p) < 0$ then $f$ has a local maximum at $p$.
> - If $f'(p) = 0$ and $f''(p) = 0$ then the test tells us nothing, and we revert to the first derivative test.

To summarize, you have two techniques to figure out whether a particular critical point is either a maximum, minimum, or neither. The first technique uses the fact that the first derivative tells you where potential maximums and minimums are located, and seeing how the slopes around these points change. The second technique is a more direct one, telling you exactly how the concavity changes at that point.

> [!definition] **Definition** (Inflection Point)
> Suppose a function $f$ has a continuous derivative. If $f$'' changes sign at $p$, then $f$ has an **inflection point** at $p$, and $f$' has a local minimum or a local maximum at $p$.

## Problems

> [!question] **Question** (Problems 4-8)
> In problems 4–8, use derivatives to find the critical points and inflection points.

*Problem 4*

$$
\begin{align*}
f(x) &= x^3 - 9x^2 + 24x + 5 \\
f'(x) &= 3x^2 - 18x + 24 \\
0 &= 3x^2 - 18x + 24 \\
0 &= x^2 - 6x + 8 \\
0 &= (x - 2)(x - 4) \\
x &= 2, \, 4 \\
\text{Critical points: } &2, \, 4 \\\\
f''(x) &= 6x - 18 \\
f''(x) &= 6(x - 3) \\
0 &= 6(x - 3) \\
x &= 3 \\
\text{Inflection point: } &3 \text{ (changes concavity from down to up)} \\
\end{align*}
$$

*Problem 5*

$$
\begin{align*}
f(x) &= x^5 - 10x^3 - 8 \\
f'(x) &= 5x^4 - 30x^2 \\
0 &= 5x^4 - 30x^2 \\
0 &= 5x^2(x^2 - 6) \\
0 &= x^2 \text{ or } x^2 - 6 \\
x &= 0, \, \pm \sqrt{6} \\
\text{Critical points: } &0, \, \pm \sqrt{6} \\\\
f''(x) &= 20x^3 - 60x \\
f''(x) &= 20x(x^2 - 3) \\
0 &= 20x(x^2 - 3) \\
x &= 0, \, \pm \sqrt{3} \\
\text{Inflection points: } &\pm \sqrt{3} \text{ (changes concavity)} \\
\end{align*}
$$

*Problem 6*

$$
\begin{align*}
f(x) &= x^5 + 15x^4 + 25 \\
f'(x) &= 5x^4 + 60x^3 \\
0 &= 5x^4 + 60x^3 \\
0 &= 5x^3(x + 12) \\
x &= 0, \, -12 \\
\text{Critical points: } &0, \, -12 \\\\
f''(x) &= 20x^3 + 180x^2 \\
f''(x) &= 20x^2(x + 9) \\
0 &= 20x^2(x + 9) \\
x &= 0, \, -9 \\
\text{Inflection point: } &-9 \text{ (changes concavity from up to down)} \\
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
f(x) &= 5x - 3 \ln x \\
f'(x) &= 5 - \frac{3}{x} \\
0 &= 5 - \frac{3}{x} \\
x &= \frac{3}{5} \\
\text{Critical point: } &\frac{3}{5} \\\\
f''(x) &= \frac{3}{x^2} \\
f''\left(\frac{3}{5}\right) &= \frac{75}{9} = \frac{25}{3} \\
\text{Local minima: } &\frac{3}{5} \\
\text{Local maxima: } &\text{none} \\
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
f(x) &= 4xe^{3x} \\
f'(x) &= 4e^{3x} + 12xe^{3x} \\
0 &= 4e^{3x} + 12xe^{3x} \\
0 &= 4 + 12x \\
x &= -\frac{1}{3} \\
\text{Critical point: } &-\frac{1}{3} \\\\
f''(x) &= 36xe^{3x} + 24e^{3x} \\
f''(x) &= 12e^{3x}(3x + 2) \\
0 &= 12e^{3x}(3x + 2) \\
x &= -\frac{2}{3} \\
\text{Inflection point: } &-\frac{2}{3} \text{ (changes concavity)} \\
\end{align*}
$$

> [!question] **Question** (Problems 9-12)
> In problems 9–12, find all critical points and then use the first-derivative test to determine local maxima and minima.

Certainly! Here’s the revised solution for Problems 9-12 with only the first-derivative test:

*Problem 9*

$$
\begin{align*}
f(x) &= 3x^4 - 4x^3 + 6 \\
f'(x) &= 12x^3 - 12x^2 \\
0 &= 12x^3 - 12x^2 \\
0 &= 12x^2(x - 1) \\
x &= 0, \, 1 \\
\text{Critical points: } &0, \, 1 \\\\
\text{First derivative test:} \\
f'(x) \text{ changes sign around } x = 1. \\
\text{Check intervals:} \\
\text{For } x < 0, \, f'(x) < 0 \\
\text{For } 0 < x < 1, \, f'(x) < 0 \\
\text{For } x > 1, \, f'(x) > 0 \\
\text{Local maxima: } & \text{None} \\
\text{Local minima: } & x = 1 \\
\end{align*}
$$

*Problem 10*

$$
\begin{align*}
f(x) &= (x^2 - 4)^7 \\
f'(x) &= 7(x^2 - 4)^6 \cdot 2x \\
f'(x) &= 14x(x^2 - 4)^6 \\
0 &= 14x(x^2 - 4)^6 \\
0 &= x \text{ or } x^2 - 4 \\
x &= 0, \pm 2 \\
\text{Critical points: } &0, \pm 2 \\\\
\text{First derivative test:} \\
f'(x) \text{ changes sign around } x = -2, 0, \text{ and } 2. \\
\text{Check intervals:} \\
\text{For } x < -2, \, f'(x) < 0 \\
\text{For } -2 < x < 0, \, f'(x) < 0 \\
\text{For } 0 < x < 2, \, f'(x) > 0 \\
\text{For } x > 2, \, f'(x) > 0 \\
\text{Local maxima: } & \text{None} \\
\text{Local minima: } &x = 0 \\
\end{align*}
$$

*Problem 11*

$$
\begin{align*}
f(x) &= (x^3 - 8)^4 \\
f'(x) &= 4(x^3 - 8)^3 \cdot 3x^2 \\
f'(x) &= 12x^2(x^3 - 8)^3 \\
0 &= 12x^2(x^3 - 8)^3 \\
0 &= x^2 \text{ or } x^3 - 8 \\
x &= 0, \, 2 \\
\text{Critical points: } &0, \, 2 \\\\
\text{First derivative test:} \\
f'(x) \text{ changes sign around } x = 0 \text{ and } x = 2. \\
\text{Check intervals:} \\
\text{For } x < 0, \, f'(x) < 0 \\
\text{For } 0 < x < 2, \, f'(x) < 0 \\
\text{For } x > 2, \, f'(x) > 0 \\
\text{Local maxima: } & \text{None} \\
\text{Local minima: } &x = 2 \\
\end{align*}
$$

*Problem 12*

$$
\begin{align*}
f(x) &= \frac{x}{x^2 + 1} \\
f'(x) &= \frac{(x^2 + 1) - x \cdot 2x}{(x^2 + 1)^2} \\
f'(x) &= \frac{1 - x^2}{(x^2 + 1)^2} \\
0 &= 1 - x^2 \\
x &= \pm 1 \\
\text{Critical points: } &\pm 1 \\\\
\text{First derivative test:} \\
f'(x) \text{ changes sign around } x = \pm 1. \\
\text{Check intervals:} \\
\text{For } x < -1, \, f'(x) < 0 \\
\text{For } -1 < x < 1, \, f'(x) > 0 \\
\text{For } x > 1, \, f'(x) < 0 \\
\text{Local maxima: } &x = 1 \\
\text{Local minima: } &x = -1 \\
\end{align*}
$$

> [!question] **Question** (Problems 13-16)
> In problems 13–16, find all critical points and then use the second-derivative test to determine local maxima and minima.

*Problem 13*

$$
\begin{align*}
f(x) &= 9 + 6x^2 - x^3 \\
f'(x) &= 12x - 3x^2 \\
0 &= 12x - 3x^2 \\
0 &= x(4 - x) \\
x &= 0, \, 4 \\
\text{Critical points: } &0, \, 4 \\\\
f''(x) &= 12 - 6x \\
f''(x) &= -6(x - 2) \\
0 &= -6(x - 2) \\
x &= 2 \\
f''(0) &= 12 \quad (\text{Concave up at } x = 0 \text{ so local minimum}) \\
f''(4) &= -12 \quad (\text{Concave down at } x = 4 \text{ so local maximum}) \\
f''(2) &= 0 \quad (\text{Potential inflection point}) \\
\text{Inflection point: } &2
\end{align*}
$$

*Problem 14*

$$
\begin{align*}
f(x) &= x^4 - 18x^2 + 10 \\
f'(x) &= 4x^3 - 36x \\
0 &= 4x^3 - 36x \\
0 &= 4x(x^2 - 9) \\
0 &= x(x - 3)(x + 3) \\
x &= 0, \, 3, \, -3 \\
\text{Critical points: } &0, \, 3, \, -3 \\\\
f''(x) &= 12x^2 - 36 \\
f''(x) &= 12(x^2 - 3) \\
0 &= 12(x^2 - 3) \\
x^2 &= 3 \\
x &= \pm \sqrt{3} \\
f''(0) &= -36 \quad (\text{Concave down at } x = 0 \text{ so local maximum}) \\
f''(3) &= 72 \quad (\text{Concave up at } x = 3 \text{ so local minimum}) \\
f''(-3) &= 72 \quad (\text{Concave up at } x = -3 \text{ so local minimum}) \\
\text{Inflection points: } &\pm \sqrt{3}
\end{align*}
$$

*Problem 15*

$$
\begin{align*}
f(x) &= e^{-2x^2} \\
f'(x) &= -4xe^{-2x^2} \\
0 &= -4xe^{-2x^2} \\
x &= 0 \\
\text{Critical point: } &0 \\\\
f''(x) &= 4e^{-2x^2}(4x^2 - 1) \\
f''(x) &= 4e^{-2x^2}(4x^2 - 1) \\
0 &= 4e^{-2x^2}(4x^2 - 1) \\
4x^2 &= 1 \\
x &= \pm \frac{1}{2} \\
f''(0) &= -4 \quad (\text{Concave down at } x = 0 \text{ so local maximum}) \\
f''\left(\pm \frac{1}{2}\right) &= 0 \\
\text{Inflection points: } &\pm \frac{1}{2}
\end{align*}
$$

*Problem 16*

$$
\begin{align*}
f(x) &= 2x - 5 \ln x \\
f'(x) &= 2 - \frac{5}{x} \\
0 &= 2 - \frac{5}{x} \\
x &= \frac{5}{2} \\
\text{Critical point: } &\frac{5}{2} \\\\
f''(x) &= \frac{5}{x^2} \\
f''\left(\frac{5}{2}\right) &= \frac{20}{25} = \frac{4}{5} \\
\text{Concave up at } x = \frac{5}{2} \text{ so local minimum} \\
\text{Inflection points: } &\text{none}
\end{align*}
$$

