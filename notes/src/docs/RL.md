# Reinforcement Learning

## randomization

https://iosband.github.io/research.html

# MDP

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

envs
  OpenAI Gym
  Arcade Learning Environment(https://github.com/mgbellemare/Arcade-Learning-Environment)
  Roboschool(https://github.com/openai/roboschool)
  [DeepMind Lab](https://github.com/deepmind/lab)
  [DeepMind Control Suite](https://github.com/deepmind/dm_control)
  [ELF](https://github.com/facebookresearch/ELF)

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
