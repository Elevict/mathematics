---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 4.8 Parametric Equations

## Parametric Equations for a Straight line

> [!theorem] **Theorem** (Parametric Equations for a Straight Line)
> An object moving along a line through the point $(x_{0}, y_{0})$ with $\frac{dx}{dt}=a$ and $\frac{dy}{dt} = b$, has parametric equations
>
> $$
> x = x_{0} + at, \quad y = y_{0} + bt
> $$
>
> The slope of the line is $m = \frac{b}{a}$.

## Parametric Derivatives and Formula

> [!definition] **Definition** (Instantaneous Speed)
> The **instantaneous speed** of a moving object is defined to be
>
> $$
> \text{Speed} = \sqrt{\left( \frac{dx}{dt} \right)^{2}+ \left( \frac{dy}{dt} \right)^{2}}
> $$
>
> The quantity $v_{x} = \frac{dx}{dt}$ is **instantaneous velocity** in the $x$-direction; $v_{y} = \frac{dy}{dt}$ is the **instantaneous velocity** in the $y$-direction. The **velocity vector** $\vec{v}$ is written $\vec{v} = v_{x}\vec{i} + v_{y}\vec{j}$.

> [!theorem] **Theorem** (Slope of Parametric Curve)
> Suppose the curve traces out by the parametric equations is represented by $y = h(x)$. Thinking of $x$ and $y$ as functions of $t$, the chain rule gives
>
> $$
> \frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}
> $$
>
> so we obtain the slope of the curve as a function of $t$:
>
> $$
> \text{Slope of curve} = \frac{dy/dt}{dx/dt}
> $$

> [!theorem] **Theorem** (Second Derivative of Parametric Curve)
> To find the second derivative, you use the following equation,
>
> $$
> \frac{d^{2}y}{dx^{2}} = \frac{d}{dt}\left( \frac{dy}{dx} \right)
> / \frac{dx}{dt}.
> $$

# Problems

> [!question] **Question** (Problems 5-11)
> In problems 5–11, write a parameterization for the curves in the 𝑥𝑦-plane.

> [!problem] **Problem** (Problem 5)
> A circle of radius 3 centered at the origin and traced out clockwise.

$$
\begin{cases}
x = 3\cos(t) \\
y = 3\sin(t)
\end{cases}
$$

> [!problem] **Problem** (Problem 6)
> A vertical line through the point (−2, −3).

$$
\begin{cases}
x = -2 \\
y = t
\end{cases}
$$

> [!problem] **Problem** (Problem 7)
> A circle of radius 5 centered at the point (2, 1) and traced out counterclockwise.

$$
\begin{cases}
x = -5\cos(t) + 2 \\
y = -5\sin(t) + 1
\end{cases}
$$

> [!problem] **Problem** (Problem 8)
> A circle of radius 2 centered at the origin traced clock-wise starting from (−2, 0) when 𝑡 = 0.

$$
\begin{cases}
x = 2\cos(t) - 5 \\
y = 2\sin(t)
\end{cases}
$$

> [!problem] **Problem** (Problem 9)
> The line through the points (2, −1) and (1, 3).

$$
\begin{cases}
x = t \\
y = -4t + 7
\end{cases}
$$

> [!problem] **Problem** (Problem 10)
> An ellipse centered at the origin and crossing the 𝑥-axis at ±5 and the 𝑦-axis at ±7.

$$
\begin{cases}
x = 5 \cos(t) \\
y = 7\sin(t)
\end{cases}
$$

> [!problem] **Problem** (Problem 11)
> An ellipse centered at the origin, crossing the 𝑥-axis at ±3 and the 𝑦-axis at ±7. Start at the point (−3, 0) and trace out the ellipse counterclockwise.

$$
\begin{cases}
x = -3\cos(t) \\
y = -7\sin(t)
\end{cases}
$$

> [!question] **Question** (Problems 12-17)
> Problems 12–17 give parameterizations of the unit circle or a part of it. Describe in words how the circle is traced out, including when and where the particle is moving clockwise and when and where the particle is moving counterclock-wise.

> [!problem] **Problem** (Problem 12)
>
> $$
> x = \sin(t), \quad y = \cos(t)
> $$

Counterclockwise starting from $(1, 0)$, with radius 1 centered at the origin.

> [!problem] **Problem** (Problem 13)
>
> $$
> x = \cos(t), \quad y = -\sin(t)
> $$

Clockwise starting from $(1, 0)$ with radius 1 centered at origin.

> [!problem] **Problem** (Problem 14)
>
> $$
> x = \cos(t^{2}), \quad y = \sin(t^{2})
> $$

Counterclockwise starting from $(1, 0)$, with radius 1 centered at origin but traced faster.

> [!problem] **Problem** (Problem 15)
>
> $$
> x = \cos(t^{3}-t), \quad y = \sin(t^{3}-t)
> $$

Clockwise and then turns counter-clockwise eventually.

> [!problem] **Problem** (Problem 16)
>
> $$
> x = \cos(\ln(t)), \quad y = \sin(\ln(t))
> $$

Counterclockwise starting from $(1, 0)$, with a radius of 1.

> [!problem] **Problem** (Problem 17)
>
> $$
> x = \cos(\cos(t)), \quad y = \sin(\cos(t))
> $$

Clockwise then counterclockwise over and over again.

> [!question] **Question** (Problems 18-20)
> In problems 18–20, what curves do the parametric equations trace out? Find the equation for each curve.

> [!problem] **Problem** (Problem 18)
>
> $$
> x = 2 + \cos(t), \quad y = 2 - \sin(t)
> $$

$$
\begin{align}
\begin{cases}
x = 2 + \cos(t) \\
y = 2 - \sin(t)
\end{cases}

& = \begin{cases}
\cos(t) = x-2 \\
-\sin(t) = y - 2
\end{cases} \\ \\
& = \begin{cases}
\cos^{2}(t) = (x-2)^{2}\\
\sin^{2}(t) = (y-2)
^{2}\end{cases} \\
& = \cos^{2}(t) + \sin^{^{2}}(t) = (y-2)^{2}+(x-2)^{2} \\
1 & = (y-2)^{2}+(x-2)^{2}
\end{align}
$$

> [!problem] **Problem** (Problem 19)
>
> $$
> x = 2 + \cos(t), \quad y = 2 - \cos(t)
> $$

$$
\begin{align}
\begin{cases}
x = 2+\cos(t) \\
y = 2 - \sin(t)
\end{cases}
&=\begin{cases}
x - 2= \cos(t) \\
y - 2= - \sin(t)
\end{cases} \\
&=\begin{cases}
\cos^{2}(t) = (x-2)^{2} \\
\sin^{2}(t) = (y-2)^{2}
\end{cases} \\
\cos^{2}(t) + \sin^{2}(t) &= (y-2)
^{2} + (x-2)^{2} \\
1 &= (y-2)^{2} + (x-2)^{2}
\end{align}
$$

> [!problem] **Problem** (Problem 20)
>
> $$
> x = 2 + \cos(t), \quad y = \cos^{2}(t)
> $$

$$
\begin{align}
\begin{cases}
x = 2+\cos(t) \\
y = \cos^{2}(t)
\end{cases}
&=\begin{cases}
x - 2= \cos(t) \\
y = \cos^{2}(t)
\end{cases} \\
&=\begin{cases}
x-2 = \cos(t) \\
\sqrt{y} = \cos(t)
\end{cases} \\
\sqrt{y} &= x-2 \\
y &= (x-2)^{2} \quad \quad 1 \leq x \leq 3
\end{align}
$$


