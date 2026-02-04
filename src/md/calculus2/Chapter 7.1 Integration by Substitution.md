---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 7.1 Integration by Substitution

**U-substitution** is a method used to simplify the process of integrating functions. It involves substituting part of the integrand with a new variable, $u$, to transform the integral into an easier form.

## Steps

1. **Choose $u$**: Identify a part of the integrand that, when substituted, simplifies the integral. Set $u$ equal to this part.
2. **Differentiate $u$**: Find $\frac{du}{dx}$ and solve for $dx$.
3. **Substitute**: Replace the identified part and $dx$ in the original integral with $u$ and $du$.
4. **Integrate**: Perform the integral with respect to $u$.
5. **Back-substitute**: Replace $u$ with the original expression to get the final answer.

## Example

> [!example] **Example** (U-substitution)
> Evaluate $\int 2x \cos(x^2) \, dx$.
>
> 1. Choose $u$: Let $u = x^2$.
> 2. Differentiate $u$: Then, $\frac{du}{dx} = 2x$ or $du = 2x \, dx$.
> 3. Substitute: The integral becomes $\int \cos(u) \, du$.
> 4. Integrate: $\int \cos(u) \, du = \sin(u) + C$.
> 5. Back-substitute: Replace $u$ with $x^2$ to get the final answer: $\sin(x^2) + C$.
>
> Thus,
>
> $$
> \int 2x \cos(x^2) \, dx = \sin(x^2) + C
> $$

## Problems

*Problem 3:* $\int e^{3x} \, dx$

$$
\begin{align*}
\int e^{3x} \, dx &= \frac{1}{3} e^{3x} + C
\end{align*}
$$

*Problem 5:* $\int e^{-x} \, dx$

$$
\begin{align*}
\int e^{-x} \, dx &= -e^{-x} + C
\end{align*}
$$

*Problem 7:* $\int \sin(2x) \, dx$

$$
\begin{align*}
\int \sin(2x) \, dx &= -\frac{1}{2} \cos(2x) + C
\end{align*}
$$

*Problem 9:* $\int \sin(3 - t) \, dt$

$$
\begin{align*}
\int \sin(3 - t) \, dt &= \cos(3 - t) + C
\end{align*}
$$

*Problem 11:* $\int (r + 1)^3 \, dr$

$$
\begin{align*}
\int (r + 1)^3 \, dr &= \frac{(r + 1)^4}{4} + C
\end{align*}
$$

*Problem 13:* $\int x^2 (1 + 2x^3)^2 \, dx$

$$
\begin{align*}
u &= 1 + 2x^3 \\
du &= 6x^2 \, dx \\
\int x^2 (1 + 2x^3)^2 \, dx &= \int \frac{u^2}{6} \, du \\
&= \frac{u^3}{18} + C \\
&= \frac{(1 + 2x^3)^3}{18} + C
\end{align*}
$$

*Problem 15:* $\int x (x^2 + 3)^2 \, dx$

$$
\begin{align*}
u &= x^2 + 3 \\
du &= 2x \, dx \\
\int x (x^2 + 3)^2 \, dx &= \int \frac{u^2}{2} \, du \\
&= \frac{u^3}{6} + C \\
&= \frac{(x^2 + 3)^3}{6} + C
\end{align*}
$$

*Problem 17:* $\int y^2 (1 + y)^2 \, dy$

$$
\begin{align*}
\int y^2 (1 + y)^2 \, dy &= \int y^{2}(y^{2} + 2y + 1) \, dy \\
&= \int y^{4} + 2y^{3} + y^{2} \, dy \\
&= \frac{y^{5}}{5} - \frac{y^{4}}{2} + \frac{y^3}{3} + C
\end{align*}
$$

*Problem 19:* $\int x^2 e^{x^3 + 1} \, dx$

$$
\begin{align*}
u &= x^3 + 1 \\
du &= 3x^2 \, dx \\
\int x^2 e^{x^3 + 1} \, dx &= \int \frac{e^u}{3} \, du \\
&= \frac{e^u}{3} + C \\
&= \frac{e^{x^3 + 1}}{3} + C
\end{align*}
$$

*Problem 21:* $\int \frac{1}{\sqrt{4 - x}} \, dx$

$$
\begin{align*}
u &= 4 - x \\
du &= -dx \\
\int \frac{1}{\sqrt{4 - x}} \, dx &= -\int \frac{1}{\sqrt{u}} \, du \\
&= -2\sqrt{u} + C \\
&= -2\sqrt{4 - x} + C
\end{align*}
$$

*Problem 23:* $\int e^{-0.1t + 4} \, dt$

$$
\begin{align*}
u &= -0.1t + 4 \\
du &= -0.1 \, dt \\
\int e^{-0.1t + 4} \, dt &= -10 \int e^u \, du \\
&= -10e^u + C \\
&= -10e^{-0.1t + 4} + C
\end{align*}
$$

*Problem 25:* $\int \sin \theta (\cos \theta + 5)^7 \, d\theta$

$$
\begin{align*}
u &= \cos \theta + 5 \\
du &= -\sin \theta \, d\theta \\
\int \sin \theta (\cos \theta + 5)^7 \, d\theta &= -\int u^7 \, du \\
&= -\frac{u^8}{8} + C \\
&= -\frac{(\cos \theta + 5)^8}{8} + C
\end{align*}
$$

*Problem 27:* $\int \sin^6 \theta \cos \theta \, d\theta$

$$
\begin{align*}
u &= \sin \theta \\
du &= \cos \theta \, d\theta \\
\int \sin^6 \theta \cos \theta \, d\theta &= \int u^6 \, du \\
&= \frac{u^7}{7} + C \\
&= \frac{\sin^7 \theta}{7} + C
\end{align*}
$$

*Problem 29:* $\int \sin^6 (5\theta) \cos (5\theta) \, d\theta$

$$
\begin{align*}
u &= \sin (5\theta) \\
du &= 5\cos (5\theta) \, d\theta \\
\int \sin^6 (5\theta) \cos (5\theta) \, d\theta &= \frac{1}{5} \int u^6 \, du \\
&= \frac{u^7}{35} + C \\
&= \frac{\sin^7 (5\theta)}{35} + C
\end{align*}
$$

*Problem 31:* $\int \frac{(\ln z)^2}{z} \, dz$

$$
\begin{align*}
u &= \ln z \\
du &= \frac{1}{z} \, dz \\
\int \frac{(\ln z)^2}{z} \, dz &= \int u^2 \, du \\
&= \frac{u^3}{3} + C \\
&= \frac{(\ln z)^3}{3} + C
\end{align*}
$$

*Problem 33:* $\int \frac{(t + 1)^2}{t^2} \, dt$

$$
\begin{align*}
\int \frac{(t + 1)^2}{t^2} \, dt &= \int \left( \frac{t^2 + 2t + 1}{t^2} \right) \, dt \\
&= \int \left( 1 + \frac{2}{t} + \frac{1}{t^2} \right) \, dt \\
&= \int 1 \, dt + \int \frac{2}{t} \, dt + \int \frac{1}{t^2} \, dt \\
&= t + 2 \ln |t| - \frac{1}{t} + C
\end{align*}
$$

*Problem 35:* $\int \frac{dx}{1 + 2x^2}$

$$
\begin{align*}
u &= \sqrt{2}x \\
du &= \sqrt{2} \, dx \\
\int \frac{dx}{1 + 2x^2} &= \frac{1}{\sqrt{2}} \int \frac{du}{1 + u^2} \\
&= \frac{1}{\sqrt{2}} \arctan u + C \\
&= \frac{1}{\sqrt{2}} \arctan (\sqrt{2}x) + C
\end{align*}
$$

*Problem 37:* $\int \frac{\cos \sqrt{x}}{\sqrt{x}} \, dx$

$$
\begin{align*}
u &= \sqrt{x} \\
du &= \frac{1}{2\sqrt{x}} \, dx \\
\int \frac{\cos \sqrt{x}}{\sqrt{x}} \, dx &= 2 \int \cos u \, du \\
&= 2 \sin u + C \\
&= 2 \sin (\sqrt{x}) + C
\end{align*}
$$

*Problem 39:* $\int \frac{1 + e^x}{\sqrt{x + e^x}} \, dx$

$$
\begin{align*}
u &= x + e^x \\
du &= (1 + e^x) \, dx \\
\int \frac{1 + e^x}{\sqrt{x + e^x}} \, dx &= \int \frac{du}{\sqrt{u}} \\
&= 2\sqrt{u} + C \\
&= 2\sqrt{x + e^x} + C
\end{align*}
$$

*Problem 41:* $\int \frac{x + 1}{x^2 + 2x + 1} \, dx$

$$
\begin{align*}
\int \frac{x + 1}{x^2 + 2x + 1} \, dx &= \int \frac{x + 1}{(x + 1)^2} \, dx \\
&= \int \frac{1}{x + 1} \, dx \\
&= \ln |x + 1| + C
\end{align*}
$$

*Problem 43:* $\int \frac{e^x - e^{-x}}{e^x + e^{-x}} \, dx$

$$
\begin{align*}
u &= e^{x} + e^{-x} \\
du &= e^{x} - e^{-x} \, dx \\
\int \frac{e^x - e^{-x}}{e^x + e^{-x}} \, dx &= \int \frac{du}{u} \\
&= \ln|u| + C \\
&= \ln|e^{x}+e^{-x}| + C \\
&= \ln|2\cosh(x)| + C
\end{align*}
$$

*Problem 45:* $\int \sinh 3t \, dt$

$$
\begin{align*}
\int \sinh 3t \, dt &= \frac{1}{3} \cosh 3t + C
\end{align*}
$$

*Problem 47:* $\int \cosh(2w + 1) \, dw$

$$
\begin{align*}
u &= 2w + 1 \\
du &= 2 \, dw \\
\int \cosh(2w + 1) \, dw &= \frac{1}{2} \int \cosh u \, du \\
&= \frac{1}{2} \sinh u + C \\
&= \frac{1}{2} \sinh (2w + 1) + C
\end{align*}
$$

*Problem 49:* $\int \cosh^2 x \sinh x \, dx$

$$
\begin{align*}
u &= \cosh x \\
du &= \sinh x \, dx \\
\int \cosh^2 x \sinh x \, dx &= \int u^2 \, du \\
&= \frac{u^3}{3} + C \\
&= \frac{\cosh^3 x}{3} + C
\end{align*}
$$
