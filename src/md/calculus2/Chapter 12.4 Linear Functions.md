---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 12.4 Linear Functions

## Linear Functions

> [!theorem] **Theorem** (Equation of a Plane)
> If a **plane** has slope $m$ in the $x$-direction, has slope $n$ in the $y$-direction, and passes through the point $(x_{0}, y_{0}, z_{0})$, then its equation is
>
> $$
> z = z_{0} + m(x-z_{0}) + n(y-y_{0})
> $$
>
> This plane is the graph of the **linear function**
>
> $$
> f(x,y) = z_{0} + m(x-x_{0}) + n(y-y_{0})
> $$
>
> If we write $c = z_{0} - mx_{0} - ny_{0}$, then we can write $f(x, y)$ in the equivalent form
>
> $$
> f(x, y) = c + mx + ny
> $$

> [!definition] **Definition** (Linear Function Features)
> A **linear function** can be recognized from its table by the following features:
> - Each row and each column is linear.
> - All the rows have the same slope.
> - All the columns have the same slope.

## Problems

*Problem 7:* Find the equation of the linear function $z = c + mx + ny$ whose graph contains the points $(0, 0, 0)$, $(0, 2, -1)$, and $(-3, 0, -4)$.

$$
\begin{align*}
\text{Let } z &= c + mx + ny. \\
\text{For } (0, 0, 0): &\quad 0 = c. \\
\text{For } (0, 2, -1): &\quad -1 = 2n \implies n = -\frac{1}{2}. \\
\text{For } (-3, 0, -4): &\quad -4 = -3m \implies m = \frac{4}{3}. \\
\text{Thus, } z &= \frac{4}{3}x - \frac{1}{2}y.
\end{align*}
$$

*Problem 8:* Find the linear function whose graph is the plane through the points $(4, 0, 0)$, $(0, 3, 0)$, and $(0, 0, 2)$.

$$
\begin{align*}
\text{The general plane equation is } z &= c + mx + ny. \\
\text{For } (4, 0, 0): &\quad 0 = c + 4m. \\
\text{For } (0, 3, 0): &\quad 0 = c + 3n. \\
\text{For } (0, 0, 2): &\quad 2 = c. \\
\text{Thus, } c &= 2, \, 2 = 4m \implies m = \frac{1}{2}, \, 2 = 3n \implies n = \frac{2}{3}. \\
\text{The equation of the plane is } z &= 2 + \frac{1}{2}x + \frac{2}{3}y.
\end{align*}
$$

*Problem 9:* Find an equation for the plane containing the line in the $xy$-plane where $y = 1$, and the line in the $xz$-plane where $z = 2$.

$$
\begin{align*}
\text{The plane contains } y = 1 \text{ and } z = 2. \\
\text{The plane equation is } z &= c + mx + ny. \\
\text{For } y = 1: &\quad z = c + mx + n. \\
\text{For } z = 2: &\quad 2 = c + mx. \\
\text{Thus, } c &= 2 \text{ and } n = -2. \\
\text{The equation of the plane is } z &= 2 - 2y.
\end{align*}
$$

*Problem 10:* Find the equation of the linear function $z = c + mx + ny$ whose graph intersects the $xz$-plane in the line $z = 3x + 4$ and intersects the $yz$-plane in the line $z = y + 4$.

$$
\begin{align*}
\text{For } z = 3x + 4: &\quad c = 4, m = 3, n = 0. \\
\text{For } z = y + 4: &\quad n = 1. \\
\text{Thus, } z &= 3x + y + 4.
\end{align*}
$$

*Problem 11:* Suppose that $z$ is a linear function of $x$ and $y$ with slope 2 in the $x$-direction and slope 3 in the $y$-direction.
(a) A change of 0.5 in $x$ and -0.2 in $y$ produces what change in $z$?

$$
\begin{align*}
\text{Change in } z &= 2 \cdot 0.5 + 3 \cdot (-0.2) \\
&= 1 - 0.6 \\
&= 0.4
\end{align*}
$$

(b) If $z = 2$ when $x = 5$ and $y = 7$, what is the value of $z$ when $x = 4.9$ and $y = 7.2$?

$$
\begin{align*}
\text{Change in } z &= 2 \cdot (-0.1) + 3 \cdot 0.2 \\
&= -0.2 + 0.6 \\
&= 0.4 \\
\text{Thus, } z &= 2 + 0.4 \\
&= 2.4
\end{align*}
$$

*Problem 12:* Find a formula for the linear function whose graph is a plane passing through point $(4, 3, -2)$ with slope 5 in the $x$-direction and slope -3 in the $y$-direction.

$$
\begin{align*}
\text{The plane equation is } z &= c + mx + ny. \\
\text{For } (4, 3, -2): &\quad -2 = c + 5 \cdot 4 - 3 \cdot 3 \\
&= c + 20 - 9 \\
&= c + 11 \\
&c = -13 \\
\text{Thus, } z &= -13 + 5x - 3y
\end{align*}
$$