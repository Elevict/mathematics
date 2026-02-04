---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 14.6 Solving Triple Integrals

Now that we know how to integrate over a two-dimensional region we need to move on to integrating over a three-dimensional region. We used a double integral to integrate over a two-dimensional region and so it shouldn’t be too surprising that we’ll use a **triple integral** to integrate over a three dimensional region. The notation for the general triple integrals is,

> [!definition] **Definition** (Note of the Triple Integral)
> Given a general three dimensional region $E$ and function $f(x, y, z)$ the notation for a triple integral is
>
> $$
> \iiint_{E} f(x, y, z) \ dV
> $$

If you want to visualize this, just think of it as finding the amount of mass of a solid, whereby the function $f(x, y, z)$ is a mass density function.
## Triple Integrals over Boxes

Let's start simple by integrating over the box,

$$
B = [a, b] \times  [c, d] \times [r, s]
$$

Note that when using this notation we list the $x$'s first, the $y$'s second and the $z$'s third.

The triple integral in this case is,

$$
\iiint_{B} f(x, y, z) dV = \int_{r}^{s} \int_{c}^{d} \int_{a}^{b} f(x, y, z) \ dx \ dy \ dz
$$

Note that we integrated with respect to $x$ first, then $y$, and finally $z$ here, but in fact there is no reason to the integrals in this order. There are 6 different possible orders to do the integral in and which order you do the integral in will depend upon the function and the order that you feel will be the easiest. We will get the same answer regardless of the order however.

> [!example] **Example** (Triple Integral)
> Evaluate the following integral.
>
> $$
> \iiint_{B} 8xyz \ dV \quad \quad B = [2, 3] \times [1, 2] \times  [0, 1]
> $$
>
> Just to make the point that order doesn’t matter let’s use a different order from that listed above. We’ll do the integral in the following order.
>
> $$
> \begin{align*}\iiint\limits_{B}{{8xyz\,dV}} & = \int_{{\,1}}^{{\,2}}{{\int_{{\,2}}^{{\,3}}{{\int_{{\,0}}^{1}{{8xyz\,dz}}\,dx}}\,dy}}\\ & = \int_{{\,1}}^{{\,2}}{{\int_{{\,2}}^{{\,3}}{{\left. {4xy{z^2}} \right|_0^1\,dx}}\,dy}}\\ & = \int_{{\,1}}^{{\,2}}{{\int_{{\,2}}^{{\,3}}{{4xy\,dx}}\,dy}}\\ & = \int_{{\,1}}^{{\,2}}{{\left. {2{x^2}y} \right|_2^3\,dy}}\\ & = \int_{{\,1}}^{{\,2}}{{10y\,dy}} = 15\end{align*}
> $$

## Triple Integrals over Generalized Regions

We have three different possibilities for a general region. One for each of the planes you can form with the axes. For example, on the $xy$-plane we can define a region $E$ as follows,

$$
E = \{ (x, y, z) \ | \ (x, y) \in D, \ u_{1}(x, y) \leq z \leq u_{2}(x, y) \}
$$

where $(x, y) \in D$ is the notation that means that the point $(x,y)$ lies in the region $D$ from the $xy$-plane. In this case we will evaluate the triple integral as follows,

$$
\iiint_{E} f(x, y, z) \ dV = \iint_{D} \left[ \int_{u_{1}(x, y)}^{u_{2}(x, y)} f(x, y, z) \ dz \right] \ dA
$$

where the double integral can be evaluated in any of the methods that we saw in the previous couple of sections. In other words, we can integrate first with respect to $x$, we can integrate first with respect to $y$, or we can use polar coordinates as needed. A visualization of this is provided below.

![[Lecture 14.6 Solving Triple Integrals-20241129141737428.png]]

You can likewise do this with the other two planes, resulting in a total of 3 cases.