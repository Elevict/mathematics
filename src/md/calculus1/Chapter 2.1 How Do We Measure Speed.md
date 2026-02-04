---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 2.1 how Do We Measure Speed

## Average and Instantaneous Velocity

> [!definition] **Definition** (Average Velocity)
> If $s(t)$ is the position of an object at time $t$, then the **average velocity** of an object over the interval $a\leq t\leq b$ is
>
> $$
> \text{Average velocity } = \frac{\text{Change in position}}{\text{Change in time}}=\frac{s(b)-s(a)}{b-a}
> $$
>
> In other words, the **average velocity** of an object over an interval is the net change in position during the interval divided by the change in time.

> [!definition] **Definition** (Instantaneous Velocity)
> Let $s(t)$ be the position at time $t$. Then the **instantaneous velocity** at $t=a$ is defined as
>
> $$
> \text{Instantaneous velocity} = \lim_{h \to 0} \frac{s(a+h)-s(a)}{h}
> $$
>
> In other words, the **instantaneous velocity** of an object at time $t=a$ is given by the limit of the average velocity over an interval, as the interval shrinks around $a$.

The **instantaneous velocity** is the slope of the curve at a particular point.

The **average velocity** over any time interval $a \leq t \leq b$ is the slope of the line joining the point on the graph of $s(t)$ corresponding to $t=a$ and $t=b$.

## Problems

> [!problem] **Problem** (Problem 1)
> The distance, $s$ a car has traveled on a trip is shown in the table as a function of the time, $t$, since the trip started. Find the average velocity between $t=2$ and $t=5$.
>
> | $t$(hours) | 0   | 1   | 2   | 3   | 4   | 5   |
> | ---------- | --- | --- | --- | --- | --- | --- |
> | $s$(km)    | 0   | 45  | 135 | 220 | 300 | 400 |

$$
\bar{v}=\frac{400-135}{5-2}=\frac{265}{3} \text{km/hr}
$$

> [!problem] **Problem** (Problem 2)
> The table gives the position of a particle moving along the $x$-axis as a function of time in seconds, where $x$ is in meters. What is the average velocity of the particle from $t=0$ to $t=4$?
>
> | $t$    | 0   | 2   | 4   | 6   | 8   |
> | ------ | --- | --- | --- | --- | --- |
> | $s(t)$ | -2  | 4   | -6  | -18 | -14 |

$$
\bar{v} = \frac{-6+2}{4-8}=-\frac{4}{4}=-1
$$

> [!problem] **Problem** (Problem 3)
> The table gives the position of a particle moving along the $x$-axis as a function of time in seconds, where $x$ is in angstroms. What is the average velocity of the particle from $t=2$ to $t=8$?
>
> | $t$    | 0   | 2   | 4   | 6   | 8   |
> | ------ | --- | --- | --- | --- | --- |
> | $s(t)$ | 0   | 14  | -6  | -18 | -4  |

$$
\bar{v}=-\frac{4-12}{8-2}=-\frac{16}{6}=-\frac{8}{3}
$$

> [!question] **Question** (Problems 30-33)
> In problem 30-33, use algebra to evaluate the limit.

*Problem 30*

$$
\lim_{h \to 0} \frac{(2+h)^{2}-4}{h} = \frac{h(h+4)}{h} = 4
$$

*Problem 31*

$$
\lim_{h \to 0} \frac{(1+h)^{3}-1}{h} = \lim_{h \to 0}\frac{h^{3}+3h^{2}+3h+1-1}{h} = \lim_{h \to 0} h^{2}+3h+3=3
$$

*Problem 32*

$$
\lim_{h \to 0} \frac{3(2+h)^{2}-12}{h} = \lim_{h \to 0} \frac{3h^{2}+12h+12-12}{h} = \lim_{h \to 0} 3h+12=12
$$

*Problem 33*

$$
\lim_{h \to 0} \frac{(3+h)^{2}-(3-h)^{2}}{2h} = \lim_{h \to 0} \frac{9+6h+h^{2}-(-6h+h^{2})}{2h} = \lim_{h \to 0} \frac{12h}{2h}=6
$$


