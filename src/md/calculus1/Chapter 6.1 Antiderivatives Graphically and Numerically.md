---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# 6.1 Antiderivatives Graphically and Numerically

> [!definition] **Definition** (Family of Antiderivatives)
> An antiderivative of a function $f$ is a function $F$ such that $F' = f$. For instance, $x^2$ is an antiderivative of $2x$ since $\frac{d}{dx}(x^2) = 2x$. Antiderivatives of $2x$ include $x^2 + C$, where $C$ is any constant.

**Visualizing Antiderivatives Using Slopes**
To sketch $f$ from $f'$:
- Where $f'$ is positive, $f$ increases.
- Where $f'$ is negative, $f$ decreases.
- The concavity of $f$ depends on whether $f'$ is increasing or decreasing.

> [!example] **Example** (Antiderivatives)
> Given $f'(x) = e^{-x^2}$ and $F(0) = 0$, sketch $F(x)$.
> Since $f'(x)$ is always positive and decreasing for $x > 0$, $F(x)$ is always increasing, concave up for negative $x$, and concave down for positive $x$.

