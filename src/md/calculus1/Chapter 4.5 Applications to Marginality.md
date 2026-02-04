---
layout: base.njk
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 4.5 Applications to Marginality

## Definitions

> [!definition] **Definition** (Cost Function)
> **Cost Function**: $C(q)$ represents the total cost of producing $q$ goods. It is an increasing function and typically has a shape that starts concave down and becomes concave up.

> [!definition] **Definition** (Revenue Function)
> **Revenue Function**: $R(q)$ represents the total revenue from selling $q$ goods. If price $p$ is constant, $R = pq$, resulting in a straight line through the origin. For large $q$, $R(q)$ may decrease due to market saturation.

> [!definition] **Definition** (Profit Function)
> ${} \pi(q) = R(q) - C(q)$.

## Applying Marginality

**Marginal Analysis:**

- **Marginal Cost (MC)**: $MC = C'(q)$. Approximation: $MC \approx C(q+1) - C(q)$.
- **Marginal Revenue (MR)**: $MR = R'(q)$. Approximation: $MR \approx R(q+1) - R(q)$.

> [!theorem] **Theorem** (Maximization or Minimization of Profit)
> The maximum (or minimum) profit can only occur where marginal cost equals marginal revenue
>
> $$
> MR = MC
> $$

## Problems

> [!problem] **Problem** (Problem 1)
> Total cost and revenue are approximated by the functions $𝐶 = 5000 + 2.4𝑞$ and $𝑅 = 4𝑞$, both in dollars. Identify the fixed cost, marginal cost per item, and the price at which this item is sold.

Given:

$$
\begin{align}
C &= 5000 + 2.4q \\
R &= 4q
\end{align}
$$

(a) Fixed cost: \$5000
(b) Marginal cost per item: \$2.4
(c) Price per item: \$4

> [!problem] **Problem** (Problem 2)
> Total cost is $𝐶 = 8500 + 4.65𝑞$ and total revenue is $𝑅 = 5.15𝑞$, both in dollars, where $𝑞$ represents the quantity produced. Find the fixed cost, marginal cost per item, price the item is sold at, the production levels at which the company makes a profit, and how much the company makes for each additional unit.

Given:

$$
\begin{align}
C &= 8500 + 4.65q \\
R &= 5.15q
\end{align}
$$

(a) Fixed cost: \$8500
(b) Marginal cost per item: \$4.65
(c) Price per item: \$5.15
(d) Production level for profit:

$$
5.15q = 8500 + 4.65q \implies 0.5q = 8500 \implies q = 17000
$$

Profit when $q > 17000$.

(e) Profit per additional unit:

$$
5.15 - 4.65 = 0.50
$$

> [!problem] **Problem** (Problem 3)
> When production is 4500, marginal revenue is $8 per unit and marginal cost is $9.25 per unit. Do you expect maximum profit to occur at a production level above or below 4500? Explain.

Given:
- Production level $q = 4500$
- Marginal revenue $MR = 8$
- Marginal cost $MC = 9.25$

Since $MR < MC$, reduce production below 4500 units for maximum profit.

> [!question] **Question** (Problems 7-9)
> In problems 7–9, give the cost, revenue, and profit functions.

> [!problem] **Problem** (Problem 7)
> An online seller of T-shirts pays $500 to start up the website and $6 per T-shirt, then sells the T-shirts for $12 each.

$$
\begin{align*}
\text{Cost function} &= 500 + 6x \\
\text{Revenue function} &= 12x \\
\text{Profit function} &= \text{Revenue} - \text{Cost} = 12x - (500 + 6x) = 6x - 500
\end{align*}
$$

> [!problem] **Problem** (Problem 8)
> A car wash operator pays $35,000 for a franchise, then spends $10 per car wash, which costs the consumer $15.

$$
\begin{align*}
\text{Cost function} &= 35{,}000 + 10x \\
\text{Revenue function} &= 15x \\
\text{Profit function} &= \text{Revenue} - \text{Cost} = 15x - (35{,}000 + 10x) = 5x - 35{,}000
\end{align*}
$$

> [!problem] **Problem** (Problem 9)
> A couple running a house-cleaning business invests $5000 in equipment, and they spend $15 in supplies to clean a house, for which they charge $60.

$$
\begin{align*}
\text{Cost function} &= 5000 + 15x \\
\text{Revenue function} &= 60x \\
\text{Profit function} &= \text{Revenue} - \text{Cost} = 60x - (5000 + 15x) = 45x - 5000
\end{align*}
$$

