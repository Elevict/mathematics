---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 11.6 Cylinders and Surfaces in 3D

A cylinder is a surface traced out by translation of a plane curve along a straight line in space. For example, a parabola on the XY plane can move vertically along the z-axis and trace out a cylinder.

When the plane curve does change as you move across an axis in space, then we call that a surface.

## Cylinders

1. Equations have only 2 variables. These equations give a trace of the curve on the coordinate plane denoted by the given variables.
2. The curve is always going to get directed along the axis of the missing variable.
3. The curve/trace does not change as we move along the direction axis.

> [!example] **Example** (Graphing a Cylinder with the Trace as a Parabola)
>
> $$
> z = 4 - x^{2}
> $$
>
> - Two variables, therefore it is a cylinder.
> - The trace is going to be written on an $XZ$ plane.
> - The axis its traveling along is the y-axis.
>
> $$
> z = -x^{2} + 4
> $$
>
> - It is a parabola
> - Shifted up 4 units on the z-axis
> - Opening towards the negative z-axis.

> [!example] **Example** (Graphing a Cylinder with the Trace as an Ellipse)
>
> $$
> 9x^{2} + 4y^{2} = 36
> $$
>
> - Two variables, therefore it is a cylinder.
> - Trace is on the $XY$ plane.
> - The axis it is directed towards is the $z$ axis.
>
> $$
> \frac{x^{2}}{4} + \frac{y^{2}}{9} = 1
> $$
>
> - The $x$ intercepts are at $(2, 0, 0)$ and $(-2, 0, 0)$
> - The $y$ intercepts are $(0, 3, 0)$ and $(0, -3, 0)$

> [!example] **Example** (Graphing a Cylinder with a Known Function)
>
> $$
> zy = 1
> $$
>
> - Two variables, therefore it is a cylinder.
> - Trace is on the $YZ$ plane.
> - The axis it is directed towards is the $x$ axis.
>
> $$
> z = \frac{1}{y}
> $$
>
> - This is just like the $y=\frac{1}{x}$ graph, except now it just is coming at your in space.

## Surfaces

1. Have all three variables in the equation
2. Traces happen on coordinate planes, or on planes parallel to the coordinate planes.
3. The shape is going to change along the axis.

### Steps

1. Determine type of surface
2. Determine the direction axis
3. Find trace of the coordinate plane if you can
4. Find two other traces parallel to the trace you drew

### Ellipsoids

$$
\frac{x^{2}}{a^{2} } + \frac{y^{2}}{b^{2}} + \frac{z^{2}}{c^{2}} = 1
$$

**How to tell**
1. Everything is positive
2. Everything has a power of 2
3. Has a constant

The intercepts are at $(\pm a, 0, 0), (0, \pm b, 0), \text{ and } (0, 0, \pm c)$.

> [!example] **Example** (Ellipsoid)
>
> $$
> 9x^{2} +  4y^{2} + z^{2} = 36
> $$
>
> - It is a surface due to three variables.
> - Powers of two, all adding, and has a constant. It is an ellipsoid.
>
> $$
> \begin{align}
> \frac{x^{2}}{4} +  \frac{y^{2}}{9} + \frac{z}{36} = 1 \\
> \frac{x^{2}}{2^{2}} + \frac{y^{2}}{3^{2}} + \frac{z}{6^{2}} = 1
> \end{align}
> $$
>
> So the intercepts are going to be at $(\pm 2, 0, 0)$, $(0, \pm 3, 0)$, and $(0, 0, \pm 6)$.

### 1-Sheet Hyperboloids

$$
\frac{x^{2}}{a^{2} } + \frac{y^{2}}{b^{2}} - \frac{z^{2}}{c^{2}} = 1
$$

**How to tell**
1. Has only one negative term
2. Everything has a power of 2
3. Has a constant

The hyperboloid always travels along the axis that the term is negative on. In this case, it travels along the $z$ axis. It looks like an hourglass.

Set the negative term equal to 0 so you can solve for the the denominator. In this case, you would get that it would be $c$. Then, we want three traces at $z = \pm c$ and $z = 0$. This is because our traces will end up being circles.

> [!example] **Example** (1-Sheeted Hyperboloid)
>
> $$
> 9x^{2} + 9z^{2} - 4y^{2} = 36
> $$
>
> - it is a surface due to three variables.
> - Powers of two, one is subtracting, so it is a 1-sheet hyperboloid.
> - The axis its directed along is towards $y$.
>
> $$
> \frac{x^{2}}{4} - \frac{y^{2}}{9} + \frac{z^{2}}{4} = 1
> $$
>
> First, lets let $y = 0$ then we get
>
> $$
> \frac{x^{2}}{4} + \frac{z^{2}}{4} = 1
> $$
>
> which is a circle of radius 2 at the center directed along the y-axis. Now lets work on the other two traces.
>
> Let $y = \pm 3$, then we get
>
> $$
> \begin{align}
> \frac{x^{2}}{4} - \frac{9}{9} + \frac{z^{2}}{4} = 1 \\
> \frac{x^{2}}{4} + \frac{z^{2}}{4} = 2 \\
> \frac{x^{2}}{8} + \frac{z^{2}}{8} = 1 \\
> \end{align}
> $$
>
> which means at these $y$ coordinates we have a circle of radius $\sqrt{8} = 2\sqrt{2}$.

### 2-Sheet Hyperboloids

$$
- \frac{x^{2}}{a^{2} } - \frac{y^{2}}{b^{2}} + \frac{z^{2}}{c^{2}} = 1
$$

**How to tell**
1. Has only one positive term
2. Everything has a power of 2
3. Has a constant

- Standard form helps with traces, so convert it into the standard form.
- Also, it is always directed along the positive term.
- Set both of the negative terms equal to 0 to get the axis intercepts.
- Set the variable $z$ into numbers that can be divisible by $c$ and solve to get your other traces.

> [!example] **Example** (2-Sheeted Hyperboloid)
>
> $$
> \begin{align}
> -y^{2}+x^{2}+9z^{2}+9 = 0 \\
> x^{2}-y^{2}+9z^{2}=-9 \\
> -\frac{x^{2}}{9} + \frac{y^{2}}{9}-\frac{z^{2}}{1} = 1
> \end{align}
> $$
>
> - It is a surface due to having three variables.
> - It is a 2-sheet hyperboloid because it has only one positive term.
> - It is going along the $y$ axis.
>
> $z=x=0 \to \frac{y^{2}}{9} = 1 \to y = \pm 3$, which are our intercepts.
>
> $y = \pm 6 \to -\frac{x^{2}}{9} +\frac{36}{9} - \frac{z^{2}}{1} = 1 \to -\frac{x^{2}}{9} - \frac{z^{2}}{1} = -3 \to \frac{x^{2}}{27} + \frac{z^{2}}{3} = 1$

It should look like the image below but tilted by 180 degrees.

![[HyperboloidTwoSheeted_900.svg]]

## Cones

$$
\frac{x^{2}}{a^{2} } + \frac{y^{2}}{b^{2}} - \frac{z^{2}}{c^{2}} = 0
$$

**How to tell**
1. Has only one negative term (If 2, divide to make into one negative term)
2. Everything has a power of 2
3. Has no constant

The cone always travels along the axis that the term is negative on. Pretty much, you do what you would with a 1-sheet hyperboloid except you just need to solve for one point and the two traces.

> [!example] **Example** (Cone)
>
> $$
> \begin{align}
> z^{2} - 9x^{2} - 4y^{2} = 0 \\
> 9x^{2} + 4y^{2} - z^{2} = 0 \\
> \frac{x^{2}}{4} + \frac{y^{2}}{9} - \frac{z^{2}}{36} = 0
> \end{align}
> $$
>
> Our cone always goes through the origin at one point. Now lets use $z = \pm 6$, which gives us $\frac{x^{2}}{4} + \frac{y^{2}}{9} = 1$ which is an ellipse. The ellipse is of size ${} x = \pm 2 {}$ on the $x$ axis and size $y = \pm 3$ on the $y$ axis.

## Paraboloids

$$
\frac{x^{2}}{a^{2} } + \frac{y^{2}}{b^{2}} = cz
$$

**How to tell**
1. 3 variables with two squared terms
2. Variable with square terms are positive

The paraboloid opens along the axis of the variable with degree one. In our case, it will open along the $z$ axis. The coefficient of that degree 1 term tells us if it opens on the positive size of the axis or the negative size of the axis. Positive $c$ tells us it opens on the positive side and vice versa.

Set the degree 1 variable to 0 to get your trace on a coordinate plane. This works only if the paraboloid is shifted, otherwise you get a vertex.

> [!example] **Example** (Paraboloid)
> $$
> \begin{align}
> z &= x^{2} + 4y^{2} - 4 \\
> z + 4 &= x^{2} + 4y^{2} \\
> 
> \end{align}
> $$
> - Parabola opening along z-axis toward the positive side.
> - Shift down of 4 spots for the $z$ axis.
> 
> Now lets set $z = 0$, and we end up getting
> $$
> \begin{align}
> x^{2} + 4y^{2} = 4 \\
> \frac{x^{2}}{4} + \frac{y^{2}}{1} = 1
> \end{align}
> $$
> so we know that this is an ellipse at $z = 0$. And we also know its shifted down by 4, so we have an intercept at $(0, 0, -4)$. This makes it easy to draw our paraboloid.

### Hyperbolic Paraboloids

$$
\frac{x^{2}}{a^{2}} - \frac{y^{2}}{b^{2}} = cz
$$

**How to tell**
1. 3 variables with 2 variables being squared.
2. One square variable has a negative

> [!example] **Example** (Hyperbolic Paraboloid)
> $$
> \begin{align}
> x^{2} - y^{2} - z = 0 \\
> x^{2} - y^{2} = z
> \end{align}
> $$
> - Hyperbolic paraboloid opens along the $z$-axis.
> 
> Note that $z = 1$ leads to $x^{2}-y^{2} = 1$ which is a hyperbola along the $x$ axis (Two parabolas along $x$ axis on opposite sides). Whereas if we let $z = -1$ it leads to $y^{2} - x^{2} = 1$ which is a hyperbola along the $y$ axis (Two parabolas along $y$ axis on opposite sides).

