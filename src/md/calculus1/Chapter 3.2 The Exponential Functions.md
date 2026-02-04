---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 3.2 the Exponential Functions

## The Derivative of an Exponential Function

There is a mystical number called $e$ that is of the following form,

$$
e = \lim_{h \to 0} (1+h)^{1/h} = 2.718\dots
$$

and likewise, it has the very useful property that,

$$
\lim_{h \to 0} \frac{e^{h}-1}{h} = 1.
$$

This allows us to prove the following theorem.

> [!theorem] **Theorem** (Derivative of an Exponential Function)
>
> $$
> \begin{align}
> \frac{d}{dx} (e^{x}) = e^{x}.
> \end{align}
> $$

*Proof*
We will use the definition of the derivative:

$$
\frac{d}{dx} e^x = \lim_{{h \to 0}} \frac{e^{x+h} - e^x}{h}
$$

First, note that:

$$
e^{x+h} = e^x \cdot e^h
$$

So,

$$
\frac{d}{dx} e^x = \lim_{{h \to 0}} \frac{e^x \cdot e^h - e^x}{h}
$$

Factor out $e^x$ from the numerator:

$$
\frac{d}{dx} e^x = \lim_{{h \to 0}} \frac{e^x (e^h - 1)}{h}
$$

Since $e^x$ is constant with respect to $h$, we can factor it out of the limit:

$$
\frac{d}{dx} e^x = e^x \lim_{{h \to 0}} \frac{e^h - 1}{h}
$$

Now, we know what the limit of $\lim_{h \to 0} \frac{e^{h}-1}{h} = 1$ from above. And so we have that finally,

$$
\frac{d}{dx}[e^{x}] = e^{x}
$$

$$
\tag*{\(\blacksquare\)}
$$

## Formula for the Derivative of $a^{x}$

To get the derivative of $a^{x}$, we can follow along the same line of reasoning as we did we our previous proof except instead we now need to resolve the limit at the end. It turns out that for a constant $a$, this final limit converges to the following value.

$$
\lim_{{h \to 0}} \frac{a^h - 1}{h} = \ln(a)
$$

And therefore, we can prove the following theorem now:

> [!theorem] **Theorem** (Derivative of $a^{x}$)
>
> $$
> \frac{d}{dx} (a^{x}) = (\ln a)a^{x}
> $$

*Proof*

Lets do the same thing we did for $e^{x}$,

$$
\begin{align}
\frac{d}{dx} a^x &= \lim_{{h \to 0}} \frac{a^{x+h} - a^x}{h} \\
&= \lim_{{h \to 0}} \frac{a^x \cdot a^h - a^x}{h} \\
&= \lim_{{h \to 0}} \frac{a^x (a^h - 1)}{h} \\
&= a^{x} \lim_{h \to 0} \frac{a^{h}-1}{h}
\end{align}
$$

and since we resolved our limit on the right above, we finally get that:

$$
\frac{d}{dx} (a^{x}) = (\ln a)a^{x}
$$

$$
\tag*{\(\blacksquare\)}
$$

## Problems

> [!question] **Question** (Exercises 1-25)
> In Exercises 1-25, find the derivatives of the function. Assume that $a$ and $k$ are constants.

*Problem 1*

$$
\begin{align*}
f(x) &= 2e^x + x^2 \\
f'(x) &= 2e^x + 2x
\end{align*}
$$

*Problem 2*

$$
\begin{align*}
y &= 5t^2 + 4e^t \\
y' &= 10t + 4e^t
\end{align*}
$$

*Problem 3*

$$
\begin{align*}
f(x) &= a5^x \\
f'(x) &= a5^x \ln 5
\end{align*}
$$

*Problem 4*

$$
\begin{align*}
f(x) &= 12e^x + 11x \\
f'(x) &= 12e^x + 11
\end{align*}
$$

*Problem 5*

$$
\begin{align*}
y &= 5x^2 + 2x + 3 \\
y' &= 10x + 2
\end{align*}
$$

*Problem 6*

$$
\begin{align*}
f(x) &= 2x + 2 \cdot 3^x \\
f'(x) &= 2 + 2 \cdot 3^x \ln 3
\end{align*}
$$

*Problem 7*

$$
\begin{align*}
y &= 4 \cdot 10^x - x^3 \\
y' &= 4 \cdot 10^x \ln 10 - 3x^2
\end{align*}
$$

*Problem 8*

$$
\begin{align*}
z &= (\ln 4)e^x \\
z' &= (\ln 4)e^x
\end{align*}
$$

*Problem 9*

$$
\begin{align*}
y &= 3x^3 + 33 \sqrt{x} \\
y' &= 9x^2 + \frac{33}{2}x^{-\frac{1}{2}}
\end{align*}
$$

*Problem 10*

$$
\begin{align*}
y &= 2x + \frac{2}{x^3} \\
y' &= 2 - \frac{6}{x^4}
\end{align*}
$$

*Problem 11*

$$
\begin{align*}
z &= (\ln 4)4^x \\
z' &= (\ln 4)4^x \ln 4
\end{align*}
$$

*Problem 12*

$$
\begin{align*}
f(t) &= (\ln 3)t \\
f'(t) &= \ln 3
\end{align*}
$$

*Problem 13*

$$
\begin{align*}
y &= 5 \cdot 5^t + 6 \cdot 6^t \\
y' &= 5 \cdot 5^t \ln 5 + 6 \cdot 6^t \ln 6
\end{align*}
$$

*Problem 14*

$$
\begin{align*}
h(z) &= (\ln 2)z \\
h'(z) &= \ln 2
\end{align*}
$$

*Problem 15*

$$
\begin{align*}
f(x) &= e^2 + xe \\
f'(x) &= e
\end{align*}
$$

*Problem 16*

$$
\begin{align*}
y &= \pi^2 + \pi x \\
y' &= \pi
\end{align*}
$$

*Problem 17*

$$
\begin{align*}
f(x) &= e^\pi + \pi x \\
f'(x) &= \pi
\end{align*}
$$

*Problem 18*

$$
\begin{align*}
f(x) &= \pi x + x^\pi \\
f'(x) &= \pi + \pi x^{\pi-1}
\end{align*}
$$

*Problem 19*

$$
\begin{align*}
f(x) &= e^k + kx \\
f'(x) &= k
\end{align*}
$$

*Problem 20*

$$
\begin{align*}
f(x) &= e^{1+x} \\
f'(x) &= e^{1+x}
\end{align*}
$$

*Problem 21*

$$
\begin{align*}
f(t) &= e^{t+2} \\
f'(t) &= e^{t+2}
\end{align*}
$$

*Problem 22*

$$
\begin{align*}
f(\theta) &= e^{k\theta} - 1 \\
f'(\theta) &= ke^{k\theta}
\end{align*}
$$

*Problem 23*

$$
\begin{align*}
y(x) &= \frac{a}{x} + x^a \\
y'(x) &= -\frac{a}{x^2} + ax^{a-1}
\end{align*}
$$

*Problem 24*

$$
\begin{align*}
f(x) &= x\pi^2 + (\pi^2)^x \\
f'(x) &= \pi^2 + (\pi^2)^x \ln(\pi^2)
\end{align*}
$$

*Problem 25*

$$
\begin{align*}
g(x) &= 2x - \frac{1}{3\sqrt{x}} + 3x - e \\
g'(x) &= 2 + \frac{1}{6}x^{-\frac{3}{2}} + 3
\end{align*}
$$

> [!question] **Question** (Exercises 26-28)
> In Exercises 26-28, find the formulas for $f''$ and $f'''$.

*Problem 26*

$$
\begin{align*}
f(x) &= 2^{x} \\
f''(x) &= 2\ln(2)2^{x} \\
f'''(x) &= 3\ln(2)2^{x}
\end{align*}
$$

*Problem 27*

$$
\begin{align*}
f(t) &= 5t + 1 \\
f''(t) &= 0 \\
f'''(t) &= 0
\end{align*}
$$

*Problem 28*

$$
\begin{align*}
f(v) &= \sqrt{v} + 3v \\
f''(v) &= -\frac{1}{4}v^{-\frac{3}{2}} + 0 \\
f'''(v) &= \frac{3}{4}v^{-\frac{5}{2}}
\end{align*}
$$

