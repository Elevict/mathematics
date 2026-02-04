---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 11.3 Using the Dot Product

## Definition of the Dot Product

The dot product adds the products of corresponding components of two vectors and it gives a scalar.

> [!definition] **Definition** (Dot Product)
> The [[dot product]] with $\vec{a} = \langle a_{1}, a_{2}, \dots, a_{n} \rangle$ and $\vec{b} = \langle b_{1}, b_{2}, \dots, b_{n} \rangle$ is defined as the following:
>
> $$
> \vec{a} \cdot \vec{b} = (a_{1})(b_{1}) + (a_{2})(b_{2}) + \dots + (a_{n})(b_{n})
> $$

Given $\vec{v}$ and $\vec{w}$, compute ${} \vec{v} \cdot \vec{w} {}$

$$
\vec{v} = 2\hat{i}-3\hat{j}+\hat{k}, \quad \vec{w}=-\hat{i}+2\hat{j}-2\hat{k}
$$

$$
\begin{align}
\vec{v} \cdot  \vec{w} &= (2)(-1) + (-3)(2) + (1)(-2) \\
&= -2-6-2 \\
&=-10
\end{align}
$$

## Algebraic Properties

Here are some interesting properties of the dot product:

$$
\vec{v} \cdot  \vec{w} = \vec{w} \cdot  \vec{v}
$$

$$
\vec{v} \cdot  (\vec{u} + \vec{w}) = \vec{v} \cdot  \vec{u} + \vec{v} \cdot \vec{w}
$$

$$
(c\vec{v}) \cdot \vec{w} = c(\vec{v} \cdot  \vec{w}) = \vec{v} \cdot  (c\vec{w})
$$

$$
\vec{0} \cdot \vec{v} = 0
$$

And perhaps the most useful one of them all:

> [!theorem] **Theorem** (Magnitude in terms of the Dot Product)
>
> $$
> \lVert \vec{v} \rVert = \sqrt{\vec{v} \cdot  \vec{v}}
> $$

*Proof*

$$
\begin{align}
\vec{v} \cdot \vec{v} &= \langle v_{1}, v_{2}, v_{3} \rangle \cdot  \langle v_{1}, v_{2}, v_{3} \rangle \\
&= v_{1}^{2} + v_{2}^{2} + v_{3}^{2} \\
&= (\sqrt{v_{1}^{2} + v_{2}^{2} + v_{3}^{2}})^{2} \\
&= \lVert \vec{v} \rVert^{2}
\end{align}
$$

$$
\tag*{\(\blacksquare\)}
$$

## Geometric Properties

First, before we define what the dot product means geometrically we have to revisit the law of cosines. You can think of the law of cosines as an extension of the Pythagorean theorem, except this time for any triangle that is not a right triangle. The law is as follows

$$
a^{2} = b^{2} + c^{2} - 2bc\cos(\theta)
$$

We can rewrite it as follows, where $\vec{v}$ is the vector designating $c$, $\vec{w}$ is the vector designating $b$. Therefore we have that our side length $a$ is vector $\vec{v} - \vec{w}$. We can convert our equation above in terms of vectors.

$$
\lVert \vec{v}-\vec{w} \rVert ^{2} = \lVert \vec{w} \rVert ^{2} + \lVert \vec{v} \rVert ^{2} - 2\lVert \vec{w} \rVert \lVert \vec{v} \rVert \cos \theta
$$

Now convert it in terms of dot products. Lets do the left side first:

$$
\begin{align}
\lVert \vec{v}-\vec{w} \rVert ^{2} &= (\vec{v} - \vec{w}) \cdot  (\vec{v} - \vec{w}) \\
&= \vec{v} \cdot  \vec{v} - 2\vec{v} \cdot \vec{w} + \vec{w} \cdot  \vec{w} \\
&= \lVert w \rVert^{2} + \lVert \vec{v} \rVert ^{2 } - 2\vec{v}\cdot \vec{w}
\end{align}
$$

And from this left side, we can cancel it with the right side of our equation. The result is the following.

> [!definition] **Definition** (Geometric Definition of the Dot Product)
>
> $$
> \vec{v} \cdot \vec{w} = \lVert \vec{v} \rVert \lVert \vec{w} \rVert \cos \theta
> $$

And likewise, you can figure out the angle between any two vectors just by solving for cosine here.

> [!theorem] **Theorem** (Angle Between Two Vectors)
>
> $$
> \cos \theta = \frac{\vec{v} \cdot  \vec{w}}{\lVert \vec{v} \rVert \lVert \vec{w} \rVert }
> $$

This leads us into another interesting property. Note that the dot product can only equal $0$ if one of the two vectors is the zero vector, or if they are perpendicular. This is because cosine becomes 0. Therefore, we have the following theorem:

> [!theorem] **Theorem** (Dot Product of Perpendicular Vectors)
> If $\vec{v} \cdot \vec{w} = 0$ and $\vec{v} \neq \vec{0}$ and $\vec{w} \neq \vec{0}$ then $\vec{v}$ and $\vec{w}$ are orthogonal. Orthogonal is another word for perpendicular, except it refers to two objects forming a right angle instead of two lines.

## Projections and Work

The vector that $\vec{v}$ creates in the direction of $\vec{w}$ is called vector projection and is denoted as $\text{Proj}_{\vec{w}}\vec{v}$. The magnitude of that projection is called the scalar or component projection denoted as $\text{Comp}_{\vec{w}}\vec{v}$.

There are two formulas for $\text{Comp}_{\vec{w}}\vec{v}$

$$
\begin{align}
\text{Comp}_{\vec{w}}\vec{v} &= \lVert \vec{v} \cos \theta\rVert  \\
\text{Comp}_{\vec{w}}\vec{v} &= \frac{\vec{v} \cdot \vec{w}}{\lVert \vec{w} \rVert }
\end{align}
$$

And likewise, we just need to add a direction to find the projection $\text{Proj}_{\vec{w}}\vec{v}$

$$
\begin{align}
\text{Proj}_{\vec{w}}\vec{v} &= \text{Comp}_{\vec{w}}\vec{v} \cdot  \frac{\vec{w}}{\lVert \vec{w} \rVert } \\
&= \frac{\vec{v} \cdot  \vec{w}}{\lVert \vec{w} \rVert } \cdot  \frac{\vec{w}}{\lVert \vec{w} \rVert } \\
&= (\frac{\vec{v} \cdot  \vec{w}}{\lVert \vec{w} \rVert^{2} })\vec{w}
\end{align}
$$

Now this leads us into a physic definition for work, which is critical for understanding what energy is. It is defined as follows:

> [!definition] **Definition** (Work)
> The component of a force $\vec{F}$ along a directed path, $\vec{d}$ has the work defined as
>
> $$
> \begin{align}
> W &= \lVert \vec{F} \rVert \lVert \vec{d} \rVert  \cos \theta \\
> &= \vec{F} \cdot  \vec{d}
> \end{align}
> $$

## Direction Cosines

The direction angles of a vector defined in $\mathbb{R}^{3}$ space. There are three of them, which are $\alpha, \beta, \gamma$. They are defined as follows

![[Lecture 11.3 Using the Dot Product 2024-08-17 00.39.54.excalidraw|center]]
And so we can compute them using the dot product below:

$$
\begin{align}
\cos(\alpha) &= \frac{\vec{v} \cdot  \hat{i}}{\lVert \vec{v} \rVert \lVert \hat{i} \rVert } = \frac{v_{1}}{\lVert \vec{v} \rVert } \\
\cos(\beta) &= \frac{v_{2}}{\lVert \vec{v} \rVert } \\
\cos( \gamma) &= \frac{v_{3}}{\lVert \vec{v} \rVert }
\end{align}
$$

Finally, we have a very nifty identity from the direction cosines.

$$
\cos^{2} \alpha + \cos^{2} \beta + \cos^{2} \gamma = 1
$$

which you can easily see is the case if you expand the equation from the left side.

