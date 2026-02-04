---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 7.2 Integration by Parts

## Integration by Parts

**Integration by parts** is a technique used to integrate products of functions. It is based on the product rule for differentiation and is given by the formula:

$$
\int u \, dv = uv - \int v \, du
$$

### Steps

1. **Choose $u$ and $dv$**: Identify parts of the integrand to set as $u$ and $dv$. Generally, choose $u$ to be a function that simplifies when differentiated, and $dv$ to be a function that is easy to integrate.
2. **Differentiate $u$**: Find $du$ by differentiating $u$.
3. **Integrate $dv$**: Find $v$ by integrating $dv$.
4. **Substitute and Simplify**: Substitute $u$, $du$, $v$, and $dv$ into the integration by parts formula and simplify.

> [!example] **Example** (Integration by Parts)
> Evaluate $\int x e^x \, dx$.
>
> 1. **Choose $u$ and $dv$**:
>    - Let $u = x$, hence $du = dx$.
>    - Let $dv = e^x \, dx$, hence $v = e^x$.
> 2. **Substitute and Simplify**:
>    - Using the integration by parts formula:
>
> $$
> \int x e^x \, dx = x e^x - \int e^x \, dx
> $$
>
>   - Simplify the remaining integral:
>
> $$
> \int x e^x \, dx = x e^x - e^x + C  
> $$
>
>    - Factor out $e^x$:
>
> $$
> \int x e^x \, dx = e^x (x - 1) + C
> $$
>
> Thus,
>
> $$
> \int x e^x \, dx = e^x (x - 1) + C
> $$

## Problems

Here are the solutions to the odd-numbered exercises in the specified format:

*Problem 3:* $\int t \sin t \, dt$

$$
\begin{align*}
\int t \sin t \, dt &= -t \cos t + \int \cos t \, dt \\
&= -t \cos t + \sin t + C
\end{align*}
$$

*Problem 5:* $\int t e^{5t} \, dt$

$$
\begin{align*}
\int t e^{5t} \, dt &= \frac{t e^{5t}}{5} - \int \frac{e^{5t}}{5} \, dt \\
&= \frac{t e^{5t}}{5} - \frac{e^{5t}}{25} + C \\
&= \frac{e^{5t}}{25} (5t - 1) + C
\end{align*}
$$

*Problem 7:* $\int p e^{-0.1p} \, dp$

$$
\begin{align*}
\int p e^{-0.1p} \, dp &= -10p e^{-0.1p} - \int -10 e^{-0.1p} \, dp \\
&= -10p e^{-0.1p} + 100 e^{-0.1p} + C
\end{align*}
$$

*Problem 9:* $\int x \ln x \, dx$

$$
\begin{align*}
\int x \ln x \, dx &= \frac{x^2}{2} \ln x - \int \frac{x^2}{2x} \, dx \\
&= \frac{x^2}{2} \ln x - \frac{x^2}{4} + C
\end{align*}
$$

*Problem 11:* $\int q^5 \ln 5q \, dq$

$$
\begin{align*}
\int q^5 \ln 5q \, dq &= \frac{1}{6}\ln(5q)q^{6} - \int \frac{1}{6} q^{5} \, dq \\
&= \frac{1}{6} \ln(5q)q^{6} - \frac{1}{36}q^{6} + C
\end{align*}
$$

*Problem 13:* $\int \sin^2 \theta \, d\theta$

$$
\begin{align*}
\int \sin^2 \theta \, d\theta &= \int \frac{1 - \cos 2\theta}{2} \, d\theta \\
&= \frac{1}{2} \int 1 \, d\theta - \frac{1}{2} \int \cos 2\theta \, d\theta \\
&= \frac{\theta}{2} - \frac{1}{4} \sin 2\theta + C
\end{align*}
$$

*Problem 15:* $\int (\ln t)^2 \, dt$

$$
\begin{align*}
\int (\ln t)^2 \, dt &= t (\ln t)^2 - 2 \int t \ln t \frac{1}{t} \, dt \\
&= t (\ln t)^2 - 2 \int \ln t \, dt \\
&= t (\ln t)^2 - 2 \left( t \ln t - t \right) + C \\
&= t (\ln t)^2 - 2t \ln t + 2t + C
\end{align*}
$$

*Problem 17:* $\int y \sqrt{y + 3} \, dy$

$$
\begin{align*}
\int y \sqrt{y + 3} \, dy &= \int \sqrt{y + 3} (y + 3 - 3) \, dy \\
&= \int (y + 3)^{3/2} \, dy - 3 \int (y + 3)^{1/2} \, dy \\
&= \frac{2}{5} (y + 3)^{5/2} - 2 (y + 3)^{3/2} + C
\end{align*}
$$

*Problem 19:* $\int (\theta + 1) \sin (\theta + 1) \, d\theta$

$$
\begin{align*}
u &= \theta + 1 \\
du &= d\theta \\
\int (\theta + 1) \sin (\theta + 1) \, d\theta &= \int u \sin u \, du \\
&= -u \cos u + \int \cos u \, du \\
&= -u \cos u + \sin u + C \\
&= -(\theta + 1) \cos (\theta + 1) + \sin (\theta + 1) + C
\end{align*}
$$

*Problem 21:* $\int \frac{\ln x}{x^2} \, dx$

$$
\begin{align*}
u &= \ln x \\
du &= \frac{1}{x} \, dx \\
\int \frac{\ln x}{x^2} \, dx &= \int \frac{u}{x} \cdot \frac{1}{x} \, dx \\
&= -\frac{u}{x} + \int \frac{1}{x} \, dx \\
&= -\frac{\ln x}{x} - \frac{1}{x} + C
\end{align*}
$$

*Problem 25:* $\int \sqrt{x} \ln x \, dx$

$$
\begin{align*}
u &= \ln x \\
dv &= \sqrt{x} \, dx \\
v &= \frac{2}{3} x^{3/2} \\
\int \sqrt{x} \ln x \, dx &= \frac{2}{3} x^{3/2} \ln x - \int \frac{2}{3} x^{3/2} \cdot \frac{1}{x} \, dx \\
&= \frac{2}{3} x^{3/2} \ln x - \frac{2}{3} \int x^{1/2} \, dx \\
&= \frac{2}{3} x^{3/2} \ln x - \frac{2}{3} \cdot \frac{2}{3} x^{3/2} + C \\
&= \frac{2}{3} x^{3/2} \ln x - \frac{4}{9} x^{3/2} + C
\end{align*}
$$

*Problem 27:* $\int r (\ln r)^2 \, dr$

$$
\begin{align*}
u &= (\ln r)^2 \\
dv &= r \, dr \\
v &= \frac{r^2}{2} \\
\int r (\ln r)^2 \, dr &= \frac{r^2}{2} (\ln r)^2 - \int \frac{r^2}{2} \cdot \frac{2 \ln r}{r} \, dr \\
&= \frac{r^2}{2} (\ln r)^2 - \int r \ln r \, dr \\
&= \frac{r^2}{2

} (\ln r)^2 - \left( \frac{r^2}{2} \ln r - \frac{r^2}{4} \right) + C \\
&= \frac{r^2}{2} (\ln r)^2 - \frac{r^2}{2} \ln r + \frac{r^2}{4} + C
\end{align*}
$$

*Problem 29:* $\int \arctan 7z \, dz$

$$
\begin{align*}
u &= \arctan 7z \\
dv &= dz \\
v &= z \\
\int \arctan 7z \, dz &= z \arctan 7z - \int z \cdot \frac{7}{1 + (7z)^2} \, dz \\
&= z \arctan 7z - 7 \int \frac{z}{1 + 49z^2} \, dz \\
&= z \arctan 7z - 7 \cdot \frac{1}{98} \ln (1 + 49z^2) + C \\
&= z \arctan 7z - \frac{7}{98} \ln (1 + 49z^2) + C \\
&= z \arctan 7z - \frac{1}{14} \ln (1 + 49z^2) + C
\end{align*}
$$

*Problem 31:* $\int x^3 e^{x^2} \, dx$

$$
\begin{align*}
u &= x^2 \\
du &= 2x \, dx \\
\frac{1}{2} \int x^2 e^u \, du \\
&= \frac{1}{2} e^u + C \\
&= \frac{1}{2} e^{x^2} + C
\end{align*}
$$

*Problem 33:* $\int x \sinh x \, dx$

$$
\begin{align*}
u &= x \\
dv &= \sinh x \, dx \\
v &= \cosh x \\
\int x \sinh x \, dx &= x \cosh x - \int \cosh x \, dx \\
&= x \cosh x - \sinh x + C
\end{align*}
$$

*Problem 35:* $\int e^{\sqrt{x}} \, dx$

$$
\begin{align*}
u &= \sqrt{x} \\
du &= \frac{1}{2\sqrt{x}} \, dx \\
dx &= 2\sqrt{x} \, du \\
\int e^u 2\sqrt{x} \, du &= 2 \int e^u \cdot u \, du \\
&= 2 \left( u e^u - \int e^u \, du \right) \\
&= 2 \left( u e^u - e^u \right) + C \\
&= 2 e^u (u - 1) + C \\
&= 2 e^{\sqrt{x}} (\sqrt{x} - 1) + C
\end{align*}
$$

*Problem 37:* $\int (2x + 1)^2 \ln (2x + 1) \, dx$

$$
\begin{align*}
u &= \ln (2x + 1) \\
dv &= (2x + 1)^2 \, dx \\
v &= \frac{(2x + 1)^3}{6} \\
\int (2x + 1)^2 \ln (2x + 1) \, dx &= \frac{(2x + 1)^3}{6} \ln (2x + 1) - \int \frac{(2x + 1)^3}{6} \cdot \frac{2}{2x + 1} \, dx \\
&= \frac{(2x + 1)^3}{6} \ln (2x + 1) - \frac{2}{6} \int (2x + 1)^2 \, dx \\
&= \frac{(2x + 1)^3}{6} \ln (2x + 1) - \frac{2}{6} \cdot \frac{(2x + 1)^3}{3 \cdot 2} + C \\
&= \frac{(2x + 1)^3}{6} \ln (2x + 1) - \frac{1}{9} (2x + 1)^3 + C
\end{align*}
$$