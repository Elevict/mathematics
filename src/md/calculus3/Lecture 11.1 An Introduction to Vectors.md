---
tags:
  - mathematics/single_and_multivariable_calculus
---
## Definition of a Vector

**Vectors** - Have both a speed (magnitude) and a direction (On a coordinate system).

- [[vector|Vectors]] can be multiplied by constants (Called scalars)
	- Can change length of a vector.
	- Can reverse direction of a vector.
- Vectors can be added together or subtracted together

Note: If two vectors are scalar multiples of one another, that means they have the same direction. This means the two vectors are parallel to one another.
## Addition and Subtraction of Vectors

When adding vectors, you add them component-wise. Geometrically speaking, addition of vectors go from tip-to-tail. The subtraction of a vector inverts its direction in space.

> [!definition] **Definition** (Position Vector)
> A vector $\vec{v}$ with an initial point at the origin and a terminal point at $P(v_{1}, v_{2})$ is called a **position vector** of $P(v_{1}, v_{2})$ and is denoted by $\langle v_{1}, v_{2} \rangle$.

Suppose you have two points $P_{1}(x_{1}, y_{1})$ and $P_{2}(x_{2}, y_{2})$, how would we find a vector between these two points?
$$
\begin{align}
\vec{v} = {P_{1}P_{2}} = \langle x_{2}-x_{1},\ y_{2}-y_{1} \rangle \\

\end{align}
$$

## Magnitude of Vectors

> [!definition] **Definition** (Magnitude of a Vector)
> For a vector $\vec{v} \in \mathbb{R}^{n}$, the magnitude of that vector is the following formula.
> $$
> \lVert \vec{v} \rVert = \sqrt{v_{1}^{2} + v_{2}^{2} + \dots v_{n}^{2}}
> $$

The slope of any position vector is just the components of the vector itself. Say $\vec{P} = \langle x, y \rangle$, then the slope is simply $\frac{y}{x}$ in this case.

## Scalar Multiplication

> [!definition] **Definition** (Scalar Multiplication)
> Let $c$ be a scalar, and $\vec{a}$ a vector. Then you can do scalar multiplication in the following manner component by component.
> $$
> c\vec{a} = c \langle x_{a}, y_{a} \rangle = \langle cx_{a}, cy_{a} \rangle 
> $$

## Unit Vectors

> [!definition] **Definition** (Unit Vector)
> A unit vector is a vector of length 1. To find a unit vector given a vector $v \in \mathbb{R}^{n}$, all you need to do is the following
> $$
> \hat{u} = \frac{\vec{v}}{\lVert \vec{v} \rVert }
> $$

Note that the notation-wise, we use a hat symbol over a vector whenever it has the property that it has a length of 1.

> [!example] **Example** (Finding a Unit Vector)
> Given the vector $\vec{v} = \langle -\sqrt{3}, 1 \rangle$ find the unit vector.
> $$
> \begin{align}
> \lVert \vec{v} \rVert &= \sqrt{(-\sqrt{3})^{2} + (1)^{2}} \\
> &= \sqrt{3 + 1} \\
> &= 2 \\ \\
> \hat{u} &= \frac{\vec{v}}{\lVert \vec{v} \rVert } \\
> \hat{u} &= \left\langle  -\frac{\sqrt{3}}{2}, \frac{1}{2}  \right\rangle  \\
> \hat{u} &= \frac{1}{2}\langle -\sqrt{3}, 1 \rangle
> \end{align}
> $$

## Standard Basis Vectors

> [!definition] **Definition** (Standard Basis Vectors)
> A standard basis vector is a unit vector that plays a part in decomposing the components of the vector. For example, on the plane we have two special unit vectors.
> $$
> \begin{align}
> \hat{i} &= \langle 1, 0 \rangle \\
> \hat{j} &= \langle 0, 1 \rangle 
> \end{align}
> $$

Now check out what happens when we decide to decompose a random vector $\vec{v}$ using what we have learnt thus far.

$$
\begin{align}
\vec{v} &= \langle v_{1}, v_{2} \rangle = \langle v_{1}, 0 \rangle + \langle 0, v_{2} \rangle  \\
&= v_{1} \langle 1, 0 \rangle + v_{2} \langle 0, 1 \rangle  \\
 &= v_{1}\hat{i} + v_{2}\hat{j}
\end{align}
$$
In other words, any vector on the plane can be written as two numbers multiplied by the basis vectors.

> [!example] **Example** (Vector Calculations)
> Let our vectors for our calculations be the following:
> $$\vec{a} = \langle 3, -2 \rangle, \quad \vec{b} = \langle 9, -6 \rangle, \quad \vec{c} = \left\langle  -\frac{3}{2}, 1  \right\rangle$$

Now, lets write each of these vectors in terms of their standard basis vectors:
$$
\begin{align}
\vec{a}=3\hat{i}-2\hat{j} \\
\vec{b}=9\hat{i}-6\hat{j} \\
\vec{c}=-\frac{3}{2}\hat{i}+\hat{j}
\end{align}
$$
And lets also find the slope for each of the vectors:
$$
\begin{align}
m_{\vec{a}} &= -\frac{2}{3} \\
m_{\vec{b}} &= -\frac{6}{9} = -\frac{2}{3} \\
m_{\vec{c}} &= \frac{1}{\frac{3}{2}} = -\frac{2}{3}
\end{align}
$$
Note that all our slopes are the same. This means that all of our vectors are parallel to one another. This tells us that if all the vectors have the same exact unit vector, then they are all parallel. They only differ by a constant as we can see above.

To make this more verbose, we say that if all vectors are **scalar multiples** of one another, then they are parallel to one another. To prove this point, we find all the vectors unit vectors.

$$
\begin{align}
\frac{\vec{a}}{\lVert \vec{a} \rVert} &= \frac{\langle 3, -2 \rangle}{\sqrt{13}} \\
\frac{\vec{b}}{\lVert \vec{b} \rVert } &= \frac{\langle 9, -6 \rangle}{\sqrt{117}} = \frac{\langle 3, -2 \rangle}{\sqrt{13}}\\
\frac{\vec{c}}{\lVert \vec{c} \rVert } &= \frac{\left\langle  -\frac{3}{2}, 1  \right\rangle}{\sqrt{\frac{13}{4}}} = \frac{\langle 3, -2 \rangle}{\sqrt{13}}
\end{align}
$$
And as we can see all the unit vectors are the same.

> [!example] **Example**
> Given $\vec{a} = -3\hat{i} + 4\hat{j}$ and $\vec{b}=\hat{i}+2\hat{j}$ find $\vec{v}$ where $\lVert \vec{v} \rVert= 3$ and $\vec{v} \parallel 2\vec{a} - 3\vec{b}$.
> 
> Let $\vec{w} = 2\vec{a} - 3\vec{b}$, then we have
> $$
> \begin{align}
> \vec{w} &= 2\langle -3, 4 \rangle -3 \langle 1, 2 \rangle  \\
> &= \langle -6, 8 \rangle + \langle -3, -6 \rangle \\
> &= \langle -9, 2 \rangle \\
>  \\
> \hat{w} &= \frac{\langle -9, 2 \rangle }{\sqrt{81+4}} \\
> &= \frac{1}{\sqrt{85}} \langle -9, 2 \rangle \\
>  \\
> \vec{v} &= \frac{3}{\sqrt{85}} \langle -9, 2 \rangle \\
> \vec{v} &= \frac{3\sqrt{85}}{85} \langle -9, 2 \rangle 
> \end{align}
> $$
> 
> 

All unit vectors are on the unit circle, and therefore all unit vectors can be written in the following way:
$$
\begin{align}
\hat{u} &= \cos \theta \hat{i} + \sin \theta \hat{j} \\
&= \langle \cos \theta, \sin \theta \rangle 
\end{align}
$$
This means we can write all vectors in turns of the angle they form from the positive $x$ axis. Lets say for example we have a vector $\vec{v}$ that has a length of 9 and goes around the x-axis $\frac{\pi}{6}$ degrees. Then, our vector would end up looking like the following:
$$
\begin{align}
\vec{v} &=\lVert \vec{v} \rVert \hat{u} \\
&= 9 \cos\left( \frac{\pi}{6} \right) \hat{j} + \sin\left( \frac{\pi}{6} \right)\hat{j}
\end{align}
$$

