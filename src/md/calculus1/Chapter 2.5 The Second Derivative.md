---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 2.5 the Second Derivative

## What Do Derivatives Tell Us?

Recall that the derivative of a function tells you whether a function is increasing or decreasing:
- If $f' > 0$ on an interval, then $f$ is *increasing* over that interval.
- If $f' < 0$ on an interval, then $f$ is *decreasing* over that interval.

Likewise, the second derivative of a function tells you whether a function is concave up or concave down:
- If ${} f'' \geq 0 {}$ on an interval, then $f'$ is *concave up* over that interval.
- If ${} f'' \leq 0 {}$ on an interval, then $f'$ is *concave down* over that interval.

## Velocity and Acceleration

When an object is speeding up, we say that it is accelerating. We define *acceleration* as the rate of change of velocity with respect to time. if $v(t)$ is the velocity of an object at time $t$, we have that the average acceleration is:

> [!definition] **Definition** (Average Acceleration)
>
> $$
> a(t) = \frac{v(t+h)-v(t)}{h}
> $$

And therefore, the instantaneous acceleration is:

> [!definition] **Definition** (Instantaneous Acceleration)
>
> $$
> \text{Instantaneous acceleration} = v'(t) = \lim_{h \to 0} \frac{v(t+h)-v(t)}{h}.
> $$

Likewise, this implies that acceleration is also the second derivative of position. In other words,

> [!definition] **Definition** (Derivatives with Respect to Position)
> If $y=s(t)$ is the position of an object at time $t$, then
> - Velocity: $v(t) = \frac{dy}{dt} = s'(t)$
> - Acceleration: $a(t) = \frac{d^{2}y}{dt^{2}} = s''(t) = v'(t)$

