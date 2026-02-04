---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 13.9 Constrained Optimization with Lagrange Multipliers

Let us say we want to optimize a function, $f(x, y, z)$ which is subject to a constraint $g(x, y, z) = k$. This constraint is actually representing all points that are possible whereas the function gives the set of points itself. Note that ultimately we're going to want to find an intersection between $f$ and $g$ which can give us a point that is either a maximum or minimum.

Now note that $g$ is a level surface whereas $f$ is only a surface in $\mathbb{R}^{4}$. That means that $f(x, y, z) = c$ can have multiple values of $c$ which gives multiple level surfaces of $f$. Our goal here is to find a value $c$ where the level surface $f$ that is varied will intersect with $g$ at a particular point. And at that particular point, both surfaces both share a tangent vector. Since both surfaces share a tangent vector, or rather tangent plane, that implies that their normal vectors to that tangent vector both must be parallel.

Recall that the gradient gives a normal vector to a level surface. Then, this means

$$
\nabla f(x, y, z) = \lambda \nabla g(x, y, z)
$$

for some $\lambda \in \mathbb{R}$. The reason why is because $\nabla f$ is normal to $f$ an $\nabla g$ is normal to $g$, and we know that they must be parallel. If they are parallel then they are scalar multiples of one another. Note that $\lambda$ is called a Lagrange multiplier.

> [!theorem] **Theorem** (Method of Lagrange Multipliers)
> To solve this problem, all we need to do is solve the following system of equations
>
> $$
> \begin{cases}
> \nabla f(x, y, z) = \lambda \nabla g(x, y, z) \\
> g(x, y, z) = k
> \end{cases}
> $$
>
> and then plug the values of $x, y, z$ into $f(x, y, z)$ to see if the value is a minimum or maximum. The values we get will only ever be a minimum or maximum, so if you get 2 values its easy. If you get only 1, you need to do the second derivative test.

> [!example] **Example**
> Let $f(x, y) = xy$ with constraint of $2x + 3y = 6$.
>
> We first let $g(x, y) = 2x + 3y$
>
> $$
> \begin{align}
> \nabla g &= 2\hat{i} + 3\hat{j} \\
> \nabla f &= y\hat{i} + x\hat{j} \\
> y\hat{i} + x\hat{j} &= \lambda(2\hat{i} + 3\hat{j}) \\ \\
> 
> & \begin{cases}
> y = 2\lambda \\
> x = 3\lambda \\
> 2x + 3y = 6
> \end{cases} \\
>  \\
> 
> &2(3\lambda) + 3(2\lambda) = 6 \\
> &12\lambda = 6 \\
> &\lambda = \frac{1}{2} \\ \\
> 
> & \begin{cases}
> y = 1 \\
> x = \frac{3}{2}
> \end{cases}
> 
> \end{align}
> $$
>
> So we now have a coordinate $\left(1, \frac{3}{2} \right)$, which we plug into $f$ and get $f\left(1, \frac{3}{2} \right) = \frac{3}{2}$. This is a maximum by using the second derivative test.


