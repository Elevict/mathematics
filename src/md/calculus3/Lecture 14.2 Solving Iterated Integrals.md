---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 14.2 Solving Iterated Integrals

## Double Integrals over Rectangular Regions

Beginning this section, we will continue to assume that we are integrating over the rectangle

$$
R = [a, b] \times  [c, d]
$$

The following theorem tells us how to compute a double integral over a rectangle.

> [!theorem] **Theorem** (Fubini's Theorem)
> If $f(x, y)$ is continuous on $R = [a, b] \times [c, d]$ then,
>
> $$
> \iint_{R}f(x, y) \ dA = \int_{a}^{b} \int_{c}^{d} f(x,y) \, dy  \, dx = \int_{c}^{d} \int_{a}^{b} f(x,y) \, dx  \, dy 
> $$
>
> These integrals are called **iterated integrals**.

Note that there are in fact two ways of computing a double integral over a rectangle and also notice that the inner differential matches up with the limits on the inner integral and similarly for the outer differential and limits. In other words, if the inner differential is $dy$ then the limits on the inner integral must be $y$ limits of integration and if the outer differential is $dy$ then the limits on the outer integral must be $y$ limits of integration.

Now, on some level this is just notation and doesn’t really tell us how to compute the double integral. Let’s just take the first possibility above and change the notation a little.

$$
\iint_{R} f(x, y) \ dA = \int_{a}^{b} \left[ \int_{c}^{d} f(x, y) \ dy \right] \ dx
$$

We will compute the double integral by first computing

$$
\int_{c}^{d} f(x, y) \ dy
$$

and we compute this by holding $x$ constant and integrating with respect to $y$ as if this were a single integral. This will give a function involving only $x$’s which we can in turn integrate.

We’ve done a similar process with partial derivatives. To take the derivative of a function with respect to $y$ we treated the $x$’s as constants and differentiated with respect to $y$ as if it was a function of a single variable.

Double integrals work in the same manner. We think of all the $x$’s as constants and integrate with respect to $y$ or we think of all $y$’s as constants and integrate with respect to $x$.

> [!example] **Example** (Iterated Integrals)
> Compute each of the following double integrals over the indicated rectangles.
>
> $$
> \begin{align}
> \iint_{R} 6xy^{2} \ dA, R &= [2, 4] \times  [1, 2] \\
> &= \int_{2}^{4} \int_{1}^{2} 6xy^{2} \, dy   \, dx  \\
> &= \left( \int_{1}^{2} y^{2} dy \right) \left( 6\int_{2}^{4}xdx \right) \\
> &= \left[ \frac{1}{3}y^{3} \right]^{2}_{1} \cdot 6\left[ \frac{1}{2}x^{2} \right]_{2}^{4} \\
> &= \left( \frac{8}{3} - \frac{1}{3} \right) \cdot  6\left( 8 - 2 \right) \\
> &= \left( \frac{7}{3} \right)\left( 36 \right) \\
> &= 7(12) = 84
> \end{align}
> $$

> [!theorem] **Theorem**
> If $f(x, y) = g(x)h(y)$ and we are integrating over the rectangle $R = [a, b] \times [c, d]$ then,
>
> $$
> \iint_{R} f(x, y) \ dA = \iint_{R} g(x)h(y) \ dA = \left( \int_{a}^{b} g(x)dx \right)\left( \int_{c}^{d} h(y) dy \right)
> $$

*Proof*

Just treat the function as a constant, pull it out the front, and you are done. You can also pull the differential out of the integral since its constant under integration.

$$
\tag*{\(\blacksquare\)}
$$

## Double Integrals over General Regions

In the previous section we looked at double integrals over rectangular regions. The problem with this is that most of the regions are not rectangular so we need to now look at the following double integral,

$$
\iint_{D} f(x, y) \ dA
$$

where $D$ is any region.

There are two types of regions that we need to look at.

We will often use _set builder notation_ to describe these regions. Here is the definition for the region in Case 1.

$$
D = \left\{ {\left( {x,y} \right)|a \le x \le b,\,\,{g_1}\left( x \right) \le y \le {g_2}\left( x \right)} \right\}
$$

and here is the definition for the region in Case 2.

$$
D = \left\{ {\left( {x,y} \right)|{h_1}\left( y \right) \le x \le {h_2}\left( y \right),\,c \le y \le d} \right\}
$$

The double integral for both of these cases are defined in terms of iterated integrals as follows.

In Case 1 where $D = \left\{ {\left({x,y} \right)|a \le x \le b,\,\,{g_1}\left(x \right) \le y \le {g_2}\left(x \right)} \right\}$ the integral is defined to be,

$$
\iint\limits_{D}{{f\left( {x,y} \right)\,dA}} = \int_{{\,a}}^{{\,b}}{{\int_{{{g_{\,1}}\left( x \right)}}^{{{g_{\,2}}\left( x \right)}}{{f\left( {x,y} \right)\,dy}}\,dx}}
$$

In Case 2 where $D = \left\{ {\left({x,y} \right)|{h_1}\left(y \right) \le x \le {h_2}\left(y \right),\,c \le y \le d} \right\}$ the integral is defined to be,

$$
\iint\limits_{D}{{f\left( {x,y} \right)\,dA}} = \int_{{\,c}}^{{\,d}}{{\int_{{h{\,_1}\left( y \right)}}^{{{h_{\,2}}\left( y \right)}}{{f\left( {x,y} \right)\,dx}}\,dy}}
$$

Here are some properties of the double integral that we should go over before we actually do some examples. Note that all three of these properties are really just extensions of properties of single integrals that have been extended to double integrals.

> [!corollary] **Corollary** (Properties of Integrals)
> 1. $\displaystyle \iint\limits_{D}{{f\left({x,y} \right) + g\left({x,y} \right)\,dA}} = \iint\limits_{D}{{f\left({x,y} \right)\,dA}} + \iint\limits_{D}{{g\left({x,y} \right)\,dA}}$
>
> 2. $\displaystyle \iint\limits_{D}{{cf\left({x,y} \right)\,dA}} = c\iint\limits_{D}{{f\left({x,y} \right)\,dA}}$, where c is any constant.
>
> 3. If the region $D$ can be split into two separate regions ${D_1}$ and ${D_2}$ then the integral can be written as $\iint\limits_{D}{{f\left({x,y} \right)\,dA}} = \iint\limits_{{{D_1}}}{{f\left({x,y} \right)\,dA}} + \iint\limits_{{{D_2}}}{{f\left({x,y} \right)\,dA}}$

> [!example] **Example**
> Evaluate the following integral over the given region $D$.
>
> $$
> \displaystyle \iint\limits_{D}{{{{\bf{e}}^{\frac{x}{y}}}\,dA}}, D = \left\{ {\left( {x,y} \right)|1 \le y \le 2,\,\,y \le x \le {y^3}} \right\}
> $$
>
> Okay, this first one is set up to just use the formula above so let’s do that.
>
> $$
> \begin{align*}\iint\limits_{D}{{{{\bf{e}}^{\frac{x}{y}}}\,dA}} & = \int_{{\,1}}^{{\,2}}{{\int_{{\,y}}^{{{y^3}}}{{{{\bf{e}}^{\frac{x}{y}}}\,dx}}\,dy}} = \int_{{\,1}}^{{\,2}}{{\left. {y\,{{\bf{e}}^{\frac{x}{y}}}} \right|_y^{{y^3}}\,dy}}\\ & = \int_{{\,1}}^{{\,2}}{{y\,{{\bf{e}}^{{y^2}}} - y{{\bf{e}}^1}\,dy}}\\ & = \left. {\left( {\frac{1}{2}{{\bf{e}}^{{y^2}}} - \frac{1}{2}{y^2}{{\bf{e}}^1}} \right)} \right|_1^2 = \frac{1}{2}{{\bf{e}}^4} - 2{{\bf{e}}^1}\end{align*}
> $$