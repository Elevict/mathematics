---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 5.2 the Definite Integral

## Riemann Sums and Definite Integrals

> [!definition] **Definition** (Definite Integral)
> Suppose $f$ is continuous for $a \leq t < b$. The **definite integral** of $f$ from $a$ to $b$, written
>
> $$
> \int_{a}^{b} f(t) dt,
> $$
>
> is the limit of the left-hand or right-hand sums with $n$ subdivisions of $a \leq t \leq b$ as $n$ gets arbitrarily large, that is, as $\Delta t \to 0$. In other words,
>
> $$
> \int_{a}^{b} f(t) dt = \lim_{n \to \infty} \text{(Left-hand sum)}= \lim_{n \to \infty} \left( \sum_{i=0}^{n-1} f(t_{i}) \Delta t \right) 
> $$
>
> and
>
> $$
> \int_{a}^{b} f(t) dt = \lim_{n \to \infty} \text{(Left-hand sum)} = \lim_{n \to \infty} \left( \sum_{i=1}^{n} f(t_{i}) \Delta t \right) 
> $$
>
> Each of these  sums is called a *Riemann sum*, and $f$ is called the *integrand*, and $a$ and $b$ are called the *limits of integration*.

> [!corollary] **Corollary** (Definite Integral as an Area)
> When $f(x) \geq 0$ and $a < b$:
>
> Area under graph of $f$ and above $x$-axis between $a$ and $b$ is exactly
>
> $$
> \int_{a}^{b} f(x) dx.
> $$

> [!corollary] **Corollary** (Extended Notion of the Definite Integral as an Area)
> When $f(x)$ is positive for some $x$ values and negatives for others, and $a < b:$
> $\int_{a}^{b} f(x) dx$ is the sum of areas above the $x$-axis, counted positively, and areas below the $x$-axis, counted negatively.

> [!definition] **Definition** (Riemann Sum)
> A general Riemann sum for $f$ on the interval $[a, b]$ is a sum of the form
>
> $$
> \sum_{i=1}^{n} f(c_{i}) \Delta t_{i},
> $$
>
> where $a = t_{0} < t_{1} < \dots < t_{n} = b$, and, for $i = 1, \dots, n$, $\Delta t_{i} = t_{i-1}$, and $t_{i-1} \leq c_{i} \leq t_{i}$.

# Problems

> [!question] **Question** (Problems 60-65)
> In problems 60–65, the limit is either a right-hand or left-hand Riemann sum $\sum f(t_{i})\Delta t$. For the given choice of $t_{i}$, write the limit as a definite integral.

*Problem 60*

$$
\lim_{n \to \infty} \sum_{i=1}^{n} \left( \frac{i}{n} \right)^{2}\left( \frac{i}{n} \right) = \int_{0}^{1} t^{2} dt
$$

*Problem 61*

$$
\lim_{n \to \infty} \sum_{i=0}^{n-1} 2\left( \frac{3i}{n} \right)\left( \frac{3}{n} \right) = \int_{0}^{3} 2t \ dt
$$

*Problem 62*

$$
\lim_{n \to \infty} \sum_{i=0}^{n-1} \left( \frac{1}{n} \right) e^{1+i/n} = \int_{1}^{2} e^{t} \ dt
$$

*Problem 63*

$$
\lim_{n \to \infty} \sum_{i=1}^{n} \left( 7\left( \frac{i}{2n} \right)^{2}+3 \right)\left( \frac{i}{2n} \right) = \int_{0}^{1/2} 7t^{2} + 3 \ dt 
$$

*Problem 64*

$$
\lim_{n \to \infty} \sum_{i=0}^{n-1} 5\cos\left( \frac{\pi i}{n} \right)\left( \frac{\pi}{n} \right) = \int^{\pi}_{0}\cos(t) \ dt
$$

*Problem 65*

$$
\lim_{n \to \infty}  \sum_{i=1}^{n} \frac{2}{n}\sqrt{\left( 1+\frac{3i}{n} \right)^{2} + \left( 1+\frac{3i}{n} \right)} = \int_{1}^{3} \sqrt{t^{2}+t}
$$

