---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 13.7 Finding Tangent Planes and Normal Lines to Surfaces

## Forming Planes

First lets define planes. Note that on a plane you can choose two points, so lets call those points $(x, y, z)$ and $(x_{0}, y_{0}, z_{0})$. You can form a vector between these two points, that being $\langle x-x_{0}, \ y-y_{0}, \ z-z_{0} \rangle$.

To form a plane that contains this vector, you would want to have another vector that is orthogonal to the plane. Lets call this vector $\langle a, b, c \rangle$. Then we have the following relation,

$$
\langle a, b, c \rangle \cdot  \langle x-x_{0}, y-y_{0}, z-z_{0} \rangle   = 0
$$

which when computed gives us the equation of a plane.

$$
a(x-x_{0}) + b(y-y_{0}) + c(z-z_{0}) = 0
$$

## Tangent Planes and Normal Lines

Now recall that $\nabla f = \langle f_{x}, f_{y}, f_{z} \rangle$ is always normal to the level surface $f(x, y, z) = 0$ at a point. Be careful not to confuse this, since a surface in $\mathbb{R}^{3}$ has the gradient be tangent in the steepest direction, but a level surface which is a projection of an object in $\mathbb{R}^{4}$ has the gradient actually be perpendicular.

With this said, we just replace the normal vector $\langle a, b, c \rangle$ with $\nabla f$ at a certain point $(x_{0}, y_{0}, z_{0})$. This results in

> [!definition] **Definition** (Tangent Plane to Surface)
>
> $$
> f_{x}(x_{0}, y_{0}, z_{0})(x-x_{0}) + f_{y}(x_{0}, y_{0}, z_{0})(y-y_{0}) + f_{z}(x_{0}, y_{0}, z_{0})(z-z_{0}) = 0
> $$

which is a much more general form of a tangent plane.

Now since $\nabla f$ is perpendicular to the level curve, we can simply find the normal line by the following expression,

> [!definition] **Definition** (Normal Line to Surface)
>
> $$
> \vec{r}(t) = \langle x_{0}, y_{0}, z_{0} \rangle + t \nabla f(x_{0}, y_{0}, z_{0})
> $$

> [!example] **Example** (Tangent Plane and Normal Line)
> Find the tangent plane and normal line to $x^{2} + y^{2} + z^{2} = 30$ at the point $(1, -2, 5)$.
>
> For this case the function that we're going to be working with is,
>
> $$
> F(x, y, z) = x^{2} + y^{2} + z^{2}
> $$
>
> and note that we don't have to have a zero on one side of the equal sign. All that we need is a constant. To finish this problem out we simply need the gradient evaluated at the point.
>
> $$
> \begin{align}
> \nabla F &= \langle 2x, 2y, 2z \rangle  \\
> \nabla F (1, -2, 5) &= \langle 2, -4, 10 \rangle 
> \end{align}
> $$
>
> The tangent plane is then,
>
> $$
> 2(x-1) -4(y+2) +10(z-5) = 0
> $$
>
> The normal line is,
>
> $$
> \vec{r}(t) = \langle 1, -2, 5 \rangle + t \langle 2, -4, 10 \rangle = \langle 1+2t, -2-4t, 5+10t \rangle 
> $$
