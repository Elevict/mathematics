---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 15.3 how to Compute line Integrals

First, lets proceed to show the definition of a line integral and then conceptualize it from there.

> [!definition] **Definition** (Line Integral)
> The **line integral** of $f(x, y)$ along $C$ is denoted by
>
> $$
> \int_{C} f(x, y) \ ds
> $$

Notice that we use $ds$ here to acknowledge that we are moving along the curve $C$ instead of the $x$-axis denoted $dx$ or the $y$-axis denoted $dy$. Due to this, $ds$ is called the line integral of $f$ with respect to arc length.

Now, of course we would like to use parametric equations to integrate our line integral, so we would simply just replace $x$ and $y$ in our function with the parametric forms $x=h(t)$ and $y = g(t)$. This traces values obtained by the function as you go across the curve. And finally, we need a length across the curve since we already have our heights, which would be contained in our differential $ds$.

> [!definition] **Definition** (Line Integral in Terms of Parametric Function)
>
> $$
> \int\limits_{C}{{f\left( {x,y} \right)\,ds}} = \int_{{\,a}}^{{\,b}}{{f\left( {h\left( t \right),g\left( t \right)} \right)\sqrt {{{\left( {\frac{{dx}}{{dt}}} \right)}^2} + {{\left( {\frac{{dy}}{{dt}}} \right)}^2}} \,dt}}
> $$

See how we have the heights on the left side and the length of the curve on the right side all integrated with respect to time? This ultimately gives us area, which you can think of as a curtain under the function. We can use a vector form of parameterization to simplify the notation up, whereby we let:

$$
\sqrt {{{\left( {\frac{{dx}}{{dt}}} \right)}^2} + {{\left( {\frac{{dy}}{{dt}}} \right)}^2}} = \left\| {\,\vec r'\left( t \right)} \right\|
$$

which results in the following more concrete and usable definition,

> [!definition] **Definition** (Line Integral in Terms of Parametric Function)
>
> $$
> \int\limits_{C}{{f\left( {x,y} \right)\,ds}} = \int_{{\,a}}^{{\,b}}{{f\left( {h\left( t \right),g\left( t \right)} \right)\,\,\left\| {\,\vec r'\left( t \right)} \right\|\,dt}}
> $$

Let’s take a look at an example of a line integral.

> [!example] **Example** (Line Integral)
> Evaluate $\displaystyle \int\limits_{C}{{x{y^4}\,ds}}$ where $C$ is the right half of the circle, ${x^2} + {y^2} = 16$ traced out in a counter clockwise direction.
>
> We first need a parameterization of the circle. This is given by,
>
> $$
> {} x = 4\cos t\hspace{0.25in}y = 4\sin t
> $$
>
> We now need a range of t’s that will give the right half of the circle. The following range of t’s will do this.
>
> $$
> \frac{\pi }{2} \le t \le \frac{\pi }{2}
> $$
>
> Now, we need the derivatives of the parametric equations and let’s compute ds.
>
> $$
> \begin{align*}\frac{{dx}}{{dt}} & = - 4\sin t\hspace{0.25in}\hspace{0.25in}\frac{{dy}}{{dt}} = 4\cos t\\ ds & = \sqrt {16{{\sin }^2}t + 16{{\cos }^2}t} \,dt = 4\,dt\end{align*}
> $$
>
> The line integral is then,
>
> $$
> \begin{align*}\int\limits_{C}{{x{y^4}\,ds}} & = \int_{{\, - {\pi }/{2}\;}}^{{\,{\pi }/{2}\;}}{{4\cos t{{\left( {4\sin t} \right)}^4}\left( 4 \right)dt}}\\ & = 4096\int_{{\, - {\pi }/{2}\;}}^{{\,{\pi }/{2}\;}}{{\cos t\,\,{{\sin }^4}t\,dt}}\\ & = \left. {\frac{{4096}}{5}{{\sin }^5}t} \right|_{ - \frac{\pi }{2}}^{\frac{\pi }{2}}\\ & = \frac{{8192}}{5}\end{align*}
> $$

Finally, we can generalize line integral to also be applied in three-dimensional space where a curve is being traced out as well.

> [!definition] **Definition** (Three Dimensional Line Integral)
>
> $$
> \int\limits_{C}{{f\left( {x,y,z} \right)\,ds}} = \int_{{\,a}}^{{\,b}}{{f\left( {x\left( t \right),y\left( t \right),z\left( t \right)} \right)\,\,\left\| {\vec r'\left( t \right)} \right\|\,dt}}
> $$

Sometimes, you might not be integrating with respect to $ds$ and instead you will have it be in the form $dx + dy + dz$ which is a differential form. In this case, its significantly easier since you have the components of $ds$ written out directly. Let's do an example showcasing this.

> [!example] **Example** (Integrating a Differential Form)
> Let $C: (1, 2) \to (3, 4)$, then find the integral $\int_{C} xy \ dx + (x+y) \ dy$.
>
> First note that we need the parametrization of the curve $C$, which is simply
>
> $$
> \begin{align}
> C: & \ (1-t)(1, 2) + t(3, 4) \\
> C: & \ (1-t+3t, 2-2t+4t) \\
> C: & \ (1+2t, 2+2t)
> \end{align}
> $$
>
> and we know that
>
> $$
> x = 1 + 2t \quad \quad y = 2 + 2t
> $$
>
> which we can find the differentials for easily by taking the derivative
>
> $$
> dx = 2 dt \quad \quad dy = 2 dt
> $$
>
> and now we plug it back into the integral and solve
>
> $$
> \begin{align}
> &\int_{t = 0}^{t=1} \ (1+2t)(2+2t) \cdot  2dt + [(1+2t) + (2+2t)] \cdot  2dt \\
> &= \int_{0}^{1} [(1+2t)(2+2t)2 + 2[(1+2t)+(2+2t)]] \ dt \\
> &= \frac{68}{3}
> \end{align}
> $$

Now notice how in our differential form representation we take the derivatives of our functions in parametric form. Let's call our parametric function a vector field now, that being $\vec{r}(t)$.  Then we get the following

> [!theorem] **Theorem** (Integrating Differential Forms into Work Integration)
> Given that $\vec{r}(t) = P(x(t), y(t), z(t))\hat{i} + Q(x(t), y(t), z(t))\hat{j} + R(x(t), y(t), z(t))\hat{k}$ then
>
> $$
> \int_{C} \ P(x, y, z)dx + Q(x, y, z)dy + R(x, y, z)dz = \int_{C} F(\vec{r}(t)) \cdot  \vec{r}'(t) \ dt
> $$

Now note that this really just tells us how much work is done with a particle moving along a curve with some external forces. That curve is represented by a vector function $\vec{r}$ through a vector field $\vec{F}$. You can think of the differential $dx$ as the amount of work done along the $x$ direction, being $P$. Likewise the amount of work done on the $y$-direction is $Q$ and etc.

> [!example] **Example** (Finding Work Done on a Particle)
> Find work done by moving along the parabola $y = x^{2}$ from $(-1, 1) \to (2, 4)$ given the vector field $F(x, y) = xe^{y}\hat{i} + y \hat{j}$.
>
> First we parameterize using a trivial parameterization,
>
> $$
> x = t \quad \quad y = t^{2} \quad \quad -1 \leq t \leq 2
> $$
>
> Now we substitute it into the vector field,
>
> $$
> \begin{align}
> \vec{F}(x, y) &= xe^{y}\hat{i} + y \hat{j} \\
> \vec{F}(t) &= te^{t^{2}}\hat{i} + t^{2}\hat{j}
> \end{align}
> $$
>
> and also we want to get the curve,
>
> $$
> \begin{align}
> \vec{r}(t) &= x \hat{i} + y \hat{j} \\
> &=t\hat{i} + t^{2}\hat{j} \\
> r'(t) &= \hat{i} + 2t\hat{j}
> \end{align}
> $$
>
> then finally we find the dot product of the two,
>
> $$
> \begin{align}
> \vec{F}(t) \cdot  \vec{r}'(t) &= (te^{t^{2}}\hat{i} + t^{2}\hat{j}) \cdot  (\hat{i} + 2t\hat{j}) \\
> &= te^{t^{2}} + 2t^{3}
> \end{align}
> $$
>
> and finally get the integral.
>
> $$
> \begin{align}
> \int_{-1}^{2} te^{t^{2}} + 2t^{3} \ dt = \frac{e^{4} - e + 15}{2}
> \end{align}
> $$
