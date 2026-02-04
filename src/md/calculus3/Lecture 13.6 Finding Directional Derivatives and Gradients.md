---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Lecture 13.6 Finding Directional Derivatives and Gradients

## Limit Definition of a Directional Derivative

To this point we’ve only looked at the two partial derivatives $f_{x}(x, y)$ and $f_{y}(x, y)$. Recall that these derivatives represent the rate of change of $f$ as we vary $x$ (holding $y$ fixed) and as we vary $y$ (holding $x$ fixed) respectively. We now need to discuss how to find the rate of change of $f$ if we allow both $x$ and $y$ to change. For instance, one could be changing faster than the other and then there is also the issue of whether or not each is increasing or decreasing. So, before we get into finding the rate of change we need to get a couple of preliminary ideas taken care of first. The main idea that we need to look at is just how are we going to define the changing of $x$ and/or $y$.

To help us see how we’re going to define this change let’s suppose that a particle is sitting at $(x_{0}, y_{0})$ and the particle will move in the direction given by the changing $x$ and $y$. Therefore, the particle will move off in a direction of increasing $x$ and $y$ and the $x$ coordinate of the point will increase twice as fast as the $y$ coordinate. Now that we’re thinking of this changing $x$ and $y$ as a direction of movement we can get a way of defining the change. We know from Calculus II that vectors can be used to define a direction and so the particle, at this point, can be said to be moving in the direction,

$$
\vec{v} = \langle 2, 1 \rangle 
$$

The issue is that many other vectors can also be defined to be in the same direction, however a different magnitude. The way we deal with this is by using a unit vector, which has a magnitude of 1. In our case, it is the following vector.

$$
\vec{v} = \left\langle  \frac{2}{\sqrt{5}}, \frac{1}{\sqrt{5}}  \right\rangle 
$$

Sometimes we want to get a direction using an angle, and in this case we can do so using an angle $\theta$ with the following unit vector,

$$
\vec{u} = \langle \cos \theta, \sin \theta \rangle 
$$

Now that we know how to define direction of changing $x$ and $y$, we proceed with the definition.

> [!definition] **Definition** (Directional Derivative)
> The rate of change of $f(x, y)$ in the direction of the unit vector $\vec{u} = \langle a, b \rangle$ is called the directional derivative and is denoted by $D_{\vec{u}} f(x, y)$. The definition of the directional derivative is,
>
> $$
> D_{\vec{u}}f(x, y) = \lim_{_h \to \infty} \frac{f(x + ah, \ y +bh) - f(x, y)}{h}
> $$

## More Useful Formula of the Directional Derivative

This definition is not really useful, lets attempt to define a new function.

$$
g(z) = f(x_{0} + az, y_{0} + bz)
$$

where ${} x_{0}, y_{0}, a, \text{and } b {}$ are some fixed numbers. Note that this really is a function of a single variable now since $z$ is the only letter that is not representing a fixed number. Then, we have that

$$
g'(z) = \lim_{h \to 0} \frac{g(z+h)-g(z)}{h}
$$

and the derivative at $z = 0$ is given by,

$$
g'(0) = \lim_{h \to 0} \frac{g(h)-g(0)}{h}
$$

which when we substitute for $g(z)$ we get,

$$
g'(0) = \lim_{h \to 0}  \frac{g(h)-g(0)}{h} = \lim_{h \to 0} \frac{f(x_{0}+ah, y_{0}+bh) - f(x_{0}, y_{0})}{h} = D_{\vec{u}}f(x_{0}, y_{0})
$$

whereby we now established that

$$
g'(0) = D_{\vec{u}}f(x_{0}, y_{0})
$$

Using this fact, lets redefine $g(z)$ here,

$$
g(z) = f(x, y) \text{ where } x=x_{0} + az \text{ and } y = y_{0} + bz
$$

We can now use the chain rule from the previous section to compute,

$$
g'(z) = \frac{dg}{dz} = \frac{ \partial f }{ \partial x } \frac{dx}{dz} + \frac{ \partial f }{ \partial y }  \frac{dy}{dz} = f_{x}(x, y)a + f_{y}(x, y)b
$$

So, from the chain rule we get the following relationship.

$$
g'(z) = f_{x}(x, y)a + f_{y}(x, y)b
$$

If we now take $z = 0$ we get that $x = x_{0}$ and $y = y_{0}$.

$$
g'(0) = f_{x}(x_{0}, y_{0})a + f_{y}(x_{0}, y_{0})b
$$

Now, simple use the facts established up to get,

$$
D_{\vec{u}}(x_{0}, y_{0}) = g'(0) = f_{x}(x_{0}, y_{0})a + f_{y}(x_{0}, y_{0})b
$$

which gives us a better way of finding the directional derivative. Just let $x_{0}$ and $y_{0}$ be any number now.

> [!definition] **Definition** (Directional Derivative)
> The rate of change of $f(x, y)$ in the direction of the unit vector $\vec{u} = \langle a, b \rangle$ is called the directional derivative and is denoted by $D_{\vec{u}} f(x, y)$. The definition of the directional derivative is,
>
> $$
> \begin{align}
> D_{\vec{u}} f(x, y) &= f_{x}(x, y)a + f_{y}(x, y)b \\
> &=\langle f_{x}, f_{y}, f_{z} \rangle \cdot \langle a, b, c \rangle   \\
> &= \nabla f \cdot \vec{u}
> \end{align}
> $$

## The Gradient

Since the vector $\langle f_{x}, f_{y}, f_{z} \rangle$ will show up frequently, we give it the notation $\nabla f$. Now $\nabla f$ depends on which dimension you are working with and is computed as follows for ${} \mathbb{R}^{3} {}$

$$
\nabla f = f_{x}\hat{i} + f_{y}\hat{j} + f_{z} \hat{k}
$$

and visually it tells you the vector that goes in the steepest direction of ascent. Therefore, we have the following theorem:

> [!theorem] **Theorem**
> The maximum value of $D_{\vec{u}}f(\vec{x})$ is given by $\lvert \lvert \nabla f(\vec{x}) \rvert \rvert$ and will occur in the direction given by $\nabla f(\vec{x})$.

*Proof*

First, start with the dot product form of $D_{\vec{u}}f(\vec{x})$ and use the geometric formula for dot products,

$$
D_{\vec{u}}f = \nabla f \cdot  \vec{u} = \lvert \lvert \nabla f \rvert  \rvert \ \lvert \lvert \vec{u} \rvert  \rvert \cos(\theta) = \lvert \lvert \nabla f \rvert  \rvert \cos \theta
$$

Note the largest possible value for $\cos(\theta)$ is 1 which occurs at $\theta = 0$. So its clear the largest value is $\lvert \lvert \nabla f \rvert \rvert$. Now since $\theta = 0$, that means that $\nabla f$ is pointing at the same direction as $\vec{u}$, and so this maximum happens at the direction of $\nabla f$.

$$
\tag*{\(\blacksquare\)}
$$

> [!theorem] **Theorem** (Gradient Orthogonal to Level Curve or Surface)
> The gradient vector $\nabla f(x_{0}, y_{0})$ is orthogonal to the level curve $f(x, y) = k$ at the point $(x_{0}, y_{0})$. Likewise, the gradient vector $\nabla f(x_{0}, y_{0}, z_{0})$ is orthogonal to the level surface $f(x, y, z) = k$ at the point $x_{0}, y_{0}, z_{0}$.

