---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 4.2 Optimization

## Global Maximum and Minimum

> [!definition] **Definition** (Global Maximum and Minimum)
> Suppose $p$ is a point in the domain of $f$:
> - $f$ has a **global minimum** at $p$ if $f(p)$ is less than or equal to all values of $f$.
> - $f$ has a **global maximum** at $p$ if $f(p)$ is greater than or equal to all values of $f$.

> [!theorem] **Theorem** (The Extreme Value Theorem)
> If $f$ is continuous on the closed interval $a \leq x \leq b$, then $f$ has a global maximum and a global minimum on that interval.

## Global Maxima and Minima: Test the Candidates

Here is how you proceed forward with finding global maxima or minima on a closed interval for a continuous function $f$ bounded by an interval $a \leq x \leq b$.

1. Find the critical points of $f$ in the interval.
2. Evaluate the function at the critical points and at the endpoints, $a$ and $b$. The largest value of the function is the global maximum: the smallest value is the global minimum.

And here is how you proceed forward with finding global maxima or minima for all real numbers.

1. Find all the critical points of $f$.
2. Evaluate the function at the critical points and then look at the end behavior of $f$. If the end behavior approaches $\pm \infty$ then that would be your global maxima or minima. Otherwise, choose the largest of your critical points.

## Problems

> [!question] **Question** (Problems 4-8)
> In problems 4–8, find the global maximum and minimum for the function on the closed interval.

*Problem 4*

$$
\begin{align*}
f(x) &= x^3 - 3x^2 + 20 \\
f'(x) &= 3x^2 - 6x \\
f''(x) &= 6x - 6 \\
\text{Critical points:} &\quad f'(x) = 0 \Rightarrow 3x^2 - 6x = 0 \Rightarrow x(x - 2) = 0 \\
&\quad x = 0 \text{ or } x = 2 \\
\text{Evaluate at endpoints and critical points:} \\
f(-1) &= (-1)^3 - 3(-1)^2 + 20 = -1 - 3 + 20 = 16 \\
f(0) &= 0^3 - 3 \cdot 0^2 + 20 = 20 \\
f(2) &= 2^3 - 3 \cdot 2^2 + 20 = 8 - 12 + 20 = 16 \\
f(3) &= 3^3 - 3 \cdot 3^2 + 20 = 27 - 27 + 20 = 20 \\
\text{Global max: } & 20 \text{ at } x = 0, 3 \\
\text{Global min: } & 16 \text{ at } x = -1, 2
\end{align*}
$$

*Problem 5*

$$
\begin{align*}
f(x) &= x^4 - 8x^2 \\
f'(x) &= 4x^3 - 16x \\
f''(x) &= 12x^2 - 16 \\
\text{Critical points:} &\quad f'(x) = 0 \Rightarrow 4x(x^2 - 4) = 0 \Rightarrow x = 0, \pm 2 \\
\text{Evaluate at endpoints and critical points:} \\
f(-3) &= (-3)^4 - 8(-3)^2 = 81 - 72 = 9 \\
f(-2) &= (-2)^4 - 8(-2)^2 = 16 - 32 = -16 \\
f(0) &= 0^4 - 8 \cdot 0^2 = 0 \\
f(1) &= 1^4 - 8 \cdot 1^2 = 1 - 8 = -7 \\
\text{Global max: } & 9 \text{ at } x = -3 \\
\text{Global min: } & -16 \text{ at } x = -2
\end{align*}
$$

*Problem 6*

$$
\begin{align*}
f(x) &= x e^{-\frac{x^2}{2}} \\
f'(x) &= e^{-\frac{x^2}{2}} - x^2 e^{-\frac{x^2}{2}} = (1 - x^2) e^{-\frac{x^2}{2}} \\
f''(x) &= (-x + x^3 - x) e^{-\frac{x^2}{2}} = (x^3 - 2x) e^{-\frac{x^2}{2}} \\
\text{Critical points:} &\quad f'(x) = 0 \Rightarrow 1 - x^2 = 0 \Rightarrow x = \pm 1 \\
\text{Evaluate at endpoints and critical points:} \\
f(-2) &= -2 e^{-\frac{(-2)^2}{2}} = -2 e^{2} \\
f(-1) &= -1 e^{-\frac{(-1)^2}{2}} = -e^{-\frac{1}{2}} \approx -0.6065 \\
f(0) &= 0 \\
f(1) &= 1 e^{-\frac{1^2}{2}} = e^{-\frac{1}{2}} \approx 0.6065 \\
f(2) &= 2 e^{-\frac{2^2}{2}} = 2 e^{-2} \approx 0.5414 \\
\text{Global max: } & e^{-\frac{1}{2}} \approx 0.6065 \text{ at } x = 1 \\
\text{Global min: } & -e^{-\frac{1}{2}} \approx -0.6065 \text{ at } x = -1
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
f(x) &= 3x^{1/3} - x \\
f'(x) &= x^{-2/3} - 1 \\
f''(x) &= -\frac{2}{3} x^{-5/3} \\
\text{Critical points:} &\quad f'(x) = 0 \Rightarrow x^{-2/3} = 1 \Rightarrow x = 1 \\
\text{Evaluate at endpoints and critical points:} \\
f(-1) &= 3(-1)^{1/3} - (-1) = -3 + 1 = -2 \\
f(1) &= 3 \cdot 1^{1/3} - 1 = 3 - 1 = 2 \\
f(8) &= 3 \cdot 8^{1/3} - 8 = 3 \cdot 2 - 8 = 6 - 8 = -2 \\
\text{Global max: } & 2 \text{ at } x = 1 \\
\text{Global min: } & -2 \text{ at } x = -1, 8
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
f(x) &= x - 2 \ln(x + 1) \\
f'(x) &= 1 - \frac{2}{x + 1} \\
f''(x) &= \frac{2}{(x + 1)^2} \\
\text{Critical points:} &\quad f'(x) = 0 \Rightarrow 1 - \frac{2}{x + 1} = 0 \Rightarrow x + 1 = 2 \Rightarrow x = 1 \\
\text{Evaluate at endpoints and critical points:} \\
f(0) &= 0 - 2 \ln(1) = 0 \\
f(1) &= 1 - 2 \ln(2) \approx 1 - 1.386 = -0.386 \\
f(2) &= 2 - 2 \ln(3) \approx 2 - 2.197 = -0.197 \\
\text{Global max: } & 0 \text{ at } x = 0 \\
\text{Global min: } & -0.386 \text{ at } x = 1
\end{align*}
$$


