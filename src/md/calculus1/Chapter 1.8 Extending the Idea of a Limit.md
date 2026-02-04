---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 1.8 Extending the Idea of a Limit

## Limits

> [!definition] **Definition** (Limit)
> We write $\lim_{ x \to c } f(x) = L$ if the values of $f(x)$ approach $L$ as $x$ approaches $c$.
>
> A function $f$ is defined on an interval around $c$, except perhaps at the point $x = c$. We define the limit of the function $f(x)$ as $x$ approaches $c$, written $\lim_{x \to c} f(x)$, to be a number $L$ (if one exists) such that f (x) is as close to L as we want whenever $x$ is sufficiently close to $c$ (but $x \neq c$). If $L$ exists, we write
>
> $$
> \lim_{ x \to c } f(x) = L
> $$

> [!theorem] **Theorem** (Properties of Limits)
> Assuming all the limits on the right-hand side exist:
> 1. If $b$ is constant, then $\lim_{x \to c}(bf(x)) = b(\lim_{x \to c})f(x)$
> 2. $\lim_{ x \to c }(f(x)+g(x)) = (\lim_{ x \to c }f(x)) + (\lim_{ x \to c }g(x))$
> 3. $\lim_{ x \to c }(f(x)g(x)) = (\lim_{ x \to c }f(x))(\lim_{ x \to c }g(x))$.
> 4. $\lim_{ x\to c} \frac{f(x)}{g(x)} = \frac{\lim_{ x \to c }f(x)}{\lim_{ x \to c }g(x)}$, provided $\lim_{ x \to c } g(x) \neq 0.$
> 5. For any constant $k$, $\lim_{ x \to c } k = k$.
> 6. $\lim_{ x \to c } x = c$.

> [!definition] **Definition** (Limits at Infinity)
> If $f (x)$ gets as close to a number $L$ as we please when $x$ gets sufficiently large, then we write
>
> $$
> \lim_{ x \to \infty } f(x) = L
> $$
>
> Similarly, if $f (x)$ approaches $L$ when $x$ is negative and has a sufficiently large absolute value, then we write
>
> $$
> \lim_{ x \to -\infty } f(x) = L
> $$

## Continuity

> [!definition] **Definition** (Continuity)
> The function $f$ is **continuous** at $x = c$ if $f$ is defined at $x = c$ and if
>
> $$
> \lim_{ x \to c} f(x) = f(c). 
> $$
>
> In other words, $f(x)$ is as close as we want to $f(c)$ provided $x$ is close enough to $c$. The function is **continuous on an interval** $[a, b]$ if it is continuous at every point in the interval.

> [!theorem] **Theorem** (Continuity of Sums, Products, and Quotients of Functions)
> Suppose that $f$ and $g$ are continuous on a interval and that $b$ is a constant. Then, on that same interval,
> 1. $b f(x)$ is continuous
> 2. $f(x) + g(x)$ is continuous
> 3. $f(x)g(x)$ is continuous
> 4. $f(x)/g(x)$ is continuous, provided $g(x) \neq 0$ on the interval.

> [!theorem] **Theorem** (Continuity of Composite Functions)
> If $f$ and $g$ are continuous, and if the composite function $f(g(x))$ if defined on an interval, then $f(g(x))$ is continuous on that interval.

## Problems

> [!question] **Question** (Exercises 16-28)
> In Exercises 16–28, find the limits using your understanding of the end behavior of each function.

*Problem 16*

$$
\lim_{ x \to \infty } x^{2} = \infty
$$

*Problem 17*

$$
\lim_{ x \to -\infty } x^{2} = \infty
$$

*Problem 18*

$$
\lim_{ x \to -\infty } x^{3} = -\infty
$$

*Problem 19*

$$
\lim_{ x \to \infty } x^{3} = \infty
$$

*Problem 20*

$$
\lim_{ x \to \infty } e^{x} = \infty
$$

*Problem 21*

$$
\lim_{ x \to \infty } e^{-x} = 0
$$

*Problem 22*

$$
\lim_{ x \to \infty } 5^{-x} = 0
$$

*Problem 23*

$$
\lim_{ x \to \infty } \sqrt{ x } = \infty
$$

*Problem 24*

$$
\lim_{ x \to \infty } \ln(x) = \infty 
$$

*Problem 25*

$$
\lim_{ x \to \infty } x^{-2} = 0
$$

*Problem 26*

$$
\lim_{ x \to -\infty } = 0
$$

*Problem 27*

$$
\lim_{ x \to -\infty } x^{-3} = 0
$$

*Problem 28*

$$
\lim_{ x \to \infty } \left( \frac{1}{2} \right)^{2} = \lim_{ x \to \infty } \frac{1^{x}}{2^{x}} = 0
$$

> [!question] **Question** (Exercises 29-34)
> In exercises 29-34, give $\lim_{ x \to -\infty } f(x)$ and $\lim_{ x \to +\infty } f(x)$.

*Problem 29*

$$
\begin{align}
f(x) = -x^{4} \\
\lim_{ x \to \infty } f(x) = -\infty \\
\lim_{ x \to -\infty } f(x) = -\infty
\end{align}
$$

*Problem 30*

$$
\begin{align}
f(x) &= 5+21x-2x^{3} \\
\lim_{ x \to \infty } f(x) &= -\infty \\
\lim_{ x \to -\infty } f(x) &= \infty
\end{align}
$$

*Problem 31

$$
\begin{align}
f(x) &= x^{5}+25x^{4}-37x^{3}-200x^{2}+48x+10 \\
\lim_{ x \to \infty } f(x) &= \infty \\
\lim_{ x \to -\infty } f(x) &= -\infty
\end{align}
$$

*Problem 32*

$$
\begin{align}
f(x) &= \frac{3x^{3}+6x^{2}+45}{5x^{3}+25x+12} \\
\lim_{ x \to \infty } f(x) &= \frac{3}{5} \\
\lim_{ x \to -\infty } f(x) &= \frac{3}{5}
\end{align}
$$

*Problem 33*

$$
\begin{align}
f(x) &= 8x^{-3} \\
\lim_{ x \to \infty } f(x) &= 0 \\
\lim_{ x \to -\infty } f(x) &= 0
\end{align}
$$

*Problem 34*

$$
\begin{align}
f(x) &= 25e^{0.08x} \\
\lim_{ x \to \infty } f(x) &= \infty \\
\lim_{ x \to -\infty } f(x) &= 0
\end{align}
$$

> [!problem] **Problem** (Problem 35)
> Does $f(x)=\frac{|x|}{x}$ have right or left limits at 0? Is $f(x)$ continuous?

$\frac{|x|}{x}$ is indeed continuous at 0 since both limits exist at 0, and they converge at the value 1.


