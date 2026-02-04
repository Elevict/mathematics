---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 15.5 Green's Theorem

> [!theorem] **Theorem** (Green's Theorem)
> Let $C$ be a positively oriented, piecewise smooth, simple, closed curve and let $D$ be the region enclosed by the curve. If $P$ and $Q$ have continuous first order partial derivatives on $D$ then,
>
> $$
> \oint_{C} P \ dx + Q \ dy = \iint_{D} \ \left( \frac{ \partial Q }{ \partial x } - \frac{ \partial P }{ \partial y }  \right) \ dA
> $$

This theorem is mainly to make finding line integrals easier. That is, if you have a closed simple curve then you simply just need to find the curl of the vector field and then integrate it within the region.

*Intuition Based Proof*

Let $D$ be a region in $\mathbb{R}^{2}$ whose boundary is a smooth closed curve $C$, and assume that $C$ is oriented counterclockwise:

![[Lecture 15.5 Green's Theorem Image.png]]

Now imagine chopping up $D$ into tiny pieces such that each tiny piece is a parallelogram (or at least, each tiny piece is approximately a parallelogram).

![[Lecture 15.5 Green's Theorem Image 2.jpg]]

Now notice that all the interior parallelograms will cancel out because their vectors are pointed in opposite directions. Therefore only the boundary will have vectors remaining that have yet to be canceled out. These parallelograms going in a counterclockwise fashion are precisely the curl of a the region, which is integrated out.

$$
\tag*{\(\blacksquare\)}
$$

> [!example] **Example** (Green's Theorem)
> Use Green's Theorem to evaluate $\oint_{C} xy \ dx + x^{2}y^{3} \ dy$ where $C$ is the triangle with vertices $(0, 0), (1, 0), (1, 2)$ with positive orientation.
>
> First we define our functions $P$ and $Q$
>
> $$
> \begin{align}
> P(x, y) &=  xy \quad \quad Q(x, y) = x^{2}y^{3} \\
> P_{y}(x, y) &= x \quad \quad Q_{x}(x, y) = 2xy^{3} \\
> P_{y}(x, y) - Q_{x}(x, y) &= 2xy^{3} - x
> \end{align}
> $$
>
> Now lets write this out
>
> $$
> \oint_{C} xy \ dx + x^{2}y^{3} \ dy = \iint_{R} 2xy^{3} - x \ dA
>  
> $$
>
> and lets define the region $R$. In this case it is enclosed by $x = 0$ and $x = 1$ along with $y = 0$ and $y = 2x$. So lets just solve the integral now.
>
> $$
> \begin{align*}\oint_{C}{{xy\,dx + {x^2}{y^3}\,dy}} & = \iint\limits_{D}{{2x{y^3} - x\,dA}}\\ & = \int_{{\,0}}^{{\,1}}{{\int_{{\,0}}^{{\,2x}}{{2x{y^3} - x\,dy}}\,dx}}\\ & = \int_{{\,0}}^{{\,1}}{{\left. {\left( {\frac{1}{2}x{y^4} - xy} \right)} \right|_0^{2x}\,dx}}\\ & = \int_{{\,0}}^{{\,1}}{{8{x^5} - 2{x^2}\,dx}}\\ & = \left. {\left( {\frac{4}{3}{x^6} - \frac{2}{3}{x^3}} \right)} \right|_0^1\\ & = \frac{2}{3}\end{align*}
> $$
