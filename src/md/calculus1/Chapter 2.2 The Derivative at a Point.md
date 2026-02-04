---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 2.2 the Derivative at a point

> [!definition] **Definition** (Derivative at a Point)
> The **derivative** of $f$ at $a$, written $f'(a)$, is defined as
>
> $$
> \text{Rate of change of } f \text{ at } a = f'(a) = \lim_{h \to 0} \frac{f(a+h)-f(a)}{h}.
> $$
>
> If the limit exists, then $f$ is said to be **differentiable** at $a$.

The derivative at point $A$ can be interpreted as:
- The slope of the curve at $A$.
- The slope of the tangent line to the curve at $A$.

## Problems

> [!question] **Question** (Problems 45-50)
> Use algebra to evaluate the limits in problems 45-50.

*Problem 45*

$$
\lim_{h \to 0} \frac{(-3+h)^{2}-9}{h} = \lim_{h \to 0} \frac{9-6h+h^{2}-9}{h} = \lim_{h \to 0} \frac{h(-6+h)}{h} = -6
$$

*Problem 46*

$$
\lim_{h \to 0} \frac{(2-h)^{3}-8}{h} = \lim_{h \to 0} \frac{8-12h+6h^{2}-h^{3}-8}{h} = \lim_{h \to 0} \frac{h(-12+6h-h^{2})}{h} = -12
$$

*Problem 47*

$$
\lim_{h \to 0} \frac{\frac{1}{1+h}-1}{h} = \lim_{h \to 0} \frac{1-(1+h)}{1+h} \cdot  \frac{1}{h} = \lim_{h \to 0} \frac{-1}{1+h} = -1
$$

*Problem 48*

$$
\lim_{h \to 0} \frac{\frac{1}{(1+h)^{2}}-1}{h} = \lim_{h \to 0} \frac{1-(1+2h+h^{2})}{1+2h+h^{2}} \cdot \frac{1}{h} = \lim_{h \to 0} \frac{h(-2h-h)}{1+2h+h^{2}} \cdot \frac{1}{h} = \lim_{h \to 0} \frac{-2-h}{1+2h+h^{2}} = -2
$$

*Problem 49*

$$
\lim_{h \to 0} \frac{\sqrt{4+h}-2}{h} = \lim_{h \to 0} \frac{\sqrt{4+h}-2}{h} \cdot \frac{\sqrt{4+h}+2}{\sqrt{4+h}+2} = \lim_{h \to 0} \frac{(4+h)-4}{h(\sqrt{4+h}+2)} = \lim_{h \to 0} \frac{1}{\sqrt{4+h}+2} = \frac{1}{4}
$$

*Problem 50*

$$
\begin{align}
\lim_{h \to 0} \frac{\frac{1}{\sqrt{4+h}}-\frac{1}{2}}{h} &= \lim_{h \to 0} \frac{2-\sqrt{4+h}}{2\sqrt{4+h}} \cdot  \frac{1}{h} = \lim_{h \to 0} \frac{2-\sqrt{4+h}}{2\sqrt{4+h}} \cdot \frac{2+\sqrt{4+h}}{2+\sqrt{4+h}} \cdot \frac{1}{h} \\
&= \lim_{h \to 0} \frac{4 -(4+h)}{4\sqrt{4+h} + 2(4+h)} \cdot \frac{1}{h} = \lim_{h \to 0} \frac{-h}{h(4\sqrt{4+h}+8+2h)} \\
&= \lim_{h \to 0} \frac{-1}{4\sqrt{4+h}+8+2h} = -\frac{1}{16}
\end{align}
$$

> [!question] **Question** (Problems 51-55)
> For problems 51-55, estimate the value of $f'(1)$ by taking the derivative.

*Problem 51*

$$
\begin{align}
f(x) &= 3x+1 \\
f'(x) &= 3 \\
f'(1) &= 3
\end{align}
$$

*Problem 52*

$$
\begin{align}
f(x) &= x^{2}+x+1 \\
f'(x) &= 2x+1 \\
f'(1) &= 3
\end{align}
$$

*Problem 53*

$$
\begin{align}
f(x) &= x^{1/2} \\
f'(x) &= \frac{1}{2}x^{-1/2} \\
f'(1) &= \frac{1}{2}
\end{align}
$$

*Problem 54*

$$
\begin{align}
f(x) &= (x+1)^{-1} \\
f'(x) &= -(x+1)^{-2} \\
f'(1) &= -\frac{1}{4}
\end{align}
$$

*Problem 55*

$$
\begin{align}
f(x) &= 2x+x^{-1} \\
f'(x) &= 2-x^{-2} \\
f'(1) &= 1
\end{align}
$$

