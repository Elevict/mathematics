---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 11.5 Lines and Planes in 3D

## Lines

To create a line in 3D space, you can start with two points. Let us call these two points $P_{0}$ and $P$, of which we can find a vector between them called $\vec{P_{0}P}$.

Let $P_{0} = \langle x_{0}, y_{0}, z_{0} \rangle$ and $P = \langle x, y, z \rangle$ then the vector is

$$
\vec{P_{0}P} = \langle x-x_{0}, y-y_{0}, z-z_{0} \rangle.
$$

Note that we can express this vector in a different manner. To express it in a different manner, we introduce the notion of a *direction vector* $\vec{v} = \langle a, b, c \rangle$ which gives the direction of our line. Then, it follows that if $\vec{P_{0}P}$ and $\vec{v}$ are parallel to one another, they are scalar multiples of one another. In other words

> [!definition] **Definition** (Vector Equation of a Line)
>
> $$
> \vec{P_{0}P} = \vec{v} \cdot  t
> $$

where $t$ is our scalar value. But we can let our scalar value range for any $t$ and make the entire line. Now lets solve this out to get parametric equations.

$$
\begin{align}
\vec{P_{0}P} &= t \cdot  \vec{v} \\
 \langle x-x_{0}, y-y_{0}, z-z_{0} \rangle &= \langle at, bt, ct \rangle  \\ \\

at = x-x_{0}, \quad bt &= y-y_{0}, \quad ct = z - z_{0} \\
x = x_{0} + at, \quad y &= x_{0} + bt, \quad z = z_{0} + ct
\end{align}
$$

and thus we have our parametric equations.

> [!theorem] **Theorem** (Parametric Form of a Line)
>
> $$
> x = x_{0} + at, \quad y = x_{0} + bt, \quad z = z_{0} + ct
> $$

Now we can solve for $t$ from our parametric equations above and also get the symmetric equation of the line.

> [!theorem] **Theorem** (Symmetric Form of a Line)
>
> $$
> \frac{x-x_{0}}{a} = \frac{y-y_{0}}{b} = \frac{z-z_{0}}{c}.
> $$

As a side note, if any of the direction number $a, b, c$ happen to be 0 our line ends up bounded in a plane and we do not include it in the symmetric equation. Say for example $x = x_{0}$, then it would be parallel to the $yz$-plane.

Lines are parallel if their direction vectors are parallel, or in other words, if they are scalar multiples of one another.

> [!example] **Example** (Equation of a Line)
> Find the equation of a line containing $P\left(-1, -2, -\frac{1}{2} \right)$ and $Q\left(1, \frac{3}{2}, -3 \right)$.
>
> $$
> \vec{PQ} = \left\langle  2, \frac{7}{2}, -\frac{5}{2}  \right\rangle 
> $$
>
> Let $\vec{v} = \langle 4, 7, -5 \rangle$ since its still in the same direction. And finally, we get that
>
> $$
> x=-1+4t, \quad y = -2+7t, \quad z=-\frac{1}{2}-5t
> $$

> [!example] **Example** (Show two Lines are Parallel)
> Show that $L: \frac{x-7}{8}= \frac{y-\frac{1}{2}}{14}=\frac{z+9}{-10}$ is parallel to the line computed in the above example.
>
> From our symmetric equation, we see that $P_{0} = \left(7, \frac{1}{2}, -9 \right)$ and that our direction vector is $\vec{v}_{2} = 8, 14, -10$. Clearly $\vec{v_{2}} = 2 \cdot \vec{v}_{1}$ and so they are parallel.

> [!example] **Example** (Intersection of a Line)
> Now lets figure out whether or not two lines intersect at a particular time $t$. Given the following two lines
>
> $$
> \begin{align}
> &L_{1}: x_{1} = 1-2t_{1}, \quad y_{1} = -1-3t_{1}, \quad z_{1}=-2+t_{1} \\
> &L_{2}: x_{2}=-3+t_{2}, \quad y_{2}=-2+2t_{2}, \quad z_{2}=3-t_{2}
> \end{align}
> $$
>
> Now we form a system of equations by letting $x_{1} = x_{2}$, $y_{1} = y_{2}$, and $z_{1}=z_{2}$ since we want them to intersect at the same point.
>
> $$
> \begin{align}
> x&: 1-2t_{1}=-3+t_{2} \\
> y&: -1-3t_{1}=-2+2t_{2} \\
> z&: -2+t_{1}=3-t_{2}
> \end{align}
> $$
>
> now lets select two equations to solve for the relation between $t_{1}$ and $t_{2}$.
>
> $$
> \begin{align}
> x&: 1-2t_{1}=-3+t_{2} \\
> z&: -2+t_{1}=3-t_{2} \\
> x+z&: -1-t_{1} = 0 \\
> &\to t_{1} = -1 \\
> &\to t_{2} = 6
> \end{align}
> $$
>
> and finally lets test it out for our final left out equation.
>
> $$
> \begin{align}
> -1-3(-1) &= -2 +2(6) \\
> -1+3 &= 10 \\
> 2 &\neq 10
> \end{align}
> $$
>
> and therefore, our lines do not intersect one another.

> [!example] **Example** (Intersection and Angle of Intersection of a Line)
> Lets try another example with two lines again,
>
> $$
> \begin{align}
> L_{1}&: \frac{x_{1}-1}{-1} = \frac{y_{1}-3}{-2} = z_{1} \\
> L_{2}&: \frac{x_{2}-2}{3} = \frac{y_{2}-3}{2} = z_{2}-1
> \end{align}
> $$
>
> From the symmetric equations we have the points and direction vectors
>
> $$
> \begin{align}
> P_{1}&: (1, 3, 0), \quad P_{2}: (2, 3, 1) \\
> \vec{v}_{1}&: \langle -1, -2, 1 \rangle , \quad \vec{v}_{2}: \langle 3, 2, 1 \rangle 
> \end{align}
> $$
>
> And clearly the direction vectors are not parallel to one another since there are no scalar multiples. So now lets convert it to parametric form.
>
> $$
> \begin{align}
> L_{1}&: x_{1} = 1 -t_{1}, \quad y_{1} = 3 -2t_{1}, \quad z_{1} = t_{1} \\
> L_{2}&: x_{2} = 2+3t_{2}, \quad y_{2} = 3 + 2t_{2}, \quad z_{2} = t_{2}+1
> \end{align}
> $$
>
> Now set $x_{1}=x_{2}$, $y_{1}=y_{2}$, and $z_{1}=z_{2}$.
>
> $$
> \begin{cases}
> 1-t_{1}=2+3t_{2} \\
> 3-2t_{1}=3+2t_{2} \\
> t_{1}=t_{2}+1 
> \end{cases}
> $$
>
> and lets try to use the first and third equations and add them together. What we get is that $t_{1} = \frac{1}{2}$ and $t_{2} = -\frac{1}{2}$. Plugging into the second equation, we get that both sides are equal. Therefore, we have that the lines intersect exactly at $\left(\frac{1}{2}, 2, \frac{1}{2} \right)$.
>
> Using the two lines still, lets figure out at what angle they collide. To find this, use the two direction vectors and take their dot product using the geometric formula.
>
> $$
> \begin{align}
> \vec{v}_{1} \cdot \vec{v}_{2} &= \lVert \vec{v}_{1} \rVert\lVert \vec{v}_{2} \rVert \cos \theta \\
> (-1)(3) + (-2)(2) + (1)(1) &= \sqrt{6}\sqrt{14} \cos \theta \\
> -3-4+1&=\sqrt{84} \cos \theta \\
> -\frac{6}{\sqrt{84}} &= \cos \theta \\
> \theta &= \arccos \frac{6}{\sqrt{84}}
> \end{align}
> $$
>
> Note at the end we absolute value the dot product so its an acute angle. This gives us our desired answer.

## Planes

Here are the following equations for the planes:

$$
\begin{align}
\text{XY-Plane: }& \quad z = 0\\
\text{YZ-Plane: }& \quad x = 0\\
\text{XZ-Plane: }& \quad y = 0
\end{align}
$$

Now using these planes, we're going to use our line from above to determine when and where it crosses each of these planes. Recall our line above had the parametric equation

$$
x_{2} = 2 + 3t_{3}, \quad y_{2}=3+2t_{2}, \quad z_{2}=1+2t_{2}
$$

So we set the coordinates to 0 to get,

$$
0 = 1+t_{2} \to t_{2} = -1 \to (-1, 1, 0)
$$

$$
0 = 3+2t_{2} \to t_{2} = -\frac{3}{2} \to \left( -\frac{5}{2}, 0, -\frac{1}{2} \right)
$$

$$
0 = 2+ 3t_{2} \to t_{2} = -\frac{2}{3} \to \left( 0, \frac{5}{3}, \frac{1}{3} \right)
$$

hence our coordinates where the line intersects each of the coordinate planes.

Given a point on the plane $P_{0}(x_{0}, y_{0}, z_{0})$ and a normal vector to the plane $\vec{n} = \langle a, b, c \rangle$, then we can define a specific plane.

Lets say for example we are given two points $P_{0}$ and $P$ on the plane. Then the vector between those two points are $\vec{P_{0}P} = \langle x-x_{0}, y-y_{0}, z-z_{0} \rangle$. We also need a normal vector to define our plane, so lets call that $\vec{n} = \langle a, b, c \rangle$.

Then notice that $\vec{P_{0}P} \cdot \vec{n} = 0$ since they are perpendicular. And so we get that

$$
\begin{align}
\langle a, b, c \rangle \cdot  \langle x-x_{0}, y-y_{0}, z-z_{0} \rangle = 0 \\
a(x-x_{0}) + b(y-y_{0}) + c(z-z_{0}) = 0
\end{align}
$$

And hence we have defined the standard form.

> [!theorem] **Theorem** (Standard Form of a Plane)
> The equation of the plane in the **standard form** is the following:
>
> $$
> a(x-x_{0}) + b(y-y_{0}) + c(z-z_{0}) = 0
> $$

Likewise if we factor and distribute, and let all the constant terms go to the right side we have the general form of a plane.

> [!theorem] **Theorem** (General Form of a Plane)
> The equation of the plane in the **general form** is the following:
>
> $$
> ax + by + cz = d
> $$

> [!example] **Example** (Find the Equation of the Plane)
> Find the equation of a plane with the point $P(3, 6, -2)$ that is parallel to $2x + 3y - z = 4$.
>
> The normal vector is $\langle 2, 3, -1 \rangle$, and hence give our point and using the formula we get the equation to be
>
> $$
> \begin{align}
> 2(x-3) + 3(y-6) -(z+2) &= 0 \\
> 2x - 6 + 3y - 18 - z - 2 &= 0 \\
> 3x + 3y - z &= 26
> \end{align}
> $$

> [!example] **Example** (Find a Plane Given 3 Points)
> Find the equation of the plane containing $P(2, 3, -1), Q(1, -2, 3), R(-1, 2, 4)$.
>
> First, we define $\vec{PQ} = \langle -1, -5, 4 \rangle$ and $\vec{PR} = \langle -3, -1, 5 \rangle$ which are two vectors in the plane. Now lets find the normal vector by taking a cross product.
>
> $$
> \begin{align}
> \vec{PQ} \times \vec{PR} &= \begin{vmatrix}
> \hat{i} & \hat{j} & \hat{k} \\
> -1 & -5 & 4 \\
> -3 & -1 & 5
> \end{vmatrix} \\
> &= \hat{i}(-25+4) - \hat{j}(-5+12) + \hat{k}(1-15) \\
> &= -21\hat{i} -7\hat{j} -14\hat{k}
> \end{align}
> $$
>
> And lets just scale down the normal vector to something more usable by dividing by -7.
>
> $$
> \vec{n} = 3\hat{i} + \hat{j} + 2\hat{k}
> $$
>
> Finally, we just write up the equation.
>
> $$
> \begin{align}
> 3(x-2) + (y-3) + 2(z+1) &= 0 \\
> 3x + y + 2z &= 7
> \end{align}
> $$

## Plane Problems

> [!example] **Example** (Plane Perpendicular to Another Plane)
> Find the plane with points $P(2, 1, 1)$ and $Q(-1, 3, 2)$ that is perpendicular to the plane $P_{1}: 2x+3y-4z=3$.
>
> Note first that the normal to $P_{1}$ is $\vec{n}_{1} = \langle 2, 3, -4 \rangle$ and this normal vector is in the plane we want to find. Likewise, we also know that $\vec{PQ} = \langle -3, 2, 1 \rangle$. Now lets find a normal vector to these two vectors to get our plane, which would be $\vec{n}_{1} \times \vec{PQ} = \langle 11, 10, 13 \rangle$. The equation ends up being $11x + 10y + 13z = 45$ when simplified.

> [!example] **Example** (Angle of Intersecting Planes)
> Two planes are parallel if their normal vectors are parallel, and likewise they are perpendicular if their normal vectors are perpendicular. For example, lets take a look at the following
>
> $$
> P_{1}: 3x - y  + 2z =  2, \quad P_{2}:  2x + 3y + z = 4
> $$
>
> Then their normal vectors are,
>
> $$
> \vec{n}_{1} \langle 3, -1, 2 \rangle, \quad \vec{n}_{2}=\langle 2, 3, 1 \rangle 
> $$
>
> and we can see that they are not scalar multiplies so they are not parallel. Likewise,
>
> $$
> \vec{n}_{1} \cdot \vec{n}_{2} = 6 -3 + 2 = 5 \neq 0
> $$
>
> so it is also not perpendicular. But we know it intersects at an angle, and to find that angle we do the following:
>
> $$
> \cos \theta = \frac{\vec{n}_{1} \cdot \vec{n}_{2}}{\lVert \vec{n}_{1} \rVert \lVert \vec{n}_{2} \rVert } \to \cos \theta = \frac{4}{\sqrt{14} \cdot  \sqrt{14}} \to \theta = 69.1
> $$

> [!example] **Example** (Intersection of a Line and a Plane)
> To find the intersection of a plane and a line, you just plug the line into the plane.
>
> $$
> \begin{align}
> &P: 2x + 3y -z = 9, \\
> &L: x = 2+3t, \quad y = -1+t, \quad z=3-2t
> \end{align}
> $$
>
> Now, lets plug them in and solve.
>
> $$
> \begin{align}
> 2(2+3t) + 3(-1+t) -(3-2t) &= 9 \\
> 4 + 6t -3 + 3t -3 + 2t &= 9 \\
> 11t &= 11 \\
> t &= 1 \to P(5, 0, 1)
> \end{align}
> $$
>
> and that gives us our intersection.

> [!example] **Example** (Find Intersection of 2 Planes)
> Find the equation for the line of intersection.
>
> $$
> \begin{align}
> P_{1}&: 2x - 3y + 4z = 3, \quad \vec{n}_{1} = \langle 2, -3, 4 \rangle  \\
> P_{2}&: x + 4y - 2z = 7, \quad \vec{n}_{2} = \langle 1, 4, -2 \rangle 
> \end{align}
> $$
>
> Lines need a point and a direction vector. To get the direction vector, note that our line is ultimately going to be orthogonal to both of our normal vectors. Therefore, we do the cross product of both of our vectors.
>
> $$
> \begin{align}
> \vec{n}_{1} \times \vec{n}_{2} &= \begin{vmatrix}
> \hat{i} & \hat{j} & \hat{k} \\
> 2 & -3 & 4 \\
> 1 & 4 & -2
> \end{vmatrix} \\
> &= \hat{i}(6-16) - \hat{j}(-4-4) + \hat{k}(8+3) \\
> &= -10\hat{i} +8\hat{j} +11\hat{k}
> \end{align}
> $$
>
> And therefore, our direction vector is $\langle -10, 8, 11 \rangle$. Now to find a point, lets just select some random point at set it equal to 0 so its on one of the planes that our line can intersect. Lets let $y =0$.
>
> $$
> \begin{align}
> \begin{cases}
> 2x+4z=3 \\
> x-2z=7
> \end{cases} \\
> 4x = 17 \\
> x = \frac{17}{4}
> \end{align}
> $$
>
> and now we substitute it back in to get $z = -\frac{11}{8}$. Therefore, our point is $P\left(\frac{17}{4}, 0, -\frac{11}{8} \right)$. So our final equation will be:
>
> $$
> L: x=\frac{17}{4} - 10t, \quad y = 8t,  \quad  z = -\frac{11}{8} + 11t
> $$

## Distances

Recall the notion of projection. Then, given a point $P_{1}$ and a point on the plane $P_{0}$ we can find the shortest distance between a point and a plane. To do so, we need our normal vector of the plane $\vec{n}$ and a vector from ${} P_{1}$ to $P_{2}$ which is $\vec{P_{1}P_{2}}$.

Then our distance would be the following:

$$
\begin{align}
D &= \frac{\vec{P_{0}P_{1}} \cdot   \vec{n}}{\lVert \vec{n} \rVert } \\
&= \frac{\lvert \langle x_{1}-x_{0}, y_{1}-y_{0}, z_{1}-z_{0} \rangle \cdot \langle a, b, c \rangle  \rvert }{\sqrt{a^{2}+b^{2}+c^{2}}} \\
&= \frac{|ax_{1}+by_{1}+cz_{1}-ax_{0}-by_{0}=cz_{0}|}{\sqrt{a^{2}+b^{2}+c^{2}}} \\
&= \frac{|ax_{1}+by_{1}+cz_{1}-d|}{\sqrt{a^{2}+b^{2}+c^{2}}}
\end{align}
$$

> [!theorem] **Theorem** (Distance Between Point and a Plane)
>
> $$
> D = \frac{|ax_{1}+by_{1}+cz_{1}-d|}{\sqrt{a^{2}+b^{2}+c^{2}}}
> $$

Now if we want the distance between two planes, note that both of them need to be parallel. This implies that both direction vectors are the same. And thankfully, this means we just can replace the $ax_{1}+by_{1}+cz_{1}$ with just another $d$ since that is what it equals on the other plane. Therefore, the distance between two planes is

> [!theorem] **Theorem** (Distance Between Two Parallel Planes)
>
> $$
> D = \frac{|d_{1} - d_{2}|}{\sqrt{a^{2}+b^{2}+c^{2}}}
> $$

given the plane equations.

To find the distance between two skew lines, you just need to find the parallel planes that contain those two skew lines. Here is how you would go about doing that.

1. Find the direction vectors of the lines $v_{1}$ and $v_{2}$
2. Find the normal of both the planes, which is $\vec{n} = \vec{v}_{1} \times \vec{v}_{2}$
3. Get two points one for each line.
4. Make your two plane equations using the normal and the points.
5. Simplify, and use the distance equation you'd use for two planes.

> [!theorem] **Theorem** (Distance Between Point and a Line)
> Finally, to get the distance between a point and a line let us identify a point $P$ and a point on the line $Q$. It then follows that we can define $\vec{QP}$ which is our vector from our line to the point and then we also have a direction vector for the line $\vec{v}$. Then note, that by trigonometry we have
>
> $$
> \begin{align}
> D &= \lVert \vec{u} \rVert \sin \theta \\
> D \cdot \lvert \vec{v} \rvert &= \lVert \vec{u} \rVert \lVert \vec{v} \rVert \sin \theta \\
> D &= \frac{\lVert \vec{u} \times  \vec{v} \rVert }{\lVert \vec{v} \rVert }
> \end{align}
> $$