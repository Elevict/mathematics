---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 13.3 Partial Derivatives

## Partial Derivatives

What does the derivative of a multivariable function look like?
- $f(x,y)$ is a surface in $\mathbb{R}^{3}$.
- Is it the slope of the surface of a point?
	- No, there are an infinite number of tangents to a surface.

In order to find the slope of the tangent line to a surface at a point, we must give the tangent line a direction.
- A fully directional derivative will come later, for now we restrict out derivative to be in the x-direction or the y-direction.

To find the slope of the tangent line in the x-direction, we must contain the tangent line in a plane parallel to the xz-plane. This requires that $y$ is held constant throughout, and therefore we treat $y$ as a constant when we take our partial derivative.

The idea of treating a variable as a constant and thereby insuring that the tangent line is in the direction of the other variable is called a partial derivative.

Notation for $f(x,y) = z$
$\frac{ \partial f }{ \partial x }$ holds $y$ constant, so it gives slope of the tangent line to the surface at a point in the $x$ direction. On the other hand $\frac{ \partial f }{ \partial y }$ holds $x$ constant.

> [!example] **Example** (Partial Derivative 1)
>
> $$
> \begin{align}
> f(x,y) &= 2x^{2}y^{3}-3x^{2}y+2x^{2}+3y^{2}+1 \\
> \frac{ \partial f }{ \partial x } &= 4xy^{3}-6xy+4x \\
> \frac{ \partial f }{ \partial y } &= 6x^{2}y^{2}-3x^{2} + 6y
> \end{align}
> $$

> [!example] **Example** (Partial Derivative 2)
>
> $$
> \begin{align}
> f(x, y) &= e^{x}\cos(y) + e^{y}\sin(x) \\
> \frac{ \partial f }{ \partial x } &= e^{x}\cos(y) + e^{y}\cos(x) \\
> \frac{ \partial f }{ \partial y } &= -e^{x}\sin(y) + e^{y}\sin(x)
> \end{align}
> $$

> [!example] **Example** (Partial Derivative 3)
>
> $$
> \begin{align}
> z &= xe^{xy^{2}} \\
> z_{x} &= (1)(e^{xy^{2}}) + (x)(e^{xy^{2}}\cdot y^{2}) \\
> &= e^{xy^{2}} + xy^{2}e^{xy^{2}} \\
> &= e^{xy^{2}}(1+xy^{2}) \\
> z_{y} &= xe^{xy^{2}} \cdot 2xy \\
> &= 2x^{2}ye^{xy^{2}}
> \end{align}
> $$

> [!example] **Example** (Partial Derivative 4)
> $$
> \begin{align}
> z &= y^{x} \\
> \frac{ \partial z }{ \partial x } &= y^{x}\ln(y) \\
> \frac{ \partial z }{ \partial y } &= xy^{x-1} \\
> \end{align}
> $$

## Implicit Differentiation

We need to take the derivative on both sides, and we have a variable that is implicitly defined Whenever we have an implicitly defined variable, we must do the product rule because it contains values of $x$ and $y$ but not directly. Check the example out below.

> [!example] **Example** (Implicit Differentiation)
> $$
> \begin{align}
> x^{2}y + xz + yz^{2} &= 8 \\
> 2xy + \left[ (1)z + x\frac{ \partial z }{ \partial x }  \right] + 2yz\frac{ \partial z }{ \partial x } &= 0 \\
> 2xy + z + x\frac{ \partial z }{ \partial x }  + 2yz\frac{ \partial z }{ \partial x } &= 0 \\
> \frac{ \partial z }{ \partial x } (x+2yz) &= -2xy - z \\
> \frac{ \partial z }{ \partial x } &= \frac{-2xy-z}{x+2yz}
> \end{align}
> $$

## Higher Order Derivatives

To denote the higher order derivatives, we can use the notation $\frac{\partial^{^{2}f}}{\partial y\partial x}$ which means take the derivative with respect to $x$ first, then with $y$. It is much easier to just write it as $f_{xy}$ which denotes the same exact thing.

Note that if $f_{xx} + f_{yy} = 0$, then that means that $f$ is a Laplace equation, which has many usages in harmonic equations.