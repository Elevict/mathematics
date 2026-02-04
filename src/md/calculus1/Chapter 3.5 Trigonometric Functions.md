---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.5 Trigonometric Functions

## Derivative of Sine and Cosine

> [!theorem] **Theorem** (Derivative of Sine)
>
> $$
> \frac{d}{dx} (\sin x) = \cos x
> $$

*Proof*
To prove the derivative of ${} \sin(x)$, we use the limit definition of the derivative:

$$
\begin{align*}
\frac{d}{dx}[\sin(x)] &= \lim_{h \to 0} \frac{\sin(x+h) - \sin(x)}{h} \\
&= \lim_{h \to 0} \frac{\sin(x)\cos(h) + \cos(x)\sin(h) - \sin(x)}{h} \\
&= \lim_{h \to 0} \left[\sin(x) \frac{\cos(h) - 1}{h} + \cos(x) \frac{\sin(h)}{h}\right]
\end{align*}
$$

Using the limits $\lim_{h \to 0} \ \frac{\cos(h) - 1}{h} = 0$ and $\lim_{h \to 0} \frac{\sin(h)}{h} = 1$, we get:

$$
\begin{align*}
\frac{d}{dx}[\sin(x)] &= \sin(x) \cdot 0 + \cos(x) \cdot 1 \\
&= \cos(x)
\end{align*}
$$

Thus, the derivative of $\sin(x)$ is ${} \cos(x)$.

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (Derivative of Cosine)
>
> $$
> \frac{d}{dx} (\cos x) = -\sin x
> $$

*Proof*
To prove the derivative of ${} \cos(x)$, we use the limit definition of the derivative:

$$
\begin{align*}
\frac{d}{dx}[\cos(x)] &= \lim_{h \to 0} \frac{\cos(x+h) - \cos(x)}{h} \\
&= \lim_{h \to 0} \frac{\cos(x)\cos(h) - \sin(x)\sin(h) - \cos(x)}{h} \\
&= \lim_{h \to 0} \left[\cos(x) \frac{\cos(h) - 1}{h} - \sin(x) \frac{\sin(h)}{h}\right]
\end{align*}
$$

Using the limits $\lim{h \to 0} \ \frac{\cos(h) - 1}{h} = 0$ and ${} \lim{h \to 0} \ \frac{\sin(h)}{h} = 1$, we get:

$$
\begin{align*}
\frac{d}{dx}[\cos(x)] &= \cos(x) \cdot 0 - \sin(x) \cdot 1 \\
&= -\sin(x)
\end{align*}
$$

Thus, the derivative of $cos(x)$ is $-\sin(x)$.

$$
\tag*{\(\blacksquare\)}
$$

## Derivative of Tangent

> [!theorem] **Theorem** (Derivative of Tangent)
>
> $$
> \frac{d}{dx} (\tan x) = \frac{1}{\cos^{2}x} = \sec^2(x)
> $$

*Proof*
To prove the derivative of ${} \tan(x)$ using the quotient rule:

$$
\begin{align*}
\frac{d}{dx}[\tan(x)] &= \frac{d}{dx}\left[\frac{\sin(x)}{\cos(x)}\right] \\
&= \frac{\cos(x) \cdot \cos(x) - \sin(x) \cdot (-\sin(x))}{\cos^2(x)} \\
&= \frac{\cos^2(x) + \sin^2(x)}{\cos^2(x)} \\
&= \frac{1}{\cos^2(x)} \\
&= \sec^2(x)
\end{align*}
$$

$$
\tag*{\(\blacksquare\)}
$$

## Problems

> [!question] **Question** (Exercises 2-30)
> In Exercises 2–30, find the derivatives of the functions. Assume $a$, $b$, and $c$ are constants.

*Problem 2*

$$
\begin{align*}
r(\theta) &= \sin \theta + \cos \theta \\
r'(\theta) &= \cos \theta - \sin \theta
\end{align*}
$$

*Problem 3*

$$
\begin{align*}
s(\theta) &= \cos \theta \sin \theta \\
s'(\theta) &= \cos^2 \theta - \sin^2 \theta
\end{align*}
$$

*Problem 4*

$$
\begin{align*}
z &= \cos(4\theta) \\
z' &= -4 \sin(4\theta)
\end{align*}
$$

*Problem 5*

$$
\begin{align*}
f(x) &= \sin(3x) \\
f'(x) &= 3 \cos(3x)
\end{align*}
$$

*Problem 6*

$$
\begin{align*}
y &= 5 \sin(3t) \\
y' &= 15 \cos(3t)
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
P &= 4 \cos(2t) \\
P' &= -8 \sin(2t)
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
g(x) &= \sin(2 - 3x) \\
g'(x) &= -3 \cos(2 - 3x)
\end{align*}
$$

*Problem 9*

$$
\begin{align*}
R(x) &= 10 - 3 \cos(\pi x) \\
R'(x) &= 3 \pi \sin(\pi x)
\end{align*}
$$

*Problem 10*

$$
\begin{align*}
g(\theta) &= \sin^2 (2\theta) - \pi \theta \\
g'(\theta) &= 2 \sin(2\theta) \cdot 2 \cos(2\theta) - \pi \\
&= 4 \sin(2\theta) \cos(2\theta) - \pi
\end{align*}
$$

*Problem 11*

$$
\begin{align*}
g(t) &= (2 + \sin(\pi t))^3 \\
g'(t) &= 3(2 + \sin(\pi t))^2 \cdot \pi \cos(\pi t) \\
&= 3\pi (2 + \sin(\pi t))^2 \cos(\pi t)
\end{align*}
$$

*Problem 12*

$$
\begin{align*}
f(x) &= x^2 \cos x \\
f'(x) &= 2x \cos x - x^2 \sin x
\end{align*}
$$

*Problem 13*

$$
\begin{align*}
w &= \sin(e^t) \\
w' &= \cos(e^t) \cdot e^t
\end{align*}
$$

*Problem 14*

$$
\begin{align*}
f(x) &= e^{\cos x} \\
f'(x) &= -e^{\cos x} \cdot \sin x
\end{align*}
$$

*Problem 15*

$$
\begin{align*}
f(y) &= e^{\sin y} \\
f'(y) &= e^{\sin y} \cdot \cos y
\end{align*}
$$

*Problem 16*

$$
\begin{align*}
z &= \theta e^{\cos \theta} \\
z' &= e^{\cos \theta} - \theta e^{\cos \theta} \sin \theta
\end{align*}
$$

*Problem 17*

$$
\begin{align*}
R(\theta) &= e^{\sin(3\theta)} \\
R'(\theta) &= e^{\sin(3\theta)} \cdot 3 \cos(3\theta)
\end{align*}
$$

*Problem 18*

$$
\begin{align*}
g(\theta) &= \sin(\tan \theta) \\
g'(\theta) &= \cos(\tan \theta) \cdot \sec^2 \theta
\end{align*}
$$

*Problem 19*

$$
\begin{align*}
w(x) &= \tan(x^2) \\
w' &= 2x \sec^2(x^2)
\end{align*}
$$

*Problem 20*

$$
\begin{align*}
f(x) &= \sqrt{1 - \cos x} \\
f' &= \frac{-\sin x}{2 \sqrt{1 - \cos x}}
\end{align*}
$$

*Problem 21*

$$
\begin{align*}
f(x) &= \sqrt{3 + \sin(8x)} \\
f' &= \frac{8 \cos(8x)}{2 \sqrt{3 + \sin(8x)}} \\
&= \frac{4 \cos(8x)}{\sqrt{3 + \sin(8x)}}
\end{align*}
$$

*Problem 22*

$$
\begin{align*}
f(x) &= \cos(\sin x) \\
f' &= -\sin(\sin x) \cdot \cos x
\end{align*}
$$

*Problem 23*

$$
\begin{align*}
f(x) &= \tan(\sin x) \\
f' &= \sec^2(\sin x) \cdot \cos x
\end{align*}
$$

*Problem 24*

$$
\begin{align*}
k(x) &= \sqrt{(\sin(2x))^3} = (\sin(2x))^{3/2} \\
k' &= \frac{3}{2} (\sin(2x))^{1/2} \cdot 2 \cos(2x) \\
&= 3 (\sin(2x))^{1/2} \cos(2x)
\end{align*}
$$

*Problem 25*

$$
\begin{align*}
f(x) &= 2x \sin(3x) \\
f' &= 2 \sin(3x) + 6x \cos(3x)
\end{align*}
$$

*Problem 26*

$$
\begin{align*}
y &= e^\theta \sin(2\theta) \\
y' &= e^\theta \cdot (2 \cos(2\theta) + \sin(2\theta))
\end{align*}
$$

*Problem 27*

$$
\begin{align*}
f(x) &= e^{-2x} \sin x \\
f' &= e^{-2x} \cdot (\cos x - 2 \sin x) \\
&= e^{-2x} (\cos x - 2 \sin x)
\end{align*}
$$

*Problem 28*

$$
\begin{align*}
z &= \sqrt{\sin t} \\
z' &= \frac{\cos t}{2 \sqrt{\sin t}}
\end{align*}
$$

*Problem 29*

$$
\begin{align*}
y &= \sin^5 \theta \\
y' &= 5 \sin^4 \theta \cos \theta
\end{align*}
$$

*Problem 30*

$$
\begin{align*}
g(z) &= \tan(e^z) \\
g' &= e^z \sec^2(e^z)
\end{align*}
$$

