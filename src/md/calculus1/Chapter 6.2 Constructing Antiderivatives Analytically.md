---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 6.2 Constructing Antiderivatives Analytically

## Integrating Polynomials

> [!theorem] **Theorem** (Indefinite Integral of Zero)
> If $F'(x) = 0$ on an interval, then $F(x) = C$ on this interval, for some constant $C$.

*Proof*
To find the indefinite integral of $0$:

$$
 \int 0 \, dx = F(x) + C 
$$

where $F'(x) = 0$. A function whose derivative is $0$ is a constant, hence:

$$
 \int 0 \, dx = C 
$$

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (Indefinite Integral of a Constant)
> If $k$ is a constant, then we have that
>
> $$
> \int k \ dx = kx + C
> $$

*Proof*
Let $k$ be a constant. To find:

$$
\int k \, dx
$$

 Let $F(x) = kx$. Then:

$$
F'(x) = k
$$

So:

$$
\int k \, dx = kx + C
$$

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (Reverse Power Rule)
> Given that $n$ is a real number, we have that
>
> $$
> \int x^{n} \ dx = \frac{x^{n+1}}{n+1} + C, \ n \neq -1.
> $$

*Proof*
To find the integral of $x^n$ where $n \neq -1$:

$$
 \int x^n \, dx
$$

 Let $F(x) = \frac{x^{n+1}}{n+1}$. Then:

$$
 F'(x) = \frac{d}{dx} \left(\frac{x^{n+1}}{n+1}\right) = x^n
$$

 Thus:

$$
 \int x^n \, dx = \frac{x^{n+1}}{n+1} + C
$$

$$
\tag*{\(\blacksquare\)}
$$

## Integrating Transcendental Functions

> [!theorem] **Theorem** (Indefinite Integral of $x^{-1}$)
>
> $$
> \int \frac{1}{x} \ dx = \ln |x| + C
> $$

> [!theorem] **Theorem** (Indefinite Integral of $e^{x}$)
>
> $$
> \int e^{x} \ dx = e^{x} + C
> $$

> [!theorem] **Theorem** (Indefinite Integral of $\cos x$ and $\sin x$)
>
> $$
> \int \cos x \ dx = \sin x + C
> $$
>
> $$
> \int \sin x \ dx = -\cos x + C
> $$

*Proof*

Simply take any of the transcendental functions above and take the derivative of the right-hand side. If it equals the integrand, you are done since we know all integrals take a general form $\int g(x) \ dx = f(x) + C$ where $\frac{d}{dx}[f(x) + C] = g(x)$.

$$
\tag*{\(\blacksquare\)}
$$

## Problems

> [!question] **Question** (Problems 1-16)
> In problems 1–16, find an antiderivative.

*Problem 6*

$$
h(z) = \frac{1}{z}
$$  

$$
\begin{align*}
\int \frac{1}{z} \, dz &= \ln|z| + C
\end{align*}
$$

*Problem 8*

$$
h(t) = \cos(t)
$$  

$$
\begin{align*}
\int \cos(t) \, dt &= \sin(t) + C
\end{align*}
$$

*Problem 10*

$$
q(y) = y^4 + \frac{1}{y}
$$  

$$
\begin{align*}
\int \left(y^4 + \frac{1}{y}\right) \, dy &= \int y^4 \, dy + \int \frac{1}{y} \, dy \\
&= \frac{y^5}{5} + \ln|y| + C
\end{align*}
$$

*Problem 12*

$$
g(t) = \sin(t)
$$  

$$
\begin{align*}
\int \sin(t) \, dt &= -\cos(t) + C
\end{align*}
$$

*Problem 14*

$$
p(t) = t^3 - \frac{t^2}{2} - t
$$  

$$
\begin{align*}
\int \left(t^3 - \frac{t^2}{2} - t\right) \, dt &= \int t^3 \, dt - \int \frac{t^2}{2} \, dt - \int t \, dt \\
&= \frac{t^4}{4} - \frac{t^3}{6} - \frac{t^2}{2} + C
\end{align*}
$$

*Problem 16*

$$
f(x) = 5x - \sqrt{x}
$$  

$$
\begin{align*}
\int \left(5x - \sqrt{x}\right) \, dx &= \int 5x \, dx - \int \sqrt{x} \, dx \\
&= \frac{5x^2}{2} - \frac{2}{3}x^{3/2} + C
\end{align*}
$$

> [!question] **Question** (Problems 17-28)
> In problems 17–28, find the general antiderivative.

*Problem 18*

$$
h(x) = x^3 - x
$$  

$$
\begin{align*}
\int \left(x^3 - x\right) \, dx &= \int x^3 \, dx - \int x \, dx \\
&= \frac{x^4}{4} - \frac{x^2}{2} + C
\end{align*}
$$

*Problem 20*

$$
g(t) = \sqrt{t}
$$  

$$
\begin{align*}
\int \sqrt{t} \, dt &= \int t^{1/2} \, dt \\
&= \frac{2}{3}t^{3/2} + C
\end{align*}
$$

*Problem 22*

$$
f(z) = z + e^z
$$  

$$
\begin{align*}
\int \left(z + e^z\right) \, dz &= \int z \, dz + \int e^z \, dz \\
&= \frac{z^2}{2} + e^z + C
\end{align*}
$$

*Problem 24*

$$
h(x) = 4x^3 - 7
$$  

$$
\begin{align*}
\int \left(4x^3 - 7\right) \, dx &= \int 4x^3 \, dx - \int 7 \, dx \\
&= x^4 - 7x + C
\end{align*}
$$

*Problem 26*

$$
p(t) = 2 + \sin(t)
$$  

$$
\begin{align*}
\int \left(2 + \sin(t)\right) \, dt &= \int 2 \, dt + \int \sin(t) \, dt \\
&= 2t - \cos(t) + C
\end{align*}
$$

*Problem 28*

$$
h(t) = \frac{7}{\cos^2(t)}
$$  

$$
\begin{align*}
\int \frac{7}{\cos^2(t)} \, dt &= 7 \int \sec^2(t) \, dt \\
&= 7 \tan(t) + C
\end{align*}
$$

> [!question] **Question** (Problems 30-36)
> In problems 30-36, find an antiderivative $F (x)$ with $F ′(x) = f (x)$ and $F (0) = 0$. Is there only one possible solution?

*Problem 30*

$$
f(x) = 2x
$$  

$$
\begin{align*}
\text{Let } F(x) &= \int 2x \, dx \\
F(x) &= x^2 + C
\end{align*}
$$

*Problem 32*

$$
f(x) = 2 + 4x + 5x^2
$$  

$$
\begin{align*}
\text{Let } F(x) &= \int (2 + 4x + 5x^2) \, dx \\
F(x) &= 2x + 2x^2 + \frac{5x^3}{3} + C
\end{align*}
$$

*Problem 34*

$$
f(x) = x^2
$$  

$$
\begin{align*}
\text{Let } F(x) &= \int x^2 \, dx \\
F(x) &= \frac{x^3}{3} + C
\end{align*}
$$

*Problem 36*

$$
f(x) = \sin(x)
$$  

$$
\begin{align*}
\text{Let } F(x) &= \int \sin(x) \, dx \\
F(x) &= -\cos(x) + C
\end{align*}
$$

> [!question] **Question** (Problems 38-50)
> In problems 38–50, find the indefinite integrals.

*Problem 38*

$$
\int (4t + \frac{1}{t}) \, dt
$$  

$$
\begin{align*}
\int \left(4t + \frac{1}{t}\right) \, dt &= \int 4t \, dt + \int \frac{1}{t} \, dt \\
&= 2t^2 + \ln|t| + C
\end{align*}
$$

*Problem 40*

$$
\int 7e^x \, dx
$$  

$$
\begin{align*}
\int 7e^x \, dx &= 7 \int e^x \, dx \\
&= 7e^x + C
\end{align*}
$$

*Problem 42*

$$
\int \left(4e^x - 3\sin(x)\right) \, dx
$$  

$$
\begin{align*}
\int \left(4e^x - 3\sin(x)\right) \, dx &= 4 \int e^x \, dx - 3 \int \sin(x) \, dx \\
&= 4e^x + 3\cos(x) + C
\end{align*}
$$

*Problem 44*

$$
\int (x + 3)^2 \, dx
$$  

$$
\begin{align*}
\int (x + 3)^2 \, dx &= \int (x^2 + 6x + 9) \, dx \\
&= \frac{x^3}{3} + 3x^2 + 9x + C
\end{align*}
$$

*Problem 46*

$$
\int \left(\frac{3}{t} - \frac{2}{t^2}\right) \, dt
$$  

$$
\begin{align*}
\int \left(\frac{3}{t} - \frac{2}{t^2}\right) \, dt &= 3 \int \frac{1}{t} \, dt - 2 \int t^{-2} \, dt \\
&= 3 \ln|t| + 2t^{-1} + C \\
&= 3 \ln|t| + \frac{2}{t} + C
\end{align*}
$$

*Problem 48*

$$
\int t^3(t^2 + 1) \, dt
$$  

$$
\begin{align*}
\int t^3(t^2 + 1) \, dt &= \int (t^5 + t^3) \, dt \\
&= \frac{t^6}{6} + \frac{t^4}{4} + C
\end{align*}
$$

*Problem 50*

$$
\int \frac{x+1}{x} \, dx
$$  

$$
\begin{align*}
\int \frac{x+1}{x} \, dx &= \int \left(\frac{x}{x} + \frac{1}{x}\right) \, dx \\
&= \int 1 \, dx + \int \frac{1}{x} \, dx \\
&= x + \ln|x| + C
\end{align*}
$$

