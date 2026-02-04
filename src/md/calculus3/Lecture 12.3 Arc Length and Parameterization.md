---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 12.3 Arc Length and Parameterization

## Arc Length

> [!definition] **Definition** (Arc Length in 2 Dimensions for a Parametric Function)
> Given a parametric function $(f(t), \ g(t))$
>
> $$
> \begin{align}
> L = \int_{a}^{b} \sqrt{f'(t)^{2} + g'(t)^{2}} \ dt
> \end{align}
> $$

And in general, the arc length for any dimension is as follows,

> [!definition] **Definition** (Arc Length for Vector Functions)
> Given a vector function $r(t)$, the arc length is
>
> $$
> L = \int_{a}^{b} \lvert| \vec{r}'(t) |\rvert  \, dx 
> $$

> [!example] **Example** (Arc length of a Vector Function)
> Find the arc length of $r(t) = 4\sin(t)\hat{i} + 3t\hat{j}+4\cos(t)\hat{k}$.
>
> $$
> \begin{align}
> r'(t) &= 4\cos(t)\hat{i} + 3\hat{j} - 4\sin(t)\hat{k} \\
> \lvert r'(t) \rvert &= \sqrt{16\cos ^{2}(t) + 9 + 16\sin ^{2}(t)}  \\
> &= \sqrt{16+9} \\
> &=5 \\
> \int_{0}^{2\pi} 5 \, ds &= [5s]_{0}^{2\pi} \\
> &= 10\pi
> \end{align}
> $$

Sometimes we want to reparametrize our parameter in order to make our life easier. Arc length gives you a great reparameterization because it turns out that the derivative will always have a magnitude of 1.

> [!example] **Example** (Reparametrization by Arc Length)
> Reparametrize the following vector function in terms of arc length.
>
> $$
> \begin{align}
> \vec{r}(t) &= (1+t)\hat{i} + (1+2t)\hat{j} + 3t\hat{k} \\
> r'(t) &= \hat{i} + 2\hat{j} + 3\hat{k} \\
> \lvert r'(t) \rvert &= \sqrt{1+4+9} \\
> &= \sqrt{14}  \\
> S(t) &= \int_{0}^{t} \sqrt{14} \, du \\
> &= \sqrt{14}[u]_{0}^{t} \\
> &=\sqrt{14}t
> \end{align}
> $$
>
> Now solve for $t$, we get that
>
> $$
> t = \frac{s}{\sqrt{14}}
> $$
>
> and we resubstitute it back into our original curve, we get our parameterization being
>
> $$
> \vec{r}(s) = \left( 1+\frac{s}{\sqrt{14}} \right)\hat{i} + \left( 1 + \frac{2s}{\sqrt{14}} \right)\hat{j} + \left( \frac{3s}{\sqrt{14}} \right)\hat{k}, \ s \geq 0
> $$

Let $r(t) = t^{2}\hat{i} + t\cos(t)\hat{j} + t\sin(t)\hat{k}$. Find $L$ on $0 \leq t \leq 1$.

$$
\begin{align}
r'(t) &= 2t\hat{i} + (\cos(t) - t\sin t)\hat{j} + (\sin(t) + t\cos(t))\hat{k} \\
\lvert r'(t) \rvert &= \sqrt{(2t)^{2} + (\cos(t)-t\sin(t))^{2} + (\sin(t)+t\cos(t))^{2}} \\
&= \sqrt{4t^{2} + \cos ^{2}(t) -2t\cos(t)\sin(t) + t^{2}\sin ^{2}(t) + \sin ^{2}(t) + 2t\cos(t)\sin(t) + t^{2}\cos ^{2}(t)} \\
&= \sqrt{4t^{2}+1+t^{2}} \\
&= \sqrt{5t^{2}+1} \\
L &= \int_{0}^{1} \sqrt{5t^{2}+1} \, dt  \\
&= \int_{0}^{1} \sqrt{(\sqrt{5}t)^{2} + 1}  \, dt \\
&= \int_{0}^{1} \sqrt{\tan ^{2}(\theta) + 1} \cdot \frac{\sqrt{5}}{5}\sec ^{2}(\theta) \, dt \\
&= \frac{\sqrt{5}}{5} \int_{0}^{1} \sec^{3}(\theta) \, d\theta \\ 
&= [\sec(\theta)]_{0}^{1} \\
&= \frac{\sqrt{5}}{5}\left[ \frac{1}{2} \sec(\theta)\tan(\theta) + \frac{1}{2} \ln \lvert \sec(\theta) + \tan(\theta) \rvert  \right]
\end{align}
$$

then substitute in for $\theta$ for $t$ and then finally solve the definite integral ultimately. You can do an arc length parameterization if need be.

## TNB Frames (Frenet-Serret Frames)

At every point, the TNB frame gives the unit vectors
- Tangent vector (Direction particle is heading)
- Normal vector (Direction particle is turning)
- Binormal vector (Direction particle is twisting)

All of these unit vectors are ultimately mutually orthogonal to one another.

$$
\begin{align}
\vec{T}(s) = r'(s) \text{ or } \vec{T}(t) = \frac{r'(t)}{\lvert \lvert r'(t) \rvert  \rvert }
\end{align}
$$

$$
\vec{N}(s) = \vec{T}'(s) \text{ or }
\vec{N}(t) = \frac{\vec{T}'(t)}{\lvert \lvert \vec{T}'(t) \rvert  \rvert }
$$

$$
\vec{B}(t) = \vec{T}(t) \times \vec{N}(t)
$$

Note: Every vector with a constant length is always perpendicular to its tangent vector. Since it is constant length, the derivative is 0 and allows us to carry on with our dot product perpendicular property.

*Proof*
let $\vec{v}$ have constant length, then recall that

$$
\vec{v} \cdot  \vec{v} = \lvert \lvert \vec{v} \rvert  \rvert ^{2} \to \vec{v} \cdot  \vec{v} = c^{2}
$$

and therefore

$$
\begin{align}
\frac{d}{dt} [\vec{v} \cdot  \vec{v}] &= \frac{d}{dt} [c^{2}] \\
\vec{v}' \cdot  \vec{v} + \vec{v} \cdot  \vec{v}' &= 0 \\
2(\vec{v} \cdot \vec{v}') &= 0 \\
\vec{v} \cdot \vec{v}' &= 0
\end{align}
$$

implying that the tangent vector to a constant vector $\vec{v}$ is indeed perpendicular.

$$
\tag*{\(\blacksquare\)}
$$
