---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 6.3 Differential Equations and Motion

> [!definition] **Definition** (Ordinary Differential Equation)
> An equation of the form
>
> $$
> \frac{dy}{dx} = f(x)
> $$
>
> is an example of a *differential equation*. Finding the *general solution* to the differential equation means finding the general antiderivative $y = F(x) + C$ with $F'(x) = f(x)$.

## Problems

> [!problem] **Problem** (Problem 1)
> Show that $y = xe^{-x} + 2$ is a solution of the initial value problem $\frac{dy}{dx} = (1 - x)e^{-x}$, $y(0) = 2$.

$$
\begin{align*}
y &= xe^{-x} + 2 \\
\frac{dy}{dx} &= \frac{d}{dx}(xe^{-x}) + \frac{d}{dx}(2) \\
&= e^{-x} + x(-e^{-x}) + 0 \\
&= e^{-x} - xe^{-x} \\
&= (1 - x)e^{-x}
\end{align*}
$$

The initial condition $y(0) = 2$:

$$
\begin{align*}
y(0) &= 0 \cdot e^{-0} + 2 \\
&= 0 + 2 \\
&= 2
\end{align*}
$$

> [!problem] **Problem** (Problem 2)
> Show that $y = \sin(2t)$, for $0 \le t < \frac{\pi}{4}$, is a solution to the initial value problem $\frac{dy}{dt} = 2\sqrt{1 - y^2}$, $y(0) = 0$.

$$
\begin{align*}
y &= \sin(2t) \\
\frac{dy}{dt} &= 2\cos(2t) \\
\cos(2t) &= \sqrt{1 - \sin^2(2t)} \\
\frac{dy}{dt} &= 2\sqrt{1 - y^2}
\end{align*}
$$

The initial condition $y(0) = 0$:

$$
\begin{align*}
y(0) &= \sin(2 \cdot 0) \\
&= \sin(0) \\
&= 0
\end{align*}
$$

> [!problem] **Problem** (Problems 3-8)
> In problems 3–8, find the general solution to the differential equation.

*Problem 3:* $\frac{dy}{dx} = 2x$

$$
\begin{align*}
y &= \int 2x \, dx \\
&= x^2 + C
\end{align*}
$$

*Problem 4:* $\frac{dy}{dt} = t^2$

$$
\begin{align*}
y &= \int t^2 \, dt \\
&= \frac{t^3}{3} + C
\end{align*}
$$

*Problem 5:* $\frac{dy}{dx} = x^3 + 5x^4$

$$
\begin{align*}
y &= \int (x^3 + 5x^4) \, dx \\
&= \frac{x^4}{4} + x^5 + C
\end{align*}
$$

*Problem 6:* $\frac{dy}{dt} = e^t$

$$
\begin{align*}
y &= \int e^t \, dt \\
&= e^t + C
\end{align*}
$$

*Problem 7:* $\frac{dy}{dx} = \cos x$

$$
\begin{align*}
y &= \int \cos x \, dx \\
&= \sin x + C
\end{align*}
$$

*Problem 8:* $\frac{dy}{dx} = \frac{1}{x}$, where $x > 0$

$$
\begin{align*}
y &= \int \frac{1}{x} \, dx \\
&= \ln|x| + C \\
&= \ln x + C \text{ (since $ x > 0 $)}
\end{align*}
$$

> [!question] **Question** (Problems 9-12)
> In problems 9–12, find the solution of the initial value problem.

*Problem 9:* $\frac{dy}{dx} = 3x^2$, $y(0) = 5$

$$
\begin{align*}
y &= \int 3x^2 \, dx \\
&= x^3 + C
\end{align*}
$$

The initial condition $y(0) = 5$:

$$
\begin{align*}
5 &= 0 + C \\
C &= 5
\end{align*}
$$

Thus, $y = x^3 + 5$.

*Problem 10:* $\frac{dy}{dx} = x^5 + x^6$, $y(1) = 2$

$$
\begin{align*}
y &= \int (x^5 + x^6) \, dx \\
&= \frac{x^6}{6} + \frac{x^7}{7} + C
\end{align*}
$$

The initial condition $y(1) = 2$:

$$
\begin{align*}
2 &= \frac{1}{6} + \frac{1}{7} + C \\
2 &= \frac{7 + 6}{42} + C \\
2 &= \frac{13}{42} + C \\
C &= 2 - \frac{13}{42} \\
C &= \frac{84}{42} - \frac{13}{42} \\
C &= \frac{71}{42}
\end{align*}
$$

Thus, $y = \frac{x^6}{6} + \frac{x^7}{7} + \frac{71}{42}$.

*Problem 11:* $\frac{dy}{dx} = e^x$, $y(0) = 7$

$$
\begin{align*}
y &= \int e^x \, dx \\
&= e^x + C
\end{align*}
$$

The initial condition $y(0) = 7$:

$$
\begin{align*}
7 &= e^0 + C \\
7 &= 1 + C \\
C &= 6
\end{align*}
$$

Thus, $y = e^x + 6$.

*Problem 12:* $\frac{dy}{dx} = \sin x$, $y(0) = 3$

$$
\begin{align*}
y &= \int \sin x \, dx \\
&= -\cos x + C
\end{align*}
$$

The initial condition $y(0) = 3$:

$$
\begin{align*}
3 &= -\cos(0) + C \\
3 &= -1 + C \\
C &= 4
\end{align*}
$$

Thus, $y = -\cos x + 4$.

