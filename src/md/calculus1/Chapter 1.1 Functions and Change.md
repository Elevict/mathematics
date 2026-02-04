---
tags:
  - mathematics/single_and_multivariable_calculus
layout: base.njk
---
# Chapter 1.1 Functions and Change

## Functions

> [!definition] **Definition** (Function)
> A function is a rule that takes certain numbers as inputs and assigns to each a definite output number. The set of all input numbers is called the domain of the function and the set of resulting output numbers is called the range of the function.

> [!example] **Example** (Chirp Rate)
> The function $C = f(T)$ gives chirp rate as a function of temperature. We restrict this function to temperatures for which the predicted chirp rate is positive, and up to the highest temperature ever recorded at a weather station, 136F. What is the domain of this function $f$?
>
> *Solution*
> If we consider the equation
>
> $$
> C = 4T − 160
> $$
>
> simply as a mathematical relationship between two variables $C$ and $T$, any $T$ value is possible. However, if we think of it as a relationship between cricket chirps and temperature, then C cannot be less than 0. Since C = 0 leads to 0 = 4T − 160, and so T = 40◦F, we see that T cannot be less than 40F. In addition, we are told that the function is not defined for temperatures above 136. Thus, for the function $C = f(T)$ we have
>
> $$
> \begin{align}
> \text{Domain} &= \text{All } T \text{ values between } 40 \text{ and } 136 \\
> &= \text{All } T \text{ values with } 40 \leq T \leq 136 \\
> &= [40, 136].
> \end{align}
> $$

## Linear Functions

We use the symbol Δ (the Greek letter capital delta) to mean “change in,” so Δ$x$ means change in $x$ and Δ$y$ means change in $y$.

> [!definition] **Definition** (Difference Quotient)
> The slope of a linear function $y = f(x)$ can be calculated from values of the function at two points, given by $x_{1}$ and $x_{2}$ using the following formula
>
> $$
> m = \frac{\text{rise}}{\text{run}} = \frac{\Delta y}{\Delta x} = \frac{f(x_{2})-f(x_{1})}{x_{2}-x_{1}}
> $$
>
> The quantity $(f (x_{2}) − f (x_{1}))/(x_{2} − x_{1})$ is called a difference quotient because it is the quotient of two differences. Since $m=\Delta y/\Delta x$, the units of $m$ are $y$-units over $x$-units.

> [!definition] **Definition** (Linear Function)
> A **linear function** has the form
>
> $$
> y = f(x) = b + mx
> $$
>
> Its graph is a line such that
> - $m$ is the **slope**, or rate of change of $y$ with respect to $x$.
> - $b$ is the **vertical intercept**, or value of $y$ when $x$ is zero.

## Increasing and Decreasing Functions

> [!definition] **Definition** (Increasing and Decreasing Functions)
> A function $f$ is **increasing** if the values of $f(x)$ increase as $x$ increases.
> A function $f$ is **decreasing** if the values of $f(x)$ decrease as $x$ increases.
>
> The graph of an *increasing* function *climbs* as we move from left to right.
> The graph of a *decreasing* function *falls* as we move from left to right.
>
> A function $f(x)$ is monotonic if it increases for all $x$ or decreases for all $x$.

## Proportionality

A common functional relationship occurs when one quantity is proportional to another. For example, the area A of a circle is proportional to the square of a radius, $r$, because

$$
A = f(r) = \pi r^2
$$

> [!definition] **Definition** (Constant of Proportionality)
> We say $y$ is (directly) proportional to $x$ if there is a nonzero constant $k$ such that
>
> $$
> y=kx.
> $$
>
> This $k$ is called the constant of proportionality.

## Problems

> [!question] **Exercises 4-7**
> For Exercises 4-7, find an equation for the line that passes through the given points.

> [!problem] **Exercise 4**
> $(0, 0)$ and $(1, 1)$

From $(0, 0)$ and $(1, 1)$, we have that $m = 1$,

$$
\begin{align*}
y-y_{1}&=m(x-x_{1})\\
y-1&=1(x-1)\\
y&=x
\end{align*}
$$

> [!problem] **Exercise 5**
> ${} (0, 2)$ and $(2, 3)$

From $(0, 2)$ and $(2, 3)$, we have that $m = \frac{1}{2}$,

$$
\begin{align*}
y-3 &=\frac{1}{2}(x-2)\\
y-2 &=\frac{1}{2}x-1\\
y &= \frac{1}{2}x + 2
\end{align*}
$$

> [!problem] **Exercise 6**
> $(-2, 1)$ and $(2, 3)$

From $(-2, 1)$ and $(2, 3)$, we have that $m = \frac{1}{2}$,

$$
\begin{align*}
y-3 &= \frac{1}{2}(x-2) \\
y-3 &= \frac{1}{2}x - 1 \\
y &= \frac{1}{2}x + 2
\end{align*}
$$

> [!problem] **Exercise 7**
> $(-1, 0)$ and $(2, 6)$

From $(-1, 0)$ and $(2, 6)$, we have that $m = 2$,

$$
\begin{align*}
y-6 &= 2(x-2)\\
y-6 &= 2x-4\\
y &= 2x+2
\end{align*}
$$

> [!question] **Exercises 8-11**
> For exercises 8 - 11, determine the slope and the y-intercept of the line whose equation is given.

> [!problem] **Exercise 8**
> $2y + 5x - 8 = 0$

$$
\begin{align*}
2y &= -5x + 8\\
y &= \frac{5}{2x} + 4\\
m &= 4 \ \text{  and } \  y_{int} = 4
\end{align*}
$$

> [!problem] **Exercise 9**
> $7y = -12x - 2$

$$
\begin{align*}
7y &= -12x - 2\\
y &= -\frac{12}{7}x - \frac{2}{7}\\
m &=\frac{12}{7} \ \text{  and  } \ y_{int}=-\frac{2}{7}
\end{align*}
$$

> [!problem] **Exercise 10**
> $-4y + 2x + 8 = 0$

$$
\begin{align*}
-4y &= -2x-8\\
y &= \frac{1}{2}x +2\\
m &= \frac{1}{2} \ \text{ and } \ y_{int} = 2
\end{align*}
$$

> [!problem] **Exercise 11**
> $12x = 6y + 4$

$$
\begin{align*}
6y &=12x-4\\
y &=2x-\frac{2}{3}\\
m &=2 \ \text{ and } \ y_{int}=-\frac{2}{3}
\end{align*}
$$
