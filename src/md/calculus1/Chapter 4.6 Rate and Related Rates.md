---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 4.6 Rate and Related Rates

## Problems

> [!problem] **Problem** (Problem 1)
> With time, $t$, in minutes, the temperature, $H$, in degrees Celsius, of a bottle of water put in the refrigerator at $t=0$ is given by
>
> $$
> H=4+16e^{-0.02t}
> $$
>
> How fast is the water cooling initially? After 10 minutes? Give units.

$$
\begin{align*}
H &= 4 + 16e^{-0.02t} \\
\frac{dH}{dt} &= -0.32e^{-0.02t} \\
\text{At } t = 0, \quad \frac{dH}{dt} &= -0.32 \text{ degrees Celsius per minute} \\
\text{At } t = 10, \quad \frac{dH}{dt} &= -0.32e^{-0.2} \approx -0.26 \text{ degrees Celsius per minute}
\end{align*}
$$

> [!problem] **Problem** (Problem 2)
> The world population $P$, in billions, is approximately
>
> $$
> P = 7.17e^{0.01064t}
> $$
>
> where $t$ is in years since April 20, 2014. At what rate was the world’s population increasing on that date? Give your answer in millions of people per year.

$$
\begin{align*}
P &= 7.17e^{0.01064t} \\
\frac{dP}{dt} &= 7.17 \cdot 0.01064 e^{0.01064t} \\
\text{At } t = 0, \quad \frac{dP}{dt} &= 7.17 \cdot 0.01064 \approx 0.076 \text{ billion per year} \\
\end{align*}
$$

We convert from $0.076$ billion per year over to $76$ million per year.

> [!problem] **Problem** (Problem 3)
> If $x^{2} + y^{2} = 25$ and $\frac{dx}{dt} = 6$, find $\frac{dy}{dt}$ when $y$ is positive and $x=0$, $x=3$, along with $x=4$.

$$
\begin{align*}
x^2 + y^2 &= 25 \\
\frac{d}{dt}(x^2 + y^2) &= 0 \\
2x \frac{dx}{dt} + 2y \frac{dy}{dt} &= 0 \\
\frac{dy}{dt} &= -\frac{x}{y} \frac{dx}{dt}
\end{align*}
$$

(a) For $x = 0$:

$$
\frac{dy}{dt} = -\frac{0}{y} \cdot 6 = 0
$$

(b) For $x = 3$:

$$
y = \sqrt{25 - 3^2} \to y=4 \\ \to -\frac{3}{4} \cdot 6 = -4.5
$$

(c) For $x = 4$:

$$
y = \sqrt{25 - 4^2} \to y = 3 \\ = -\frac{4}{3} \cdot 6 = -8
$$

> [!problem] **Problem** (Problem 4)
> If $xy=100$ and $\frac{dx}{dt}=5$, find $\frac{dy}{dt}$ when $x=10$, $x=25$, and $x=50$.

$$
\begin{align*}
xy &= 100 \\
\frac{d}{dt}(xy) &= 0 \\
x \frac{dy}{dt} + y \frac{dx}{dt} &= 0 \\
\frac{dy}{dt} &= -\frac{y}{x} \frac{dx}{dt}
\end{align*}
$$

(a) For $x = 10$:

$$
y = \frac{100}{10} \to y = 10 \to -\frac{10}{10} \cdot 5 = -5
$$

(b) For $x = 25$:

$$
y = \frac{100}{25} \to y = 4 \to -\frac{4}{25} \cdot 5 = -0.8
$$

(c) For $x = 50$:

$$
y = \frac{100}{50} \to 2 \to -\frac{2}{50} \cdot 5 = -0.2
$$

> [!problem] **Problem** (Problem 5)
> With length $l$, in meters, the period $T$, in seconds, of a pendulum is given by
>
> $$
> T = 2\pi \sqrt{\frac{l}{9.8}}
> $$
>
> How fast does the period increase a $l$ increases? Does this rate of change increase or decrease as $l$ increases?

$$
\begin{align*}
T &= 2\pi \sqrt{\frac{l}{9.8}} \\
T &= \frac{2\pi}{\sqrt{9.8}}(l)^{1/2} \\
\frac{dT}{dl} &= \frac{\pi}{\sqrt{9.8l}}
\end{align*}
$$

The period $T$ increases as fast as the derivative equation above demonstrates for any length $l$. Likewise, this rate of change of $T$ decreases as $l$ increases.

> [!problem] **Problem** (Problem 6)
> The Dubois formula relates a person's surface area, $s$, in meters, to weight, $w$, in kg, and height, $h$, in cm, by
>
> $$
> s = 0.01w^{0.25}h^{0.75}
> $$
>
> What is the surface area of a person who weights 60 kg and is 150 cm tall?
>
> What if this same person stays at a constant height but increases in weight 0.5 kg/year. At what rate is his surface area increasing when his weight is 62 kg?

$$
\begin{align*}
s &= 0.01w^{0.25}h^{0.75} \\
\text{For } w &= 60 \text{ kg and } h = 150 \text{ cm:} \\
s &= 0.01 \cdot 60^{0.25} \cdot 150^{0.75} \approx 1.75 \text{ m}^2
\end{align*}
$$

$$
\frac{ds}{dt} = 0.01 \cdot 0.25 \cdot 60^{-0.75} \cdot 150^{0.75} \cdot \frac{dw}{dt} \approx 0.01 \cdot 0.25 \cdot 0.394 \cdot 101.24 \cdot 0.5 \approx 0.02 \text{ m}^2/\text{year}
$$

