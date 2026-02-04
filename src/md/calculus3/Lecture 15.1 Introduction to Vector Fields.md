---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 15.1 Introduction to Vector Fields

> [!definition] **Definition** (Vector Field)
> A vector field on two or three dimensional space is a function $\vec{F}$ that assigns to each point $(x, y)$ or $(x, y, z)$ a two/three dimensional vector given by $\vec{F}(x, y)$ or $\vec{F}(x, y, z)$

The standard notation for the function $\vec F$ is,

$$
\begin{align*}\vec F\left( {x,y} \right) & = P\left( {x,y} \right)\vec i + Q\left( {x,y} \right)\vec j\\ \vec F\left( {x,y,z} \right) & = P\left( {x,y,z} \right)\vec i + Q\left( {x,y,z} \right)\vec j + R\left( {x,y,z} \right)\vec k\end{align*}
$$

depending on whether or not we’re in two or three dimensions. The function $P, Q, R$ (if it is present) are sometimes called **scalar functions**.

Now that we’ve seen a couple of vector fields let’s notice that we’ve already seen a vector field function. In the second chapter we looked at the gradient vector. Recall that given a function $f\left({x,y,z} \right)$ the gradient vector is defined by,

> [!definition] **Definition** (Gradient Vector Field)
>
> $$
> \nabla f = \left\langle {{f_x},{f_y},{f_z}} \right\rangle
> $$
>
> This is a vector field and is often called a **gradient vector field**.

In these cases, the function $f\left({x,y,z} \right)$ is often called a scalar function to differentiate it from the vector field.

> [!definition] **Definition** (Conservative Vector Field and the Potential Function)
> A vector field $\vec F$ is called a **conservative vector field** if there exists a function $f$ such that $\vec F = \nabla f$. If $\vec F$ is a conservative vector field then the function, $f$, is called a **potential function** for $\vec F$.

All this definition is saying is that a vector field is conservative if it is also a gradient vector field for some function.

For instance the vector field $\vec F = y\,\vec i + x\,\vec j$ is a conservative vector field with a potential function of $f\left({x,y} \right) = xy$ because $\nabla f = \left\langle {y,x} \right\rangle$.