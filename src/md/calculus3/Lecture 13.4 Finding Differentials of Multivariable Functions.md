---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 13.4 Finding Differentials of Multivariable Functions

> [!definition] **Definition** (Differential Form in $\mathbb{R}^{2}$)
> Given the function $z = f(x, y)$ the differential $dz$ or $df$ is given by,
>
> $$
> dz = f_{x}dx + f_{y}dy \quad \text{or} \quad df = f_{x} dx + f_{y}dy
> $$

There is a natural extension to functions of three or more variables. For instance, given the function $w = g(x, y, z)$ the differential is given by,

$$
dw = g_{x}dx + g_{y}dy + g_{z}dz
$$

Let's do a couple of quick examples

> [!example] **Example** (Find the Differential Form)
>
> $$
> z = e^{x^{2}+y^{2}}\tan(2x)
> $$
>
> Just simply take the partial derivatives and attach the differentials and you are done.
>
> $$
> dz = (2xe^{x^{2}+y^{2}}\tan(2x) + 2e^{x^{2}+y^{2}}\sec^{2}(2x))dx + 2ye^{x^{2}+y^{2}}\tan(2x)dy
> $$

> [!example] **Example** (Find the Differential Form)
>
> $$
> u = \frac{t^{3}r^{6}}{s^{2}}
> $$
>
> Similarly, find the differential as done above
>
> $$
> du = \frac{3t^{2}r^{6}}{s^{2}}dt + \frac{6t^{3}r^{5}}{s^{2}}dr - \frac{2t^{3}r^{6}}{s^{3}}ds
> $$

Note that sometimes these differentials are called the **total differentials**.

