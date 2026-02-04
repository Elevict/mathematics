---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 7.3 Tables of Integrals

## Table of Integrals

**Tables of integrals** are compilations of antiderivatives for commonly used functions. While modern computational algebra systems (CAS) often handle integrals, these tables remain a valuable resource for identifying the antiderivatives of various functions.

### Key Points:

- **Purpose**: Provides quick reference to antiderivatives of frequently encountered functions.
- **Usage**: Recognize the general class of the function you are trying to integrate to locate it in the table.
- **Common References**: Tables can be found in textbooks, such as in the appendix, or in dedicated resources like the CRC Standard Mathematical Tables.

> [!example] **Example** (Table of Integrals)
> Consider the integral $\int e^{ax} \, dx$.
>
> 1. **Identify the form**: Recognize that $e^{ax}$ is an exponential function.
> 2. **Find in the table**: Locate the section for exponential functions.
>
> The table entry for $\int e^{ax} \, dx$ is:
>
> $$
> \int e^{ax} \, dx = \frac{1}{a} e^{ax} + C
> $$
>
> Using tables of integrals can simplify the process of finding antiderivatives, especially for more complex functions.

## Problems

*Problem 15:* $\int x^5 \ln x \, dx$

$$
\begin{align*}
\text{Let } u &= \ln x \text{ and } dv = x^5 \, dx \\
du &= \frac{1}{x} \, dx \text{ and } v = \frac{x^6}{6} \\
\int x^5 \ln x \, dx &= \frac{x^6}{6} \ln x - \int \frac{x^6}{6} \cdot \frac{1}{x} \, dx \\
&= \frac{x^6}{6} \ln x - \int \frac{x^5}{6} \, dx \\
&= \frac{x^6}{6} \ln x - \frac{1}{6} \cdot \frac{x^6}{6} + C \\
&= \frac{x^6}{6} \ln x - \frac{x^6}{36} + C
\end{align*}
$$

*Problem 17:* $\int x^3 \sin 5x \, dx$

$$
\begin{align*}
\text{Let } u &= x^3 \text{ and } dv = \sin 5x \, dx \\
du &= 3x^2 \, dx \text{ and } v = -\frac{1}{5} \cos 5x \\
\int x^3 \sin 5x \, dx &= -\frac{1}{5} x^3 \cos 5x - \int -\frac{1}{5} \cdot 3x^2 \cos 5x \, dx \\
&= -\frac{1}{5} x^3 \cos 5x + \frac{3}{5} \int x^2 \cos 5x \, dx \\
\text{Let } u &= x^2 \text{ and } dv = \cos 5x \, dx \\
du &= 2x \, dx \text{ and } v = \frac{1}{5} \sin 5x \\
\int x^2 \cos 5x \, dx &= \frac{1}{5} x^2 \sin 5x - \int \frac{1}{5} \cdot 2x \sin 5x \, dx \\
&= \frac{1}{5} x^2 \sin 5x - \frac{2}{5} \int x \sin 5x \, dx \\
\text{Let } u &= x \text{ and } dv = \sin 5x \, dx \\
du &= dx \text{ and } v = -\frac{1}{5} \cos 5x \\
\int x \sin 5x \, dx &= -\frac{1}{5} x \cos 5x + \frac{1}{5} \int \cos 5x \, dx \\
&= -\frac{1}{5} x \cos 5x + \frac{1}{25} \sin 5x + C \\
\int x^2 \cos 5x \, dx &= \frac{1}{5} x^2 \sin 5x - \frac{2}{5} \left(-\frac{1}{5} x \cos 5x + \frac{1}{25} \sin 5x \right) + C \\
&= \frac{1}{5} x^2 \sin 5x + \frac{2}{25} x \cos 5x - \frac{2}{125} \sin 5x + C \\
\int x^3 \sin 5x \, dx &= -\frac{1}{5} x^3 \cos 5x + \frac{3}{5} \left(\frac{1}{5} x^2 \sin 5x + \frac{2}{25} x \cos 5x - \frac{2}{125} \sin 5x \right) + C \\
&= -\frac{1}{5} x^3 \cos 5x + \frac{3}{25} x^2 \sin 5x + \frac{6}{125} x \cos 5x - \frac{6}{625} \sin 5x + C
\end{align*}
$$

*Problem 19:* $\int (x^3 + 5)^2 \, dx$

$$
\begin{align*}
\int (x^3 + 5)^2 \, dx &= \int (x^6 + 10x^3 + 25) \, dx \\
&= \int x^6 \, dx + 10 \int x^3 \, dx + \int 25 \, dx \\
&= \frac{x^7}{7} + 10 \cdot \frac{x^4}{4} + 25x + C \\
&= \frac{x^7}{7} + \frac{10x^4}{4} + 25x + C \\
&= \frac{x^7}{7} + \frac{5x^4}{2} + 25x + C
\end{align*}
$$

*Problem 21:* $\int \sin^4 x \, dx$

$$
\begin{align*}
\int \sin^4 x \, dx &= \int \left(\frac{1 - \cos 2x}{2}\right)^2 \, dx \\
&= \int \frac{1 - 2\cos 2x + \cos^2 2x}{4} \, dx \\
&= \frac{1}{4} \int (1 - 2\cos 2x + \frac{1 + \cos 4x}{2}) \, dx \\
&= \frac{1}{4} \left(\int 1 \, dx - 2 \int \cos 2x \, dx + \frac{1}{2} \int 1 \, dx + \frac{1}{2} \int \cos 4x \, dx \right) \\
&= \frac{1}{4} \left(x - 2 \cdot \frac{\sin 2x}{2} + \frac{x}{2} + \frac{\sin 4x}{8} \right) + C \\
&= \frac{1}{4} \left(x - \sin 2x + \frac{x}{2} + \frac{\sin 4x}{8} \right) + C \\
&= \frac{x}{4} + \frac{x}{8} - \frac{\sin 2x}{4} + \frac{\sin 4x}{32} + C \\
&= \frac{3x}{8} - \frac{\sin 2x}{4} + \frac{\sin 4x}{32} + C
\end{align*}
$$

*Problem 23:* $\int x^2 e^{3x} \, dx$

$$
\begin{align*}
\text{Let } u &= x^2 \text{ and } dv = e^{3x} \, dx \\
du &= 2x \, dx \text{ and } v = \frac{e^{3x}}{3} \\
\int x^2 e^{3x} \, dx &= \frac{x^2 e^{3x}}{3} - \int \frac{2x e^{3x}}{3} \, dx \\
&= \frac{x^2 e^{3x}}{3} - \frac{2}{3} \int x e^{3x} \, dx \\
\text{Let } u &= x \text{ and } dv = e^{3x} \, dx \\
du &= dx \text{ and } v = \frac{e^{3x}}{3} \\
\int x e^{3x} \, dx &= \frac{x e^{3x}}{3} - \int \frac{e^{3x}}{3} \, dx \\
&= \frac{x e^{3x}}{3} - \frac{1}{3} \int e^{3x} \, dx \\
&= \frac{x e^{3x}}{3} - \frac{1}{3} \cdot \frac{e^{3x}}{3} + C \\
&= \frac{x e^{3x}}{3} - \frac{e^{3x}}{9} + C \\
\int x^2 e^{3x} \, dx &= \frac{x^2 e^{3x}}{3} - \frac{2}{3} \left(\frac{x e^{3x}}{3} - \frac{e^{3x}}{9}\right) + C \\
&= \frac{x^2 e^{3x}}{3} - \frac{2x e^{3x}}{9} + \frac{2 e^{3x}}{27} + C \\
&= \frac{e^{3x}}{27} \left(9x^2 - 6x + 2\right) + C
\end{align*}
$$