---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 9.5 Power Series and Interval of Convergence

> [!definition] **Definition** (Power Series)
> A **power series** about $x =  a$ is a sum of constants times powers of $(x-a)$:
>
> $$
> C_{0} + C_{1}(x-a) + C_{2}(x-a)^{2}+\dots+C_{n}(x-a)^{n} + \dots = \sum_{n=0}^{\infty} C_{n}(x-a)^{n}
> $$

> [!definition] **Definition** (Convergence of Power  Series)
> For a fixed value of $x$, if this sequence of partial sums converges to a limit $S$, that is, if $\lim_{n \to \infty} S_{n}(x) = S$, then we say that the power series converges  to $S$ for this particular value of  $x$.

> [!definition] **Definition** (Radius of Convergence)
> - The series converges only for $x=a$; the **radius of convergence** is defined to be $R = 0$.
> - The series converges for all values of $x$; the **radius of convergence** is defined to be $R = \infty$
> - There is a positive number $R$, called the **radius of convergence**, such that the series converges for $|x-a| < R$ and diverges for $|x-a| > R$.
> Using the radius of convergence, we make the following definition:
> - The **interval of convergence** is the interval between $a - R$ and $a + R$, including any endpoint where the series converges.

> [!theorem] **Theorem** (Computing Radius of Convergence)
> To calculate the radius of convergence, $R$, for the power series $\sum_{n=0}^{\infty} C_{n} (x-a)^{n}$, use the ratio test with $a_{n} = C_{n}(x-a)^{n}$.
>
> test with $a_{n} = C_{n}(x-a)^{n}$.
> - If $\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_{n}|}$ if infinite, then $R = 0$.
> - If $\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_{n}|} = 0$, then $R = \infty$
> - If $\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_{n}|} = K|x-a|$ where $K$ is finite and nonzero, then $R = 1/K$.

*Problem 11:* $\sum_{n=0}^{\infty} nx^n$

$$
\begin{align*}
a_n &= n \\
\frac{a_{n+1}}{a_n} &= \frac{n+1}{n} = 1 + \frac{1}{n} \\
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| &= 1
\end{align*}
$$

Using the ratio test, the radius of convergence $R = \frac{1}{1} = 1$.

*Problem 12:* $\sum_{n=0}^{\infty} (5x)^n$

$$
\begin{align*}
a_n &= (5x)^n \\
\frac{a_{n+1}}{a_n} &= \frac{(5x)^{n+1}}{(5x)^n} = 5x \\
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| &= |5x|
\end{align*}
$$

Using the ratio test, the radius of convergence $R = \frac{1}{5}$.

*Problem 13:* $\sum_{n=0}^{\infty} n^3 x^n$

$$
\begin{align*}
a_n &= n^3 \\
\frac{a_{n+1}}{a_n} &= \frac{(n+1)^3}{n^3} \\
&= \left(1 + \frac{1}{n}\right)^3 \\
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| &= 1
\end{align*}
$$

Using the ratio test, the radius of convergence $R = \frac{1}{1} = 1$.

*Problem 14:* $\sum_{n=0}^{\infty} (2n + n^2)x^n$

$$
\begin{align*}
a_n &= 2n + n^2 \\
\frac{a_{n+1}}{a_n} &= \frac{2(n+1) + (n+1)^2}{2n + n^2} \\
&= \frac{2n + 2 + n^2 + 2n + 1}{2n + n^2} \\
&= \frac{n^2 + 4n + 3}{n^2 + 2n} \\
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| &= 1
\end{align*}
$$

Using the ratio test, the radius of convergence $R = \frac{1}{1} = 1$.

*Problem 15:* $\sum_{n=0}^{\infty} \frac{(n+1)x^n}{2n + n}$

$$
\begin{align*}
a_n &= \frac{n+1}{2n+n} \\
\frac{a_{n+1}}{a_n} &= \frac{(n+2)/(2(n+1)+(n+1))}{(n+1)/(2n+n)} \\
&= \frac{(n+2)/(2n + 3)}{(n+1)/(2n+n)} \\
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| &= \frac{1}{2}
\end{align*}
$$

Using the ratio test, the radius of convergence $R = \frac{2}{1} = 2$.

*Problem 16:* $\sum_{n=1}^{\infty} \frac{2^n (x-1)^n}{n}$

$$
\begin{align*}
a_n &= \frac{2^n}{n} \\
\frac{a_{n+1}}{a_n} &= \frac{2^{n+1}/(n+1)}{2^n/n} \\
&= \frac{2 \cdot 2^n}{2^n} \cdot \frac{n}{n+1} \\
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| &= 2
\end{align*}
$$

Using the ratio test, the radius of convergence $R = \frac{1}{2}$.

*Problem 17:* $\sum_{n=1}^{\infty} \frac{(x-3)^n}{n \cdot 2^n}$

$$
\begin{align*}
a_n &= \frac{1}{n \cdot 2^n} \\
\frac{a_{n+1}}{a_n} &= \frac{1/((n+1) \cdot 2^{n+1})}{1/(n \cdot 2^n)} \\
&= \frac{n \cdot 2^n}{(n+1) \cdot 2^{n+1}} \\
&= \frac{n}{2(n+1)} \\
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| &= \frac{1}{2}
\end{align*}
$$

Using the ratio test, the radius of convergence $R = 2$.

*Problem 18:* $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$

$$
\begin{align*}
a_n &= \frac{(-1)^n}{(2n)!} \\
\frac{a_{n+1}}{a_n} &= \frac{(-1)^{n+1}/(2(n+1))!}{(-1)^n/(2n)!} \\
&= \frac{(-1)^{n+1}}{(2n+2)(2n+1)(2n)!} \cdot \frac{(2n)!}{(-1)^n} \\
&= \frac{-1}{(2n+2)(2n+1)} \\
\lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| &= 0
\end{align*}
$$

Using the ratio test, the radius of convergence $R = \infty$.
