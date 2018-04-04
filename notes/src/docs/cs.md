# computation theory

## NP-hardness

> non-deterministic polynomial-time hardness

a problem H is NP-hard when every problem L in NP can be reduced in polynomial time to H; that is, assuming a solution for H takes 1 unit time, we can use H‎'s solution to solve L in polynomial time.

## P is not NP

> If P ≠ NP, then NP-hard problems cannot be solved in polynomial time.

![nphard](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/P_np_np-complete_np-hard.svg/800px-P_np_np-complete_np-hard.svg.png?1521031605731)

# fast algorithm

## N-body problem

### FFT

$\sim 5NlogN$
$$u_j = \sum_{k=1}^N e^{2\pi ijk/N}\omega_k$$

## FMM
- Laplace equation
- fast Gauss transform
- Helmholtz equation

### degenerate kernel