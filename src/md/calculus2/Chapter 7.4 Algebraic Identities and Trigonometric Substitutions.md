---
tags:
  - mathematics/single_and_multivariable_calculus
---
# Chapter 7.4 Algebraic Identities and Trigonometric Substitutions

## Algebraic Identities (Partial Fraction Decomposition)

**Partial fraction decomposition** is a technique used to break down a rational function into simpler fractions, which makes integration easier. It is particularly useful when dealing with polynomials.

## Steps

1. **Factor the Denominator**: Express the denominator as a product of irreducible polynomials.
2. **Set Up Partial Fractions**: Write the function as a sum of fractions, each with one of the factors from the denominator.
3. **Solve for Constants**: Equate coefficients or substitute suitable values for the variable to find the constants in the numerators.
4. **Integrate**: Integrate each partial fraction separately.

> [!example] **Example** (Partial Fraction Decomposition)
> Evaluate $\int \frac{3x + 5}{(x - 1)(x + 2)} \, dx$.
>
> 1. **Factor the Denominator**: The denominator is already factored as $(x - 1)(x + 2)$.
> 2. **Set Up Partial Fractions**: Write $\frac{3x + 5}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}$.
> 3. **Solve for Constants**: Clear fractions and solve $3x + 5 = A(x + 2) + B(x - 1)$. By comparing coefficients or substituting values, find $A = 2$ and $B = 1$.
> 4. **Integrate**: Thus, $\int \frac{3x + 5}{(x - 1)(x + 2)} \, dx = \int \frac{2}{x - 1} \, dx + \int \frac{1}{x + 2} \, dx$.
>
> Integrating, we get:
>
> $$
> \int \frac{3x + 5}{(x - 1)(x + 2)} \, dx = 2 \ln|x - 1| + \ln|x + 2| + C
> $$

## Trigonometric Substitutions

**Trigonometric substitution** is used to simplify integrals involving square roots of quadratic expressions by substituting trigonometric functions.

## Common Substitutions:

1. **For $\sqrt{a^2 - x^2}$**: Use $x = a \sin \theta$.
2. **For $\sqrt{a^2 + x^2}$**: Use $x = a \tan \theta$.
3. **For $\sqrt{x^2 - a^2}$**: Use $x = a \sec \theta$.

> [!example] **Example** (Trigonometric Substitutions)
> Evaluate $\int \frac{1}{\sqrt{9 - x^2}} \, dx$.
>
> 1. **Substitute**: Use $x = 3 \sin \theta$. Then, $dx = 3 \cos \theta \, d\theta$.
> 2. **Transform the Integral**: $\sqrt{9 - x^2} = \sqrt{9 - 9 \sin^2 \theta} = 3 \cos \theta$.
> Thus, $\int \frac{1}{\sqrt{9 - x^2}} \, dx = \int \frac{3 \cos \theta \, d\theta}{3 \cos \theta} = \int d\theta$.
> 3. **Integrate**: $\int d\theta = \theta + C$.
> 4. **Back-Substitute**: Replace $\theta$ with $\arcsin \left(\frac{x}{3}\right)$.
>
> Thus,
>
> $$
> \int \frac{1}{\sqrt{9 - x^2}} \, dx = \arcsin \left(\frac{x}{3}\right) + C
> $$

# Problems

*Problem 30:* Complete the square and give a substitution which could be used to compute the integral $\int \frac{1}{x^2 + 2x + 2} \, dx$.

$$
\begin{align*}
x^2 + 2x + 2 &= (x^2 + 2x + 1) + 1 \\
&= (x+1)^2 + 1
\end{align*}
$$

Substitution: $u = x + 1$, $du = dx$.

*Problem 32:* Complete the square and give a substitution which could be used to compute the integral $\int \frac{dy}{y^2 + 3y + 3}$.

$$
\begin{align*}
y^2 + 3y + 3 &= \left(y^2 + 3y + \frac{9}{4}\right) - \frac{9}{4} + 3 \\
&= \left(y + \frac{3}{2}\right)^2 + \frac{3}{4}
\end{align*}
$$

Substitution: $u = y + \frac{3}{2}$, $du = dy$.

*Problem 34:* Complete the square and give a substitution which could be used to compute the integral $\int \frac{4}{\sqrt{2z - z^2}} \, dz$.

$$
\begin{align*}
2z - z^2 &= -\left(z^2 - 2z\right) \\
&= -(z^2 - 2z + 1 - 1) \\
&= -(z-1)^2 + 1
\end{align*}
$$

Substitution: $u = z - 1$, $dz = du$.

*Problem 36:* Complete the square and give a substitution which could be used to compute the integral $\int (t+2) \sin(t^2 + 4t + 7) \, dt$.

$$
\begin{align*}
t^2 + 4t + 7 &= t^2 + 4t + 4 + 3 \\
&= (t+2)^2 + 3
\end{align*}
$$

Substitution: $u = t^2 + 4t + 7$, $du = (2t + 4) \, dt$.

*Problem 38:* Calculate the integral $\int \frac{1}{(x-5)(x-3)} \, dx$.

$$
\begin{align*}
\int \frac{1}{(x-5)(x-3)} \, dx &= \int \left(\frac{A}{x-5} + \frac{B}{x-3}\right) \, dx \\
&= \int \frac{1}{2} \left(\frac{1}{x-5} - \frac{1}{x-3}\right) \, dx \\
&= \frac{1}{2} \ln|x-5| - \frac{1}{2} \ln|x-3| + C \\
&= \frac{1}{2} \ln\left|\frac{x-5}{x-3}\right| + C
\end{align*}
$$

*Problem 40:* Calculate the integral $\int \frac{1}{(x+7)(x-2)} \, dx$.

$$
\begin{align*}
\int \frac{1}{(x+7)(x-2)} \, dx &= \int \left(\frac{A}{x+7} + \frac{B}{x-2}\right) \, dx \\
&= \int \left(\frac{1}{9} \left(-\frac{1}{x+7} +\frac{1}{x-2}\right)\right) \, dx \\
&= - \frac{1}{9} \ln|x+7| + \frac{1}{9} \ln|x-2| + C \\
&= \frac{1}{9} \ln\left|\frac{x-2}{x+7}\right| + C
\end{align*}
$$

*Problem 42:* Calculate the integral $\int \frac{dz}{z^2 + z}$.

$$
\begin{align*}
\int \frac{dz}{z^2 + z} &= \int \frac{dz}{z(z+1)} \\
&= \int \left(\frac{A}{z} + \frac{B}{z+1}\right) \, dz \\
&= \int \left(\frac{1}{z} - \frac{1}{z+1}\right) \, dz \\
&= \ln|z| - \ln|z+1| + C \\
&= \ln\left|\frac{z}{z+1}\right| + C
\end{align*}
$$

*Problem 44:* Calculate the integral $\int \frac{dP}{3P - 3P^2}$.

$$
\begin{align*}
\int \frac{dP}{3P - 3P^2} &= \int \frac{1}{3P(1-P)} \, dP \\
&= \int \frac{1}{3} \left(\frac{1}{P} + \frac{1}{1-P}\right) \, dP \\
&= \frac{1}{3} \left(\ln|P| - \ln|1-P|\right) + C \\
&= \frac{1}{3} \ln\left|\frac{P}{1-P}\right| + C
\end{align*}
$$

*Problem 46:* Calculate the integral $\int \frac{y+2}{2y^2 + 3y + 1} \, dy$.

$$
\begin{align*}
\int \frac{y+2}{2y^2 + 3y + 1} \, dy &= \int \frac{y+2}{(2y+1)(y+1)} \, dy \\
&= \int \left(\frac{A}{2y+1} + \frac{B}{y+1}\right) \, dy \\
&= \int \left(\frac{3}{(2y+1)} - \frac{1}{(y+1)}\right) \, dy \\
&= \frac{3}{2} \ln|2y+1| - \ln|y+1| + C \\
\end{align*}
$$

*Problem 48:* Calculate the integral $\int \frac{x-2}{x^2 + x^4} \, dx$.

$$
\begin{align*}
\int \frac{x-2}{x^2 + x^4} \, dx &= \int \frac{x-2}{x^{2}(1+x^{2})} \, dx \\
&= \int \left(\frac{2 - x}{x^{2} + 1} + \frac{1}{x} - \frac{2}{x^{2}}\right) dx \\
&= -\int \frac{x - 2}{x^{2} + 1} \, dx + \int \frac{1}{x} \, dx - 2 \int \frac{1}{x^{2}} \, dx\\
&= -\frac{\ln\left(x^{2} + 1\right)}{2} + \ln\left(x\right) + 2 \arctan\left(x\right) + \frac{2}{x}
\end{align*}
$$

*Problem 50:* Calculate the integral $\int \frac{dz}{(4-z^2)^{3/2}}$.

$$
\int \frac{dz}{(4 - z^2)^{3/2}}
$$

Substitution: $z = 2 \sin(\theta)$, $dz = 2 \cos(\theta) \, d\theta$.

$$
\begin{align*}
\int \frac{2 \cos(\theta) \, d\theta}{\left(4 - (2 \sin(\theta))^2\right)^{3/2}} &= \int \frac{2 \cos(\theta) \, d\theta}{\left(4 - 4 \sin^2(\theta)\right)^{3/2}} \\
&= \int \frac{2 \cos(\theta) \, d\theta}{4^{3/2} \left(1 - \sin^2(\theta)\right)^{3/2}} \\
&= \int \frac{2 \cos(\theta) \, d\theta}{8 \cos^3(\theta)} \\
&= \frac{1}{4} \int \frac{d\theta}{\cos^2(\theta)} \\
&= \frac{1}{4} \int \sec^2(\theta) \, d\theta \\
&= \frac{1}{4} \tan(\theta) + C \\
&= \frac{1}{4} \cdot \frac{z}{\sqrt{4 - z^2}} + C \\
&= \frac{z}{4 \sqrt{4 - z^2}} + C
\end{align*}
$$

*Problem 52:* Calculate the integral $\int \frac{1}{x^2 + 4x + 13} \, dx$.

$$
\begin{align*}
x^2 + 4x + 13 &= \left(x^2 + 4x + 4\right) + 9 \\
&= \left(x + 2\right)^2 + 9
\end{align*}
$$

Substitution: $u = x + 2$, $du = dx$.

$$
\begin{align*}
\int \frac{1}{x^2 + 4x + 13} \, dx &= \int \frac{1}{(u^2 + 9)} \, du \\
&= \frac{1}{3} \arctan\left(\frac{u}{3}\right) + C \\
&= \frac{1}{3} \arctan\left(\frac{x + 2}{3}\right) + C
\end{align*}
$$

*Problem 54:* Evaluate the indefinite integral using a trigonometric substitution and a triangle to express the answer in terms of $x$.

$$
\int \frac{1}{x^2 \sqrt{1 + x^2}} \, dx
$$

Substitution: $x = \tan(\theta)$, $dx = \sec^2(\theta) \, d\theta$.

$$
\begin{align*}
\int \frac{1}{\tan^2(\theta) \sqrt{1 + \tan^2(\theta)}} \sec^2(\theta) \, d\theta &= \int \frac{1}{\tan^2(\theta) \sec(\theta)} \sec^2(\theta) \, d\theta \\
&= \int \frac{\cos(\theta)}{\sin^2(\theta)} \, d\theta \\
&= \int \frac{1}{\sin(\theta) \cdot \sin(\theta)} \cos(\theta) \, d\theta \\
&= \int \csc(\theta) \cot(\theta) \, d\theta \\
&= -\csc(\theta) + C \\
&= - \frac{\sqrt{x^{2}+1}}{x}
\end{align*}
$$

*Problem 58:* Evaluate the indefinite integral using a trigonometric substitution and a triangle to express the answer in terms of $x$.

$$
\int \frac{1}{x \sqrt{9 - 4x^2}} \, dx
$$

Substitution: $x = \frac{3}{2} \sin(\theta)$, $dx = \frac{3}{2} \cos(\theta) \, d\theta$.

$$
\begin{align*}
\int \frac{1}{\frac{3}{2} \sin(\theta) \cdot \sqrt{9 - 4 \left(\frac{3}{2} \sin(\theta)\right)^2}} \cdot \frac{3}{2} \cos(\theta) \, d\theta &= \int \frac{1}{\frac{3}{2} \sin(\theta) \cdot \sqrt{9 - 4\left( \frac{3}{2} \sin^2(\theta) \right)^{2}}} \cdot \frac{3}{2} \cos(\theta) \, d\theta \\
&= \int \frac{\cos(\theta) \, d\theta}{\sin(\theta) \sqrt{9 - 9\sin^{2}(\theta)}} \\
&= \frac{1}{3} \int \frac{\cos(\theta) \, d\theta}{\sin(\theta)\cos(\theta)} \\
&= \frac{1}{3} \int \csc(\theta) \, d\theta \\
&= \frac{1}{3} \ln|\cot(\theta) + \csc(\theta)| + C \\
&= \frac{1}{3} | \frac{\sqrt{9-4x^{2}}}{2x} + \frac{3}{2x} | + C
\end{align*}
$$

*Problem 60:* Evaluate the indefinite integral using a trigonometric substitution and a triangle to express the answer in terms of $x$.

$$
\int \frac{1}{x^2 \sqrt{4 - x^2}} \, dx
$$

Substitution: $x = 2 \sin(\theta)$, $dx = 2 \cos(\theta) \, d\theta$.

$$
\begin{align*}
\int \frac{1}{4 \sin^2(\theta) \cdot \sqrt{4 - 4 \sin^2(\theta)}} \cdot 2 \cos(\theta) \, d\theta &= \int \frac{1}{4 \sin^2(\theta) \cdot 2 \cos(\theta)} \cdot 2 \cos(\theta) \, d\theta \\
&= \int \frac{1}{4 \sin^2(\theta) \cdot 2 \cos(\theta)} \cdot 2 \cos(\theta) \, d\theta \\
&= \int \frac{1}{4 \sin^2(\theta)} \, d\theta \\
&= \frac{1}{4} \int \csc^2(\theta) \, d\theta \\
&= -\frac{1}{4} \cot(\theta) + C \\
&= -\frac{1}{4} \cdot \frac{\sqrt{4 - x^2}}{x} + C \\
&= -\frac{\sqrt{4 - x^2}}{4x} + C
\end{align*}
$$

*Problem 62:* Evaluate the indefinite integral using a trigonometric substitution and a triangle to express the answer in terms of $x$.

$$
\int \frac{1}{(16 - x^2)^{3/2}} \, dx
$$

Substitution: $x = 4 \sin(\theta)$, $dx = 4 \cos(\theta) \, d\theta$.

$$
\begin{align*} \int \frac{1}{(16 - x^2)^{3/2}} \, dx &= \int \frac{1}{(16 \cos^2(\theta))^{3/2}} \cdot 4 \cos(\theta) \, d\theta \\ &= \int \frac{1}{16^{3/2} \cos^3(\theta)} \cdot 4 \cos(\theta) \, d\theta \\ &= \int \frac{4 \cos(\theta)}{64 \cos^3(\theta)} \, d\theta \\ &= \frac{1}{16} \int \frac{1}{\cos^2(\theta)} \, d\theta \\ &= \frac{1}{16} \int \sec^2(\theta) \, d\theta \\ &= \frac{1}{16} \tan(\theta) + C \\ &= \frac{1}{16} \cdot \frac{x}{\sqrt{16 - x^2}} + C \\ &= \frac{x}{16 \sqrt{16 - x^2}} + C \end{align*} 
$$