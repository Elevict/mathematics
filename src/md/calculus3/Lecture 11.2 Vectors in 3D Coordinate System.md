---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 11.2 Vectors in 3D Coordinate System

## Vectors in Three Dimensions

The three dimensional coordinate grid is oriented as follows. To designate a point you use three ordered pairs which each designate the $x$, $y$, and $z$ coordinate. The coordinate point shown below is $(-4, 2, 7)$.
![[Lecture 11.2 Vectors in 3D Coordinate System 2024-08-16 19.32.43.excalidraw|center|300]]

## Formulas in Three Dimensions

Our formulas extend in an obvious manner in three dimensions. For example, the distance formula for two points $P_{1}$ and $P_{2}$ is:

> [!definition] **Definition** (Distance in $\mathbb{R}^{3}$)
> $$
> d(P_{1}, P_{2}) = \sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}+(z_{2}-z_{1})^{2}}
> $$

A midpoint between two points is located in the following coordinate:

> [!definition] **Definition** (Midpoint in $\mathbb{R}^{3}$)
> $$
> \left( \frac{x_{1}+x_{2}}{2}, \frac{y_{1}+y_{2}}{2}, \frac{z_{1}+z_{2}}{2} \right)
> $$

Our circles from our $xy$ plane now extend into spheres in the 3D coordinate system. A sphere of radius $r$ centered at $(h, k, l)$ is written as
$$
(x-h)^{2} + (y-k)^{2} + (z-l)^{2} = r^{2}
$$

Likewise, we may come across a complicated equation. In such a case, we can simplify it into an expression we can understand using completing the square.
$$
\begin{align}
2x^{2}+2y^{2}+2z^{2}-6x-4y+2z-1&=0 \\
2x^{2}+2y^{2}+2z^{2}-6x-4y+2z&=1 \\
x^{2}+y^{2}+z^{2}-3x-2y+z&=\frac{1}{2} \\
(x^{2}-3x) + (y^{2}-2y) + (z^{2}+z) &= \frac{1}{2} \\
\left(x^{2}-3x+\frac{9}{4} \right) + (y^{2}-2y+1) + \left( z^{2}+z+\frac{1}{4} \right) &= \frac{1}{2} + \frac{9}{4} + 1 + \frac{1}{4} \\
\left( x-\frac{3}{2} \right)^{2} + (y-1)^{2} + \left( z+\frac{1}{2} \right)^{2} &= 4
\end{align}
$$
And it turns out that this ends up being a sphere centered at $\left( \frac{3}{2}, 1, -\frac{1}{2} \right)$ with a radius of 2.

> [!example] **Example** (Find the Equation of a Sphere)
> Find equation of a sphere where $A(2, -3, 4)$ and $B(3, 2, 1)$ are at opposite ends of a diameter.

To do this, we find the midpoint of $A$ and $B$
$$
\text{Midpoint: } \left( \frac{2+3}{2}, \frac{-3+2}{2}, \frac{4+1}{2} \right) = \left( \frac{5}{2}, -\frac{1}{2}, \frac{5}{2} \right)
$$
This is where our sphere is centered. Now we find the distance between the our points $A$ and $B$. To do this, lets first compute the vector between the two and take its magnitude.

$$
\begin{align}
\vec{AB} &= \sqrt{(2-3)^{2}+(-3-2)^{2}+(4-1)^{2}} \\
&= \sqrt{1 + 25 + 9} \\
&= \sqrt{35}
\end{align}
$$

Now since these are on opposite ends, we take half of the distance. So our radius would then be $\frac{1}{2}\sqrt{35}$. And finally, the equation would be
$$
\left( x-\frac{5}{2} \right) + \left( y+\frac{1}{2} \right) + \left( z - \frac{5}{2} \right) = \frac{35}{4}
$$

## Vectors in Three Dimensions

For a position vector, our vector can be represented in the following ways
$$
\begin{align}
\vec{v} = \langle v_{1}, v_{2}, v_{3} \rangle \text{ or } \vec{v} = v_{1}\hat{i}+v_{2}\hat{j}+v_{3}\hat{k}
\end{align}
$$
And likewise the magnitude of our vector is
$$
\lVert \vec{v} \rVert = \sqrt{v_{1}^{2}+v_{2}^{2}+v_{3}^{2}}
$$
Finally, to figure out if two vectors are parallel you can only determine it if they are constant multiples of one another.

