---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 10.3 Finding and Using Taylor Series

## Problems

*Problem 1:* $e^{-x}$

$$
\begin{align*}
e^{-x} &= \sum_{n=0}^{\infty} \frac{(-x)^n}{n!} \\
&= 1 - x + \frac{x^2}{2!} - \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots \\
&= 1 - x + \frac{x^2}{2} - \frac{x^3}{6} + \frac{x^4}{24} + \cdots
\end{align*}
$$

*Problem 2:* $\sqrt{1 - 2x}$

$$
\begin{align*}
\sqrt{1 - 2x} &= \sum_{n=0}^{\infty} \binom{1/2}{n} (-2x)^n \\
&= 1 - x - \frac{2x^2}{2} - \frac{2 \cdot 3 x^3}{6} + \cdots \\
&= 1 - x - x^2 - \frac{x^3}{2} + \cdots
\end{align*}
$$

*Problem 3:* $\cos(\theta^2)$

$$
\begin{align*}
\cos(\theta^2) &= \sum_{n=0}^{\infty} \frac{(-1)^n (\theta^2)^{2n}}{(2n)!} \\
&= 1 - \frac{\theta^4}{2!} + \frac{\theta^8}{4!} - \frac{\theta^{12}}{6!} + \cdots \\
&= 1 - \frac{\theta^4}{2} + \frac{\theta^8}{24} - \frac{\theta^{12}}{720} + \cdots
\end{align*}
$$

*Problem 4:* $\ln(1 - 2y)$

$$
\begin{align*}
\ln(1 - 2y) &= -\sum_{n=1}^{\infty} \frac{(2y)^n}{n} \\
&= -\left(2y + \frac{(2y)^2}{2} + \frac{(2y)^3}{3} + \frac{(2y)^4}{4} + \cdots \right) \\
&= -\left(2y + 2y^2 + \frac{8y^3}{3} + \frac{16y^4}{4} + \cdots \right) \\
&= -2y - 2y^2 - \frac{8y^3}{3} - 4y^4 + \cdots
\end{align*}
$$

*Problem 5:* $\arcsin x$

$$
\begin{align*}
\arcsin x &= \sum_{n=0}^{\infty} \frac{(2n)!}{4^n (n!)^2 (2n+1)} x^{2n+1} \\
&= x + \frac{x^3}{6} + \frac{3x^5}{40} + \frac{5x^7}{336} + \cdots \\
&= x + \frac{x^3}{6} + \frac{3x^5}{40} + \frac{5x^7}{336} + \cdots
\end{align*}
$$

*Problem 6:* $t \sin(3t)$

$$
\begin{align*}
\sin(3t) &= \sum_{n=0}^{\infty} \frac{(-1)^n (3t)^{2n+1}}{(2n+1)!} \\
&= 3t - \frac{(3t)^3}{3!} + \frac{(3t)^5}{5!} - \cdots \\
&= 3t - \frac{27t^3}{6} + \frac{243t^5}{120} - \cdots \\
t \sin(3t) &= t \left(3t - \frac{27t^3}{6} + \frac{243t^5}{120} - \cdots \right) \\
&= 3t^2 - \frac{27t^4}{6} + \frac{243t^6}{120} - \cdots \\
&= 3t^2 - \frac{9t^4}{2} + \frac{81t^6}{40} + \cdots
\end{align*}
$$

*Problem 7:* $\frac{1}{\sqrt{1 - z^2}}$

$$
\begin{align*}
\frac{1}{\sqrt{1 - z^2}} &= \sum_{n=0}^{\infty} \binom{-1/2}{n} (-z^2)^n \\
&= 1 + \frac{1}{2}z^2 + \frac{3}{8}z^4 + \frac{5}{16}z^6 + \cdots \\
&= 1 + \frac{1}{2}z^2 + \frac{3}{8}z^4 + \frac{5}{16}z^6 + \cdots
\end{align*}
$$
