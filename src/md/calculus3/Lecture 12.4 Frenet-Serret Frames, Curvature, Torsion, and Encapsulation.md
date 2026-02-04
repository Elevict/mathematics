---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 12.3 Frenet-serret Frames, Curvature, Torsion, and Encapsulation

## Curvature

Curvature is a measure of a curves failure to be a line. The more curvature a function has, the more curvy it appears.

Curvature is really arc-length compared to how the tangent vector is changing. In other words, it is how the tangent vector is changing with respect to arc-length. For instance, if the tangent vector is changing a lot over a small amount of length of the curve, then its very curvy.

> [!definition] **Definition** (Curvature)
>
> $$
> \kappa = \left\lvert  \left\lvert  \frac{dT}{ds}  \right\rvert   \right\rvert = ||T'(s)|| = ||\frac{dT}{ds} \cdot  \frac{ds}{dt}||
> $$

and we can rewrite it in the following manner as well,

$$
\frac{dT}{ds} = \frac{\frac{dT}{dt}}{\frac{ds}{dt}} \to \kappa = \frac{\vec{T}'(t)}{\lvert \lvert \vec{r}'(t) \rvert  \rvert } 
$$

## Torsion

> [!definition] **Definition** (Torsion)
>
> $$
> \tau = \frac{(\vec{r}' \times  \vec{r}'') \cdot  \vec{r}'''}{\lvert \lvert \vec{r}' \times \vec{r}'' \rvert  \rvert^{2} } = \frac{d\vec{B}}{ds} \cdot  \vec{N}
> $$
>
> Torsion is the failure of a curves failure to be contained within a plan.

At any point on a curve, there will be a circle that best fits that curve. It has the same exact tangent, the same exact curvature, and the same exact normal pointing through the center of the circle. This is called the osculating circle. The plane that contains this circle must contain both $\vec{T}$ and $\vec{N}$, so $\vec{B}$ is what describes the plane that the osculating circle is in.

The radius of the circle is called the radius of curvature and is found as follows

$$
\rho = \frac{1}{\kappa}
$$

The plane that contains $\vec{N}$ and $\vec{B}$ is called the normal plane and contains all vectors orthogonal to $\vec{T}$.