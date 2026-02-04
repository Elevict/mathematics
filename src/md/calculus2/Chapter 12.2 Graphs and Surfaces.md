---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 12.2 Graphs and Surfaces

We can use the graph of a function to visualize the graphs of related functions.

### Example 1

Let $f(x, y) = x^2 + y^2$. Describe in words the graphs of the following functions:

(a) $g(x, y) = x^2 + y^2 + 3$
(b) $h(x, y) = 5 - x^2 - y^2$
(c) $k(x, y) = x^2 + (y - 1)^2$

**Solution**

We know from that the graph of $f$ is a paraboloid, or a bowl, with its vertex at the origin. From this, we can work out what the graphs of $g$, $h$, and $k$ will look like.

(a) The function $g(x, y) = x^2 + y^2 + 3 = f(x, y) + 3$, so the graph of $g$ is the graph of $f$, but raised by 3 units.

(b) Since $-x^2 - y^2$ is the negative of $x^2 + y^2$, the graph of $-x^2 - y^2$ is a paraboloid opening downward. Thus, the graph of $h(x, y) = 5 - x^2 - y^2 = 5 - f(x, y)$ looks like a downward-opening paraboloid with vertex at $(0, 0, 5)$.

(c) The graph of $k(x, y) = x^2 + (y - 1)^2 = f(x, y - 1)$ is a paraboloid with vertex at $x = 0, y = 1$, since that is where $k(x, y) = 0$.

### Example 2

Describe the graph of $G(x, y) = e^{-(x^2 + y^2)}$. What symmetry does it have?

**Solution**

Since the exponential function is always positive, the graph lies entirely above the $xy$-plane. From the graph of $x^2 + y^2$, we see that $x^2 + y^2$ is zero at the origin and gets larger as we move farther from the origin in any direction. Thus, $e^{-(x^2 + y^2)}$ is 1 at the origin, and gets smaller as we move away from the origin in any direction. It can’t go below the $xy$-plane; instead, it flattens out, getting closer and closer to the plane. We say the surface is asymptotic to the $xy$-plane.

Now consider a point $(x, y)$ on the circle $x^2 + y^2 = r^2$. Since $G(x, y) = e^{-(x^2 + y^2)} = e^{-r^2}$, the value of the function $G$ is the same at all points on this circle. Thus, we say the graph of $G$ has circular symmetry.

## Cross-sections and the Graph of a Function

We have seen that a good way to analyze a function of two variables is to let one variable vary while the other is kept fixed.

For a function $f(x, y)$, the function we get by holding $x$ fixed and letting $y$ vary is called a cross-section of $f$ with $x$ fixed. The graph of the cross-section of $f(x, y)$ with $x = c$ is the curve, or cross-section, we get by intersecting the graph of $f$ with the plane $x = c$. We define a cross-section of $f$ with $y$ fixed similarly.

For example, the cross-section of $f(x, y) = x^2 + y^2$ with $x = 2$ is $f(2, y) = 4 + y^2$. The graph of this cross-section is the curve we get by intersecting the graph of $f$ with the plane perpendicular to the $x$-axis at $x = 2$.

## Linear Functions

Linear functions are central to single-variable calculus; they are equally important in multivariable calculus. You may be able to guess the shape of the graph of a linear function of two variables. (It’s a plane.) Let’s look at an example.

### Example 3

Describe the graph of $f(x, y) = 1 + x - y$.

**Solution**

The plane $x = a$ is vertical and parallel to the $yz$-plane. Thus, the cross-section with $x = a$ is the line $z = 1 + a - y$ which slopes downward in the $y$-direction. Similarly, the plane $y = b$ is parallel to the $xz$-plane. Thus, the cross-section with $y = b$ is the line $z = 1 + x - b$ which slopes upward in the $x$-direction. Since all the cross-sections are lines, you might expect the graph to be a flat plane, sloping down in the $y$-direction and up in the $x$-direction. This is indeed the case.

## When One Variable is Missing: Cylinders

Suppose we graph an equation like $z = x^2$ which has one variable missing. What does the surface look like? Since $y$ is missing from the equation, the cross-sections with $y$ fixed are all the same parabola, $z = x^2$. Letting $y$ vary up and down the $y$-axis, this parabola sweeps out the trough-shaped surface. The cross-sections with $x$ fixed are horizontal lines obtained by cutting the surface by a plane perpendicular to the $x$-axis. This surface is called a parabolic cylinder, because it is formed from a parabola in the same way that an ordinary cylinder is formed from a circle; it has a parabolic cross-section instead of a circular one.

