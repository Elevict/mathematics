---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 13.5 the Chain Rule for Multivariable Functions

Chain rule has been used frequently for functions of one variable in many instances. The notation that’s probably familiar to most people is the following.

$$
F(x) = f(g(x)) \quad F'(x) = f'(g(x))g'(x)
$$

There is an alternate notation however that is not used much in single variable calculus that is more convenient at this point because it will match up with the notation that we are going to be using for multivariable calculus. Here it is,

$$
\text{If } y = f(x) \text{ and } x = g(t) \text{ then } \frac{dy}{dt} = \frac{dy}{dx} \frac{dx}{dt}
$$

Notice that the derivative $\frac{dy}{dt}$ really does make sense here since if we were to plug in for $x$ then $y$ really would be a function of $t$. One way to remember this form of the chain rule is to note that if we think of the two derivatives on the right side as fractions the $dx$’s will cancel to get the same derivative on both sides.

## First case of Chain Rule

First, lets begin by writing out the chain rule for a function of two variables, that being for a function $z = f(x, y)$.

$$
\frac{dz}{dt} = \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt}
$$

So, basically what we’re doing here is differentiating $f$ with respect to each variable in it and then multiplying each of these by the derivative of that variable with respect to $t$. The final step is to then add all this up.

Let’s take a look at a couple of examples.

> [!example] **Example** (Chain Rule Example 1)
>
> $$
> \begin{align}
> z = xe^{xy}, \ x &= t^{2}, \ y = t^{-1} \\
> \frac{dz}{dt} &= \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt} \\
> &= (1e^{xy} + xye^{xy})(2t) + (x^{2}e^{xy})(-t^{-2}) \\ \\
> &= 2t(e^{t} + te^{t}) - t^{-2}t^{4}e^{t} \\
> &= 2te^{t} + t^{2}e^{t} 
> \end{align}
> $$

> [!example] **Example** (Chain Rule Example 2)
>
> $$
> \begin{align}
> z &= x^{2}y^{3} + y\cos(x), \ x = \ln(t^{2}), \ y = \sin(4t) \\
> \frac{dz}{dt} &= \frac{ \partial z }{ \partial x } \frac{dx}{dt} + \frac{ \partial z }{ \partial y } \frac{dy}{dt} \\
> &= (2xy^{3} - y\sin(x))\left( \frac{2}{t} \right) + (3x^{2}y^{2} + \cos(x))(4\cos(4t)) \\
> \end{align}
> $$

Now, there is a special case that we should take a quick look at before moving on to the next case. Let’s suppose that we have the following situation,

$$
z = f(x, y) \quad y = g(x)
$$

In this case the chain rule for $\frac{dz}{dx}$ becomes,

$$
\begin{align}
\frac{dz}{dx} &= \frac{ \partial f }{ \partial x } \frac{dx}{dx} + \frac{ \partial f }{ \partial y } \frac{dy}{dx} \\
&= \frac{ \partial f }{ \partial x } + \frac{ \partial f }{ \partial y } \frac{dy}{dx}
\end{align}
$$

## Second case of Chain Rule

Now let's take a look at the second case

$$
z = f(x, y), \ x = g(s, t), \ y = h(s, t) \text{ and compute } \frac{ \partial z }{ \partial s } \text{ and } \frac{ \partial z }{ \partial t } 
$$

In this case if we were to substitute in for $x$ and $y$ we would get that $z$ is a function of $s$ and $t$ and so it makes sense that we would be computing partial derivatives here and that there would be two of them.

Here is the chain rule for both of these cases.

$$
\frac{ \partial z }{ \partial s } = \frac{ \partial f }{ \partial x } \frac{ \partial x }{ \partial s } + \frac{ \partial f }{ \partial y } \frac{ \partial y }{ \partial s } \quad \quad \frac{ \partial z }{ \partial t } = \frac{ \partial f }{ \partial x } \frac{ \partial x }{ \partial t } + \frac{ \partial f }{ \partial y } \frac{ \partial y }{ \partial t }
$$

So, not surprisingly, these are very similar to the first case that we looked at.

## Implicit Differentiation

We will start with a function in the form $F(x,y)=0$ (if it’s not in this form simply move everything to one side of the equal sign to get it into this form) where $y=y(x)$. In a Calculus I course we were then asked to compute $\frac{dy}{dx}$ and this was often a fairly messy process. Using the chain rule from this section however we can get a nice simple formula for doing this. We’ll start by differentiating both sides with respect to $x$. This will mean using the chain rule on the left side and the right side will, of course, differentiate to zero. Here are the results of that.

$$
\frac{ \partial f }{ \partial x } + \frac{ \partial f }{ \partial y } \frac{dy}{dx} \quad \to \quad  F_{x} + F_{y} \frac{dy}{dx} = 0 \quad \to \quad \frac{dy}{dx} = - \frac{F_{x}}{F_{y}}
$$

Let's check out a quick example.

> [!example] **Example** (Implicit Differentiation using Partial Derivatives)
> Find $\frac{dy}{dx}$ for $x\cos(3y) +x^{3}y^{2} = 3x - e^{xy}$
>
> $$
> \begin{align}
> x\cos(3y) +x^{3}y^{2} &= 3x - e^{xy} \\
> x\cos(3y) +x^{3}y^{2} - 3x + e^{xy} &= 0 \\
> F_{x} &= \cos(3y) + 3x^{2}y^{2} - 3 +ye^{xy} \\
> F_{y} &= -3x\sin(3y) + 2yx^{3} +xe^{xy} \\
> \frac{dy}{dx} &= \frac{\cos(3y) + 3x^{2}y^{2} - 3 +ye^{xy}}{-3x\sin(3y) + 2yx^{3} +xe^{xy} }
> \end{align}
> $$

This makes finding implicit derivatives much easier compared to the old way.