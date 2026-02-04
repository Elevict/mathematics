---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 7.5 Numerical Methods for Definite Integrals

## Numerical Integration Techniques

### Left/Right Riemann Sums

**Left Riemann Sum**: Approximates the area under a curve using the left endpoints of subintervals.

$$
\text{Left Riemann Sum} = \sum_{i=0}^{n-1} f(x_i) \Delta x
$$

**Right Riemann Sum**: Approximates the area under a curve using the right endpoints of subintervals.

$$
\text{Right Riemann Sum} = \sum_{i=1}^{n} f(x_i) \Delta x
$$

> [!example] **Example** (Riemann Sums)
> Evaluate $\int_{0}^{2} x^2 \, dx$ using 4 subintervals.
>
> - $\Delta x = \frac{2-0}{4} = 0.5$
> - Left endpoints: $0, 0.5, 1, 1.5$
> - Right endpoints: $0.5, 1, 1.5, 2$
>
> **Left Riemann Sum**:
>
> $$
> \sum_{i=0}^{3} f(x_i) \Delta x = (0^2 + 0.5^2 + 1^2 + 1.5^2) \cdot 0.5 = (0 + 0.25 + 1 + 2.25) \cdot 0.5 = 1.75
> $$
>
> **Right Riemann Sum**:
>
> $$
> \sum_{i=1}^{4} f(x_i) \Delta x = (0.5^2 + 1^2 + 1.5^2 + 2^2) \cdot 0.5 = (0.25 + 1 + 2.25 + 4) \cdot 0.5 = 3.75
> $$

### Midpoint Rule

**Midpoint Rule**: Uses the midpoints of subintervals for a better approximation.

$$
\text{Midpoint Rule} = \sum_{i=0}^{n-1} f\left( \frac{x_i + x_{i+1}}{2} \right) \Delta x
$$

> [!example] **Example** (Midpoint Rule)
> Evaluate $\int_{0}^{2} x^2 \, dx$ using 4 subintervals.
>
> - $\Delta x = 0.5$
> - Midpoints: $0.25, 0.75, 1.25, 1.75$
>
> $$
> \sum_{i=0}^{3} f\left( \frac{x_i + x_{i+1}}{2} \right) \Delta x = (0.25^2 + 0.75^2 + 1.25^2 + 1.75^2) \cdot 0.5 = (0.0625 + 0.5625 + 1.5625 + 3.0625) \cdot 0.5 = 2.625
> $$

### Trapezoidal Rule

**Trapezoidal Rule**: Approximates the area by summing up the areas of trapezoids.

$$
\text{Trapezoidal Rule} = \frac{\Delta x}{2} \left[ f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n) \right]
$$

> [!example] **Example** (Trapezoidal Rule)
> Evaluate $\int_{0}^{2} x^2 \, dx$ using 4 subintervals.
>
> - $\Delta x = 0.5$
> - Endpoints: $0, 0.5, 1, 1.5, 2$
>
> $$
> \frac{0.5}{2} \left[ 0^2 + 2(0.5^2 + 1^2 + 1.5^2) + 2^2 \right] = 0.25 \left[ 0 + 2(0.25 + 1 + 2.25) + 4 \right] = 0.25 \left[ 0 + 6.5 + 4 \right] = 2.625
> $$

### Simpson's Rule

**Simpson's Rule**: Uses parabolic segments for a more accurate approximation.

$$
\text{Simpson's Rule} = \frac{\Delta x}{3} \left[ f(x_0) + 4\sum_{i=1,3,5,\ldots}^{n-1} f(x_i) + 2\sum_{i=2,4,6,\ldots}^{n-2} f(x_i) + f(x_n) \right]
$$

> [!example] **Example** (Simpson's Rule)
> Evaluate $\int_{0}^{2} x^2 \, dx$ using 4 subintervals.
>
> - $\Delta x = 0.5$
> - Endpoints: $0, 0.5, 1, 1.5, 2$
>
> $$
> \frac{0.5}{3} \left[ 0^2 + 4(0.5^2 + 1.5^2) + 2(1^2) + 2^2 \right] = \frac{0.5}{3} \left[ 0 + 4(0.25 + 2.25) + 2(1) + 4 \right]
> $$
>
> $$
> = \frac{0.5}{3} \left[ 0 + 4(2.5) + 2 + 4 \right] = \frac{0.5}{3} \left[ 10 + 2 + 4 \right] = \frac{0.5}{3} \cdot 16 = \frac{8}{3} = 2.6667
> $$
