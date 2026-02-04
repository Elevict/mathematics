---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 15.2 how to Find Divergence and Curl of Vector Fields

Before we begin, let us define a new operator called the $\nabla$ operator. This is defined in the following manner,

> [!definition] **Definition** (Del Operator)
>
> $$
> \nabla = \frac{\partial }{{\partial x}}\,\,\vec i + \frac{\partial }{{\partial y}}\,\,\vec j + \frac{\partial }{{\partial z}}\,\,\vec k
> $$

We use this as if it’s a function in the following manner.

> [!definition] **Definition** (Gradient of a Vector Field)
>
> $$
> \nabla f = \frac{{\partial f}}{{\partial x}}\,\,\vec i + \frac{{\partial f}}{{\partial y}}\,\,\vec j + \frac{{\partial f}}{{\partial z}}\,\,\vec k
> $$

So, whatever function is listed after the $\nabla$ is substituted into the partial derivatives. Note as well that when we look at it in this light we simply get the gradient vector.

Using the $\nabla$ we can define the curl as the following cross product,

> [!definition] **Definition** (Curl of a Vector Field)
>
> $$
> {\mathop{\rm curl}\nolimits} \vec F = \nabla \times \vec F = \left| {\begin{array}{*{20}{c}}{\vec i}&{\vec j}&{\vec k}\\{\displaystyle \frac{\partial }{{\partial x}}}&{\displaystyle \frac{\partial }{{\partial y}}}&{\displaystyle \frac{\partial }{{\partial z}}}\\P&Q&R\end{array}} \right|
> $$

We have a couple of nice facts that use the curl of a vector field.

> [!theorem] **Theorem** (Facts about Curl)
> 1. If $f\left({x,y,z} \right)$ has continuous second order partial derivatives then ${\mathop{\rm curl}\nolimits} \left({\nabla f} \right) = \vec 0$. This is easy enough to check by plugging into the definition of the derivative so we’ll leave it to you to check.
> 2. If $\vec F$ is a conservative vector field then ${\mathop{\rm curl}\nolimits} \ \vec F = \vec 0$. This is a direct result of what it means to be a conservative vector field and the previous fact.
> 3. If $\vec F$ is defined on all of ${\mathbb{R}^3}$ whose components have continuous first order partial derivative and ${\mathop{\rm curl}\nolimits} \ \vec F = \vec 0$ then $\vec F$ is a conservative vector field. This is not so easy to verify and so we won’t try.

Next, we should talk about a physical interpretation of the curl. Suppose that $\vec F$ is the velocity field of a flowing fluid. Then ${\mathop{\rm curl}\nolimits} \vec F$ represents the tendency of particles at the point $\left({x,y,z} \right)$ to rotate about the axis that points in the direction of ${\mathop{\rm curl}\nolimits} \vec F$. If ${\mathop{\rm curl}\nolimits} \vec F = \vec 0$ then the fluid is called irrotational.

Let’s now talk about the second new concept in this section. Given the vector field $\vec F = P\,\vec i + Q\,\vec j + R\,\vec k$ the divergence is defined to be,

> [!definition] **Definition** (Divergence of a Vector Field)
>
> $$
> {\mathop{\rm div}\nolimits} \vec F = \nabla \centerdot \vec F
> $$

We also have a physical interpretation of the divergence. If we again think of $\vec F$ as the velocity field of a flowing fluid then ${\mathop{\rm div}\nolimits} \vec F$ represents the net rate of change of the mass of the fluid flowing from the point $\left({x,y,z} \right)$ per unit volume. This can also be thought of as the tendency of a fluid to diverge from a point. If ${\mathop{\rm div}\nolimits} \vec F = 0$ then the $\vec F$ is called incompressible.

The next topic that we want to briefly mention is the **Laplace** operator. Let’s first take a look at,

${\mathop{\rm div}\nolimits} \left({\nabla f} \right) = \nabla \centerdot \nabla f = {f_{xx}} + {f_{yy}} + {f_{zz}}$

The Laplace operator is then defined as,

> [!definition] **Definition** (Laplace Operator)
>
> $$
> {\nabla ^2} = \nabla \centerdot \nabla
> $$

The Laplace operator arises naturally in many fields including heat transfer and fluid flow.