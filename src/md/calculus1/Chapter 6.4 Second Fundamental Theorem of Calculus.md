---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 6.4 Second Fundamental Theorem of Calculus

> [!theorem] **Theorem** (Second Fundamental Theorem of Calculus)
> If $f$ is a continuous function on an interval, and if $a$ is any number in that interval, then the function $F$ defined on the interval as follows is an antiderivative of $f$:
>
> $$
> F(x) = \int_{a}^{x} f(t) \ dt
> $$

## Problems

> [!problem] **Problem** (Problem 4)
> Write an expression for the function $f(x)$ with the given properties: $f'(x) = \sin(x^2)$ and $f(0) = 7$.

$$
\begin{align*}
f(x) &= \int \sin(x^2) \, dx + C \\
f(0) &= 7 \\
\end{align*}
$$

Since the integral $\int \sin(x^2) \, dx$ does not have a simple closed form, we can denote the integral as $F(x)$.

$$
f(x) = F(x) + C
$$

Using the initial condition:

$$
\begin{align*}
f(0) &= F(0) + C = 7 \\
C &= 7
\end{align*}
$$

Thus,

$$
f(x) = F(x) + 7
$$

> [!problem] **Problem** (Problem 5)
> Write an expression for the function $f(x)$ with the given properties: $f'(x) = \frac{\sin x}{x}$ and $f(1) = 5$.

$$
\begin{align*}
f(x) &= \int \frac{\sin x}{x} \, dx + C \\
f(1) &= 5
\end{align*}
$$

Since the integral $\int \frac{\sin x}{x} \, dx$ is the Sine Integral function $\text{Si}(x)$:

$$
f(x) = \text{Si}(x) + C
$$

Using the initial condition:

$$
\begin{align*}
f(1) &= \text{Si}(1) + C = 5 \\
C &= 5 - \text{Si}(1)
\end{align*}
$$

Thus,

$$
f(x) = \text{Si}(x) + 5 - \text{Si}(1)
$$

> [!problem] **Problem** (Problem 6)
> Write an expression for the function $f(x)$ with the given properties: $f'(x) = \text{Si}(x)$ and $f(0) = 2$.

$$
\begin{align*}
f(x) &= \int \text{Si}(x) \, dx + C \\
f(0) &= 2
\end{align*}
$$

Using the initial condition:

$$
\begin{align*}
f(0) &= \int_0^0 \text{Si}(x) \, dx + C = 2 \\
C &= 2
\end{align*}
$$

Thus,

$$
f(x) = \int_0^x \text{Si}(t) \, dt + 2
$$

> [!question] **Question** (Problems 11-16)
> Find the derivatives in problems 11–16.

*Problem 11:* Find the derivative $\frac{d}{dx} \int_{0}^{x} \cos(t^2) \, dt$.

$$
\frac{d}{dx} \int_{0}^{x} \cos(t^2) \, dt = \cos(x^2)
$$

*Problem 12:* Find the derivative $\frac{d}{dt} \int_{4}^{t} \sin(\sqrt{x}) \, dx$.

$$
\frac{d}{dt} \int_{4}^{t} \sin(\sqrt{x}) \, dx = \sin(\sqrt{t})
$$

*Problem 13:* Find the derivative $\frac{d}{dx} \int_{1}^{x} (1 + t)^{200} \, dt$.

$$
\frac{d}{dx} \int_{1}^{x} (1 + t)^{200} \, dt = (1 + x)^{200}
$$

*Problem 14:* Find the derivative $\frac{d}{dx} \int_{2}^{x} \ln(t^2 + 1) \, dt$.

$$
\frac{d}{dx} \int_{2}^{x} \ln(t^2 + 1) \, dt = \ln(x^2 + 1)
$$

*Problem 15:* Find the derivative $\frac{d}{dx} \int_{0.5}^{x} \arctan(t^2) \, dt$.

$$
\frac{d}{dx} \int_{0.5}^{x} \arctan(t^2) \, dt = \arctan(x^2)
$$

*Problem 16:* Find the derivative $\frac{d}{dx} [\text{Si}(x^2)]$.

$$
\begin{align}
\frac{d}{dx} [\text{Si}(x^2)] &= \frac{d}{dx} \int_{0}^{a} \frac{\sin x^{2}}{x^{2}} \, dx  \\
&= \frac{d}{dx} \int_{0}^{a} \frac{\sin u}{u} \ du \cdot  \frac{du}{dx} \\
&= \frac{\sin x^{2}}{x^{2}} \cdot 2x \\
&= \frac{2\sin(x^2)}{x}
\end{align}
$$

