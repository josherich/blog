## tips

- `IS NOT`, `IS` is only for boolean

## implementing <> ALL (!= ALL)

$$ {(a, b) \in R \vert \forall{z}\lbrack (a,z) \in S \rightarrow z \neq b \rbrack } $$

apply $ a \rightarrow b \Longrightarrow \neg a \lor \b $, we have

$$ {(a, b) \in R \vert \forall{z} \lbrack (a,z) \nin S \lor z \neq b \rbrack } $$

apply $\forall{z}A \rightarrow \neg \exists{z} \neg{A}$, we have

$$ {(a, b) \in R \vert \neg exists{z} \lbrack (a,z) \in S \land z \eq b \rbrack } $$

is equivalent to:

$$ {(a, b) \in R \vert (a,b) \nin S } $$

## on SQL

> much of the success of the computer industry depends on developing a class of users other than trained computer scientists. - Donald D. Chamberlin; Raymond F. Boyce[^1]


1. [sequel-1974](http://www.almaden.ibm.com/cs/people/chamberlin/sequel-1974.pdf)
