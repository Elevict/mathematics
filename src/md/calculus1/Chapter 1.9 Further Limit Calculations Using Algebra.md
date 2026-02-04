---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 1.9 Further Limit Calculations Using Algebra

## Limits of Rational Functions

There are three ways you can use to solve limits of rational functions, descending in order of complication:
1. Direct substitution
2. Algebraic simplification
3. Analysis of endpoint behavior

## Squeeze Theorem

Sometimes, there are just some limits that are too difficult to solve with the methods above. In this case, we use two simpler limits to resolve the more difficult limit by bounding it between two functions. The theorem that allows us to do this is called the squeeze theorem.

> [!definition] **Definition** (Squeeze Theorem)
> Suppose that all $x$ on $[a, b]$ (except possibly at $x=c$) we have,
>
> $$
> f(x) \leq h(x) \leq g(x)
> $$
>
> Also suppose that,
>
> $$
> \lim_{ x \to c } f(x) = \lim_{ x \to c } g(x) = L
> $$
>
> for some $a \leq c \leq b$. Then,
>
> $$
> \lim_{ x \to c } h(x) = L
> $$

## Problems

> [!question] **Question** (Exercises 4-18)
> For exercises 4-18, use algebra to simplify the expression and find the limit.

*Problem 4*

$$
\lim_{ x \to 3 } \frac{x^{2}-3x}{x-3} = \frac{x(x-3)}{6x-5} = \lim_{ x \to 3 } x = 3
$$

*Problem 5*

$$
\lim_{ t \to 0 } \frac{t^{4}+t^{2}}{2t^{3}-9t^{2}} = \frac{t^{2}(t^{2}+1)}{t^{2}(2t-9)} = \lim_{ t \to 0 } \frac{t^{2}-1}{2t-9} = \frac{1}{9}
$$

*Problem 6*

$$
\lim_{ x \to 0 } \frac{x^{3}-3x}{x\sqrt{ 2x+3 }} = \lim_{ x \to 0 } \frac{x^{2}-3}{\sqrt{ 2x+3}} = -\frac{3}{\sqrt{ 3 }} = -\sqrt{ 3 }
$$

*Problem 7*

$$
\lim_{ x \to -4 } \frac{x+4}{2x^{2}+5x-12} = \frac{x+4}{(x+4)(2x-3)} = \lim_{ x \to -4 } \frac{1}{2x-3} = -\frac{1}{11}
$$

*Problem 8*

$$
\lim_{ y \to 1 } \frac{y^{2}-5y+4}{y-1} = \frac{(y-1)(y-4)}{y-1} = y-4
$$

*Problem 9*

$$
\lim_{ x \to 1 } \frac{x^{2}+2x-3}{x^{2}-3x+2} = \lim_{ x \to 1 } \frac{(x-1)(x+3)}{(x-1)(x-2)} = \lim_{ x \to 1 } \frac{x+3}{(x-2)} = -4
$$

*Problem 10*

$$
\lim_{ t \to -2 } \frac{2t^{2}+3t-2}{t^{2}+5t+6} = \lim_{ x \to -2 } \frac{(2t-1)(t+2)}{(t+3)(t+2)} = \lim_{ t \to -2 } \frac{2t-1}{t+3} = -5
$$

*Problem 11*

$$
\lim_{ x \to 3 } \frac{x^{2}-9}{x^{2}+x-12} = \lim_{ x \to 3 } \frac{(x-3)(x+3)}{(x+4)(x-3)} = \lim_{ x \to 3 } \frac{x+3}{x+4} = \frac{6}{7}
$$

*Problem 12*

$$
\lim_{ y \to -1 } \frac{2y^{2}+y-1}{3y^{2}+2y-1} = \lim_{ y \to -1 } \frac{(2y-1)(y+1)}{(3y-1)(y+1)} = \lim_{ y \to -1 } \frac{2y-1}{3y-1} = \frac{3}{4}
$$

*Problem 13*

$$
\lim_{ h \to 0 } \frac{(3+h)^{2}-9}{h} = \lim_{ h \to 0 } \frac{h^{2}+6h}{h} = \lim_{ h \to 0 } h+6 = 6
$$

*Problem 14*

$$
\lim_{ x \to -3 } \frac{(x+5)^{2}-4}{x^{2}-9} = \lim_{ x \to -3 } x^{2}+10x+21
$$

*Problem 15*

$$
\lim_{ x \to \sqrt{ 3 } } \frac{5x^{2}-15}{x^{4}-9} = \lim_{x \to \sqrt{3}} \frac{5(x^{2}-3)}{(x^{2}-3)(x^{2}+3)}=\lim_{x \to \sqrt{3}} \frac{5}{x^{2}+3}=\frac{5}{6 }  
$$

*Problem 16*

$$
\lim_{x \to 2} \frac{\frac{2}{x}-1}{x-2}=\lim_{x \to 2} \frac{2-x}{x}\cdot \frac{1}{-(2-x)} = \lim_{x \to 2} -\frac{1}{x} = -\frac{1}{2}
$$

*Problem 17*

$$
\lim_{t \to 3} \frac{\frac{1}t-\frac{1}{3}}{t-3}=\lim_{t \to 3} \frac{3-t}{3t}\cdot \frac{1}{-(3-t)}=\lim_{t \to 3} -\frac{1}{3t}=-\frac{1}{9}
$$

*Problem 18*

$$
\lim_{t \to 0} \frac{\frac{1}{(t+1)}-1}{t} = \lim_{t \to 0} \frac{1-(t+1)}{(t+1)} \cdot \frac{1}{t}=\lim_{t \to 0} -\frac{1}{t+1}=-1
$$

> [!question] **Question** (Exercises 27-34)
> In exercises 27-34, use algebra to evaluate the limit.

*Problem 27*

$$
\lim_{z \to \infty} \frac{5z^{2}+2z+1}{2z^{3}-z^{2}+9}=0
$$

*Problem 28*

$$
\lim_{x \to \infty} \frac{x+7x^{2}-11}{3x^{2}-2x} = \frac{7}{3}
$$

*Problem 29*

$$
\lim_{t \to \infty} \frac{4e^{t}+3e^{-t}}{5e^{t}+2e}=\frac{4}{5}
$$

*Problem 30*

$$
\lim_{x \to \infty} \frac{2^{x+1}}{3^{x-1}}=\lim_{x \to \infty} \frac{2^{x}-2}{3^{x}-3^{-1}}=0
$$

*Problem 31*

$$
\lim_{x \to \infty} \frac{2^{3x+2}}{3^{x+2}}=\lim_{x \to \infty} \frac{8^{x}\cdot 2^{2}}{3^{x}\cdot 3^{2}}=\infty
$$

*Problem 32*

$$
\lim_{x \to \infty} xe^{-x}=\lim_{x \to \infty} \frac{x}{e^{x}}=0
$$

*Problem 33*

$$
\lim_{t \to \infty} (4e^{t})(7e^{-t})=\frac{4}{7}
$$

*Problem 34*

$$
\lim_{t \to \infty} t^{-2}\cdot \sin(t) = \lim_{t \to \infty} \frac{\sin(t)}{t^{2}}= 0
$$


