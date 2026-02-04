---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 7.6 Improper Integrals

## Conditions for Convergence and Divergence

> [!definition] **Definition** (Convergence and Divergence)
> Suppose $f(x)$ is positive for $x \geq a$.
> If $\lim_{b \to \infty} \int_{a}^{b} f(x) \, dx$ is a finite number, we say that $\int_{a}^{\infty} f(x) \, dx$ **converges** and define
>
> $$
> \int_{a}^{\infty} f(x) \, dx = \lim_{b \to \infty} \int_{a}^{b} f(x) \, dx  
> $$
>
> Otherwise, we say that $\int_{a}^{\infty} f(x) \, dx$ **diverges**. We define $\int_{-\infty}^{b} f(x) \, dx$ similarly.

> [!theorem] **Theorem** (Decomposition of Limits of Infinity)
> For a positive function $f(x)$, we can use any (finite) number $c$ to define.
>
> $$
> \int_{-\infty}^{\infty} f(x) \, dx = \int_{-\infty}^{c} f(x) \, dx + \int_{c}^{\infty} f(x) \, dx 
> $$
>
> In *either* of the two new improper integrals diverges, we say the original integral diverges. Only if both of the new integrals have a finite value do we add the values to get a finite value for the original integral.

> [!definition] **Definition** (One-Sided Improper Integral)
> Suppose $f(x)$ is positive and continuous on $a \leq x \leq b$ and tends to infinity as $x \to b$. If $\lim_{c \to b^{-}} \int_{a}^{c} f(x) \, dx$ is a finite number, we say that $\int_{a}^{b} f(x) \, dx$ **converges** and define
>
> $$
> \int_{a}^{b} f(x) \, dx = \lim_{c \to b^{-}} \int_{a}^{c} f(x) \, dx.
> $$
>
> Otherwise, we say that $\int_{a}^{b} f(x) \, dx$ **diverges**.

> [!theorem] **Theorem** (Decomposition of Integration Limits)
> Suppose that $f(x)$ is positive and continuous on $[a, b]$ except at the point $c$. If $f(x)$ tends to infinity as $x \to c$, then we define
>
> $$
> \int_{a}^{b} f(x) \, dx = \int_{a}^{c} f(x) \, dx + \int_{c}^{b} f(x) \, dx 
> $$
>
> If either of the two new improper integrals diverges, we say the original integral diverges. Only if both of the new integrals have a finite value do we add the values to get a finite value for the original integral.

## Problems

> [!question] **Question** (Problems 5-35)
> In problems 5–35, calculate the integral if it converges. You may calculate the limit by appealing to the dominance of one function over another, or by L’Hopital’s rule.

*Problem 5:*

$$
\int_{1}^{\infty} \frac{1}{5x + 2} \, dx
$$

$$
\begin{align*}
\int_{1}^{\infty} \frac{1}{5x + 2} \, dx &= \lim_{b \to \infty} \int_{1}^{b} \frac{1}{5x + 2} \, dx \\
&= \lim_{b \to \infty} \left[ \frac{1}{5} \ln|5x + 2| \right]_{1}^{b} \\
&= \lim_{b \to \infty} \left( \frac{1}{5} \ln|5b + 2| - \frac{1}{5} \ln|7| \right) \\
&= \infty
\end{align*}
$$

*Problem 7:*

$$
\int_{0}^{1} \ln x \, dx
$$

$$
\begin{align*}
\int_{0}^{1} \ln x \, dx &= \lim_{\epsilon \to 0^+} \int_{\epsilon}^{1} \ln x \, dx \\
&= \lim_{\epsilon \to 0^+} \left[ x \ln x - x \right]_{\epsilon}^{1} \\
&= \lim_{\epsilon \to 0^+} \left( (1 \ln 1 - 1) - (\epsilon \ln \epsilon - \epsilon) \right) \\
&= \lim_{\epsilon \to 0^+} \left( -1 - ( \epsilon \ln \epsilon - \epsilon) \right) \\
&= \lim_{\epsilon \to 0^+} \left( -1 -\epsilon \ln \epsilon + \epsilon \right) \\
&= -1
\end{align*}
$$

*Problem 9:*

$$
\int_{0}^{\infty} x e^{-x^2} \, dx
$$

$$
\begin{align*}
\int_{0}^{\infty} x e^{-x^2} \, dx &= \int_{0}^{\infty} e^{-u} \, du \quad \text{(let $u = x^2$, $du = 2x \, dx$)} \\
&= \frac{1}{2} \int_{0}^{\infty} e^{-u} \, du \\
&= \frac{1}{2} \left[ -e^{-u} \right]_{0}^{\infty} \\
&= \frac{1}{2} \left( 0 - (-1) \right) \\
&= \frac{1}{2}
\end{align*}
$$

*Problem 11:*

$$
\int_{0}^{\infty} \frac{x}{e^x} \, dx
$$

$$
\begin{align*}
\int_{0}^{\infty} \frac{x}{e^x} \, dx &= \int_{0}^{\infty} x e^{-x} \, dx \\
&= \int_{0}^{\infty} x e^{-x} \, dx \\
&= \left[ -x e^{-x} \right]_{0}^{\infty} + \int_{0}^{\infty} e^{-x} \, dx \\
&= \left( 0 - 0 \right) + \left[ -e^{-x} \right]_{0}^{\infty} \\
&= 1
\end{align*}
$$

*Problem 17:*

$$
 \int_{0}^{4} \frac{1}{\sqrt{x}} \, dx 
$$

$$
 \begin{align*} \int_{0}^{4} \frac{1}{\sqrt{x}} \, dx &= \int_{0}^{4} x^{-\frac{1}{2}} \, dx \\ &= \left[ 2x^{\frac{1}{2}} \right]_{0}^{4} \\ &= 2 \left[ \sqrt{x} \right]_{0}^{4} \\ &= 2 \left( 2 - 0 \right) \\ &= 4 \end{align*} 
$$

*Problem 19:*

$$
\int_{0}^{1} \frac{1}{v} \, dv
$$

$$
\begin{align*}
\int_{0}^{1} \frac{1}{v} \, dv &= \left[ \ln|v| \right]_{0}^{1} \\
&= \ln(1) - \ln(0) \\
&= 0 - (-\infty) \\
&= \infty
\end{align*}
$$

*Problem 21:*

$$
\int_{1}^{\infty} \frac{1}{x^2 + 1} \, dx
$$

$$
\begin{align*}
\int_{1}^{\infty} \frac{1}{x^2 + 1} \, dx &= \left[ \tan^{-1}(x) \right]_{1}^{\infty} \\
&= \frac{\pi}{2} - \frac{\pi}{4} \\
&= \frac{\pi}{4}
\end{align*}
$$

*Problem 23:*

$$
\int_{0}^{\infty} \frac{1}{\sqrt{t + 1}} \, dt
$$

$$
\begin{align*}
\int_{0}^{\infty} \frac{1}{\sqrt{t + 1}} \, dt &= \int_{1}^{\infty} \frac{1}{\sqrt{u}} \, du \quad \text{(let $u = t + 1$, $du = dt$)} \\
&= \left[ 2\sqrt{u} \right]_{1}^{\infty} \\
&= 2\sqrt{\infty} - 2\sqrt{1} \\
&= \infty
\end{align*}
$$

*Problem 25:*

$$
\int_{0}^{4} \frac{-1}{u^2 - 16} \, du
$$

$$
\begin{align*}
\int_{0}^{4} \frac{-1}{u^2 - 16} \, du &= -\frac{1}{16} \int_{0}^{4} \frac{1}{(u - 4)(u + 4)} \, du \\
&= -\frac{1}{16} \int_{0}^{4} \left( \frac{1}{u - 4} - \frac{1}{u + 4} \right) \, du \\
&= -\frac{1}{16} \left[ \ln|u - 4| - \ln|u + 4| \right]_{0}^{4} \\
&= -\frac{1}{16} \left( \ln(0) - \ln(8) \right) \\
&= \infty
\end{align*}
$$

*Problem 27:*

$$
\int_{2}^{\infty} \frac{1}{x \ln x} \, dx
$$

$$
\begin{align*}
\int_{2}^{\infty} \frac{1}{x \ln x} \, dx &= \int_{\ln 2}^{\infty} \frac{1}{u} \, du \quad \text{(let $u = \ln x$, $du = \frac{1}{x} \, dx$)} \\
&= \left[ \ln|u| \right]_{\ln 2}^{\infty} \\
&= \ln(\infty) - \ln(\ln 2) \\
&= \infty
\end{align*}
$$

*Problem 29:*

$$
\int_{16}^{20} \frac{1}{y^2 - 16} \, dy
$$

$$
\begin{align*}
\int_{16}^{20} \frac{1}{y^2 - 16} \, dy &= \int_{16}^{20} \frac{1}{(y - 4)(y + 4)} \, dy \\
&= \frac{1}{8} \int_{16}^{20} \left( \frac{1}{y - 4} - \frac{1}{y + 4} \right) \, dy \\
&= \frac{1}{8} \left[ \ln|y - 4| - \ln|y + 4| \right]_{16}^{20} \\
&= \frac{1}{8} \left( \ln(16) - \ln(24) \right) \\
&= \frac{1}{8} \ln\left(\frac{2}{3}\right) \\
&= \frac{1}{8} \left( \ln(2) - \ln(3) \right)
\end{align*}
$$

*Problem 31:*

$$
\int_{3}^{\infty} \frac{1}{x (\ln x)^2} \, dx
$$

$$
\begin{align*}
\int_{3}^{\infty} \frac{1}{x (\ln x)^2} \, dx &= \int_{\ln 3}^{\infty} \frac{1}{u^2} \, du \quad \text{(let $u = \ln x$, $du = \frac{1}{x} \, dx$)} \\
&= \left[ -\frac{1}{u} \right]_{\ln 3}^{\infty} \\
&= 0 - \left( -\frac{1}{\ln 3} \right) \\
&= \frac{1}{\ln 3}
\end{align*}
$$

*Problem 33:*

$$
\int_{4}^{\infty} \frac{1}{(x - 1)^2} \, dx
$$

$$
\begin{align*}
\int_{4}^{\infty} \frac{1}{(x - 1)^2} \, dx &= \int_{4}^{\infty} \frac{1}{u^2} \, du \quad \text{(let $u = x - 1$, $du = dx$)} \\
&= \left[ -\frac{1}{u} \right]_{3}^{\infty} \\
&= 0 - \left( -\frac{1}{3} \right) \\
&= \frac{1}{3}
\end{align*}
$$

*Problem 35:*

$$
\int_{7}^{\infty} \frac{1}{\sqrt{y - 5}} \, dy
$$

$$
\begin{align*}
\int_{7}^{\infty} \frac{1}{\sqrt{y - 5}} \, dy &= \int_{2}^{\infty} \frac{1}{\sqrt{u}} \, du \quad \text{(let $u = y - 5$, $du = dy$)} \\
&= \left[ 2\sqrt{u} \right]_{2}^{\infty} \\
&= 2\sqrt{\infty} - 2\sqrt{2} \\
&= \infty
\end{align*}
$$