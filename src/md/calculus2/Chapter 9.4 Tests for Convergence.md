---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 9.4 Tests for Convergence

## Types of Tests

> [!theorem] **Theorem** (Comparison Test)
> Suppose $0 \leq a_{n} \leq b_{n}$, for all $n$ beyond a certain value.
> - If $\sum b_{n}$ converges, then $\sum a_{n}$ converges.
> - If $\sum a_{n}$ diverges, then $\sum b_{n}$ diverges.

> [!theorem] **Theorem** (Limit Comparison Test)
> Suppose $a_{n} > 0$ and $b_{n} > 0$ and all $n$. If
>
> $$
> \lim_{n \to \infty}  \frac{a_{n}}{b_{n}} = c \quad \quad \text{where } c >0.
> $$
>
> then two series $\sum a_{n}$ and $\sum b_{n}$ either both converge or both diverge.

> [!theorem] **Theorem** (Convergence of Absolute Values Implies Convergence)
> If $\sum |a_{n}|$ converges, then so does $\sum a_{n}$.

> [!theorem] **Theorem** (The Ratio Test)
> For a series $\sum a_{n}$, suppose the sequence of ratios $\frac{|a_{n+1}|}{|a_{n}|}$ has a limit:
>
> $$
> \lim_{n \to \infty} \frac{|a_{n+1}|}{|a_{n}|} = L
> $$
>
> - If $L < 1$, then $\sum a_{n}$ converges.
> - If $L > 1$, or if $L$ is infinite, then $\sum a_{n}$ diverges.
> - If $L = 1$, the test does not tell us anything about the convergence of $\sum a_{n}$.

*Proof*
Suppose $\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_{n}|} = L < 1$. Let $x$ be a number between $L$ and 1. Then for all sufficiently large $n$, say for all $n \geq k$, we have

$$
\frac{|a_{n+1}|}{|a_{n}|} < x
$$

Then reordering the equation above we have,

$$
\begin{align}
|a_{k+1}| &< |a_{k}|x. \\
|a_{k+2}| &< |a_{k+1}|x < |a_{k}|x^{2} \\
|a_{k+3} &< |a_{k+2}|x < |a_{k}|x^{3}
\end{align}
$$

and so on. Thus writing, $a = |a_{k}|$, we have for $i = 1, 2, 3, \dots$

$$
|a_{k+i}| < ax^{i}
$$

Now we can use the comparison test $\sum|a_{k+i}|$ converges by comparison with the geometric series $\sum ax^{i}$. Since $\sum|a_{k+i}|$ converges, it means that $\sum a_{k+i}$ converges as well and therefore $\sum a_{n}$ converges also.

If $L > 1$, then for sufficiently large $n$, say $n \geq m$,

$$
|a_{n+1} > |a_{n}|
$$

so the sequence $|a_{m}|, |a_{m+1}|, |a_{m+2}|, \dots$ is increasing. Thus, $\lim_{n \to \infty} a_{n} \neq 0$, so $\sum a_{n}$ diverges. The argument in the case that $\frac{|a_{n+1}|}{|a_{n}|}$ is unbounded is similar.

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (Alternating Series Test)
> An alternating series of the form
>
> $$
> \sum_{n=1}^{\infty} (-1)^{n-1}a_{n} = a_{1} - a_{2}  + a_{3} -  a_{4} + \dots + (-1)^{n-1}a_{n} + \dots
> $$
>
> converges if
>
> $$
> 0 < a_{n+1} < a_{n} \text{ for all } n \text{ and } \lim_{n \to \infty} a_{n} = 0
> $$

> [!definition] **Definition** (Absolutely and Conditionally Convergent)
> We say that the series $\sum a_{n}$ is
> - **Absolutely convergence** if $\sum a_{n}$ and $\sum |a_{n}|$ both converge. In this case, rearranging terms does not change the sum.
> - **Conditionally convergent** if $\sum a_{n}$ converges but $\sum |a_{n}|$ diverges. In this case, rearranging terms can change the sum to any number.

## Problems

*Problem 64:* Determine whether the series $\sum_{n=1}^{\infty} \frac{8n}{n!}$ converges.

$$
\begin{align*}
\sum_{n=1}^{\infty} \frac{8n}{n!} &= 8 \sum_{n=1}^{\infty} \frac{n}{n!} \\
&= 8 \sum_{n=1}^{\infty} \frac{1}{(n-1)!} \\
&= 8 \sum_{m=0}^{\infty} \frac{1}{m!} \text{ (where $m=n-1$)} \\
&= 8 \cdot e \text{ (since $\sum_{m=0}^{\infty} \frac{1}{m!} = e$)}
\end{align*}
$$

Thus, the series converges.

*Problem 65:* Determine whether the series $\sum_{n=1}^{\infty} \frac{1}{4n + 3}$ converges.

$$
\begin{align*}
a_n &= \frac{1}{4n + 3} \\
\lim_{n \to \infty} a_n &= 0
\end{align*}
$$

However, the series $\sum_{n=1}^{\infty} \frac{1}{n}$ (a harmonic series) diverges. Since $\frac{1}{4n + 3} \sim \frac{1}{n}$, the given series also diverges by the comparison test.

*Problem 66:* Determine whether the series $\sum_{n=1}^{\infty} \frac{(-2)^{n-1}}{n^2}$ converges.

$$
\begin{align*}
a_n &= \frac{(-2)^{n-1}}{n^2} \\
\left| a_n \right| &= \frac{2^{n-1}}{n^2}
\end{align*}
$$

Since ${} \frac{2^{n-1}}{n^2} \to \infty {}$ as $n \to \infty$ via using L'hopital's rule the series is divergent.

*Problem 67:* Determine whether the series $\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{2n + 1}$ converges.

$$
\begin{align*}
a_n &= \frac{(-1)^{n-1}}{2n + 1}
\end{align*}
$$

This is an alternating series. The terms $\frac{1}{2n + 1}$ are decreasing and tend to 0 as $n \to \infty$. Therefore, the series converges by the Alternating Series Test.

*Problem 68:* Determine whether the series $\sum_{n=1}^{\infty} \frac{5 + e^n}{3^n}$ converges.

$$
\begin{align*}
a_n &= \frac{5 + e^n}{3^n} \\
&= \frac{5}{3^n} + \frac{e^n}{3^n} \\
&= 5 \left( \frac{1}{3} \right)^n + \left( \frac{e}{3} \right)^n
\end{align*}
$$

Both $\sum_{n=1}^{\infty} \left( \frac{1}{3} \right)^n$ and $\sum_{n=1}^{\infty} \left( \frac{e}{3} \right)^n$ are geometric series with common ratios less than 1. Therefore, the series converges.

*Problem 69:* Determine whether the series $\sum_{n=2}^{\infty} \frac{n + 2}{n^2 - 1}$ converges.

$$
\begin{align*}
a_n &= \frac{n + 2}{n^2 - 1} \\
&= \frac{n + 2}{(n-1)(n+1)}
\end{align*}
$$

Using partial fractions:
$$
\begin{align*}
\frac{n + 2}{(n-1)(n+1)} &= \frac{A}{n-1} + \frac{B}{n+1} \\
n + 2 &= A(n + 1) + B(n - 1)
\end{align*}
$$

Solving for $A$ and $B$:
$$
\begin{align*}
n + 2 &= A(n + 1) + B(n - 1) \\
&= An + A + Bn - B \\
n + 2 &= (A + B)n + (A - B)
\end{align*}
$$

Equating coefficients:
$$
\begin{align*}
A + B &= 1 \\
A - B &= 2
\end{align*}
$$

Solving the system:
$$
\begin{align*}
A + B &= 1 \\
A - B &= 2 \\
2A &= 3 \\
A &= \frac{3}{2} \\
B &= -\frac{1}{2}
\end{align*}
$$

Thus,
$$
\begin{align*}
\sum_{n=2}^{\infty} \left( \frac{\frac{3}{2}}{n-1} - \frac{\frac{1}{2}}{n+1} \right)
\end{align*}
$$

The series diverges because $\sum \frac{1}{n}$ diverges.

*Problem 70:* Determine whether the series $\sum_{n=1}^{\infty} \frac{n2^n}{3^n}$ converges.

$$
\begin{align*}
a_n &= \frac{n2^n}{3^n} \\
&= n \left( \frac{2}{3} \right)^n
\end{align*}
$$

Using the Ratio Test:
$$
\begin{align*}
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| &= \lim_{n \to \infty} \left| \frac{(n+1) \left( \frac{2}{3} \right)^{n+1}}{n \left( \frac{2}{3} \right)^n} \right| \\
&= \lim_{n \to \infty} \left| \frac{(n+1)}{n} \cdot \frac{2}{3} \right| \\
&= \frac{2}{3}
\end{align*}
$$

Since $\frac{2}{3} < 1$, the series converges.

*Problem 71:* Determine whether the series $\sum_{n=0}^{\infty} \frac{(0.1)^n}{n!}$ converges.

$$
\begin{align*}
\sum_{n=0}^{\infty} \frac{(0.1)^n}{n!} &= e^{0.1} \text{ (by the Maclaurin series for } e^x \text{)}
\end{align*}
$$

Thus, the series converges.
