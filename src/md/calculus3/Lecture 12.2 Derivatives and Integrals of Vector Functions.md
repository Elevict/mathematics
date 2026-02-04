---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 12.2 Derivatives and Integrals of Vector Functions

Recall that the definition of the derivative is

$$
f'(x) = \lim_{\Delta x \to 0} \frac{f(x+\Delta x)- f(x) }{\Delta x}
$$

then expanding the definition to vectors, we have

> [!definition] **Definition** (Derivative of a Vector Function)
>
> $$
> \vec{r}'(x) = \lim_{\Delta x \to 0} \frac{\vec{r}(x+\Delta x)- \vec{r}(x) }{\Delta x}
> $$

which is a tangent vector to a curve $\vec{r}'(x)$. This is also the instantaneous velocity at that point. In other words, we just take the regular derivative component-wise to obtain the derivative. We can prove this in the following manner:

$$
\begin{align}
\vec{r}'(x) &= \lim_{\Delta x \to 0} \frac{\vec{r}(x+\Delta x)- \vec{r}(x) }{\Delta x} \\
&= \lim_{\Delta x \to 0}  \frac{f(x+\Delta x)- f(x) }{\Delta x}\hat{i} + \frac{g(x+\Delta x)- g(x) }{\Delta x}\hat{j} + \frac{h(x+\Delta x)- h(x) }{\Delta x}\hat{k} \\
&= f'(x)\hat{i} + g'(x)\hat{j} + h'(x)\hat{k}
\end{align}
$$

> [!example] **Example** (Differentiation of a Vector Function)
>
> $$
> \begin{align}
> \vec{r}(t) &= t\hat{i} + t^{2}\hat{j} + t^{3}\hat{k} \\
> \vec{r}'(t) &= \hat{i} + 2t\hat{j} + 3t^{2}\hat{k}
> \end{align}
> $$

You can sketch this curve in a 3D graph, and the derivative will be a vector pointing in the direction of change the curve is going. In other words, it will be a velocity curve. Note that a vector function outputs vectors, and that the curve itself is different since it is a parametric function.

> [!example] **Example** (Finding the Unit Tangent Vector)
> Find the unit tangent vector.
>
> $$
> \begin{align}
> \vec{r}(t) &= 2\sin(2t)\hat{i}+3\cos(2t)\hat{j}+3\hat{k} \\
> \vec{r}'(t)&= 4\cos(2t)\hat{i} - 6\sin(2t)\hat{j} \\
> \lvert \vec{r}'(t) \rvert &=\sqrt{16\cos ^{2}(2t) +36\sin^{2}(2t)} 
> \end{align}
> $$
>
> then we divide the tangent vector with its norm to get the unit tangent vector.

In a similar manner, integration occurs component-wise just as the same with derivatives.

> [!example] **Example** (Integration of a Vector Function)
> $$
> \begin{align}
> \int_{0}^{1} (t\hat{i} +t^{2}\hat{j}+t^{3}\hat{k})dt &= \left[ \frac{1}{2}t^{2}\hat{i} + \frac{1}{3}t^{3} + \frac{1}{4}t^{4} \right]_{0}^{1}\\
> &= \frac{1}{2}(1-0)^{2}\hat{i} + \frac{1}{3}(1-0)^{3}\hat{j} + \frac{1}{4}(1-0)^{4}\hat{k} \\
> &= \frac{1}{2}\hat{i}+\frac{1}{3}\hat{j}+\frac{1}{4}\hat{k}
> \end{align}
> $$

