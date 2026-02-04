---
tags:
  - mathematics/single_and_multivariable_calculus
---
# 12.1 Functions of Two Variables

## Function Notation

To calculate the monthly payment $m$ on a five-year car loan, which depends on both the loan amount $L$ and the interest rate $r$, we write:

$$
m = f(L, r)
$$

- $m$: Dependent variable
- $L, r$: Independent variables
- $f$: Function or rule relating $m$, $L$, and $r$

A function of two variables can be represented graphically, numerically by a table of values, or algebraically by a formula.

## Numerical Example: Body Mass Index (BMI)

BMI is a function of height $h$ and weight $w$:

$$
\text{BMI} = f(h, w)
$$

### Table 12.1: Bmi Values

| Height $h$ (in) | Weight $w$ (lbs) | 120  | 140  | 160  | 180  |
| --------------- | ---------------- | ---- | ---- | ---- | ---- |
| 60              | 23.4             | 27.3 | 31.2 | 35.2 | 39.1 |
| 63              | 21.3             | 24.8 | 28.3 | 31.9 | 35.4 |
| 66              | 19.4             | 22.6 | 25.8 | 29.0 | 32.3 |
| 69              | 17.7             | 20.7 | 23.6 | 26.6 | 29.5 |
| 72              | 16.3             | 19.0 | 21.7 | 24.4 | 27.1 |
| 75              | 15.0             | 17.5 | 20.0 | 22.5 | 25.0 |

- Example: $f(66, 140) = 22.6$ (66 inches tall, 140 lbs, BMI = 22.6)

## Algebraic Examples: Formulas

### Example 1

Formula for the amount of money $M$ in a bank account $t$ years after an initial investment of $B$ dollars, with interest accrued at a rate of 1.2% per year compounded annually:

$$
M = f(B, t) = B(1.012)^t
$$

### Example 2

Formulas for the volume $V$ and surface area $A$ of a cylinder with radius $r$ and height $h$:

$$
\begin{align}
V &= f(r, h) = \pi r^2 h \\
A &= g(r, h) = 2\pi r^2 + 2\pi r h
\end{align}
$$

## A Tour of 3-Space

### Visualizing Points in 3-Space

Imagine three coordinate axes meeting at the origin: a vertical axis (z), and two horizontal axes (x and y) at right angles. Specify a point by its coordinates $(x, y, z)$.

### Example 3

Describe the position of the points with coordinates $(1, 2, 3)$ and $(0, 0, -1)$.

- **Solution:**
  - $(1, 2, 3)$: 1 unit along the x-axis, 2 units parallel to the y-axis, 3 units up the z-axis.
  - $(0, 0, -1)$: On the negative z-axis.

### Example 4

Start at the origin, go 2 units along the y-axis, then 1 unit vertically. Final coordinates:

- **Solution:** $(0, 2, 1)$

### Graphing Equations in 3-Space

### Example 5

Graphs of the equations $z = 0$, $z = 3$, and $z = -1$:

- **Solution:**
  - $z = 0$: Horizontal plane containing the origin (xy-plane).
  - $z = 3$: Plane 3 units above the xy-plane.
  - $z = -1$: Plane 1 unit below the xy-plane.

### Example 6

Identify which point lies closest to the xz-plane and which point lies on the y-axis:

- **Solution:**
  - Closest to xz-plane: $A = (1, -1, 0)$ (smallest y-coordinate magnitude).
  - On y-axis: $D = (0, -4, 0)$ (x and z coordinates are zero).

### Example 7

Coordinates when 2 units below the xy-plane and in the yz-plane:

- **Solution:** $(0, y, -2)$ (line parallel to the y-axis, 2 units below the xy-plane).

### Example 9

Standing at $(4, 5, 2)$, looking at $(0.5, 0, 3)$. Are you looking up or down?

- **Solution:** Looking up (z-coordinate of 3 is greater than 2).

### Example 10

Describe the region behind the yz-plane algebraically:

- **Solution:** $x < 0$

## Distance between Two Points

### In 2-Space

Distance between points $(x, y)$ and $(a, b)$:

$$
\text{Distance} = \sqrt{(x - a)^2 + (y - b)^2}
$$

### In 3-Space

Distance between points $(x, y, z)$ and $(a, b, c)$:

$$
\text{Distance} = \sqrt{(x - a)^2 + (y - b)^2 + (z - c)^2}
$$

## Problems

*Problem 1:* Which of the points $P = (1, 2, 1)$ and $Q = (2, 0, 0)$ is closest to the origin?

$$
\begin{align*}
\text{Distance from } P \text{ to origin} &= \sqrt{1^2 + 2^2 + 1^2} = \sqrt{6} \\
\text{Distance from } Q \text{ to origin} &= \sqrt{2^2 + 0^2 + 0^2} = \sqrt{4} = 2
\end{align*}
$$

*Problem 2:* Which two of the three points $P_1 = (1, 2, 3)$, $P_2 = (3, 2, 1)$ and $P_3 = (1, 1, 0)$ are closest to each other?

$$
\begin{align*}
\text{Distance from } P_1 \text{ to } P_2 &= \sqrt{(1-3)^2 + (2-2)^2 + (3-1)^2} = \sqrt{8} \\
\text{Distance from } P_1 \text{ to } P_3 &= \sqrt{(1-1)^2 + (2-1)^2 + (3-0)^2} = \sqrt{10} \\
\text{Distance from } P_2 \text{ to } P_3 &= \sqrt{(3-1)^2 + (2-1)^2 + (1-0)^2} = \sqrt{6}
\end{align*}
$$

*Problem 3:* Which of the points $P_1 = (-3, 2, 15)$, $P_2 = (0, -10, 0)$, $P_3 = (-6, 5, 3)$ and $P_4 = (-4, 2, 7)$ is closest to $P = (6, 0, 4)$?

$$
\begin{align*}
\text{Distance from } P \text{ to } P_1 &= \sqrt{(6+3)^2 + (0-2)^2 + (4-15)^2} = \sqrt{155} \\
\text{Distance from } P \text{ to } P_2 &= \sqrt{(6-0)^2 + (0+10)^2 + (4-0)^2} = \sqrt{152} \\
\text{Distance from } P \text{ to } P_3 &= \sqrt{(6+6)^2 + (0-5)^2 + (4-3)^2} = \sqrt{170} \\
\text{Distance from } P \text{ to } P_4 &= \sqrt{(6+4)^2 + (0-2)^2 + (4-7)^2} = \sqrt{120}
\end{align*}
$$

*Problem 4:* Which of the points $A = (1.3, -2.7, 0)$, $B = (0.9, 0, 3.2)$, $C = (2.5, 0.1, -0.3)$ is closest to the $yz$-plane? Which one lies on the $xz$-plane? Which one is farthest from the $xy$-plane?

$$
\begin{align*}
\text{Distance from } A \text{ to the } yz \text{-plane} &= |1.3| = 1.3 \\
\text{Distance from } B \text{ to the } yz \text{-plane} &= |0.9| = 0.9 \\
\text{Distance from } C \text{ to the } yz \text{-plane} &= |2.5| = 2.5 \\
\end{align*}
$$

Point $A$ is closest to the $yz$-plane. Point $B$ lies on the $xz$-plane. The distance of each point from the $xy$-plane:

$$
\begin{align*}
\text{Distance from } A \text{ to the } xy \text{-plane} &= |0| = 0 \\
\text{Distance from } B \text{ to the } xy \text{-plane} &= |3.2| = 3.2 \\
\text{Distance from } C \text{ to the } xy \text{-plane} &= |-0.3| = 0.3 \\
\end{align*}
$$

Point $B$ is farthest from the $xy$-plane.

*Problem 5:* You are at the point $(3, 1, 1)$, standing upright and facing the $yz$-plane. You walk 2 units forward, turn left, and walk another 2 units. What is your final position?

$$
\begin{align*}
\text{Initial position: } &(3, 1, 1) \\
\text{Move 2 units forward (along } -x \text{-axis): } &(3-2, 1, 1) = (1, 1, 1) \\
\text{Turn left (facing } +y \text{-axis): } \\
\text{Move 2 units left (along } y \text{-axis): } &(1, 1-2, 1) = (1, -1, 1)
\end{align*}
$$

*Problem 6:* On a set of $x$, $y$ and $z$ axes oriented as in Figure 12.5, draw a straight line through the origin, lying in the $yz$-plane and such that if you move along the line with your $y$-coordinate increasing, your $z$-coordinate is increasing.

$$
\text{Line equation: } y = z
$$

*Problem 7:* What is the midpoint of the line segment joining the points $(-1, 3, 9)$ and $(5, 6, -3)$?

$$
\begin{align*}
\text{Midpoint} &= \left(\frac{-1+5}{2}, \frac{3+6}{2}, \frac{9-3}{2}\right) \\
&= (2, 4.5, 3)
\end{align*}
$$
