---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 9.2 Geometric Series

## Geometric Series

> [!definition] **Definition** (Geometric Series in General)
> A **finite geometric series** has the form
>
> $$
> a + ax + ax^{2} + \dots + ax^{n-2} + ax^{n-1}.
> $$
>
> An **infinite geometric series** has the form
>
> $$
> a + ax + ax^{2} + \dots + ax^{n-2} + ax^{n-1} + ax^{n} + \dots
> $$

> [!theorem] **Theorem** (Sum of Finite Geometric Series)
> The sum of a finite geometric series is given by
>
> $$
> S_{n} = a + ax + ax^{2} + \dots + ax^{n-1} = \frac{a(1-x^{n})}{1-x}, \quad \quad \text{provided } x \neq 1
> $$

*Proof*

$$
\begin{align}
S_{n} &= a + ax + ax^{2} + \dots + ax^{n-1} \\
xS_{n} &= ax + ax^{2} + ax^{3} + \dots + ax^{n} \\
S_{n} - xS_{n} &= a - ax^{n} \\
S_{n}(1-x) &= a(1-x^{n}) \\
S_{n} &= \frac{a(1-x^{n})}{(1-x)}
\end{align}
$$

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (Sum of Infinite Geometric Series)
> For $|x| < 1$, the sum of the infinite geometric series is given by
>
> $$
> S = a + ax + ax^{2} + \dots + ax^{n-1} + ax^{n} + \dots = \frac{a}{1-x}
> $$

*Proof*

Using the result from the finite geometric series, we have that

$$
\begin{align}
\lim_{n \to \infty} &= \lim_{n \to \infty} \frac{a(1-x^{n})}{(1-x)} \\
&= \frac{a}{1-x} \quad \text{(If } |x|<1 \text{)}
\end{align}
$$

$$
\tag*{\(\blacksquare\)}
$$

## Problems

> [!question] **Question** (Problems 24-27)
> In problems 24–27, say how many terms are in the finite geometric series and find its sum.

*Problem 24:* Find the number of terms and the sum of the finite geometric series $2 + 2(0.1) + 2(0.1)^2 + \cdots + 2(0.1)^{25}$.

$$
\begin{align*}
\text{First term } a &= 2 \\
\text{Common ratio } r &= 0.1 \\
\text{Number of terms } n &= 25 \\
\text{Sum of series } S_n &= a \frac{1 - r^n}{1 - r} \\
S_{25} &= 2 \frac{1 - (0.1)^{25}}{1 - 0.1} \\
&= 2 \frac{1 - (0.1)^{25}}{0.9} \\
&= \frac{2}{0.9} (1 - (0.1)^{25}) \\
&= \frac{20}{9} (1 - (0.1)^{25})
\end{align*}
$$

*Problem 26:* Find the number of terms and the sum of the finite geometric series $2(0.1)^5 + 2(0.1)^6 + \cdots + 2(0.1)^{13}$.

$$
\begin{align*}
\text{First term } a &= 2(0.1)^5 \\
\text{Common ratio } r &= 0.1 \\
\text{Number of terms } n &= 13 - 5 + 1 = 9 \\
\text{Sum of series } S_n &= a \frac{1 - r^n}{1 - r} \\
S_9 &= 2(0.1)^5 \frac{1 - (0.1)^9}{1 - 0.1} \\
&= \frac{2(0.1)^5}{0.9} (1 - (0.1)^9) \\
\end{align*}
$$

> [!problem] **Problem** (Problems 28-30)
> In problems 28–30, find the sum of the infinite geometric series.

*Problem 28:* Find the sum of the infinite geometric series $36 + 12 + 4 + \frac{4}{3} + \frac{4}{9} + \cdots$.

$$
\begin{align*}
\text{First term } a &= 36 \\
\text{Common ratio } r &= \frac{12}{36} = \frac{1}{3} \\
\text{Sum of series } S_{\infty} &= \frac{a}{1 - r} \\
S_{\infty} &= \frac{36}{1 - \frac{1}{3}} \\
&= \frac{36}{\frac{2}{3}} \\
&= 36 \cdot \frac{3}{2} \\
&= 54
\end{align*}
$$

*Problem 30:* Find the sum of the infinite geometric series $80 + 80\sqrt{2} + 40 + 40\sqrt{2} + 20 + 20\sqrt{2} + \cdots$.

$$
\begin{align*}
\text{First term } a &= 80 \\
\text{Common ratio } r &= \frac{80\sqrt{2}}{80} = \sqrt{2} \\
\text{Sum of series } S_{\infty} &= \frac{a}{1 - r} \\
S_{\infty} &= \frac{80}{1 - \sqrt{2}}
\end{align*}
$$

> [!question] **Question** (Problems 31-34)
> In problems 31–34, find a closed-form for the geometric series and determine for which values of 𝑥 it converges.

*Problem 32:* Find a closed-form for the geometric series $\sum_{n=0}^{\infty} (1 - x)^n$ and determine for which values of $x$ it converges.

$$
\begin{align*}
\text{First term } a &= 1 \\
\text{Common ratio } r &= 1 - x \\
\text{Sum of series } S_{\infty} &= \frac{a}{1 - r} \\
S_{\infty} &= \frac{1}{1 - (1 - x)} \\
&= \frac{1}{x} \\
\text{Convergence: } & |1 - x| < 1 \\
& 0 < x < 2
\end{align*}
$$

*Problem 34:* Find a closed-form for the geometric series $\sum_{n=0}^{\infty} (1 - x/3)^n$ and determine for which values of $x$ it converges.

$$
\begin{align*}
\text{First term } a &= 1 \\
\text{Common ratio } r &= 1 - \frac{x}{3} \\
\text{Sum of series } S_{\infty} &= \frac{a}{1 - r} \\
S_{\infty} &= \frac{1}{1 - \left(1 - \frac{x}{3}\right)} \\
&= \frac{1}{\frac{x}{3}} \\
&= \frac{3}{x} \\
\text{Convergence: } & \left|1 - \frac{x}{3}\right| < 1 \\
& |x| < 6
\end{align*}
$$

> [!question] **Question** (Problems 36-42)
> In problems 36–42, find the sum of the series. For what values of the variable does the series converge to this sum?

*Problem 36:* Find the sum of the series $1 + 3x + 9x^2 + 27x^3 + \cdots$.

$$
\begin{align*}
\text{First term } a &= 1 \\
\text{Common ratio } r &= 3x \\
\text{Sum of series } S_{\infty} &= \frac{a}{1 - r} \\
S_{\infty} &= \frac{1}{1 - 3x} \\
\text{Convergence: } & |3x| < 1 \\
& |x| < \frac{1}{3}
\end{align*}
$$

*Problem 38:* Find the sum of the series $2 - 4z + 8z^2 - 16z^3 + \cdots$.

$$
\begin{align*}
\text{First term } a &= 2 \\
\text{Common ratio } r &= -2z \\
\text{Sum of series } S_{\infty} &= \frac{a}{1 - r} \\
S_{\infty} &= \frac{2}{1 - (-2z)} \\
&= \frac{2}{1 + 2z} \\
\text{Convergence: } & |-2z| < 1 \\
& |z| < \frac{1}{2}
\end{align*}
$$

*Problem 40:* Find the sum of the series $4 + \frac{y}{3} + \frac{y^2}{9} + \frac{y^3}{27} + \cdots$.

$$
\begin{align*}
\text{First term } a &= 4 \\
\text{Common ratio } r &= \frac{y}{3} \\
\text{Sum of series } S_{\infty} &= \frac{a}{1 - r} \\
S_{\infty} &= \frac{4}{1 - \frac{y}{3}} \\
&= \frac{12}{3 - y} \\
\text{Convergence: } & \left|\frac{y}{3}\right| < 1 \\
& |y| < 3
\end{align*}
$$