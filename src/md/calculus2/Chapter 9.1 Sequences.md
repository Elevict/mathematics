---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 9.1 Sequences

## Sequences and Convergence

> [!definition] **Definition** (Sequence)
> A **sequence** is an ordered list of numbers, where each number is called a term. Sequences can be finite or infinite and are usually defined by a formula or a rule.

A sequence is defined as a function $a(n)$ where $n$ represents the position of the term in the sequence. For example, the sequence $a_n = 2n + 1$ is defined by the formula $a_n$ for each positive integer $n$.

> [!definition] **Definition** (Convergence of a Sequence)
> The sequence $s_{1}, s_{2}, s_{3}, \dots, s_{n}, \dots$ has a **limit $L$**, written ${} \lim_{n \to \infty} s_{n}= L {}$, if $s_{n}$ is as close to $L$ as we please whenever $n$ is sufficiently large. If a limit, $L$, exists, we say the sequence **converges** to its limit $L$. If no limit exists, we say the sequence **diverges**.

### Recursive Sequence

A **recursive sequence** is defined by a recurrence relation, which specifies each term in the sequence based on the previous terms. For example, the Fibonacci sequence is a recursive sequence defined as:

$$
F_n = F_{n-1} + F_{n-2}
$$

with initial terms $F_1 = 1$ and $F_2 = 1$.

### Bounded Sequence

> [!definition] **Definition** (Bounded Sequence)
> A sequence is **bounded** if there exists a real number $M$ such that every term in the sequence is less than or equal to $M$ in absolute value. In other words, a sequence $a_n$ is bounded if there exists a number $B$ such that $|a_n| \leq B$ for all $n$.

### Example

> [!example] **Example** (Sequence)
> Consider the sequence defined by $a_n = \frac{1}{n}$.
>
> - **Definition**: Each term is given by $a_n = \frac{1}{n}$.
> - **Convergence**: As $n$ approaches infinity, $a_n$ approaches 0. Hence, the sequence converges to 0.
> - **Bounded**: The sequence is bounded because $0 < a_n \leq 1$ for all $n$.
>
> Thus,
>
> $$
> \lim_{n \to \infty} \frac{1}{n} = 0
> $$
>
> and the sequence $\left\{ \frac{1}{n} \right\}$ is bounded.

## Problems

*Problem 1:* Find the first five terms of the sequence given by $s_n = 2n + 1$.

$$
\begin{align*}
s_1 &= 2(1) + 1 = 3 \\
s_2 &= 2(2) + 1 = 5 \\
s_3 &= 2(3) + 1 = 7 \\
s_4 &= 2(4) + 1 = 9 \\
s_5 &= 2(5) + 1 = 11
\end{align*}
$$

*Problem 2:* Find the first five terms of the sequence given by $s_n = n + (-1)^n$.

$$
\begin{align*}
s_1 &= 1 + (-1)^1 = 1 - 1 = 0 \\
s_2 &= 2 + (-1)^2 = 2 + 1 = 3 \\
s_3 &= 3 + (-1)^3 = 3 - 1 = 2 \\
s_4 &= 4 + (-1)^4 = 4 + 1 = 5 \\
s_5 &= 5 + (-1)^5 = 5 - 1 = 4
\end{align*}
$$

*Problem 3:* Find the first five terms of the sequence given by $s_n = \frac{2n}{2n + 1}$.

$$
\begin{align*}
s_1 &= \frac{2(1)}{2(1) + 1} = \frac{2}{3} \\
s_2 &= \frac{2(2)}{2(2) + 1} = \frac{4}{5} \\
s_3 &= \frac{2(3)}{2(3) + 1} = \frac{6}{7} \\
s_4 &= \frac{2(4)}{2(4) + 1} = \frac{8}{9} \\
s_5 &= \frac{2(5)}{2(5) + 1} = \frac{10}{11}
\end{align*}
$$

*Problem 4:* Find the first five terms of the sequence given by $s_n = (-1)^n \frac{1}{2} \left(\frac{1}{2}\right)^n$.

$$
\begin{align*}
s_1 &= (-1)^1 \frac{1}{2} \left(\frac{1}{2}\right)^1 = -\frac{1}{4} \\
s_2 &= (-1)^2 \frac{1}{2} \left(\frac{1}{2}\right)^2 = \frac{1}{8} \\
s_3 &= (-1)^3 \frac{1}{2} \left(\frac{1}{2}\right)^3 = -\frac{1}{16} \\
s_4 &= (-1)^4 \frac{1}{2} \left(\frac{1}{2}\right)^4 = \frac{1}{32} \\
s_5 &= (-1)^5 \frac{1}{2} \left(\frac{1}{2}\right)^5 = -\frac{1}{64}
\end{align*}
$$

*Problem 5:* Find the first five terms of the sequence given by $s_n = (-1)^{n+1} \left(\frac{1}{2}\right)^{n-1}$.

$$
\begin{align*}
s_1 &= (-1)^{1+1} \left(\frac{1}{2}\right)^{1-1} = 1 \\
s_2 &= (-1)^{2+1} \left(\frac{1}{2}\right)^{2-1} = -\frac{1}{2} \\
s_3 &= (-1)^{3+1} \left(\frac{1}{2}\right)^{3-1} = \frac{1}{4} \\
s_4 &= (-1)^{4+1} \left(\frac{1}{2}\right)^{4-1} = -\frac{1}{8} \\
s_5 &= (-1)^{5+1} \left(\frac{1}{2}\right)^{5-1} = \frac{1}{16}
\end{align*}
$$

*Problem 6:* Find the first five terms of the sequence given by $s_n = \left(1 - \frac{1}{n + 1}\right)^{n+1}$.

$$
\begin{align*}
s_1 &= \left(1 - \frac{1}{1 + 1}\right)^{1+1} = \left(1 - \frac{1}{2}\right)^2 = \frac{1}{4} \\
s_2 &= \left(1 - \frac{1}{2 + 1}\right)^{2+1} = \left(1 - \frac{1}{3}\right)^3 = \left(\frac{2}{3}\right)^3 = \frac{8}{27} \\
s_3 &= \left(1 - \frac{1}{3 + 1}\right)^{3+1} = \left(1 - \frac{1}{4}\right)^4 = \left(\frac{3}{4}\right)^4 = \frac{81}{256} \\
s_4 &= \left(1 - \frac{1}{4 + 1}\right)^{4+1} = \left(1 - \frac{1}{5}\right)^5 = \left(\frac{4}{5}\right)^5 = \frac{1024}{3125} \\
s_5 &= \left(1 - \frac{1}{5 + 1}\right)^{5+1} = \left(1 - \frac{1}{6}\right)^6 = \left(\frac{5}{6}\right)^6 = \frac{15625}{46656}
\end{align*}
$$

*Problem 7:* Find a formula for $s_n$ given the sequence $4, 8, 16, 32, 64, \dots$.

$$
s_n = 4 \cdot 2^{n-1}
$$

*Problem 8:* Find a formula for $s_n$ given the sequence $1, 3, 7, 15, 31, \dots$.

$$
s_n = 2^n - 1
$$

*Problem 9:* Find a formula for $s_n$ given the sequence $2, 5, 10, 17, 26, \dots$.

$$
s_n = n^2 + 1
$$

*Problem 10:* Find a formula for $s_n$ given the sequence $1, -3, 5, -7, 9, \dots$.

$$
s_n = (-1)^{n+1}(2n - 1)
$$

*Problem 11:* Find a formula for $s_n$ given the sequence $\frac{1}{3}, \frac{2}{5}, \frac{3}{7}, \frac{4}{9}, \frac{5}{11}, \dots$.

$$
s_n = \frac{n}{2n + 1}
$$

*Problem 12:* Find a formula for $s_n$ given the sequence $\frac{1}{2}, -\frac{1}{4}, \frac{1}{6}, -\frac{1}{8}, \frac{1}{10}, \dots$.

$$
s_n = \frac{(-1)^{n+1}}{2n}
$$
