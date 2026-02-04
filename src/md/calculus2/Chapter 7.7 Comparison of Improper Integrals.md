---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 7.7 Comparison of Improper Integrals

## The Comparison Test

> [!theorem] **Theorem** (The Comparison Test for $\int_{a}^{\infty} f(x) \, dx$)
> Assume $f(x)$ is positive. Making a comparison involves two stages:
> 1. Guess, by looking at the behavior of the integrand for large $x$, whether the integral converges or not. (This is the "behaves like" principle.)
> 2. Confirm the guess by comparison with a positive function $g(x)$:
> - If $f(x) \leq g(x)$ and $\int_{a}^{\infty} g(x) \, dx$ converges, then $\int_{a}^{\infty} f(x) \, dx$
> - If $g(x) \leq f(x)$ and $\int_{a}^{\infty} g(x) \, dx$ diverges, then $\int_{a}^{\infty} f(x) \, dx$ diverges.

> [!corollary] **Corollary** (Useful Integrals for Comparison)
> - $\int_{1}^{\infty} \frac{1}{x^{p}} \, dx$ converges for $p > 1$ and diverges for $p \leq 1$.
> - $\int_{0}^{1} \frac{1}{x^{p}} \, dx$ converges for $p < 1$ and diverges for $p \geq 1$.
> - $\int_{0}^{\infty} e^{-ax} \, dx$ converges for $a > 0$.

> [!corollary] **Corollary** (Changing Limits of Integration)
> If $f$ is positive and continuous on $[a, b]$,
>
> $$
> \int_{a}^{\infty} f(x) \, dx \text{ and } \int_{b}^{\infty} f(x) \, dx 
> $$
>
> either both converge or both diverge.

## Problems

*Problem 1:* $\int_{1}^{\infty} \frac{x^2}{x^4 + 1} \, dx$

The integrand behaves like $\frac{1}{x^2}$ as $x \to \infty$. Since $\int_{1}^{\infty} \frac{1}{x^2} \, dx$ converges, the integral $\int_{1}^{\infty} \frac{x^2}{x^4 + 1} \, dx$ converges.

*Problem 2:* $\int_{2}^{\infty} \frac{x^3}{x^4 - 1} \, dx$

The integrand behaves like $\frac{1}{x}$ as $x \to \infty$. Since $\int_{2}^{\infty} \frac{1}{x} \, dx$ diverges, the integral $\int_{2}^{\infty} \frac{x^3}{x^4 - 1} \, dx$ diverges.

*Problem 3:* $\int_{1}^{\infty} \frac{x^2 + 1}{x^3 + 3x + 2} \, dx$

The integrand behaves like $\frac{1}{x}$ as $x \to \infty$. Since $\int_{1}^{\infty} \frac{1}{x} \, dx$ diverges, the integral $\int_{1}^{\infty} \frac{x^2 + 1}{x^3 + 3x + 2} \, dx$ diverges.

*Problem 4:* $\int_{1}^{\infty} \frac{1}{x^2 + 5x + 1} \, dx$

The integrand behaves like $\frac{1}{x^2}$ as $x \to \infty$. Since $\int_{1}^{\infty} \frac{1}{x^2} \, dx$ converges, the integral $\int_{1}^{\infty} \frac{1}{x^2 + 5x + 1} \, dx$ converges.

*Problem 5:* $\int_{1}^{\infty} \frac{x}{x^2 + 2x + 4} \, dx$

The integrand behaves like $\frac{1}{x}$ as $x \to \infty$. Since $\int_{1}^{\infty} \frac{1}{x} \, dx$ diverges, the integral $\int_{1}^{\infty} \frac{x}{x^2 + 2x + 4} \, dx$ diverges.

*Problem 6:* $\int_{1}^{\infty} \frac{x^2 - 6x + 1}{x^2 + 4} \, dx$

The integrand behaves like $\frac{x^2}{x^2}$ as $x \to \infty$, which simplifies to $1$. Since $\int_{1}^{\infty} 1 \, dx$ diverges, the integral $\int_{1}^{\infty} \frac{x^2 - 6x + 1}{x^2 + 4} \, dx$ diverges.

*Problem 7:* $\int_{1}^{\infty} \frac{5x + 2}{x^4 + 8x^2 + 4} \, dx$

The integrand behaves like $\frac{5x}{x^4}$ as $x \to \infty$, which simplifies to $\frac{5}{x^3}$. Since $\int_{1}^{\infty} \frac{5}{x^3} \, dx$ converges, the integral $\int_{1}^{\infty} \frac{5x + 2}{x^4 + 8x^2 + 4} \, dx$ converges.

*Problem 8:* $\int_{1}^{\infty} \frac{1}{e^{5t} + 2} \, dt$

The integrand behaves like $\frac{1}{e^{5t}}$ as $t \to \infty$. Since $\int_{1}^{\infty} \frac{1}{e^{5t}} \, dt$ converges, the integral $\int_{1}^{\infty} \frac{1}{e^{5t} + 2} \, dt$ converges.
