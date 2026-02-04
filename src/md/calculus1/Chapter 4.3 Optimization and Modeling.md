---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 4.3 Optimization and Modeling

## Practical Tips for Modeling Optimization Problems

1. Make sure that you know what quantity or function is to be optimized.
2. If possible, make several sketches showing how the elements that vary are related. Label your sketches clearly by assigning variables to quantities which change.
3. Try to obtain a formula for the function to be optimized in terms of the variables that you identified in the previous step. If necessary, eliminate from this formula all but one variable. Identify the domain over which this variable varies.
4. Find the critical points and evaluate the function at these points and the endpoints (if relevant) to find the global maxima and∕or minima.

## Problems

> [!problem] **Problem** (Problem 1)
> The sum of two nonnegative numbers is 100. What is the maximum value of the product of these two numbers?

Let $x$ and $y$ be two nonnegative numbers, such that $x+y =100$

$$
\begin{align*}
P &= xy \\
y &= 100 - x \\
P &= x(100 - x) = 100x - x^2 \\
\frac{dP}{dx} &= 100 - 2x \\
\text{Set } \frac{dP}{dx} &= 0 \\
100 - 2x &= 0 \\
2x &= 100 \\
x &= 50 \\
y &= 100 - 50 = 50 \\
\text{Maximum product } P &= 50 \cdot 50 = 2500
\end{align*}
$$

> [!problem] **Problem** (Problem 2)
> The product of two positive numbers is 784. What is the minimum value of their sum?

Let $x$ and $y$ be the two positive numbers, such that $xy = 784$.

$$
\begin{align*}
S &= x + y \\
y &= \frac{784}{x} \\
S &= x + \frac{784}{x} \\
\frac{dS}{dx} &= 1 - \frac{784}{x^2} \\
\text{Set } \frac{dS}{dx} &= 0 \\
1 - \frac{784}{x^2} &= 0 \\
x^2 &= 784 \\
x &= \sqrt{784} = 28 \\
y &= \frac{784}{28} = 28 \\
\text{Minimum sum } S &= 28 + 28 = 56
\end{align*}
$$

> [!problem] **Problem** (Problem 3)
> The sum of two times one nonnegative number and five times another is 600. What is the maximum value of the product of these two numbers?

Let $x$ and $y$ be the two nonnegative numbers, such that $2x+5y=600$.

$$
\begin{align*}
P &= xy \\
y &= \frac{600 - 2x}{5} \\
P &= x \left(\frac{600 - 2x}{5}\right) = \frac{600x - 2x^2}{5} \\
\frac{dP}{dx} &= \frac{600 - 4x}{5} \\
\text{Set } \frac{dP}{dx} &= 0 \\
600 - 4x &= 0 \\
4x &= 600 \\
x &= 150 \\
y &= \frac{600 - 2(150)}{5} = \frac{600 - 300}{5} = 60 \\
\text{Maximum product } P &= 150 \cdot 60 = 9000
\end{align*}
$$

> [!problem] **Problem** (Problem 4)
> The sum of three nonnegative numbers is 36, and one of the numbers is twice one of the other numbers. What is the maximum value of the product of these three numbers?

Let $x$, $y$, and $z$ be the three nonnegative numbers, such that $x+y+z=36$ and $x=2y$.

$$
\begin{align*}
\text{Let } x &= 2y \\
2y + y + z &= 36 \\
3y + z &= 36 \\
z &= 36 - 3y \\
P &= xyz = 2y \cdot y \cdot (36 - 3y) = 2y^2 (36 - 3y) \\
P &= 72y^2 - 6y^3 \\
\frac{dP}{dy} &= 144y - 18y^2 \\
\text{Set } \frac{dP}{dy} &= 0 \\
144y - 18y^2 &= 0 \\
18y(8 - y) &= 0 \\
y &= 0 \text{ or } y = 8 \\
x &= 2(8) = 16 \\
z &= 36 - 3(8) = 12 \\
\text{Maximum product } P &= 16 \cdot 8 \cdot 12 = 1536
\end{align*}
$$

> [!problem] **Problem** (Problem 5)
> The perimeter of a rectangle is 64 cm. Find the lengths of the sides of the rectangle giving the maximum area.

Let $l$ and $w$ be the lengths of the sides of the rectangle, such that $2l + 2w = 64$.

$$
\begin{align*}
A &= lw \\
w &= \frac{64 - 2l}{2} = 32 - l \\
A &= l(32 - l) = 32l - l^2 \\
\frac{dA}{dl} &= 32 - 2l \\
\text{Set } \frac{dA}{dl} &= 0 \\
32 - 2l &= 0 \\
2l &= 32 \\
l &= 16 \\
w &= 32 - 16 = 16 \\
\text{Maximum area } A &= 16 \cdot 16 = 256
\end{align*}
$$

> [!problem] **Problem** (Problem 6)
> If you have 100 feet of fencing and want to enclose a rectangular area up against a long, straight wall, what is the largest area you can enclose?

Let $l$ and $w$ be the lengths of the sides of the rectangle, where one side is up against a wall, such that $2l+w=100$

$$
\begin{align*}
A &= lw \\
w &= 100 - 2l \\
A &= l(100 - 2l) = 100l - 2l^2 \\
\frac{dA}{dl} &= 100 - 4l \\
\text{Set } \frac{dA}{dl} &= 0 \\
100 - 4l &= 0 \\
4l &= 100 \\
l &= 25 \\
w &= 100 - 2(25) = 50 \\
\text{Maximum area } A &= 25 \cdot 50 = 1250
\end{align*}
$$


