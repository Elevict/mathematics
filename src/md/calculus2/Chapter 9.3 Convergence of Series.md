---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 9.3 Convergence of Series

## Series Convergence

> [!definition] **Definition** (Convergence of Partial Sums)
> If sequence $S_{n}$ of partial sums converges to $S$, so $\lim_{n \to \infty} S_{n} = S$, then we say the series $\sum_{n=1}^{\infty} a_{n}$ **converges** and that its sum is $S$. We write $\sum_{n=1}^{\infty} a_{n} = S$. If $\lim_{n \to \infty} S_{n}$ does not exist, we say that the series **diverges**.

> [!theorem] **Theorem** (Convergence Properties of Series)
> 1. If $\sum_{n=1}^{\infty} a_{n}$ and $\sum_{n=1}^{\infty} b_{n}$ converge and if $k$ is a constant, then
> - $\sum_{n=1}^{\infty} (a_{n} + b_{n})$ converges to $\sum_{n=1}^{\infty} a_{n} + \sum_{n=1}^{\infty} b_{n}$.
> - $\sum_{n=1}^{\infty} ka_{n}$ converges to $k \sum_{n=1}^{\infty} a_{n}$.
>
> 2. Changing a finite number of terms in a series does not change whether or not it converges, although it may change the value of its sum if it does converge.
> 3. If $\lim_{n \to \infty} a_{n} \neq 0$ or $\lim_{n \to \infty} a_{n}$ does not exist, then $\sum_{n=1}^{\infty} a_{n}$ diverges.
> 4. If $\sum_{n=1}^{\infty} a_{n}$ diverges, then $\sum_{n=1}$

> [!theorem] **Theorem** (The Integral Test)
> Suppose $a_{n} = f(n)$, where $f(x)$ is decreasing and positive.
> - If $\int_{1}^{\infty} f(x) \, dx$ converges, then $\sum a_{n}$ converges.
> - If $\int_{1}^{\infty} f(x) \, dx$ diverges, then $\sum a_{n}$ diverges.

> [!definition] **Definition** (The p-series)
> The $p-$series $\sum_{n=1}^{\infty} \frac{1}{n^{p}}$ converges if $p > 1$ and diverges if $p \leq 1$.

## Problems

> [!question] **Question** (Problems 13-32)
> In Problems 13–32, does the series converge or diverge?

*Problem 13:*

$$
\sum_{n=0}^{\infty} \frac{3}{n + 2}
$$

To determine convergence, compare this to the integral:

$$
\int_{2}^{\infty} \frac{3}{x} \, dx
$$

Evaluating the integral:

$$
\int_{2}^{\infty} \frac{3}{x} \, dx = 3 \left[ \ln x \right]_{2}^{\infty} = \infty
$$

Since the integral diverges, the series also diverges.

*Problem 15:*

$$
\sum_{n=0}^{\infty} \frac{2}{\sqrt{2 + n}}
$$

To determine convergence, compare this to the integral:

$$
\int_{0}^{\infty} \frac{2}{\sqrt{2 + x}} \, dx
$$

Evaluating the integral:

$$
\int_{0}^{\infty} \frac{2}{\sqrt{2 + x}} \, dx = 2 \left[ 2 \sqrt{2 + x} \right]_{0}^{\infty} = \infty
$$

Since the integral diverges, the series also diverges.

*Problem 17:*

$$
\sum_{n=0}^{\infty} \frac{2^n}{(1 + n^2)^2}
$$

To determine convergence, compare this to the integral:

$$
\int_{0}^{\infty} \frac{2^x}{(1 + x^2)^2} \, dx
$$

Evaluating the integral:

$$
\text{Use the comparison test: } \frac{2^x}{(1 + x^2)^2} \text{ is dominated by } \frac{2^x}{x^4} \text{ as } x \to \infty.
$$

$$
\int_{0}^{\infty} \frac{2^x}{x^4} \, dx \text{ converges.}
$$

Since the integral converges, the series converges by comparison.

*Problem 19:*

$$
\sum_{n=1}^{\infty} \frac{3}{(2n - 1)^2}
$$

To determine convergence, compare this to the integral:

$$
\int_{1}^{\infty} \frac{3}{(2x - 1)^2} \, dx
$$

Evaluating the integral:

$$
\int_{1}^{\infty} \frac{3}{(2x - 1)^2} \, dx = \frac{3}{2} \left[ -\frac{1}{2x - 1} \right]_{1}^{\infty} = \frac{3}{2}
$$

Since the integral converges, the series converges by comparison.

*Problem 21:*

$$
\sum_{n=0}^{\infty} \frac{3}{n^2 + 4}
$$

To determine convergence, compare this to the integral:

$$
\int_{0}^{\infty} \frac{3}{x^2 + 4} \, dx
$$

Evaluating the integral:

$$
\int_{0}^{\infty} \frac{3}{x^2 + 4} \, dx = \frac{3}{2} \left[ \arctan \left( \frac{x}{2} \right) \right]_{0}^{\infty} = \frac{3\pi}{4}
$$

Since the integral converges, the series converges by comparison.

*Problem 23:*

$$
\sum_{n=1}^{\infty} \frac{n}{n + 1}
$$

To determine convergence, compare this to the integral:

$$
\int_{1}^{\infty} \frac{x}{x + 1} \, dx
$$

Evaluating the integral:

$$
\int_{1}^{\infty} \frac{x}{x + 1} \, dx = \int_{1}^{\infty} \left( 1 - \frac{1}{x + 1} \right) \, dx = \left[ x - \ln(x + 1) \right]_{1}^{\infty} = \infty
$$

Since the integral diverges, the series also diverges.

*Problem 25:*

$$
\sum_{n=1}^{\infty} \left( \frac{1}{2^n} + \frac{2}{3^n} \right)
$$

To determine convergence, compare this to the integral:

$$
\int_{1}^{\infty} \left( \frac{1}{2^x} + \frac{2}{3^x} \right) \, dx
$$

Evaluating the integral:

$$
\int_{1}^{\infty} \frac{1}{2^x} \, dx + \int_{1}^{\infty} \frac{2}{3^x} \, dx = \left[ -\frac{1}{\ln 2} \cdot \frac{1}{2^x} \right]_{1}^{\infty} + \frac{2}{\ln 3} \left[ -\frac{1}{3^x} \right]_{1}^{\infty} = \frac{1}{\ln 2} + \frac{2}{\ln 3}
$$

Since the integral converges, the series converges by comparison.

*Problem 27:*

$$
\sum_{n=1}^{\infty} \frac{n + 2n}{n^3}
$$

To determine convergence, compare this to the integral:

$$
\int_{1}^{\infty} \frac{3x}{x^3} \, dx
$$

Evaluating the integral:

$$
\int_{1}^{\infty} \frac{3x}{x^3} \, dx = \int_{1}^{\infty} \frac{3}{x^2} \, dx = \left[ -\frac{3}{x} \right]_{1}^{\infty} = 3
$$

Since the integral converges, the series converges by comparison.

*Problem 29:*

$$
\sum_{n=1}^{\infty} \frac{1}{n(1 + \ln n)}
$$

To determine convergence, compare this to the integral:

$$
\int_{1}^{\infty} \frac{1}{x \ln x} \, dx
$$

Evaluating the integral:

$$
\int_{1}^{\infty} \frac{1}{x \ln x} \, dx = \ln(\ln x) \Big|_{1}^{\infty} = \infty
$$

Since the integral diverges, the series also diverges.

*Problem 31:*

$$
\sum_{n=0}^{\infty} \frac{1}{n^2 + 2n + 2}
$$

To determine convergence, compare this to the integral:

$$
\int_{0}^{\infty} \frac{1}{x^2 + 2x + 2} \, dx
$$

Evaluating the integral:

$$
\text{Complete the square: } x^2 + 2x + 2 = (x + 1)^2 + 1
$$

$$
\int_{0}^{\infty} \frac{1}{(x + 1)^2 + 1} \, dx = \left[ \arctan(x + 1) \right]_{0}^{\infty} = \frac{\pi}{2}
$$

Since the integral converges, the series converges by comparison.