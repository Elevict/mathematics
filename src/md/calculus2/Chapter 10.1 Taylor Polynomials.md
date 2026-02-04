---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 10.1 Taylor Polynomials

## Taylor Polynomials

> [!definition] **Definition** (Taylor Polynomial of Degree $n$ at ${} x=a {}$)
> $$
> \begin{align}
> f(x) &\approx P_{n}(x) \\
> &= f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^{2} + \frac{f'''(0)}{3!}(x-a)^{3} + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^{n}
> \end{align}
> $$
> 
> We call $P_{n}(x)$ the Taylor polynomial of degree $n$ centered at ${} x=a {}$ or the Taylor polynomial about (or around) $x=a$.

In other words, a Taylor polynomial is a polynomial that approximates a given function at a specific point.

## Problems

Here are the Taylor polynomials for the specified functions and degrees:

*Problem 1:* $\frac{1}{1 - x}$, $n = 3, 5, 7$

$$
\begin{align*}
f(x) &= \frac{1}{1 - x} \\
f'(x) &= \frac{1}{(1 - x)^2} \\
f''(x) &= \frac{2}{(1 - x)^3} \\
f'''(x) &= \frac{6}{(1 - x)^4}
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_3(x) &= 1 + x + x^2 + x^3 \\
P_5(x) &= 1 + x + x^2 + x^3 + x^4 + x^5 \\
P_7(x) &= 1 + x + x^2 + x^3 + x^4 + x^5 + x^6 + x^7
\end{align*}
$$

*Problem 2:* $\frac{1}{1 + x}$, $n = 4, 6, 8$

$$
\begin{align*}
f(x) &= \frac{1}{1 + x} \\
f'(x) &= -\frac{1}{(1 + x)^2} \\
f''(x) &= \frac{2}{(1 + x)^3} \\
f'''(x) &= -\frac{6}{(1 + x)^4}
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_4(x) &= 1 - x + x^2 - x^3 + x^4 \\
P_6(x) &= 1 - x + x^2 - x^3 + x^4 - x^5 + x^6 \\
P_8(x) &= 1 - x + x^2 - x^3 + x^4 - x^5 + x^6 - x^7 + x^8
\end{align*}
$$

*Problem 3:* $\sqrt{1 + x}$, $n = 2, 3, 4$

$$
\begin{align*}
f(x) &= \sqrt{1 + x} \\
f'(x) &= \frac{1}{2\sqrt{1 + x}} \\
f''(x) &= -\frac{1}{4(1 + x)^{3/2}} \\
f'''(x) &= \frac{3}{8(1 + x)^{5/2}}
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_2(x) &= 1 + \frac{x}{2} - \frac{x^2}{8} \\
P_3(x) &= 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} \\
P_4(x) &= 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{3x^3}{16} - \frac{5x^4}{128}
\end{align*}
$$

*Problem 4:* $\frac{3}{\sqrt{1 - x}}$, $n = 2, 3, 4$

$$
\begin{align*}
f(x) &= \frac{3}{\sqrt{1 - x}} \\
f'(x) &= \frac{3}{2(1 - x)^{3/2}} \\
f''(x) &= \frac{9}{4(1 - x)^{5/2}} \\
f'''(x) &= \frac{45}{8(1 - x)^{7/2}}
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_2(x) &= 3 + \frac{3x}{2} + \frac{9x^2}{8} \\
P_3(x) &= 3 + \frac{3x}{2} + \frac{9x^2}{8} + \frac{15x^3}{16} \\
P_4(x) &= 3 + \frac{3x}{2} + \frac{9x^2}{8} + \frac{15x^3}{16} + \frac{105x^4}{128}
\end{align*}
$$

*Problem 5:* $\cos x$, $n = 2, 4, 6$

$$
\begin{align*}
f(x) &= \cos x \\
f'(x) &= -\sin x \\
f''(x) &= -\cos x \\
f'''(x) &= \sin x
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_2(x) &= 1 - \frac{x^2}{2} \\
P_4(x) &= 1 - \frac{x^2}{2} + \frac{x^4}{24} \\
P_6(x) &= 1 - \frac{x^2}{2} + \frac{x^4}{24} - \frac{x^6}{720}
\end{align*}
$$

*Problem 6:* $\ln(1 + x)$, $n = 5, 7, 9$

$$
\begin{align*}
f(x) &= \ln(1 + x) \\
f'(x) &= \frac{1}{1 + x} \\
f''(x) &= -\frac{1}{(1 + x)^2} \\
f'''(x) &= \frac{2}{(1 + x)^3}
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_5(x) &= x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \frac{x^5}{5} \\
P_7(x) &= x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \frac{x^5}{5} - \frac{x^6}{6} + \frac{x^7}{7} \\
P_9(x) &= x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \frac{x^5}{5} - \frac{x^6}{6} + \frac{x^7}{7} - \frac{x^8}{8} + \frac{x^9}{9}
\end{align*}
$$

*Problem 7:* $\arctan x$, $n = 3, 4$

$$
\begin{align*}
f(x) &= \arctan x \\
f'(x) &= \frac{1}{1 + x^2} \\
f''(x) &= -\frac{2x}{(1 + x^2)^2} \\
f'''(x) &= \frac{2(3x^2 - 1)}{(1 + x^2)^3}
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_3(x) &= x - \frac{x^3}{3} \\
P_4(x) &= x - \frac{x^3}{3}
\end{align*}
$$

*Problem 8:* $\tan x$, $n = 3, 4$

$$
\begin{align*}
f(x) &= \tan x \\
f'(x) &= \sec^2 x \\
f''(x) &= 2\sec^2 x \tan x \\
f'''(x) &= 2\sec^2 x(3\sec^2 x - 1)
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_3(x) &= x + \frac{x^3}{3} \\
P_4(x) &= x + \frac{x^3}{3}
\end{align*}
$$

*Problem 9:* $\frac{1}{\sqrt{1 + x}}$, $n = 2, 3, 4$

$$
\begin{align*}
f(x) &= \frac{1}{\sqrt{1 + x}} \\
f'(x) &= -\frac{1}{2(1 + x)^{3/2}} \\
f''(x) &= \frac{3}{4(1 + x)^{5/2}} \\
f'''(x) &= -\frac{15}{8(1 + x)^{7/2}}
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_2(x) &= 1 - \frac{x}{2} + \frac{3x^2}{8} \\
P_3(x) &= 1 - \frac{x}{

2} + \frac{3x^2}{8} - \frac{15x^3}{48} \\
P_4(x) &= 1 - \frac{x}{2} + \frac{3x^2}{8} - \frac{15x^3}{48} + \frac{105x^4}{384}
\end{align*}
$$

*Problem 10:* $(1 + x)^p$, $n = 2, 3, 4$

$$
\begin{align*}
f(x) &= (1 + x)^p \\
f'(x) &= p(1 + x)^{p-1} \\
f''(x) &= p(p-1)(1 + x)^{p-2} \\
f'''(x) &= p(p-1)(p-2)(1 + x)^{p-3}
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_2(x) &= 1 + px + \frac{p(p-1)}{2}x^2 \\
P_3(x) &= 1 + px + \frac{p(p-1)}{2}x^2 + \frac{p(p-1)(p-2)}{6}x^3 \\
P_4(x) &= 1 + px + \frac{p(p-1)}{2}x^2 + \frac{p(p-1)(p-2)}{6}x^3 + \frac{p(p-1)(p-2)(p-3)}{24}x^4
\end{align*}
$$

*Problem 11:* $\sqrt{1 - x}$, $a = 0$, $n = 3$

$$
\begin{align*}
f(x) &= \sqrt{1 - x} \\
f'(x) &= -\frac{1}{2\sqrt{1 - x}} \\
f''(x) &= -\frac{1}{4(1 - x)^{3/2}} \\
f'''(x) &= \frac{3}{8(1 - x)^{5/2}}
\end{align*}
$$

Taylor series at $x = 0$:
$$
\begin{align*}
P_3(x) &= 1 - \frac{x}{2} - \frac{x^2}{8} + \frac{3x^3}{48}
\end{align*}
$$

*Problem 12:* $e^x$, $a = 1$, $n = 4$

$$
\begin{align*}
f(x) &= e^x \\
f'(x) &= e^x \\
f''(x) &= e^x \\
f'''(x) &= e^x
\end{align*}
$$

Taylor series at $x = 1$:
$$
\begin{align*}
P_4(x) &= e + e(x-1) + \frac{e(x-1)^2}{2!} + \frac{e(x-1)^3}{3!} + \frac{e(x-1)^4}{4!}
\end{align*}
$$

*Problem 13:* $\frac{1}{1 + x}$, $a = 2$, $n = 4$

$$
\begin{align*}
f(x) &= \frac{1}{1 + x} \\
f'(x) &= -\frac{1}{(1 + x)^2} \\
f''(x) &= \frac{2}{(1 + x)^3} \\
f'''(x) &= -\frac{6}{(1 + x)^4}
\end{align*}
$$

Taylor series at $x = 2$:
$$
\begin{align*}
P_4(x) &= \frac{1}{3} - \frac{(x-2)}{9} + \frac{2(x-2)^2}{27} - \frac{6(x-2)^3}{81} + \frac{24(x-2)^4}{243}
\end{align*}
$$

*Problem 14:* $\cos x$, $a = \frac{\pi}{2}$, $n = 4$

$$
\begin{align*}
f(x) &= \cos x \\
f'(x) &= -\sin x \\
f''(x) &= -\cos x \\
f'''(x) &= \sin x
\end{align*}
$$

Taylor series at $x = \frac{\pi}{2}$:
$$
\begin{align*}
P_4(x) &= 0 - (x - \frac{\pi}{2}) - \frac{(x - \frac{\pi}{2})^3}{6}
\end{align*}
$$

*Problem 15:* $\sin x$, $a = -\frac{\pi}{4}$, $n = 3$

$$
\begin{align*}
f(x) &= \sin x \\
f'(x) &= \cos x \\
f''(x) &= -\sin x \\
f'''(x) &= -\cos x
\end{align*}
$$

Taylor series at $x = -\frac{\pi}{4}$:
$$
\begin{align*}
P_3(x) &= -\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}(x + \frac{\pi}{4}) - \frac{(x + \frac{\pi}{4})^3}{6}
\end{align*}
$$

*Problem 16:* $\ln(x^2)$, $a = 1$, $n = 4$

$$
\begin{align*}
f(x) &= \ln(x^2) \\
f'(x) &= \frac{2}{x} \\
f''(x) &= -\frac{2}{x^2} \\
f'''(x) &= \frac{4}{x^3}
\end{align*}
$$

Taylor series at $x = 1$:
$$
\begin{align*}
P_4(x) &= 0 + 2(x-1) - (x-1)^2 + \frac{4(x-1)^3}{3!} - \frac{8(x-1)^4}{4!}
\end{align*}
$$