---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 14.7 Triple Integrals over Regions with Cylindrical or Spherical Coordinates

## Triple Integrals over Cylindrical Coordinates

Recall that cylindrical coordinates are really nothing more than an extension of polar coordinates into three dimensions. The following are the conversion formulas for cylindrical coordinates.

$$
x = r\cos \theta \quad y = r \sin \theta \quad z = z
$$

In order to do the integral in cylindrical coordinates we will need to know what $dV$ will become in terms of cylindrical coordinates. This is derived from the usage of a Jacobian.

> [!theorem] **Theorem** (Differential of Cylindrical Coordinates)
>
> $$
> dV = r \ dz \ dr \ d\theta
> $$

The region, $E$, over which we are integrating becomes,

$$
\begin{align*}E & = \left\{ {\left( {x,y,z} \right)|\left( {x,y} \right) \in D,\,\,\,{u_1}\left( {x,y} \right) \le z \le {u_2}\left( {x,y} \right)} \right\}\\ & = \left\{ {\left( {r,\theta ,z} \right)|\alpha \le \theta \le \beta ,\,\,{h_1}\left( \theta \right) \le r \le {h_2}\left( \theta \right),\,\,\,{u_1}\left( {r\cos \theta ,r\sin \theta } \right) \le z \le {u_2}\left( {r\cos \theta ,r\sin \theta } \right)} \right\}\end{align*}
$$

Note that we’ve only given this for $E$’s in which $D$ is in the $xy$-plane. We can modify this accordingly if $D$ is in the $yz$-plane or the $xz$-plane as needed.

In terms of cylindrical coordinates a triple integral is,

> [!definition] **Definition** (Triple Integral in Cylindrical Coordinates)
>
> $$
> \iiint\limits_{E}{{f\left( {x,y,z} \right)\,dV}} = \int_{{\,\alpha }}^{{\,\beta }}{{\int_{{{h_1}\left( \theta \right)}}^{{{h_2}\left( \theta \right)}}{{\int_{{{u_1}\left( {r\cos \theta ,r\sin \theta } \right)}}^{{{u_2}\left( {r\cos \theta ,r\sin \theta } \right)}}{{r\,f\left( {r\cos \theta ,r\sin \theta ,z} \right)\,dz}}\,dr}}\,d\theta }}
> $$

Don’t forget to add in the $r$ and make sure that all the $x$’s and $y$’s also get converted over into cylindrical coordinates.

> [!example] **Example** (Triple Integrals in Cylindrical Coordinates)
> Evaluate $\displaystyle \iiint\limits_{E}{{y\,dV}}$ where $E$ is the region that lies below the plane $z = x + 2$ above the $xy$-plane and between the cylinders ${x^2} + {y^2} = 1$ and ${x^2} + {y^2} = 4$.
>
> We’ll start out by getting the range for z in terms of cylindrical coordinates.
>
> $$
> 0 \le z \le x + 2\hspace{0.25in}\hspace{0.25in} \Rightarrow \hspace{0.25in}\hspace{0.25in}0 \le z \le r\cos \theta + 2
> $$
>
> Remember that we are above the $xy$-plane and so we are above the plane $z = 0$
>
> Next, the region D is the region between the two circles ${x^2} + {y^2} = 1$ and ${x^2} + {y^2} = 4$ in the $xy$-plane and so the ranges for it are,
>
> $$
> 0 \le \theta \le 2\pi \hspace{0.25in}\hspace{0.25in}1 \le r \le 2
> $$
>
> Here is the integral.
>
> $$
> \begin{align*}\iiint\limits_{E}{{y\,dV}} & = \int_{0}^{{2\pi }}{{\int_{1}^{2}{{\int_{0}^{{r\cos \theta + 2}}{{\left( {r\sin \theta } \right)r\,dz}}\,dr}}\,d\theta }}\\ & = \int_{0}^{{2\pi }}{{\int_{1}^{2}{{{r^2}\sin \theta \left( {r\cos \theta + 2} \right)\,dr}}\,d\theta }}\\ & = \int_{0}^{{2\pi }}{{\int_{1}^{2}{{\frac{1}{2}{r^3}\sin \left( {2\theta } \right) + 2{r^2}\sin \theta \,dr}}\,d\theta }}\\ & = \int_{0}^{{2\pi }}{{\left. {\left( {\frac{1}{8}{r^4}\sin \left( {2\theta } \right) + \frac{2}{3}{r^3}\sin \theta } \right)} \right|_1^2\,d\theta }}\\ & = \int_{0}^{{2\pi }}{{\frac{{15}}{8}\sin \left( {2\theta } \right) + \frac{{14}}{3}\sin \theta \,d\theta }}\\ & = \left. {\left( { - \frac{{15}}{{16}}\cos \left( {2\theta } \right) - \frac{{14}}{3}\cos \theta } \right)} \right|_0^{2\pi }\\ & = 0\end{align*}
> $$

## Triple Integrals over Spherical Coordinates

First, we need to recall how spherical coordinates are defined. The following sketch shows the relationship between the Cartesian and spherical coordinate systems.

![[Lecture 14.7 Triple Integrals Over Regions with Cylindrical or Spherical Coordinates-20241130052433391.png]]

Here are the conversion formulas for spherical coordinates.

$$
\begin{array}{c}x = \rho \sin \varphi \cos \theta \hspace{0.25in}y = \rho \sin \varphi \sin \theta \hspace{0.25in}z = \rho \cos \varphi \\ {x^2} + {y^2} + {z^2} = {\rho ^2}\end{array}
$$

We also have the following restrictions on the coordinates.

$$
\rho \ge 0\hspace{0.5in}0 \le \varphi \le \pi
$$

For our integrals we are going to restrict $E$ down to a spherical wedge. This will mean that we are going to take ranges for the variables as follows,

$$
\begin{array}{c}a \le \rho \le b\\ \alpha \le \theta \le \beta \\ \delta \le \varphi \le \gamma \end{array}
$$

In order to do the integral in spherical coordinates we will need to know what $dV$ will become in terms of cylindrical coordinates. This is derived from the usage of a Jacobian.

> [!theorem] **Theorem** (Differential of Spherical Coordinates)
>
> $$
> dV = {\rho ^2}\sin \varphi \,d\rho \,d\theta \,d\varphi
> $$

Therefore, the integral will become,

> [!definition] **Definition** (Triple Integral in Spherical Coordinates)
>
> $$
> \iiint\limits_{E}{{f\left( {x,y,z} \right)\,dV}} = \int_{{\,\,\delta }}^{{\,\gamma }}{{\int_{{\,\alpha }}^{{\,\beta }}{{\int_{{\,a}}^{b}{{{\rho ^2}\sin \varphi \,\,f\left( {\rho \sin \varphi \cos \theta ,\rho \sin \varphi \sin \theta ,\rho \cos \varphi } \right)\,d\rho }}\,d\theta }}\,d\varphi }}
> $$

> [!example] **Example** (Triple Integrals in Spherical Coordinates)
> Evaluate $\displaystyle \iiint\limits_{E}{{16z\,dV}}$ where E is the upper half of the sphere ${x^2} + {y^2} + {z^2} = 1$.
>
> Since we are taking the upper half of the sphere the limits for the variables are,
>
> $$
> \begin{array}{c}0 \le \rho \le 1\\ 0 \le \theta \le 2\pi \\ \displaystyle 0 \le \varphi \le \frac{\pi }{2}\end{array}
> $$
>
> The integral is then,
>
> $$
> \begin{align*}\iiint\limits_{E}{{16z\,dV}} & = \int_{0}^{{\,\frac{\pi }{2}}}{{\int_{{\,0}}^{{\,2\pi }}{{\int_{{\,\,0}}^{1}{{{\rho ^2}\sin \varphi \left( {16\rho \cos \varphi } \right)\,d\rho }}\,d\theta }}\,d\varphi }}\\ & = \int_{{\,0}}^{{\,\frac{\pi }{2}}}{{\int_{{\,0}}^{{\,2\pi }}{{\int_{{\,\,0}}^{{\,1}}{{8{\rho ^3}\sin \left( {2\varphi } \right)\,d\rho }}\,d\theta }}\,d\varphi }}\\ & = \int_{{\,0}}^{{\,\frac{\pi }{2}}}{{\int_{{\,0}}^{{\,2\pi }}{{2\sin \left( {2\varphi } \right)\,d\theta }}\,d\varphi }}\\ & = \int_{{\,0}}^{{\,\frac{\pi }{2}}}{{4\pi \sin \left( {2\varphi } \right)\,d\varphi }}\\ & = \left. { - 2\pi \cos \left( {2\varphi } \right)} \right|_0^{\frac{\pi }{2}}\\ & = 4\pi \end{align*}
> $$

