---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 15.4 line Integrals on Conservative Vector Fields

Recall the definition of a conservative vector field.

> [!definition] **Definition** (Conservative Vector Field and the Potential Function)
> A vector field $\vec F$ is called a **conservative vector field** if there exists a function $f$ such that $\vec F = \nabla f$. If $\vec F$ is a conservative vector field then the function, $f$, is called a **potential function** for $\vec F$.

Note that we can quickly check that a vector field is conservative by checking to see if the $\text{curl} (F) = 0$. The reason why is because if there exists some fluid that is rotating around, that means that we have energy loss occurring around that region of space and having that energy transferred into that vortex.

From this, we have that if $F(x, y) = P \hat{i} + Q \hat{j}$ then we only need to check that $\frac{ \partial Q }{ \partial x } = \frac{ \partial P }{ \partial y }$ which is the curl of that particular vector field. You can justify this by imagining that you have some fluid going in the $x$ direction and want to see how much of that $x$ direction fluid is going in the $y$ direction. Likewise, how the $y$ direction fluid is going in the direction of $x$. If they are equal, the rotations cancel and you have the curl being ultimately $\frac{ \partial Q }{ \partial x } - \frac{ \partial P }{ \partial y }$.

Likewise for $F(x, y, z)$ we can compute the curl by just using the determinant definition which is significantly easier.

> [!example] **Example** (Determining Whether a Vector Field is Conservative)
> Determine if the following vector field is conservative or not.
>
> $$
> \begin{align}
> \vec{F}(x, y) &= (x^{2} - yx)\hat{i} + (y^{2} - xy)\hat{j}\\
> P(x, y) = x^{2} - yx &\quad Q(x, y) = y^{2} - xy\\ \\
> 
> \frac{ \partial Q }{ \partial x } &= \frac{ \partial P }{ \partial y }  \\
> -y &= -x
> \end{align}
> $$
>
> Since the partial derivatives are different, this implies that this vector field is not conservative.

Now that we know how to identify if a two-dimensional vector field is conservative we need to address how to find a potential function for the vector field. This is actually a fairly simple process. First, let’s assume that the vector field is conservative and so we know that a potential function, $f\left({x,y} \right)$ exists. We can then say that,

$$
\nabla f = \frac{{\partial f}}{{\partial x}}\,\vec i + \frac{{\partial f}}{{\partial y}}\,\vec j = P\,\vec i + Q\,\vec j = \vec F
$$

By integrating each of these with respect to the appropriate variable we can arrive at the following two equations.

> [!theorem] **Theorem** (Potential Fields from Conservative Vector Field)
>
> $$
> f\left( {x,y} \right) = \int{{P\left( {x,y} \right)\,dx}}\hspace{0.5in}{\mbox{or}}\hspace{0.5in}f\left( {x,y} \right) = \int{{Q\left( {x,y} \right)\,dy}}
> $$

> [!example] **Example** (Find the Potential Function for the Vector Field)
> Determine if the following vector field is conservative and find a potential function for the vector field if it is conservative.
>
> $$
> \vec F = \left( {2{x^3}{y^4} + x} \right)\vec i + \left( {2{x^4}{y^3} + y} \right)\vec j
> $$
>
> First verify if vector field conservative.
>
> $$
> \begin{align*}P & = 2{x^3}{y^4} + x &\hspace{0.5in}\frac{{\partial P}}{{\partial y}} & = 8{x^3}{y^3}\\ Q & = 2{x^4}{y^3} + y & \hspace{0.5in}\frac{{\partial Q}}{{\partial x}} & = 8{x^3}{y^3}\end{align*}
> $$
>
> Great, now we need to find the potential function. So lets find the partial derivatives we need.
>
> $$
> \frac{{\partial f}}{{\partial x}} = 2{x^3}{y^4} + x\hspace{0.5in}\frac{{\partial f}}{{\partial y}} = 2{x^4}{y^3} + y
> $$
>
> And now we can take either of these integrals to get our potential function.
>
> $$
> f\left( {x,y} \right) = \int{{2{x^3}{y^4} + x\,dx}}\hspace{0.25in}{\mbox{or}}\hspace{0.25in}\,\,\,\,f\left( {x,y} \right) = \int{{2{x^4}{y^3} + y\,dy}}
> $$
>
> Lets use the integral on the left side, and also we treat $y$ as a constant and our constant of integration is a function of $y$ since is a constant.
>
> $$
> \begin{align*}f\left( {x,y} \right) & = \int{{2{x^3}{y^4} + x\,dx}}\\ & = \frac{1}{2}{x^4}{y^4} + \frac{1}{2}{x^2} + h\left( y \right)\end{align*}
> $$
>
> We now need to determine $h\left(y \right)$. This is easier than it might at first appear to be. To get to this point we’ve used the fact that we knew $P$, but we will also need to use the fact that we know $Q$ to complete the problem. Recall that $Q$ is really the derivative of $f$ with respect to $y$. So, if we differentiate our function with respect to $y$ we know what it should be.
>
> So, let’s differentiate $f$ (including the $h\left(y \right)$) with respect to $y$  and set it equal to $Q$ since that is what the derivative is supposed to be.
>
> $$
> \frac{{\partial f}}{{\partial y}} = 2{x^4}{y^3} + h'\left( y \right) = 2{x^4}{y^3} + y = Q
> $$
>
> From this we can see that,
>
> $$
> h'\left( y \right) = y
> $$
>
> Notice that since $v$ is a function only of $y$ so if there are any $x$’s in the equation at this point we will know that we’ve made a mistake. At this point finding $h\left(y \right)$ is simple.
>
> $$
> h\left( y \right) = \int{{h'\left( y \right)\,dy}} = \int{{y\,dy}} = \frac{1}{2}{y^2} + c
> $$
>
> So, putting this all together we can see that a potential function for the vector field is,
>
> $$
> f\left( {x,y} \right) = \frac{1}{2}{x^4}{y^4} + \frac{1}{2}{x^2} + \frac{1}{2}{y^2} + c
> $$
>
> Note that we can always check our work by verifying that $\nabla f = \vec F$. Also note that because the c can be anything there are an infinite number of possible potential functions, although they will only vary by an additive constant.