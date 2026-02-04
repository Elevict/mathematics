---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 11.7 Using Cylindrical and Spherical Coordinates

## Cylindrical Coordinates

Cylindrical coordinates are just polar coordinates with a $z$ component. In other words, we have that polar ${} (r, \theta) {}$ turns into cylindrical $(r, \theta, z)$.

There are some identities you need to know to convert between the different coordinate systems. To convert from cylindrical coordinates over to rectangular coordinates, you use the following identities.

$$
\begin{align}
x &= r\cos \theta\\
y &= r\sin \theta\\
z &= z \\
\end{align}
$$

Likewise, to convert from rectangular coordinates over to cylindrical coordinates you need to use these following identities.

$$
\begin{align}
r^{2} &= x^{2} + y^{2} \\
\tan \theta &= \frac{y}{x} \\
z&= z
\end{align}
$$

Note that $r$ is the distance from the origin to the point that is projected on the $XY$ plane. The angle this projection makes on the plane compared to the $x$-axis is our $\theta$ value.

![[Lecture 11.7 Using Cylindrical and Spherical Coordinates 2024-08-17 22.16.49.excalidraw|center]]

> [!example] **Example** (Cylindrical to Rectangular Coordinates)
>
> $$
> \left( 3, -\frac{\pi}{6}, 2 \right) \to r = 3, \theta = -\frac{\pi}{6}, z = 2
> $$
>
> We are in quadrant 4 and also in octant 4.
>
> $$
> \begin{align}
> x &= 3 \cos \left( -\frac{\pi}{6} \right) = 3 \frac{\sqrt{3}}{2} \\
> y &= 3\sin \left(  -\frac{\pi}{6} \right) = -\frac{3}{2} \\
> z &= 2
> \end{align}
> $$

> [!example] **Example** (Rectangular to Cylindrical Coordinates)
>
> $$
> (\sqrt{2}, -\sqrt{2}, 4) \to x= \sqrt{2}, \ y=-\sqrt{2}, \ z=4
> $$
>
> We are in quadrant 4 and also in octant 4.
>
> $$
> \begin{align}
> r^{2} &= x^{2} + y^{2} \\
> r^{2} &= (\sqrt{2})^{2} + (-\sqrt{2})^{2} \\
> r^{2} &= 4 \\
> r &= \pm 2 \\
> \theta &= \tan \left( \frac{y}{x} \right) \\
> \theta &= \tan \left( -\frac{\sqrt{2}}{\sqrt{2}} \right) = \tan(-1) \\
> \theta &= \frac{3\pi}{4}, \frac{7\pi}{4}
> \end{align}
> $$
>
> We chose $\theta = \frac{7\pi}{4}$ because it is in quadrant 4 as we desire. Therefore we have two valid cylindrical coordinates which are:
>
> $$
> \left( 2, \frac{7\pi}{4}, 4 \right), \left( -2, \frac{3\pi}{4}, 4 \right)
> $$

## Spherical Coordinates

Spherical coordinates uses the distance from the origin to the point directly, which is called $\rho$. You can think of it as a radius of a sphere. It also has a $\theta$ which is the same as in the case with cylindrical coordinates. Finally, it has another angle called $\phi$ which is the angle from the $z$ axis.

$$
\rho \geq 0, \quad 0 \leq \theta \leq 2\pi, \quad 0 \leq \phi \leq \pi
$$

![[Lecture 11.7 Using Cylindrical and Spherical Coordinates 2024-08-17 22.38.19.excalidraw|center]]

To convert from spherical coordinates to rectangular coordinates, we have the following equations.

$$
\begin{align}
x &= r \cos \theta \\
y &= r \sin \theta \\
r &= \rho \sin \phi \\
z &= \rho \sin \phi \cos \theta \\
y &= \rho \sin \phi \sin \theta \\
z &= \rho \cos(\phi)
\end{align}
$$

Note that these are just the polar coordinates, except we just have $r$ being substituted in for the newfound value. Now going back from spherical variables over to rectangular variables we do the following.

$$
\begin{align}
\rho^{2} &= x^{2} + y^{2} + z^{2} \\
\tan(\theta) &= \frac{y}{x} \\
\cos \theta &= \frac{z}{\rho}
\end{align}
$$

> [!example] **Example** (Spherical to Rectangular Coordinates)
> Try converting the following from spherical over to rectangular coordinates:
>
> $$
> \left( 3, \frac{\pi}{4}, \frac{3\pi}{4} \right) \to \rho = 3, \quad \theta = \frac{\pi}{4}, \quad \phi = \frac{3\pi}{4}
> $$
>
> then we have that
>
> $$
> \begin{align}
> x &= \rho \sin \phi \cos \theta = 3 \sin\left( \frac{3\pi}{4} \right) \cos\left( \frac{\pi}{4} \right) = 3\left( \frac{\sqrt{2}}{2} \right)\left( \frac{\sqrt{2}}{2} \right) = \frac{3}{2} \\
> y &= \rho \sin \phi \cos \theta = 3 \sin\left( \frac{3\pi}{4} \right) \sin\left( \frac{\pi}{4} \right) = 3\left( \frac{\sqrt{2}}{2} \right)\left( \frac{\sqrt{2}}{2} \right) = \frac{3}{2 \\} \\
> z &= 3 \cos\left( \frac{3\pi}{4} \right) = 3\left( -\frac{\sqrt{2}}{2} \right) = -\frac{3\sqrt{2}}{2}
> \end{align}
> $$
>
> so our coordinate is $\left(\frac{3}{2}, \frac{3}{2}, -\frac{3\sqrt{2}}{2} \right)$ is rectangular coordinates.

> [!example] **Example** (Rectangular Coordinates to Spherical Coordinates)
> Try convert this from rectangular coordinates to spherical coordinates,
>
> $$
> (-2, 2\sqrt{3}, 4) \to x = -2, \quad y = 2\sqrt{3}, \quad z = 4
> $$
>
> $$
> \begin{align}
> \rho^{2} &= (-2)^{2} + (2\sqrt{3})^{2} + (4)^{2} = 32 \\
> \rho &= 4\sqrt{2} \\
> \tan \theta &= \left( \frac{2\sqrt{3}}{-2} \right) \to \tan \theta = (-\sqrt{3}) \\
> \theta &= \frac{2\pi}{3}, \frac{5\pi}{3}
> \end{align}
> $$
>
> We choose $\frac{2\pi}{3}$ since it is in quadrant two as is our rectangular coordinate. Now we need to find our value for $\phi$.
>
> $$
> \begin{align}
> \cos \phi &= \frac{z}{\rho} \\
> \cos \phi &= \frac{4}{4\sqrt{2}} \\
> \phi &= \arccos \left( \frac{\sqrt{2}}{2} \right) \\
> \phi &= \frac{\pi}{4}
> \end{align}
> $$
>
> So we get that the coordinate is $\left(4\sqrt{2}, \frac{2\pi}{3}, \frac{\pi}{4} \right)$.

> [!example] **Example** (Cylindrical Coordinates to Spherical Coordinates)
>
> $$
> \left( 4, \frac{\pi}{3}, -4 \right) \to r = 4, \quad \theta = \frac{\pi}{3}, \quad z = -4
> $$
>
> Now we note the following,
>
> $$
> \begin{align}
> \rho^{2} &= r^{2} + z^{2} \\
> \rho &= \sqrt{16 + 16} \\
> \rho &= 4\sqrt{2} \\
> \cos(\phi) &= \frac{z}{\rho} \\
> &= -\frac{4}{4\sqrt{2}} \\
> &= -\frac{\sqrt{2}}{2} \\
> \phi &= \arccos \left( -\frac{\sqrt{2}}{2} \right) \\
> \phi &= \frac{3\pi}{4}
> \end{align}
> $$
>
> therefore our coordinate is $\left(4\sqrt{2}, \frac{\pi}{3}, \frac{3\pi}{4}\right)$.

> [!example] **Example** (Spherical Coordinates to Cylindrical Coordinates)
> Given the following spherical coordinates, convert over the cylindrical coordinates
>
> $$
> \left( 5, \frac{\pi}{4}, \frac{3\pi}{4} \right) \to \rho = 5, \quad \theta = \frac{\pi}{4}, \quad \phi = \frac{3\pi}{4}
> $$
>
> $$
> \begin{align}
> r &= \rho \sin \phi \\
> &= 5 \sin\left( \frac{3\pi}{4} \right) \\
> &= 5\left( \frac{\sqrt{2}}{2} \right) \\
> &= \frac{5\sqrt{2}}{2} \\
> z &= \rho \cos \phi \\
> &= 5\left( \frac{-\sqrt{2}}{2} \right) \\
> &= -\frac{5\sqrt{2}}{2}
> \end{align}
> $$
>
> Therefore our coordinate in cylindrical coordinates is,
>
> $$
> \left( \frac{5\sqrt{2}}{2}, \frac{\pi}{4}, -\frac{5\sqrt{2}}{2} \right)
> $$

Here are some new examples of graph using our new coordinates now:

This is a cylinder with radius 3 directed up at the $z$ axis.

$$
r = 3 \to r^{2} = 9 \to x^{2}+y^{2} = 9
$$

This is a plane that has an angle from the origin of $\frac{\pi}{4}$.

$$
\theta = \frac{\pi}{4} \to \tan \theta = \frac{y}{x} \to 1 = \frac{y}{x} \to y=x
$$

This is a sphere of radius 2 from the origin.

$$
\rho = 2 \to x^{2}+y^{2}+z^{2}=4
$$

> [!example] **Example** (Recognizing Shapes)
> Note that this ends up being a paraboloid shifted up by 4 and looking downward.
>
> $$
> \begin{align}
> z &= 4 - r^{2} \\
> z &= 4 - (x^{2} + y^{2}) \\
> x^{2} + y^{2} &= -(z-4)
> \end{align}
> $$

> [!example] **Example** (Cylinder with Transformations)
>
> $$
> \begin{align}
> r \sec \theta &= 4 \\
> r &= 4\cos \theta \\
> r^{2} &= 4r \cos \theta \\
> x^{2} + y^{2} &= 4x \\
> x^{2} - 4x + y^{2} &= 0 \\
> (x-2)^{2} + y^{2} &= 4
> \end{align}
> $$
