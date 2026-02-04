---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 5.3 the Fundamental Theorem and Interpretations

## The Fundamental Theorem of Calculus

> [!theorem] **Theorem** (The Fundamental Theorem of Calculus)
> If $f$ is continuous on the interval $[a, b]$ and $f(t) = F'(t)$, then
>
> $$
> \int_{a}^{b} f(t) \ dt = F(b) - F(a).
> $$

In other words, to figure out the integral of some function you need to find its antiderivative and evaluate it at two different points.

## Problems

> [!problem] **Problem** (Problem 1)
> If $f(t)$ is measured in dollars per year and $t$ is measured in years, what are the units of $\int_{a}^{b} f(t) \ dt$?

$\int_{a}^{b} f(t) \ dt$ is total dollars.

> [!problem] **Problem** (Problem 2)
> If $f(t)$ is measured in meters/second${} ^{2} {}$ and $t$ is measured in seconds, what are the units of $\int_{a}^{b} f(x) \ dx$?

$\int_{a}^{b} f(t) \ dt$ is meters per second.

> [!problem] **Problem** (Problem 3)
> If $f(x)$ is measured in pounds and $x$ is measured in feet, what are the units of $\int_{a}^{b} f(x) \ dx$?

$\int_{a}^{b} f(t) \ dt$ is total pounds.

> [!question] **Question** (Problems 4-7)
> In problems 4–7, explain in words what the integral represents and give units.

> [!problem] **Problem** (Problem 4)
> $\int_{1}^{3} v(t) \ dt$, where $v(t)$ is velocity in meters/sec and $t$ is time in seconds.

$\int_{1}^{3} v(t) \ dt$ is total distance from $t=1$ to $t=3$.

> [!problem] **Problem** (Problem 5)
> $\int_{0}^{6} a(t) \ dt$, where $a(t)$ is acceleration in km/hr$^{2}$ at $t$ is time in hours.

$\int_{0}^{6} a(t) \ dt$ is km/hr from $t=0$ to $t=6$.

> [!problem] **Problem** (Problem 6)
> $\int_{2005}^{2011} f(t) \ dt$, where $f(t)$ is the rate at which world population is growing in year $t$, in billion people per year.

$\int_{2005}^{2011} f(t) \ dt$ is total population from 2005 to 2011.

> [!problem] **Problem** (Problem 7)
> $\int_{0}^{5} s(x) \ dx$, where $s(x)$ is rate of change of salinity in gm/liter per cm in sea water, and where $x$ is depth below the surface of the water in cm.

$\int_{0}^{5} s(x) \ dx$ is average salinity 5 feet down.

> [!question] **Question** (Problems 9-14)
> In problems 9–14, let $f(t) = F'(t)$. Write the integral $\int_{a}^{b} f(t) \ dt$ and evaluate it using the Fundamental Theorem of Calculus.

*Problem 9*

$$
\begin{align}
F(t) &= t^{2}; \ a=1, b=3 \\
\int_{1}^{3} 2t \ dt &= t^{2}|_{1}^{3} = 9 - 1 = 8
\end{align}
$$

*Problem 10*

$$
\begin{align}
F(t) &= 3t^2 + 4t; \ a=2, b=5 \\
\int_{2}^{5} (6t + 4) \ dt &= \left[ 3t^2 + 4t \right]_{2}^{5} \\
&= (75+20) - (12 + 8) \\
&= 63
\end{align}
$$

*Problem 11*

$$
\begin{align}
F(t) &= \ln t; \ a=1, b=5 \\
\int_{1}^{5} \frac{1}{t} \ dt &= \left[ \ln t \right]_{1}^{5} \\
&= \ln 5 - \ln 1 \\
&= \ln 5 - 0 \\
&= \ln 5
\end{align}
$$

*Problem 12*

$$
\begin{align}
F(t) &= \sin t; \ a=0, b=\frac{\pi}{2} \\
\int_{0}^{\frac{\pi}{2}} \cos t \ dt &= \left[ \sin t \right]_{0}^{\frac{\pi}{2}} \\
&= \sin \frac{\pi}{2} - \sin 0 \\
&= 1 - 0 \\
&= 1
\end{align}
$$

*Problem 13*

$$
\begin{align}
\int_{2}^{3} 7 \cdot 4^t \ln 4 \ dt &= \left[ 7 \cdot 4^t \right]_{2}^{3} \\
&= 7 \cdot 4^3 - 7 \cdot 4^2 \\
&= 7 \cdot 64 - 7 \cdot 16 \\
&= 448 - 112 \\
&= 336
\end{align}
$$

*Problem 14*

$$
\begin{align}
F(t) &= \tan t; \ a=-\frac{\pi}{4}, b=\frac{\pi}{4} \\
\int_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \sec^2 t \ dt &= \left[ \tan t \right]_{-\frac{\pi}{4}}^{\frac{\pi}{4}} \\
&= \tan \frac{\pi}{4} - \tan \left( -\frac{\pi}{4} \right) \\
&= 1 - (-1) \\
&= 1 + 1 \\
&= 2
\end{align}
$$

