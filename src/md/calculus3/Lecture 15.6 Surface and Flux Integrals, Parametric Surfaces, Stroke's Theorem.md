---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 15.6 Surface and Flux Integrals, Parametric Surfaces, Stroke's Theorem

## Surface Integrals

Note that $\iint_{R} f(x, y) \ dA$ is over a flat region and gives us the mass of a region $R$ if $f(x, y)$ is the mass density function of $R$. What if $R$ is not flat?

Then the region actually ends up becoming a surface integral, which is denoted as

$$
\iint_{S} f(x, y, z) \ dS
$$

which gives us the mass of a surface assuming $f(x, y, z)$ is the mass density function. The projection of our surface onto a coordinate plane gives us our $R$. We have several formulas to calculate this integral depending on the projection we use.

$$
\iint_{S} f(x, y, z) \ dS = \iint_{R} f(x, y, g(x, y)) \sqrt{g_{x}^{2}+g_{y}^{2} + 1} \ dA
$$

For a surface $z = f(x, y)$ (Projection onto the $xy$-plane)

$$
\iint_{S} f(x, y, z) \ dS = \iint_{R} f(x, g(x, z), z) \sqrt{g_{x}^{2}+g_{z}^{2} + 1} \ dA
$$

For a surface $z = f(x, y)$ (Projection onto the $xz$-plane)

$$
\iint_{S} f(x, y, z) \ dS = \iint_{R} f(g(y, z), y, z) \sqrt{g_{y}^{2}+g_{z}^{2} + 1} \ dA
$$

For a surface $z = f(x, y)$ (Projection onto the $yz$-plane)

Notice that the right side with the square root gives us our surface area. Its simply the surface area times the mass density at each point which is integrated over and over again. A double integral of arc length is ultimately surface area.

> [!example] **Example** (Surface Integral with Mass Density)
> We have a surface $S$ where ${} y + z = 4 {}$ is inside of $x^{2} + y^{2} = 1$. Compute the following surface integral given the mass density function, $\iint_{S} (x+2y+z) \ dS$
>
> Notice that we can rewrite $z = g(x, y)$ so $z = 4 - y$.
>
> $$
> \begin{align}
> & \iint_{R} (x + 2y + (4-y)) \sqrt{(0)^{2} + (-1)^{2} + 1} \ dS\\
> & \iint_{R} (x + y + 4) \sqrt{z} \ dA
> \end{align}
> $$
>
> Lets now find the region $R$. Notice we can rewrite in polar coordinates since its a unit circle centered at $(0, 0)$. There is also a horizontal line, but we don't care about it and only care about integrating inside the circular region.
>
> $$
> x^{2} + y^{2} = 1 \quad \quad y + z = 4 \quad \quad z = 0 \quad \quad  y = 4
> $$
>
> $$
> \int_{\theta \ = \ 0}^{\theta \ = \ 2\pi} \int_{r \ =\  0}^{r \ = \ 2\pi} (r\cos \theta + r \sin \theta + 4) \sqrt{2} \ r dr d\theta = 4\sqrt{2}\pi
> $$

## Parametric Surfaces

For $f(x, y, z)$ and $x = x(u, v), y = y(u, v), z = z(u, v)$ then we can create a vector function $\vec{r}(u, v) = x(u, v) \hat{i} + y(u, v)\hat{j} + z(u,v) \hat{k}$.

> [!example] **Example** (Reparameterization of a Surface)
> Reparametrize $x = \sqrt{y^{2} + z^{2}}$, let $y = u$ and $z = v$ then we have that
>
> $$
> \vec{r}(u, v) = \sqrt{u^{2}+v^{2}}\hat{i} + u\hat{j} + v\hat{k}
> $$

> [!example] **Example** (Reparameterization of a Surface)
> Reparametrize $x^{2} + y^{2} = z^{2}$, let $x^{2} + y^{2} = r^{2}$ then $r^{2} = z^{2}$ or just $r = z$. Now let $r = u$ and $v = \theta$. Then we have that
>
> $$
> \vec{r}(u, v) = u\cos(v)\hat{i} + u\sin(v)\hat{j} + u \hat{k}
> $$

> [!definition] **Definition** (Reparameterized Surface Integral)
> With reparameterization, we can now find surface area very easily using the following integral
>
> $$
> \iint_{D} \lvert \lvert \vec{r}_{u} \times  \vec{r}_{v} \rvert  \rvert \ dA
> $$
>
> whereby $D$ is just the bounds of the variables for $u$ and for $v$.

Note that this formula does not have any mass density, and just gives you the surface area directly. The area vector is found by taking the cross product of partial derivatives in $u$ and $v$ directions. When we are evaluating the surface integral of a vector field through a space, we are evaluating how much of the vector field is passing through the surface.

> [!definition] **Definition** (Reparametrized Surface Integral with Mass Density Function)
> To include mass density from the above definition, you write it in the following form,
>
> $$
> \iint_{D} f(\vec{r}(u, v)) \ \lvert \lvert \vec{r}_{u} \times  \vec{r}_{v} \rvert  \rvert  \ dA
> $$

> [!example] **Example**
> Let the surface be defined as $\vec{r}(u, v) = (u+v)\hat{i} + (u-v)\hat{j} + (u^{2} + v^{2})\hat{k}$ where $0 \leq u \leq 1$ and $0 \leq v \leq 2$. Compute the integral $\iint_{S} \frac{x-y}{\sqrt{2z+1}} \ dS$
>
> First find partials,
>
> $$
> \vec{r}_{u} = \hat{i} + \hat{j} + 2u\hat{k} \quad \quad \vec{r}_{v} = \hat{i} - \hat{j} + 2v\hat{k}
> $$
>
> Then the cross product,
>
> $$
> \vec{r}_{u} \times  \vec{r}_{v} = \begin{bmatrix}
> \hat{i} & \hat{j} & \hat{k} \\
> 1 & 1 & 2u \\
> 1 & -1 & 2v
> \end{bmatrix}
> = (2v+2u)\hat{i} + (2u - 2v)\hat{j} - 2\hat{k}
> $$
>
> Then the magnitude,
>
> $$
> \begin{align}
> \lvert \lvert \vec{r}_{u} \times \vec{r}_{v} \rvert  \rvert &= \sqrt{(2v+2u)^{2} + (2u-2v)^{2} +(-2)^{2}} \\
> &= \sqrt{4(2u^{2}+2v^{2}+1)} \\
> &= 2\sqrt{2(u^{2}+v^{2}) + 1}
> \end{align}
> $$
>
> And finally plug into the formula
>
> $$
> \begin{align}
> & \iint_{D} \frac{(u+v)-(u-v)}{\sqrt{2(u^{2} + v^{2}) + 1}} \cdot  2 \sqrt{2(u^{2} + v^{2}) + 1} \ dA \\
> & \iint_{D} 4v \ dA \\
> & \int_{0}^{2} \int_{0}^{1} 4v \ du \ dv = 8
> \end{align}
> $$

## Flux Integrals

If $F$ a vector field, contains a surface $S$, then $F$ describes the velocity of flow/fluid at any point across that surface. The rate of flow through a surface is called flux, or area per unit time.

$$
F \cdot  \vec{n} \times  A(s)
$$

So pretty much find the force projected against the normal vector of that surface, in other words the force going normal to the surface, and multiply it by the area. That will give you flux. We want to do this across the entire surface, giving us the flux integral

$$
\iint_{S} F \cdot  n \ dS
$$

And if your fluid has a mass density at a point $\rho(x, y, z)$ then

$$
\iint_{S} \rho \cdot  \vec{F} \cdot  \vec{n} \ dS
$$

which gives the mass of fluid going through a surface.

> [!definition] **Definition** (Flux Integral)
> For $\vec{F} = P \hat{i} + Q \hat{j} + R \hat{k}$
>
> $$
> \iint_{S} F \cdot  dS = \iint_{S} F \cdot  \vec{n} \ dS = \iint (-Pg_{x} - Qg_{y} + R)dA
> $$
>
> for a surface $z = g(x, y)$.

## Divergence Theorem

> [!theorem] **Theorem** (Divergence Theorem)
> If $S$ is a simple closed surface, then
>
> $$
> \iint_{S} F \cdot  dS = \iiint_{T} \nabla \cdot  F \ dV
> $$
>
> where $F$ is our vector field over a surface $S$ which contains a region $T$.

> [!example] **Example** (Flux Integral Using Divergence Theorem)
> Find the flux through a vector field
>
> $$
> F = (x+\sin(z))\hat{i} + (2y+\cos x)\hat{j} + (3z + \tan y)\hat{k}
> $$
>
> over the surface $x^{2} + y^{2} + z^{2} = 4$ which is a sphere.
>
> $$
> \nabla \cdot  F = 1 + 2 + 3 = 6
> $$
>
> Now compute the flux,
>
> $$
> \iint_{S} F \cdot  dS = \iiint_{T} 6 \ dV
> $$
>
> Let's convert to spherical coordinates for our sphere. We have that $\rho$ goes from 0 to 2. We have that $\theta$ goes from 0 to $2\pi$. Finally we get that $\phi$ goes from $0$ to $\pi$. Then convert the differential and solve.
>
> $$
> \begin{align}
> \int_{0}^{2\pi} \int_{0}^{\pi} \int_{0}^{2} 6 \rho^{2} \sin \phi \ \ d\rho \ d\phi \ d\theta \\
> \int_{0}^{2\pi} \int_{0}^{\pi} 2[\rho^{3}]_{0}^{2}\int_{0}^{2} \sin \phi \ \ d\rho \ d\phi \ d\theta \\
> 32 \int_{0}^{2\pi}d\theta = 32[\theta]_{0}^{2\pi} = 64\pi
> \end{align}
> $$

## Stoke's Theorem

This is a generalization of Green's theorem, but in this case we don't need to deal with a curve being in a plane, the curve can be in any space. The result of this is,

> [!theorem] **Theorem** (Stoke's Theorem)
> For a curve $C$ with a vector field $F$, whereby the curve forms the surface $S$,
>
> $$
> \oint_{C} F \cdot dr = \iint_{S} \ \nabla \times  F \cdot  dS
> $$

The work done along a curve $C$ is the same as the flux of the curl across the surface formed by that curve. This is because all the swirling cancels out on the inside and we have the curl of the outside to worry about only, which the flux of gives us the work.

Note any surface $S$ will work as long as $C$ is the boundary of that surface.

Now note that you can treat $\nabla \times F$ as a new vector field, and then just use the divergence theorem above.

$$
\begin{align}
 \oint_{C} F \cdot dr &= \iint_{S} \ \nabla \times  F \cdot  dS  \\
&= \iiint_{T} \nabla \cdot  (\nabla \times  F) \ dV \\
&=\iint_{D} (-Pg_{x} - Qg_{y} + R) \ dA
\end{align}
$$

whereby we can treat $S$ as a surface $z = g(x, y)$.

> [!example] **Example** (Finding the Work Done on a Closed Curve not Embedded in the Plane)
> Let $\oint_{C} F \cdot dr$ and $F(x, y, z) = \cos z \hat{i} + x^{2} \hat{j} + 2y \hat{k}$. Let $C$ be the intersection of the plane $z = 2-x$ and $x^{2} + y^{2} = 4$. Compute the flux integral.
>
> $$
> \oint_{C} F \cdot  dr = \iint_{S} \nabla \times F \cdot  dS
> $$
>
> Now find the curl,
>
> $$
> \nabla \times F = \begin{vmatrix}
> \hat{i} & \hat{j} & \hat{k} \\
> \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
> \cos z  & x^{2}  & 2y
> \end{vmatrix}
> = 2\hat{i} - \sin(z) \hat{j} + 2x \hat{k}
> $$
>
> Great, now treat our new vector field as the curl above, and plug it into our flux integral formula and let $z = g(x, y) \to z = 2-x$
>
> $$
> \begin{align}
> \iint_{S} \nabla \times  F \cdot  dS &= \iint_{S} (-Pg_{x} - Qg_{y} + R) \ dA \\
> &= \iint_{S} (-2(-1) -\sin(z)(0)+2x) \ dA \\
> &= \iint_{S} (2+2x) \ dA \\
> \end{align}
> $$
>
> Convert to polar coordinates now, and its a unit circle.
>
> $$
> \begin{align}
> \int_{0}^{2\pi}\int_{0}^{2} (2 + 2r\cos(\theta)) \ dr d\theta
> &= \int_{0}^{2\pi} \left[ r^{2} + \frac{2}{3} r^{3} \cos \theta \right]^{r=2}_{r=0} \\
> &= [4\theta + \frac{16}{3}(\sin \theta)]^{\theta =  2\pi}_{\theta = 0} \\
> &= 8\pi
> \end{align}
> $$
>
> which tells us the work done by the particle is exactly $8\pi$ on our curve $C$.