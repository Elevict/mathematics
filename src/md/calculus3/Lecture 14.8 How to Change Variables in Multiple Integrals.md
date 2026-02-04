---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 14.8 how to Change Variables in Multiple Integrals

Recall that when you do a $u$-substitution and change the variables, you often needed to change the differential.

$$
\int_{{\,a}}^{{\,b}}{{f\left( {g\left( x \right)} \right)\,g'\left( x \right)\,dx}} = \int_{{\,c}}^{{\,d}}{{f\left( u \right)\,du}}\hspace{0.25in}{\mbox{where }}u = g\left( x \right)
$$

In essence this is taking an integral in terms of $x$’s and changing it into terms of $u$s. We want to do something similar for double and triple integrals. In fact we’ve already done this to a certain extent when we converted double integrals to polar coordinates and when we converted triple integrals to cylindrical or spherical coordinates. The main difference is that we didn’t actually go through the details of where the formulas came from. If you recall, in each of those cases we commented that we would justify the formulas for $dA$ and $dV$ eventually. Now is the time to do that justification.

While often the reason for changing variables is to get us an integral that we can do with the new variables, another reason for changing variables is to convert the region into a nicer region to work with. When we were converting the polar, cylindrical or spherical coordinates we didn’t worry about this change since it was easy enough to determine the new limits based on the given region. That is not always the case however. So, before we move into changing variables with multiple integrals we first need to see how the region may change with a change of variables.

First, we need a little terminology/notation out of the way. We call the equations that define the change of variables a **transformation**. Also, we will typically start out with a region, $R$, in $xy$-coordinates and transform it into a region in $uv$-coordinates.

> [!example] **Example** (Transformations of a Region)
> Determine the new region that we get by applying the given transformation to the region $R$.
>
> $R$ is the ellipse ${x^2} + \frac{{{y^2}}}{{36}} = 1$ and the transformation is $x = \frac{u}{2}, y = 3v$.
>
> Just substitute in the values and simplify.
>
> $$
> \begin{align*}{\left( {\frac{u}{2}} \right)^2} + \frac{{{{\left( {3v} \right)}^2}}}{{36}} & = 1\\ \frac{{{u^2}}}{4} + \frac{{9{v^2}}}{{36}} & = 1\\ {u^2} + {v^2} & = 4\end{align*}
> $$
>
> So, we started out with an ellipse and after the transformation we had a disk of radius 2.

> [!example] **Example** (Transformation of a Region That is Enclosed)
> $R$ is the region bounded by $y = - x + 4, y = x + 1$, and $\displaystyle y = \frac{x}{3} - \frac{4}{3}$ and the transformation is $\displaystyle x = \frac{1}{2}\left({u + v} \right), \displaystyle y = \frac{1}{2}\left({u - v} \right)$.
>
> As with the first part we’ll need to plug the transformation into the equation, however, in this case we will need to do it three times, once for each equation. Before we do that let’s sketch the graph of the region and see what we’ve got.
>
> ![[Lecture 14.8 How to Change Variables in Multiple Integrals-20241130060340979.png]]
>
> So, we have a triangle. Now, let’s go through the transformation. We will apply the transformation to each edge of the triangle and see where we get.
>
> Let’s do $y = - x + 4$ first. Plugging in the transformation gives,
>
> $$
> \begin{align*}\frac{1}{2}\left( {u - v} \right) & = - \frac{1}{2}\left( {u + v} \right) + 4\\ u - v & = - u - v + 8\\ 2u & = 8\\ u & = 4\end{align*}
> $$
>
> The first boundary transforms very nicely into a much simpler equation.
>
> Now let’s take a look at $y = x + 1$,
>
> $$
> \begin{align*}\frac{1}{2}\left( {u - v} \right) & = \frac{1}{2}\left( {u + v} \right) + 1\\ u - v & = u + v + 2\\ - 2v & = 2\\ v & = - 1\end{align*}
> $$
>
> Again, a much nicer equation that what we started with.
>
> Finally, let’s transform $y = \frac{x}{3} - \frac{4}{3}$.
>
> $$
> \begin{align*}\frac{1}{2}\left( {u - v} \right) & = \frac{1}{3}\left( {\frac{1}{2}\left( {u + v} \right)} \right) - \frac{4}{3}\\ 3u - 3v & = u + v - 8\\ 4v & = 2u + 8\\ v & = \frac{u}{2} + 2\end{align*}
> $$
>
> So, again, we got a somewhat simpler equation, although not quite as nice as the first two.
>
> Let’s take a look at the new region that we get under the transformation.
>
> ![[Lecture 14.8 How to Change Variables in Multiple Integrals-20241130060537241.png]]

Now that we’ve seen a couple of examples of transforming regions we need to now talk about how we actually do change of variables in the integral. We will start with double integrals. In order to change variables in a double integral we will need the **Jacobian** of the transformation. Here is the definition of the Jacobian.

> [!definition] **Definition** (Jacobian)
> The **Jacobian** of the transformation $x = g\left({u,v} \right), y = h\left({u,v} \right)$ is
>
> $$
> \frac{{\partial \left( {x,y} \right)}}{{\partial \left( {u,v} \right)}} = \left| {\begin{array}{*{20}{c}}{ \displaystyle \frac{{\partial x}}{{\partial u}}}&{ \displaystyle \frac{{\partial x}}{{\partial v}}}\\{ \displaystyle \frac{{\partial y}}{{\partial u}}}& \displaystyle {\frac{{ \partial y}}{{\partial v}}}\end{array}} \right|
> $$
>
> which conceptually tells you how much the area formed by the coordinates $(x, y)$ stretch or shrink in the new coordinate space $(u, v)$.

> [!theorem] **Theorem** (Change of Variables for a Double Integral)
> Suppose that we want to integrate $f\left({x,y} \right)$ over the region $R$. Under the transformation $x = g\left({u,v} \right), y = h\left({u,v} \right)$ the region becomes $S$ and the integral becomes,
>
> $$
> \iint\limits_{R}{{f\left( {x,y} \right)\,dA}} = \iint\limits_{S}{{f\left( {g\left( {u,v} \right),h\left( {u,v} \right)} \right)\left| {\frac{{\partial \left( {x,y} \right)}}{{\partial \left( {u,v} \right)}}} \right|\,d\overline{A}}}
> $$

Conceptually, this means that if we want to change our variables we just need to directly substitute in the variables. But of course substitution impacts the overall volume being integrated out, so we need to add a term that tells us by how much space is being squished or stretched. That term is the Jacobian.

> [!example] **Example** (Differential of Polar Coordinate Transformation)
> Show that when changing to polar coordinates we have $dA=rdrdθ$
>
> The transformation here is the standard conversion formulas,
>
> $$
> x = r\cos \theta \hspace{0.25in}\hspace{0.25in}y = r\sin \theta
> $$
>
> The Jacobian for this transformation is,
>
> $$
> \begin{align*}\frac{{\partial \left( {x,y} \right)}}{{\partial \left( {r,\theta } \right)}} & = \left| {\begin{array}{*{20}{c}}{\displaystyle \frac{{\partial x}}{{\partial r}}}&{\displaystyle \frac{{\partial x}}{{\partial \theta }}}\\\displaystyle {\frac{{\partial y}}{{\partial r}}}&\displaystyle {\frac{{\partial y}}{{\partial \theta }}}\end{array}} \right|\\ & = \left| {\begin{array}{*{20}{c}}{\cos \theta }&{ - r\sin \theta }\\{\sin \theta }&{r\cos \theta }\end{array}} \right|\\ & = r{\cos ^2}\theta - \left( { - r{{\sin }^2}\theta } \right)\\ & = r\left( {{{\cos }^2}\theta + {{\sin }^2}\theta } \right)\\ & = r\end{align*}
> $$
>
> We then get,
>
> $$
> dA = \left| {\frac{{\partial \left( {x,y} \right)}}{{\partial \left( {r,\theta } \right)}}} \right|\,dr\,d\theta = \left| r \right|dr\,d\theta = r\,dr\,d\theta
> $$