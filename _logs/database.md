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


## mysql

[removing-mysql-support](https://about.gitlab.com/2019/06/27/removing-mysql-support/)
  We can't support nested groups with MySQL in a performant way
  We have to use hacks to increase limits on columns and this can lead to MySQL refusing to store data
  MySQL can't add TEXT type column without length specified
  MySQL doesn't support partial indexes
  These limitations have already created a number of places where MySQL was already not supported (including with Geo)

## postgreSQL

LATERAL JOIN

## Misc

- GTID
- semi-sync
- database per user
- circular replication