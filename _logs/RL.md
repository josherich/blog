# Reinforcement Learning

## post

https://distill.pub/2019/paths-perspective-on-value-learning/

## tools

[pyrobot](https://github.com/facebookresearch/pyrobot)

[Reproducible Low-Cost Arm Benchmark](https://sites.google.com/view/replab/), [report](https://arxiv.org/pdf/1905.07447.pdf)

[ALE](https://github.com/mgbellemare/Arcade-Learning-Environment)


## datasets


## workshops confs

http://spirl.info/2019/readings-compiled/

RSS 2019



## exploration

Montezuma's revenge and pitfall

> [Go explore](https://arxiv.org/pdf/1901.10995.pdf)
  - 1) remember states that havepreviously been visited
  - 2) first return to a promising state (without exploration),then explore from it
  - 3) solve simulated environments through exploiting any available means (including by introducing determinism), then robustify (create a policy that can reliably perform the solution) via imitation learning.

[critic]( https://www.alexirpan.com/2018/11/27/go-explore.html)



## Randomization(exploration, valueF)

https://iosband.github.io/research.html

## Initialization

[](https://arxiv.org/pdf/1703.02660.pdf) for the MuJoCo benchmarks, wider state initialization give you more gains than pretty much any change between RL algorithms and model architectures

## simulation

mujoco

https://www.panda3d.org/

http://bulletphysics.org/wordpress/

https://developer.nvidia.com/physx-sdk

http://www.ode.org/

http://gazebosim.org/

ODE and Gazebo have the contact support

## browser

[three.js stl loader](https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_stl.html)

## testing env

(openai gym)[]

[dm control](https://arxiv.org/pdf/1801.00690.pdf)

Arcade Learning Environment(https://github.com/mgbellemare/Arcade-Learning-Environment)

Roboschool(https://github.com/openai/roboschool)

[DeepMind Lab](https://github.com/deepmind/lab)

[ELF](https://github.com/facebookresearch/ELF)


## Model Based

> PE-TS

aleatoric (inherent system stochasticity)

epistemic (subjective uncertainty, due to limited data)

Gaussian process

  is a stochastic process (a collection of random variables indexed by time or space), such that every finite collection of those random variables has a multivariate normal distribution, i.e. every finite linear combination of them is normally distributed.

Ensembles of bootstrapped models

CEM: samples actions from a distribution closer to previous action samples that yielded high reward

Specifically, aleatoric state variance is the average variance of particles of same bootstrap,

whilst epistemic state variance is the variance of the average of particles of same bootstrap indexes.

## Residual physics

Residual policy learning

## Physics control

fully-actuated in state (q,q˙) at time t if it is able to command any instantaneous acceleration in q
underactuated in state (q,q˙) at time t if it is not able to command an arbitrary instantaneous acceleration in  q

## State abstraction

> semi-mdp(Sutton 1999)

> (option-critic)[https://arxiv.org/pdf/1609.05140.pdf]

## Distributed


## source of supervision

> demonstration

[back-play](https://arxiv.org/pdf/1807.06919.pdf)

require env to be inversible, arbitraily resetting env to any states. [some env](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/bb67802995f7af4c6ba948ede1acfc8756be7134.pdf) don't.

(Learning to Select and GeneralizeStriking Movements in Robot Table Tennis)[https://www.aaai.org/ocs/index.php/FSS/FSS12/paper/viewFile/5602/5884]

> language

(https://arxiv.org/pdf/1711.00482.pdf)[Learning with latent language]

> human preference


## Generalization

> Assessing Generalization in Deep Reinforcement Learning

variations in environment dynamics

HalfCheetah under varying joint frictions.

Each environment has three versions:
default; random; extreme

EPOpt trains an agent to be robust to environment variations by maximizing a risk-sensitive reward
RL2 aims to learn a policy that can adapt to the environment at hand using the observed trajectory

> A Dissection of Overfitting and Generalization inContinuous Reinforcement Learning

https://arxiv.org/pdf/1806.07937.pdf

how to define and diagnose overfitting inMDPs, and how to reduce risks by injecting sufficient training diversity

tasks that received observations from natural images and explore generalization in that setting as well

as soon as there is enough training data diversity in thesimulated environment, deep RL generalizes well

deepRL algorithms show more prominent overfitting when observing natural data.

Results suggest that explicitly learning the dynamics model compounds existing bias in the datain the limited training seed regime

a methodology for detecting overfitting

eval-uation metrics for within-task and out-of-task generalization, consider two mechanisms for injecting noise intothe domain

    - an expansion of the initial state distribution, which we implementby applying a multiplier to the initial state chosen.

    - Second, we evaluate policy robustness by adding Gaussian noise n ∼ N(0,σ2) directly to theobservation space

training random seeds

generalization error: empirical error difference between test and training

> https://arxiv.org/abs/1806.10729

procedural generation of video game levels during training to improve generalization to human-designed levels at test time

> safety in grid world

https://deepmind.com/blog/specifying-ai-safety-problems/

variations in environment dynamics

> https://www.alexirpan.com/2018/02/14/rl-hard.html

> https://www.alexirpan.com/2017/06/27/hyperparam-spectral.html

> compare gym and dm environment

- reward function design
- does model fit to reward function design?
- change component behavior
- hidden instability

# Underactuated Robotics

http://underactuated.csail.mit.edu/underactuated.html?chapter=intro

> Quantile Regression Q learning

https://arxiv.org/abs/1710.10044

https://mtomassoli.github.io/2017/12/08/distributional_rl/

quantile Q(s,a) to atoms = \sum p_i x_i

sample r, s' from replay buffer, then sample from r + \gamma Z(s', a_\star), quantile atoms to equidistant grids, compute cross-entropy loss

**unify cross-entropy and KL divergence:**

m is the prob of aligned atoms of $$ r + \gamma Z(x_{x+1}, a^{\star}) $$, and true prob $p(x_t, a_t; \theta)$ is aligned atoms of Z(x_t,a)

derivatives of KL(m | p_{\theta}) wrt. \theta is derivative of entropy H(m, p_{\theta}), which is the gradient of cross entropy loss function $\sum m_i \log p_i(x_t, a_t; \theta)$

> A Distributional Perspective on Reinforcement Learning

fixed quantile -> variable length gaps

slice to N equal mass, put atoms at median

Huber loss for computing quantile gradient

**Wasserstein metric**

$$\mathcal{W}_{p}(X,Y)=\left(\int_{0}^{1}\left|F_{X}^{-1}(u)-F_{Y}^{-1}(u)\right|^{p}du\right)^{1/p}$$

integrate discrepancy region, different between CDF

W distance is reduced when medians are aligned

why not simple regression:  the expectation of the quantiles are not the quantiles of the expectation


> tune net

tune the simulation physics from physics in real world

> human correction of pose keyframes

correction matrix to transform trajactories

> diligent robot
hospital service robot

## 3d pose, mesh, kinematic simulation

[deepmimic](https://github.com/xbpeng/DeepMimic)

## sample  efficiency

reward  shaping
behavioral cloning
reverse curriculum generation

## others

> sticky actions [section 5.2](https://arxiv.org/pdf/1709.06009.pdf)

> Deep Reinforcement Learning that Matters

> [motion plan and NN](https://arxiv.org/abs/1803.07635)