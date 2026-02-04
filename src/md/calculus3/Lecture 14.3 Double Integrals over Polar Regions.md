---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 14.3 Double Integrals over Polar Regions

To this point we’ve seen quite a few double integrals. However, in every case we’ve seen to this point the region $D$ could be easily described in terms of simple functions in Cartesian coordinates. In this section we want to look at some regions that are much easier to describe in terms of polar coordinates. For instance, we might have a region that is a disk, ring, or a portion of a disk or ring. In these cases, using Cartesian coordinates could be somewhat cumbersome. For instance, let’s suppose we wanted to do the following integral,

$$
\iint_{D} f(x, y) \ dA, \ D \text{ is the disk of radius 2}
$$

To this we would have to determine a set of inequalities for x and y that describe this region. These would be,

$$
\begin{align}
-2  & \leq x \leq 2 \\
-\sqrt{4-x^{2}}  & \leq y \leq \sqrt{4-x^{2}}
\end{align}
$$

With these limits the integral would become,

$$
\iint_{D} f(x, y) \ dA = \int_{-2}^{2} \int_{-\sqrt{4-x^{2}}}^{\sqrt{4-x^{2}}} f(x, y) \ dydx
$$

Due to the limits on the inner integral this is liable to be an unpleasant integral to compute. However, a disk of radius 2 can be defined in polar coordinates by the following inequalities,

$$
\begin{align}
0 \leq \theta \leq 2\pi \\
0 \leq r \leq 2
\end{align}
$$

These are very simple limits and, in fact, are constant limits of integration which almost always makes integrals somewhat easier.

So, if we could convert our double integral formula into one involving polar coordinates we would be in pretty good shape. The problem is that we can't just convert the $dx$ and the $dy$ into a $dr$ and a $d\theta$. In computing double integrals to this point we have been using the fact that $dA = dxdy$ and this really does require Cartesian coordinates to use. Once we've moved into polar coordinates $dA \neq dr d\theta$ and so we're going to need to determine just what $dA$ is under polar coordinates. This comes from the usage of the Jacobian.

> [!theorem] **Theorem** (Differential Change of Variables)
>
> $$
> dA = dxdy= r dr d\theta
> $$

Now recall that the polar coordinates are founding using the following,

$$
x = r\cos \theta \quad y = r \sin \theta \quad r^{2} = x^{2} + y^{2}
$$

We are now ready to write down a formula for the double integral in terms of polar coordinates.

> [!theorem] **Theorem** (Double Integral in Terms of Polar Coordinates)
>
> $$
> \iint_{D} f(x, y) dA = \int_{\alpha}^{\beta} \int_{h_{1}(\theta)}^{h_{2}(\theta)} f(r\cos \theta, r \sin \theta) \ r \ dr d\theta
> $$

To visualize this integral, you can refer to the image below.

![[Lecture 14.3 Double Integrals over Polar Regions-20241129140757574.png]]