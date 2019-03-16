### matrix exp, e^A

taylor expansion, well defined

can directly write ODE solution: 

dx/dt = Ax

x = exp(tA)x_0

if A is diagonalizable, A = PvP^-1, v is diagonal matrix

exp(A) = P exp(v) P^-1

inverse is exp(-A)


### Matrix hermitian

### Singular Matrix

A square matrix that is not invertible is called singular or degenerate. A square matrix is singular if and only if its determinant is 0.

### optimal transfer

### Topology of tanh Layers

transformations don’t affect topology, are called homeomorphisms

tanh (and sigmoid and softplus but not ReLU) are continuous functions with continuous inverses


## Numerical Methods

Qs:

how stiff

how many vars

how accrate

how sensitive(chaos)

how well-behaved is f(x,t)

how costly is f(x,t) and its jacobian

implicit, 

more stable, solving stiff problems requires implicit methods

Euler's method

trapezoidal

Newton-Raphson

stability criterion

x'(t) = a x(t)

forward euler is conditionally stable

backward euler is unconditionally stable

truncation error

Runge-Kutta methods

stage order

Multi-step methods

predictor-corrector method

richardson extrapolation

automatic selection

[Automatic Selection of Methods for Solving Stiff and Nonstiff Systems of Ordinary Differential Equations | SIAM Journal on Scientific and Statistical Computing | Vol. 4, No. 1 | Society for Industrial and Applied Mathematics](https://epubs.siam.org/doi/pdf/10.1137/0904010?casa_token=sBjDZTSayFQAAAAA:XhlfyWkS4MRFNRnrZ6LmQff_UXAH7riLBkpcA58llDnYEJycmMMbMCli9cFkoYKRT7uNos94IpA)

instability

zero stability

### absolute stability for a method

Re(lambda) < 0, x'(t) = lambda x(t) numerical solution decays to 0

region of absolute stability z = \lambda \delta t

all scaled eigenvalues of Jacobian should be in region, for ODE system

### A-stable

stability region contains the entire lefthalf plane

backward euler, implicit midpoint

no explicit one-step method can be A-stable

All explicit RK methods with r stages and of order r have the same stability region

### L-stable

if it is A-stable and it damps fast componentsof the solution

### stiffness

A stiff problem is one where ∆t has to be small even though the solution is smooth and a large ∆t is OK for accuracy

### ODE stiffness

if the solution evolves on widely-separated timescales and the fast time scale decays (dies out) quickly

given linear ODE system, x'(t) = A x(t), decompose A to separate parts, x is formed by uncoupled n different y variables, each of n ODEs(y) is independent of the others

timestep of original system must be smaller than the smallest stability limits

the system is stiff if a strong separation of stability time scale (eigenvalue ratio)

Jacobian for non-linear system, complex eigenvalues

adjoint method

auto diff