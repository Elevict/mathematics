---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 13.8 Finding Extrema of Functions of 2 Variables

## Relative Extrema

> [!definition] **Definition** (Relative Minima and Maxima)
> 1. A function $f(x, y)$ has a relative minimum at the point $(a, b)$ if $f(x, y) \geq f(a, b)$ for all point $(x, y)$ in some region around $(a, b)$.
> 2. A function $f(x, y)$ has a relative maximum at the point $(a, b)$ if $f(x, y) \leq f(a, b)$ for all point $(x, y)$ in some region around $(a, b)$.

Next, we need to extend the idea of critical points up to functions of two variables. Recall that a critical point of a function $f(x)$ was a number $x = c$ so that either $f'(c) = 0$ or $f'(c)$ doesn't exist.

> [!definition] **Definition** (Critical Points)
> The point $(a, b)$ is a critical point of $f(x, y)$ provided one of the following is true,
> 1. $\nabla f(a, b) = \vec{0}$, or in other words $f_{x}(a, b) = 0$ and $f_{y}(a, b) = 0$
> 2. $f_{x}(a, b)$ and/or $f_{y}(a, b)$ doesn't exist.

> [!theorem] **Theorem**
> If the point $(a, b)$ is a relative extrema of the function $f(x, y)$ and the first order derivatives of $f(x, y)$ exist at $(a, b)$ then $(a, b)$ is also a critical point of $f(x, y)$ and in fact we'll have $\nabla f(a, b) = \vec{0}$.

*Proof*

Let's start off by defining $g(x) = f(x, b)$ and suppose that $f(x, y)$ has a relative extrema at $(a, b)$. However, this also means that $g(x)$ also has a relative extrema (of the same kind as $f(x, y)$) at $x = a$. By Fermat's Theorem, we then know that $g'(a) = 0$. But we also know that $g'(a) = f_{x}(a, b)$ and so we have that $f_{x}(a, b) = 0$.

If we now define $h(y) = f(a, y)$ and going through exactly the same process above we will see that $f_{y}(a, b) = 0$.

So, putting all this together means that $\nabla f(a, b) = \vec{0}$ and so $f(x, y)$ has a critical point at $(a, b)$.

$$
\tag*{\(\blacksquare\)}
$$

While we have to be careful to not misinterpret the results of this fact it is very useful in helping us to identify relative extrema. Because of this fact we know that if we have all the critical points of a function then we also have every possible relative extrema for the function. The fact tells us that all relative extrema must be critical points so we know that if the function does have relative extrema then they must be in the collection of all the critical points. Remember however, that it will be completely possible that at least one of the critical points won’t be a relative extrema.

So, once we have all the critical points in hand all we will need to do is test these points to see if they are relative extrema or not. To determine if a critical point is a relative extrema (and in fact to determine if it is a minimum or a maximum) we can use the following fact.

Suppose that $(a, b)$ is a critical point of $f(x, y)$ and that the second order partial derivatives are continuous in some region that contains $(a, b)$. Next define the hessian matrix for $f(x, y)$,

> [!theorem] **Theorem** (Classification of a Critical Point)
>
> $$
> D = D(a, b) = \det \begin{bmatrix}
> f_{xx}(a, b) & f_{xy}(a, b) \\
> f_{yx}(a, b) & f_{yy}(a, b)
> \end{bmatrix}
> $$
>
> We then have the following classifications of the critical point.
>
> 1. If $D > 0$ and $f_{xx}(a, b) > 0$ then there is a relative minimum at $(a, b)$.
> 2. If $D > 0$ and $f_{xx}(a, b) < 0$ then there is a relative maximum at $(a, b)$.
> 3. If $D < 0$ then the point $(a, b)$ is a saddle point.
> 4. If $D = 0$ then the point $(a, b)$ may be a relative minimum, relative maximum, or a saddle point. Other techniques would be needed to classify the point.

Note that if $D > 0$ then both $f_{xx}(a, b)$ and $f_{yy}(a, b)$ will have the same sign and so in the first two cases above we could just as easily replace $f_{xx}(a, b)$ with $f_{yy}(a, b)$. Also note that we aren't going to be seeing any cases in this class where $D = 0$ as these can often be quite difficult to classify. We will be able to classify all the critical points that we find.

> [!example] **Example** (Find the Relative Minima and Maxima)
> Find and classify all the critical points of $f(x, y) = 4 + x^{3} + y^{3} - 3xy$
>
> $$
> \begin{align}
> f_{x}(x, y) = 3x^{2}-3y \\
> f_{y}(x, y) = 3y^{2}-3x \\ \\
> 
> 0 = 3(x^{2}-y) \\
> 0 = 3(y^{2}-x) \\ \\
> 
> 0 = x^{2}-y \\
> x = y^{2} \\ \\
> 0 = y^{4} - y \\
> 0 = y(y^{3}-1) \\
> 0 = y(y-1)(y^{2}+y+1)
> \end{align}
> $$
>
> This implies that the critical points are at $y = 0$ and $y = 1$ as real solutions. Plugging it back up, we get that $x = 0$ and $x = 1$ respectively. Therefore we have two points to test, that being $(0, 0)$ and $(1, 1)$.
>
> $$
> \begin{align}
> f_{xx}(x, y) &= 6x \\
> f_{yy}(x, y) &= 6y \\
> f_{xy}(x, y) &= -3  \\
> D(x, y) &= (6x)(6y) - (-3)^{2} = 36xy - 9
> \end{align}
> $$
>
> Now plug in the values,
>
> $$
> \begin{align}
> D(0, 0) &= -9 \\
> D(1, 1) &= 27
> \end{align}
> $$
>
> therefore at $(0, 0)$ we have a saddle point and at $D(1, 1)$ we have a relative minimum since $f_{xx}(1, 1) > 0$.

> [!example] **Example** (Find Relative Minima and Maxima)
> Find and classify all the critical points for $f(x, y) = 3x^{2}y + y^{3}-3x^{2}-3y^{2}+2$
>
> $$
> \begin{align}
> f_{x}(x, y) &= 6xy - 6x \\
> f_{y}(x, y) &= 3x^{2} + 3y^{2} - 6y \\
> f_{xx}(x, y) &= 6y-6 \\
> f_{yy}(x, y) &= 6y-6 \\
> f_{xy}(x, y) &= 6x \\ \\
> 
> D(x, y) &= (6y-6)(6y-6) - (6x)^{2} \\
> D(x, y) &= 36(y^{2}-2y+1) - 36x^{2} \\
> D(x, y) &= 36(y^{2}-x^{2}-2y+1)
> \end{align}
> $$
>
> Now we can find and compute the critical points after taking the partials and finding the Hessian determinant.
>
> $$
> \begin{align} \\
>  & 
> \begin{cases}
> 0 = 6xy - 6x \\
> 0 = 3x^{2} + 3y^{2} - 6y
> \end{cases} \\
>  & \begin{cases}
> 0 = 6x(y-1)\\
> 0 = x^{2}+y^{2}-2y
> \end{cases} \\
>  \\
>  & \to x = 0, \ y = 1
> \end{align}
> $$
>
> If $x = 0$, then we have that $0 = 0^{2} + y^{2} - 2y \to 0 = y(y-2)$ so $y = 0, -2$. This means we have critical points $(0, 0)$ and $(0, -2)$.
>
> if $y = 1$, then we have that $0 = x^{2} + 1^{2} - 2(1) \to 0 = x^{2} - 1 \to 0 = (x-1)(x+1)$ so $x = \pm1$. This means we have critical points $(1, 1)$ and $(-1, 1)$.
>
> Plugging them into $D(x, y)$ we get the following,
>
> $$
> \begin{align}
> D(0, 0) &= 36 > 0 \quad f_{xx}(0, 0) = -6 < 0 \\
> D(0, -2) &= 36 > 0 \quad f_{x x}(0, -2)= 6 > 0 \\
> D(1, 1) &= -36 < 0 \\
> D(-1, 1) &= -36 < 0
> \end{align}
> $$
>
> therefore we have that $(0, 0)$ is relative maximum, that $(0, -2)$ is relative minimum, and $(1, 1)$ and $(-1, 1)$ are both saddle points.

> [!example] **Example** (Determine Closest Point to Surface)
> Determine the point on the plane $4x - 2y + z = 1$ that is closest to the point $(-2, -1, 5)$.
>
> First, suppose we have any point on the plane $(x, y, z)$ and a point $(-2, -1, 5)$. Then the distance will be
>
> $$
> d = \sqrt{(x+2)^{2}+(y+1)^{2}+(z-5)^{2}}
> $$
>
> Now we would like to deal with two variables, so let $z = 1 - 4x + 2y$ since that is the plane we are working with.
>
> $$
> d = \sqrt{(x+2)^{2} + (y+1)^{2} + (-4-4x+2y)^{2}}
> $$
>
> Now since we differentiating, lets make our life easier and define our new function:
>
> $$
> f(x, y) = d^{2} = (x+2)^{2} + (y+1)^{2} + (-4-4x+2y)^{2}
> $$
>
> Now we approach it as normal
>
> $$
> \begin{align}
> f_{x}(x, y) &= 2(x+2) - 8(-4-4x+2y) = 2x+4+32+32x-16y = 36+34x-16y \\
> f_{y}(x, y) &= 2(y+1) + 4(-4-4x+2y) = 2y+2 -16 - 16x + 8y = 10y-16x-14 \\
> f_{xx}(x, y) &= 34 \\
> f_{yy}(x, y) &= 10 \\
> f_{xy}(x, y) &= -16
> \end{align}
> $$
>
> and now we compute the Hessian determinant,
>
> $$
> D(x, y) = 340 - (-16)^{2} = 84 > 0
> $$
>
> therefore any relative extrema we get will either be a minima or maxima. But notice that $f_{xx} > 0$ and therefore that means it is guaranteed to be a minima. Now lets solve the system of equations,
>
> $$
> \begin{align}
>  & \begin{cases}
> 36+34x-16y = 0 \\
> 10y-16x-14 = 0
> \end{cases} \\
>  & \to x = \frac{1}{34}(16y-36) = \frac{1}{17}(8y-18) \\
>  & \to y = -\frac{25}{21} \\
>  & \to x = -\frac{34}{21}
> \end{align}
> $$
>
> So this is our critical point that is guaranteed to be our minimum value. Finally we need to compute $z$.
>
> $$
> z = 1 - 4\left( -\frac{34}{21} \right) + 2\left( -\frac{25}{21} \right) = \frac{107}{21}
> $$
>
> So the point on the plane that is closest to $(-2, -1, 5)$ is $\left(-\frac{34}{21}, -\frac{25}{21}, \frac{107}{21} \right)$.

## Absolute Extrema

To figure out absolute extrema, first we define some terms.

> [!definition] **Definition** (Closure and Boundedness)
> 1. A region in $\mathbb{R}^{2}$ is closed if it includes its boundary. A region is called open if it doesn't include any of its boundary points.
> 2. A region in $\mathbb{R}^{2}$ is called bounded if it can be completely contained in a disk. In other words, a region will be bounded if it is finite.

Now note the following theorem guarantees the existence of absolute extrema, but not where they are.

> [!theorem] **Theorem** (Extreme Value Theorem)
> If $f(x, y)$ is continuous in some closed, bounded set $D$ in $\mathbb{R}^{2}$ then there are points in $D$, $(x_{1}, y_{1})$ and $(x_{2}, y_{2})$ so that $f(x_{1}, y_{1})$ is the absolute maximum and $f(x_{2}, y_{2})$ is the absolute minimum of the function in $D$.

Finding Absolute Extrema
1. Find all the critical points of the function that lie in the region $D$ and determine the function value at each of these points.
2. Find all extrema of the function on the boundary.
3. The largest and smallest values found in the first two steps are the absolute minimum and the absolute maximum of the function.

> [!example] **Example** (Finding all Extrema)
> Find the absolute minimum and absolute maximum of
>
> $$
> f(x, y) = x^{2} + 4y^{2} - 2x^{2}y + 4
> $$
>
> on the rectangle given by $-1 \leq x \leq 1$ and $-1 \leq y \leq 1$.
>
> ### Find the Pieces
>
> First, lets check out the first piece of the boundary, and to do so we need to set $y = -1$ and vary $x$.
>
> $$
> f(x, -1) = 3x^{2}+8
> $$
>
> This function has a maximum at $f(-1, -1) = f(1, -1) = 11$ and a minimum at $f(0, -1) = 8$.
>
> Next, the second piece. Set $y = 1$ and vary $x$.
>
> $$
> f(x, 1) = -x^{2} + 8
> $$
>
> This function has a maximum at $f(0, 1) = 8$ and a minimum at $f(-1, 1) = f(1, 1) = 7$.
>
> Next, the third piece. Set $x = -1$ and vary $y$.
>
> $$
> \begin{align}
> f(-1, y) &= 5 + 4y^{2} -2y \\
> f'(y)&= 8y - 2 \\
> 0 &= 2(4y-1 ) \\
> y &= \frac{1}{4}
> \end{align}
> $$
>
> and from this we have one critical point. The concavity is positive, so it will be a minimum at $\left(-1, \frac{1}{4} \right)$. Now test the extreme values with the relative minimum and we get $f\left(-1, \frac{1}{4} \right) = 4.75, f(-1, -1) = 11$ and $f(-1, 1) = 7$.
>
> Finally, the fourth piece. Set $x = 1$ and vary $y$.
>
> $$
> \begin{align}
> f(1, y) &= 4y^{2}-2y+5 \\
> f'(y) &= 8y-2 \\
> 0 &= 2(4y-1) \\
> y &= \frac{1}{4}
> \end{align}
> $$
>
> and this is our critical point. Since concavity is positive its a minimum at $\left(1, \frac{1}{4} \right)$. Now test the extreme values with the relative minimum and we get
> $f\left(1, \frac{1}{4} \right) = 4.75, f(1, -1) = 11, f(1, 1) = 7$.
>
> ### Find the Relative Extrema
>
> Recall that
>
> $$
> f(x, y) = x^{2} + 4y^{2} - 2x^{2}y + 4
> $$
>
> Now we take partial derivatives and find the Hessian determinant.
>
> $$
> \begin{align}
> f_{x}(x, y) &=2x-4xy \\
> f_{y}(x, y) &= 8y-2x^{2} \\
> f_{xx}(x, y) &= 2-4y \\
> f_{yy}(x, y) &= 8 \\
> f_{xy}(x, y) &= -4x \\
>  \\
> D(x, y) &= (2-4y)(8) - (-4x)^{2} = 8-32y - 16x^{2}
> \end{align}
> $$
>
> Now find the relative extrema using first derivative test.
>
> $$
> \begin{align}
> \begin{cases}
> 0 = 2x(1-2y) \\
> 0 = 2(4y-x^{2})
> \end{cases}
> \end{align}
> $$
>
> From the first equation we can see that $x = 0$ and also that $y = \frac{1}{2}$. Plugging this into our second equation we have that if $x = 0$ then $y = 0$. If $y = \frac{1}{2}$ then $x = \pm\sqrt{2}$. However note that our second pair of coordinates are out of the region, so we only care about $f(0, 0)$. This turns out to have $D(0, 0) = 8> 0$ and $f_{yy} = 8 > 0$ so this is a relative minimum. $f(0, 0) = 4$.
>
> ### Collecting the terms
>
> Now that we suffered through finding all possible extrema, let's take a look
>
> $$
> \begin{alignat}{2}
> f(0, 0) = 4 \quad &  f(-1, -1) = 11 \quad &&   f(1, -1) = 11 \\
> f(0, -1) = 8 \quad &  f(0, 1) = 8 \quad &&  f(-1, 1) = 7\\
> f(1, 1) = 7 \quad &  f\left( 1, \frac{1}{4} \right) = 4.75 \quad &&  f\left( -1, \frac{1}{4} \right) = 4.75
> \end{alignat}
> $$
>
> and so the absolute minimum is at $(0, 0)$ and the absolute maximum occurs at both $(1, -1)$ and $(-1, -1)$ since these two points give the largest value.