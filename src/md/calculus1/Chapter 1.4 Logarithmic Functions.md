---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 1.4 Logarithmic Functions

## Logarithms

> [!definition] **Definition** (Logarithm)
> The **logarithm** to base 10 of $x$, written $\log_{10} x$, is the power of 10 we need to get $x$. In other words,
>
> $$
> \log_{10}x = c \text{ means } 10^{c} = x.
> $$
>
> We often write $\log x$ in place of $\log_{10}x$.

> [!definition] **Definition** (Natural Logarithm)
> The **natural logarithm** of $x$, written $\ln x$, is the power of $c$ needed to get $x$. In other words,
>
> $$
> \ln x = c \text{ means } e^c = x.
> $$

> [!corollary] **Corollary** (Properties of Logarithms)
> 1. $\log(AB) = \log A + \log B$
> 2. $\log\left(\frac{A}{B} \right) = \log A - \log B$
> 3. $\log (A^p) = p\log A$
> 4. $\log(10^x) = x$
> 5. $10^{\log x} = x$

## Problems

> [!question] **Question** (Problems 1-6)
> Simplify the expressions in Problems 1-6 completely.

*Problem 1*

$$
e^{\ln(1/2)} = \frac{1}{2}
$$

*Problem 2*

$$
10^{\log(AB)} = AB
$$

*Problem 3*

$$
5e^{\ln(A^{2})} = 5A^{2} 
$$

*Problem 4*

$$
\ln(e^{2AB}) = 2AB
$$

*Problem 5*

$$
\ln\left( \frac{1}{e} \right) + \ln(AB) = -\ln(e) + \ln(AB) = -1+\ln(AB)
$$

*Problem 6*

$$
2\ln(e^{A}) + 3\ln(B^{e}) = 2A + 3e\ln(B)
$$

> [!question] **Question** (Exercises 7-18)
> For Exercises 7-18, solve for $x$ using logs.

*Problem 7*

$$
\begin{align}
3^{x} &= 11 \\
x &= \log_{3}(11)
\end{align}
$$

*Problem 8*

$$
\begin{align}
17^{x} &= 2 \\
x  & = \log_{17}(2) 
\end{align}
$$

*Problem 9*

$$
\begin{align}
20 & =50(1.04)^{x} \\
\frac{2}{5} &= 1.04^{x} \\
x & = \log_{1.04}\left( \frac{2}{5} \right)
\end{align}
$$

*Problem 10*

$$
\begin{align}
3 \cdot 3^{x} &= 7 \cdot 5^{x} \\
\frac{4}{7} \cdot 3^{x} &= 5^{x} \\
\ln\left( \frac{4}{7} \right) + x\ln(3) &= x\ln(5) \\
\ln\left( \frac{4}{7} \right) &= x\ln(5) - x\ln(3) \\
\ln\left( \frac{4}{7} \right) &= x(\ln(5)-\ln(3)) \\
x &= \frac{\ln\left( \frac{4}{7} \right)}{\ln(5) - \ln(3)}
\end{align}
$$

*Problem 11*

$$
\begin{align}
7 &= 5e^{0.2x} \\
\frac{7}{5} &= e^{0.2x} \\
\ln\left( \frac{7}{5} \right) &= 0.2x \\
x &= 5\ln\left( \frac{7}{5} \right) 
\end{align}
$$

*Problem 12*

$$
\begin{align}
2^{x} &= e^{x+1} \\
\ln(2^{x}) &= x+1 \\
x\ln(2) &= x+1 \\
x\ln(2)-x&=1 \\
x(\ln(2)-1)&=1 \\
x&=[\ln(2)-1]^{-1} 
\end{align}
$$

*Problem 13*

$$
\begin{align}
50 &= 600e^{-0.4x} \\
\frac{1}{12} &= e^{-0.4x} \\
\ln\left( \frac{1}{2} \right) &= -0.4x \\
x &= -\frac{5}{2} \ln\left( \frac{1}{2} \right)
\end{align}
$$

*Problem 14*

$$
\begin{align}
2e^{3x} &= 4e^{5x} \\
e^{3x} &= 2e^{5x} \\
3x &= 5x\ln(3e)    
\end{align}
$$

*Problem 15*

$$
\begin{align}
7^{x+2} &= e^{17x} \\
\ln(7^{x+2}) &= 17x \\
(x+2)\ln(7) &= 17x \\
x\ln(7)+2\ln(7) &= 17x \\
2\ln(7) &= 17x-x\ln(7) \\
2\ln(7) &= x(17-\ln(7)) \\
x &= \frac{2\ln(7)}{(17-\ln(7))}
\end{align}
$$

*Problem 16*

$$
\begin{align}
10^{x+3} &= 5e^{7-x} \\
x+3 &= (7-x)\log(5e) \\
x+3 &= 7\log(5e) - x\log(5e) \\
x-x\log(5e) &= 7\log(5e)-3 \\
x[1-\log(5e)] &= 7\log(5e)-3 \\
x &= \frac{7\log(5e)-3}{1-\log(5e)}
\end{align}
$$

*Problem 17*

$$
\begin{align}
2x-1 &= e^{\ln x^{2}} \\
2x-1 &= x^{2} \\
0 &= x^{2}-2x+1 \\
1 &\pm \sqrt{ 1-1 } \\
x &= 1
\end{align}
$$

*Problem 18*

$$
\begin{align}
4e^{2x-3} - 5 &= e \\
4e^{2x-3} &= e+5 \\
e^{2x-3} &= (e+5)(4)^{-1} \\
2x-3 &= \ln(e+5) - \ln(4) \\
x &= \frac{1}{2}\ln(e+5) - \frac{1}{2}\ln(4) - \frac{3}{2}
\end{align}
$$

