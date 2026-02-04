---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 11.4 the Cross Product

## Determinants

$$
\begin{vmatrix}
a_{1} & a_{2} \\
b_{1}  & b_{2}
\end{vmatrix}
=
a_{1}b_{2} - a_{2}b_{1}
$$

$$
\begin{vmatrix}
a_{1} & a_{2} & a_{3} \\
b_{1} & b_{2} & b_{3} \\
c_{1} & c_{2} & c_{3}
\end{vmatrix}
=
a_{1}
\begin{vmatrix}
b_{2} & b_{3} \\
c_{2} & c_{3}
\end{vmatrix}
-a_{2}
\begin{vmatrix}
b_{1} & b_{3} \\
c_{1} & c_{3}
\end{vmatrix}
+a_{3}
\begin{vmatrix}
b_{1} & b_{2} \\
c_{1} & c_{2}
\end{vmatrix}
$$

## Cross Product

> [!definition] **Definition** (Cross Product)
> The cross product for two vectors $\vec{a}, \vec{b}$ is defined as follows
>
> $$
> \begin{align}
> \vec{a} \times \vec{b}
> &= \begin{vmatrix}
> \hat{i} & \hat{j} & \hat{k} \\
> a_{1} & a_{2} & a_{3} \\
> b_{1} & b_{2} & b_{3}
> \end{vmatrix} \\
> &= \begin{vmatrix}
> a_{2} & a_{3} \\
> b_{2} & b_{3}
> \end{vmatrix} \hat{i} - \begin{vmatrix}
> a_{1} & a_{3} \\
> b_{1} & b_{3}
> \end{vmatrix} \hat{j}
> + \begin{vmatrix}
> a_{1} & a_{2} \\
> b_{1} & b_{2}
> \end{vmatrix}\hat{k} \\
> &= (a_{2}b_{3}-a_{3}b_{2})\hat{i} + (a_{3}b_{1} - a_{1}b_{3})\hat{j} + (a_{1}b_{2} -a_{2}b_{1})\hat{k} 
> \end{align}
> $$

The cross product generates a vector. This vector is orthogonal to both the vectors $\vec{a}$ and $\vec{b}$.

To find where the vector goes, you start at the vector $\vec{a}$ with your palm facing towards the vector $\vec{b}$. As you close your palm, the thumb points in the direction where the cross product goes.

> [!example] **Example** (Cross Product)
> Given the vectors $\vec{u} = -3\hat{i} + \hat{j} - 2\hat{k}$ and $\vec{v} = \hat{i} + \hat{j} + \hat{k}$, find two vectors that are orthogonal to both $\vec{u}$ and $\vec{v}$.
>
> $$
> \begin{align}
> \vec{u} \times  \vec{v} &=
> \begin{vmatrix}
> \hat{i} & \hat{j} & \hat{k} \\
> -3 & 1 & -2 \\
> 1 & 1 & 1
> \end{vmatrix} \\
> &=
> \hat{i} \begin{vmatrix}
> 1 & -2 \\
> 1 & 1
> \end{vmatrix}
> - \hat{j}
> \begin{vmatrix}
> -3 & -2 \\
> 1 & 1
> \end{vmatrix}
> +\hat{k}
> \begin{vmatrix}
> -3 & 1 \\
> 1 & 1
> \end{vmatrix} \\
> &= \hat{i}(1 -(-2)) -\hat{j}(-3 -(-2)) + \hat{k} (-3 -1) \\
> &= 3\hat{i} +\hat{j} -4\hat{k}
> \end{align}
> $$
>
> The other vector would just be multiplying our previous vector by a $-1$ scalar. So it would be $-3\hat{i} -\hat{j}+4\hat{k}$

> [!example] **Example** (Find the Cross Product)
> Find two unit vector orthogonal to both $\vec{a} = \langle -1, 1, -1 \rangle$ and $\vec{b} = \langle 0, 3, 4 \rangle$.
>
> $$
> \begin{align}
> \vec{a} \times \vec{b}&= \begin{vmatrix}
> \hat{i} & \hat{j} & \hat{k} \\
> -1 & 1 & -1 \\
> 0 & 3 & 4
> \end{vmatrix}\\
> &= \hat{i}(4-(-3)) -\hat{j}(-4) +\hat{k}(-3) \\
> &= 7\hat{i} +4\hat{j} -3\hat{k}
> \end{align}
> $$
>
> Now we find the magnitude,
>
> $$
> \begin{align}
> \lVert \vec{a} \times \vec{b} \rVert &= \sqrt{7^{2} + 4^{2} +3^{2}} \\
> &= \sqrt{49 + 16 + 9} \\
> &= \sqrt{74}
> \end{align}
> $$
>
> And finally our unit vector,
>
> $$
> \frac{\vec{a} \times \vec{b}}{\lVert \vec{a} \times  \vec{b} \rVert } = \frac{\langle 7, 4, -3 \rangle}{\sqrt{74}} 
> $$
>
> where our other unit vector is just multiplied by -1.

## Geometric Interpretation of the Cross Product

First, recall that

$$
\lVert \vec{v} \rVert^{2} = \vec{v} \cdot \vec{v} = \vec{v}_{1}^{2} + \vec{v}_{2}^{2} + \vec{v}_{3}^{2}
$$

Now, we do a lot of algebra to get a result where both our vectors can be interpreted geometrically. First we start with the magnitude.

$$
\begin{align}
\lVert \vec{a} \times  \vec{b} \rVert^{2} &= (\vec{a} \times \vec{b}) \cdot  (\vec{a} \times \vec{b}) \\
&= (a_{1}^{2}+a_{2}^{2}+a_{3}^{2})(b_{1}^{2}+b_{2}^{2}+b_{3}^{2})-(a_{1}b_{1}+a_{2}b_{2}+a_{3}b_{3})^{2} \\
&= \lVert \vec{a} \rVert^{2} \lVert \vec{b} \rVert^{2} - (a\cdot b)^{2} \\
&= \lVert \vec{a} \rVert^{2} \lVert \vec{b} \rVert^{2} - \lVert \vec{a} \rVert^{2} \lVert \vec{b} \rVert^{2}\cos^{2} \theta \\
&= \lVert \vec{a} \rVert^{2} \lVert \vec{b} \rVert^{2}(1-\cos^{2}\theta) \\
\lVert \vec{a} \times  \vec{b} \rVert &= \sqrt{\lVert \vec{a} \rVert^{2} \lVert \vec{b} \rVert^{2}(1-\cos^{2}\theta)} \\
&= \lVert \vec{a} \rVert \lVert \vec{b} \rVert \sin\theta
\end{align}
$$

Now note that if the cross product is 0, and both our vectors are nonzero vectors, then that must mean that both our vectors have to be parallel. This is because the angle between the vectors is exactly 0 degrees.

## Parallelograms, Triangles, and Parallelepipeds

Likewise, note that to find the area of a parallelogram with sides $\vec{v}$ and $\vec{u}$, all we need to find is $\lVert \vec{v} \times \vec{u} \rVert$. A triangle is easy as well, just take half of it: $\frac{1}{2}\lVert \vec{v} \times \vec{u} \rVert$.

> [!example] **Example** (Area of a Triangle)
> Find the area of a $\triangle PQR$ with points $P(1, -1, 2), Q(2, 3, 1), R(-2, 3, 4)$.
>
> $$
> \begin{align}
> \vec{PQ} &= \langle 2-1, 3+1, 1-2 \rangle  = \langle 1, 4, -1 \rangle  \\
> \vec{PR} &= \langle -3, 4, 2 \rangle 
> \end{align}
> $$
>
> Now we find the cross product,
>
> $$
> \begin{vmatrix}
> \hat{i} & \hat{j} & \hat{k} \\
> 1 & 4 & -1 \\
> -3 & 4 & 2
> \end{vmatrix}
> = \hat{i}(8+4) - \hat{j}(2-3) +\hat{k}(4+12)
> = \langle 12, 1, 16 \rangle 
> $$
>
> And then the magnitude,
>
> $$
> \lVert \vec{PQ} \times  \vec{PR} \rVert = \sqrt{12^{2}+1^{2}+16^{2}} = \sqrt{401}
> $$
>
> And finally the area of the triangle,
>
> $$
> \frac{1}{2}\lVert \vec{PQ} \times  \vec{PR} \rVert = \frac{\sqrt{401}}{2}
> $$

A parallelepiped is a figure that has parallelograms on all of its faces. The formula for it is the following

$$
V = \vec{a} \cdot  (\vec{b} \times  \vec{c})
$$

where $\vec{a}$ is the height and $\vec{b}, \vec{c}$ are the vectors forming the parallelogram base.

## The Cross Product as Torque

We can represent torque with the following formula

$$
\lVert \vec{\tau} \rVert = \lVert \vec{r} \rVert \lvert \vec{F} \rvert 
$$

whereby $\vec{r}$ is the length of our lever, $\vec{F}$ is the amount of force we put on our lever, and $\vec{\tau}$ is our torque. Note that our torque is a vector that is orthogonal to both the radius and the force vectors.

