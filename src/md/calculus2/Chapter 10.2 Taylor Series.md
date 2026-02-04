---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 10.2 Taylor Series

## Taylor Series

> [!definition] **Definition** (Taylor Series)
>
> $$
> f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^{2} + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^{n} + \dots
> $$

> [!theorem] **Theorem** (Binomial Series)
> For $x \in (-1, 1)$, we have that
>
> $$
> (1+x)^{p} = 1 + px + \frac{p(p-1)}{2!}x^{2} + \frac{p(p-1)(p-2)}{3!}x^{3} + \dots
> $$

> [!theorem] **Theorem** (A Power Series is its own Taylor Series)
> If a power series about $x=a$ converges to $f(x)$ for $|x-a| < R$, then the power series is the Taylor series for $f(x)$ about $x=a$.

## Problems

Here are the first four terms of the Taylor series for each function about the specified point, including the calculation of the derivatives and their values at the given points:

*Problem 10:* Find the first four terms of the Taylor series for $\sin x$, $a = \frac{\pi}{4}$.

$$
\begin{align*}
f(x) &= \sin x \\
f(a) &= \sin \left( \frac{\pi}{4} \right) = \frac{\sqrt{2}}{2} \\
f'(x) &= \cos x \\
f'(a) &= \cos \left( \frac{\pi}{4} \right) = \frac{\sqrt{2}}{2} \\
f''(x) &= -\sin x \\
f''(a) &= -\sin \left( \frac{\pi}{4} \right) = -\frac{\sqrt{2}}{2} \\
f'''(x) &= -\cos x \\
f'''(a) &= -\cos \left( \frac{\pi}{4} \right) = -\frac{\sqrt{2}}{2} \\
f^{(4)}(x) &= \sin x \\
f^{(4)}(a) &= \sin \left( \frac{\pi}{4} \right) = \frac{\sqrt{2}}{2}
\end{align*}
$$

$$
\begin{align*}
\text{Taylor Series} &= f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \frac{f'''(a)}{3!}(x - a)^3 + \cdots \\
&= \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}(x - \frac{\pi}{4}) - \frac{\frac{\sqrt{2}}{2}}{2!}(x - \frac{\pi}{4})^2 - \frac{\frac{\sqrt{2}}{2}}{3!}(x - \frac{\pi}{4})^3 \\
&= \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}(x - \frac{\pi}{4}) - \frac{\sqrt{2}}{4}(x - \frac{\pi}{4})^2 - \frac{\sqrt{2}}{12}(x - \frac{\pi}{4})^3
\end{align*}
$$

*Problem 11:* Find the first four terms of the Taylor series for $\cos \theta$, $a = \frac{\pi}{4}$.

$$
\begin{align*}
f(\theta) &= \cos \theta \\
f(a) &= \cos \left( \frac{\pi}{4} \right) = \frac{\sqrt{2}}{2} \\
f'(\theta) &= -\sin \theta \\
f'(a) &= -\sin \left( \frac{\pi}{4} \right) = -\frac{\sqrt{2}}{2} \\
f''(\theta) &= -\cos \theta \\
f''(a) &= -\cos \left( \frac{\pi}{4} \right) = -\frac{\sqrt{2}}{2} \\
f'''(\theta) &= \sin \theta \\
f'''(a) &= \sin \left( \frac{\pi}{4} \right) = \frac{\sqrt{2}}{2} \\
f^{(4)}(\theta) &= \cos \theta \\
f^{(4)}(a) &= \cos \left( \frac{\pi}{4} \right) = \frac{\sqrt{2}}{2}
\end{align*}
$$

$$
\begin{align*}
\text{Taylor Series} &= f(a) + f'(a)(\theta - a) + \frac{f''(a)}{2!}(\theta - a)^2 + \frac{f'''(a)}{3!}(\theta - a)^3 + \cdots \\
&= \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}(\theta - \frac{\pi}{4}) - \frac{\frac{\sqrt{2}}{2}}{2!}(\theta - \frac{\pi}{4})^2 + \frac{\frac{\sqrt{2}}{2}}{3!}(\theta - \frac{\pi}{4})^3 \\
&= \frac{\sqrt{2}}{2} - \frac{\sqrt{2}}{2}(\theta - \frac{\pi}{4}) - \frac{\sqrt{2}}{4}(\theta - \frac{\pi}{4})^2 + \frac{\sqrt{2}}{12}(\theta - \frac{\pi}{4})^3
\end{align*}
$$

*Problem 12:* Find the first four terms of the Taylor series for $\cos t$, $a = \frac{\pi}{6}$.

$$
\begin{align*}
f(t) &= \cos t \\
f(a) &= \cos \left( \frac{\pi}{6} \right) = \frac{\sqrt{3}}{2} \\
f'(t) &= -\sin t \\
f'(a) &= -\sin \left( \frac{\pi}{6} \right) = -\frac{1}{2} \\
f''(t) &= -\cos t \\
f''(a) &= -\cos \left( \frac{\pi}{6} \right) = -\frac{\sqrt{3}}{2} \\
f'''(t) &= \sin t \\
f'''(a) &= \sin \left( \frac{\pi}{6} \right) = \frac{1}{2} \\
f^{(4)}(t) &= \cos t \\
f^{(4)}(a) &= \cos \left( \frac{\pi}{6} \right) = \frac{\sqrt{3}}{2}
\end{align*}
$$

$$
\begin{align*}
\text{Taylor Series} &= f(a) + f'(a)(t - a) + \frac{f''(a)}{2!}(t - a)^2 + \frac{f'''(a)}{3!}(t - a)^3 + \cdots \\
&= \frac{\sqrt{3}}{2} - \frac{1}{2}(t - \frac{\pi}{6}) - \frac{\frac{\sqrt{3}}{2}}{2!}(t - \frac{\pi}{6})^2 + \frac{\frac{1}{2}}{3!}(t - \frac{\pi}{6})^3 \\
&= \frac{\sqrt{3}}{2} - \frac{1}{2}(t - \frac{\pi}{6}) - \frac{\sqrt{3}}{4}(t - \frac{\pi}{6})^2 + \frac{1}{12}(t - \frac{\pi}{6})^3
\end{align*}
$$

*Problem 13:* Find the first four terms of the Taylor series for $\sin \theta$, $a = -\frac{\pi}{4}$.

$$
\begin{align*}
f(\theta) &= \sin \theta \\
f(a) &= \sin \left( -\frac{\pi}{4} \right) = -\frac{\sqrt{2}}{2} \\
f'(\theta) &= \cos \theta \\
f'(a) &= \cos \left( -\frac{\pi}{4} \right) = \frac{\sqrt{2}}{2} \\
f''(\theta) &= -\sin \theta \\
f''(a) &= -\sin \left( -\frac{\pi}{4} \right) = \frac{\sqrt{2}}{2} \\
f'''(\theta) &= -\cos \theta \\
f'''(a) &= -\cos \left( -\frac{\pi}{4} \right) = -\frac{\sqrt{2}}{2} \\
f^{(4)}(\theta) &= \sin \theta \\
f^{(4)}(a) &= \sin \left( -\frac{\pi}{4} \right) = -\frac{\sqrt{2}}{2}
\end{align*}
$$

$$
\begin{align*}
\text{Taylor Series} &= f(a) + f'(a)(\theta - a) + \frac{f''(a)}{2!}(\theta - a)^2 + \frac{f'''(a)}{3!}(\theta - a)^3 + \cdots \\
&= -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}(\theta + \frac{\pi}{4}) + \frac{\frac{\sqrt{2}}{2}}{2!}(\theta + \frac{\pi}{4})^2 - \frac{\frac{\sqrt{2}}{2}}{3!}(\theta + \frac{\pi}{4})^3 \\
&= -

\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}(\theta + \frac{\pi}{4}) + \frac{\sqrt{2}}{4}(\theta + \frac{\pi}{4})^2 - \frac{\sqrt{2}}{12}(\theta + \frac{\pi}{4})^3
\end{align*}
$$