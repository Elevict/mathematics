---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.7 Implicit Functions

## Implicit Differentiation

Implicit differentiation is used to find the derivative of a function when it is not explicitly solved for one variable in terms of another. Given an equation $F(x, y) = 0$, we differentiate both sides with respect to $x$, applying the chain rule to terms involving $y$.

> [!example] **Example** (Implicit Differentiation of a Circle)
> Given the equation of a circle with radius 5 centered at the origin, we wish to differentiate it. Notice how $y$ and $x$ both use the **chain rule**, but in the case with functions of $x$ we have that they ultimately cancel out.
>
> $$
> \begin{align*}
> x^2 + y^2 &= 25 \\
> \frac{d}{dx}(x^2 + y^2) &= \frac{d}{dx}(25) \\
> 2x \frac{dx}{dx} + 2y \frac{dy}{dx} &= 0 \\
> 2x + 2y \frac{dy}{dx} &= 0 \\
> 2y \frac{dy}{dx} &= -2x \\
> \frac{dy}{dx} &= -\frac{x}{y}
> \end{align*}
> $$

## Problems

> [!question] **Question** (Problems 1-20)
> For problems 1–20, find $\frac{dy}{dx}$. Assume $a$, $b$, $c$ are constants.

*Problem 1*

$$
\begin{align*}
x^2 + y^2 &= \sqrt{7} \\
2x + 2y \frac{dy}{dx} &= 0 \\
\frac{dy}{dx} &= -\frac{x}{y}
\end{align*}
$$

*Problem 2*

$$
\begin{align*}
x^2 + y^3 &= 8 \\
2x + 3y^2 \frac{dy}{dx} &= 0 \\
\frac{dy}{dx} &= -\frac{2x}{3y^2}
\end{align*}
$$

*Problem 3*

$$
\begin{align*}
x^2 + xy - y^3 &= xy^2 \\
2x + y + x \frac{dy}{dx} - 3y^2 \frac{dy}{dx} &= y^2 + 2xy \frac{dy}{dx} \\
2x + y - y^{2}&= (2xy + 3y^2 - x) \frac{dy}{dx} \\
\frac{dy}{dx} &= \frac{2x + y - y^{2}}{2xy + 3y^2 - x}
\end{align*}
$$

*Problem 4*

$$
\begin{align*}
x^2 + y^2 + 3x - 5y &= 25 \\
2x + 2y \frac{dy}{dx} + 3 - 5 \frac{dy}{dx} &= 0 \\
2x + 3 &= (5 - 2y) \frac{dy}{dx} \\
\frac{dy}{dx} &= \frac{2x + 3}{-2y + 5}
\end{align*}
$$

*Problem 5*

$$
\begin{align*}
xy + x + y &= 5 \\
y + x \frac{dy}{dx} + 1 + \frac{dy}{dx} &= 0 \\
x \frac{dy}{dx} + \frac{dy}{dx} &= -y - 1 \\
(x + 1) \frac{dy}{dx} &= -y - 1 \\
\frac{dy}{dx} &= \frac{-y - 1}{x + 1}
\end{align*}
$$

*Problem 6*

$$
\begin{align*}
x^2 y - 2y + 5 &= 0 \\
2xy + x^2 \frac{dy}{dx} - 2 \frac{dy}{dx} &= 0 \\
(x^{2} - 2) \frac{dy}{dx} &= -2xy \\
\frac{dy}{dx} &= \frac{-2xy}{x^{2}-2}
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
x^2 y^3 - xy &= 6 \\
2xy^3 + 3x^2 y^2 \frac{dy}{dx} - y - x \frac{dy}{dx} &= 0 \\
3x^2 y^2 \frac{dy}{dx} - x \frac{dy}{dx} &= y - 2xy^3 \\
(3x^2 y^2 - x) \frac{dy}{dx} &= y - 2xy^3 \\
\frac{dy}{dx} &= \frac{y - 2xy^3}{3x^2 y^2 - x}
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
\sqrt{x} &= 5\sqrt{y} \\
\frac{1}{2\sqrt{x}} &= 5 \cdot \frac{1}{2\sqrt{y}} \frac{dy}{dx} \\
\frac{1}{\sqrt{x}} &= \frac{5}{\sqrt{y}} \frac{dy}{dx} \\
\frac{dy}{dx} &= \frac{\sqrt{y}}{5\sqrt{x}}
\end{align*}
$$

*Problem 9*

$$
\begin{align*}
\sqrt{x} + \sqrt{y} &= 25 \\
\frac{1}{2\sqrt{x}} + \frac{1}{2\sqrt{y}} \frac{dy}{dx} &= 0 \\
\frac{1}{\sqrt{y}} \frac{dy}{dx} &= -\frac{1}{\sqrt{x}} \\
\frac{dy}{dx} &= -\frac{\sqrt{y}}{\sqrt{x}}
\end{align*}
$$

*Problem 10*

$$
\begin{align*}
xy - x - 3y - 4 &= 0 \\
y + x \frac{dy}{dx} - 1 - 3 \frac{dy}{dx} &= 0 \\
x \frac{dy}{dx} - 3 \frac{dy}{dx} &= 1 - y \\
(x - 3) \frac{dy}{dx} &= 1 - y \\
\frac{dy}{dx} &= \frac{1 - y}{x - 3}
\end{align*}
$$

*Problem 11*

$$
\begin{align*}
6x^2 + 4y^2 &= 36 \\
12x + 8y \frac{dy}{dx} &= 0 \\
8y \frac{dy}{dx} &= -12x \\
\frac{dy}{dx} &= -\frac{12x}{8y} \\
\frac{dy}{dx} &= -\frac{3x}{2y}
\end{align*}
$$

*Problem 12*

$$
\begin{align*}
ax^2 - by^2 &= c^2 \\
2ax - 2by \frac{dy}{dx} &= 0 \\
2by \frac{dy}{dx} &= 2ax \\
\frac{dy}{dx} &= \frac{ax}{by}
\end{align*}
$$

*Problem 13*

$$
\begin{align*}
\ln x + \ln(y^2) &= 3 \\
\frac{1}{x} + \frac{2}{y} \frac{dy}{dx} &= 0 \\
\frac{2}{y} \frac{dy}{dx} &= -\frac{1}{x} \\
\frac{dy}{dx} &= -\frac{y}{2x}
\end{align*}
$$

*Problem 14*

$$
\begin{align*}
x \ln y + y^3 &= \ln x \\
\ln y + x \cdot \frac{1}{y} \frac{dy}{dx} + 3y^2 \frac{dy}{dx} &= \frac{1}{x} \\
\ln y + \left( \frac{x}{y} + 3y^2 \right) \frac{dy}{dx} &= \frac{1}{x} \\
\left( \frac{x}{y} + 3y^2 \right) \frac{dy}{dx} &= \frac{1}{x} - \ln y \\
\frac{dy}{dx} &= \frac{\frac{1}{x} - \ln y}{\frac{x}{y} + 3y^2}
\end{align*}
$$

*Problem 15*

$$
\begin{align*}
\sin(xy) &= 2x + 5 \\
\cos(xy) (x \frac{dy}{dx} + y) &= 2 + x \\
x \cos(xy) \frac{dy}{dx} &= 2 - y \cos(xy) \\
\frac{dy}{dx} &= \frac{2 - y \cos(xy)}{x \cos(xy)}
\end{align*}
$$

*Problem 16*

$$
\begin{align*}
e^{\cos y} &= x^3 \arctan y \\
-e^{\cos y} \sin y \frac{dy}{dx} &= 3x^2 \arctan y + \frac{x^3}{1 + y^2} \frac{dy}{dx} \\
-e^{\cos y} \sin y \frac{dy}{dx} - \frac{x^3}{1 + y^2} \frac{dy}{dx} &= 3x^2 \arctan y \\
\left(-e^{\cos y} \sin y - \frac{x^3}{1 + y^2}\right) \frac{dy}{dx} &= 3x^2 \arctan y \\
\frac{dy}{dx} &= \frac{3x^2 \arctan y}{-e^{\cos y} \sin y - \frac{x^3}{1 + y^2}}
\end{align*}
$$

*Problem 17*

$$
\begin{align*}
\arctan(x^2 y) &= xy^2 \\
\frac{1}{1 + (x^2 y)^

2} (2xy + x^2 \frac{dy}{dx}) &= y^2 + 2xy \frac{dy}{dx} \\
(2xy + x^2 \frac{dy}{dx}) &= (1 + (x^2 y)^2) (y^2 + 2xy \frac{dy}{dx}) \\
2xy + x^2 \frac{dy}{dx} &= (1 + x^4 y^2) y^2 + 2xy (1 + x^4 y^2) \frac{dy}{dx} \\
2xy + x^2 \frac{dy}{dx} &= y^2 + x^4 y^4 + 2xy \frac{dy}{dx} + 2x^5 y^3 \frac{dy}{dx} \\
x^2 \frac{dy}{dx} - 2xy \frac{dy}{dx} - 2x^5 y^3 \frac{dy}{dx} &= y^2 + x^4 y^4 - 2xy \\
\frac{dy}{dx} \left( x^2 - 2xy - 2x^5 y^3 \right) &= y^2 + x^4 y^4 - 2xy \\
\frac{dy}{dx} &= \frac{y^2 + x^4 y^4 - 2xy}{x^2 - 2xy - 2x^5 y^3}
\end{align*}
$$

*Problem 18*

$$
\begin{align*}
e^{x^2} + \ln y &= 0 \\
2xe^{x^2} + \frac{1}{y} \frac{dy}{dx} &= 0 \\
\frac{1}{y} \frac{dy}{dx} &= -2xe^{x^2} \\
\frac{dy}{dx} &= -2xye^{x^2}
\end{align*}
$$

*Problem 19*

$$
\begin{align*}
(x - a)^2 + y^2 &= a^2 \\
2(x - a) + 2y \frac{dy}{dx} &= 0 \\
2y \frac{dy}{dx} &= -2(x - a) \\
\frac{dy}{dx} &= -\frac{x - a}{y}
\end{align*}
$$

*Problem 20*

$$
\begin{align*}
x^{2/3} + y^{2/3} &= a^{2/3} \\
\frac{2}{3} x^{-1/3} + \frac{2}{3} y^{-1/3} \frac{dy}{dx} &= 0 \\
\frac{2}{3} y^{-1/3} \frac{dy}{dx} &= -\frac{2}{3} x^{-1/3} \\
\frac{dy}{dx} &= -\frac{x^{-1/3}}{y^{-1/3}} \\
\frac{dy}{dx} &= -\left( \frac{y}{x} \right)^{1/3}
\end{align*}
$$

