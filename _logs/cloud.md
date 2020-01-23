# cloud

## tools

Docker Engine

[nomad](https://www.nomadproject.io/intro/index.html)
  - workload orchestrator

[Mesos](https://people.eecs.berkeley.edu/~alig/papers/mesos.pdf)
Kubenetes
YARN

kubevirt
[libvirt](https://libvirt.org/docs.html)

swarm

redis cluster
  - redis pipeline

anna

[ceph](https://mp.weixin.qq.com/s/irLr3rRglZl4ewaOwDgr9Q)

openresty/nginx

gvisor
  - user-space kernel for containers
  - runsc

[OCI](https://github.com/opencontainers/runtime-spec)
  - runtime-spec
  - image-spec


[prometheus](https://prometheus.io/)

[istio](https://github.com/istio/istio)
[linkerd](https://linkerd.io/)

Gofer
- file proxy

[netstack](https://github.com/google/netstack)

[moby project](https://github.com/moby/moby)
  - containerd
  - runc
  - infrakit

runtime:
  cri-o
  rktnetes
  containerd
  docker-shim

Rkt

etcd

capos

titus

BoltDB
Badger
LevelDB
etcd


kubelet

fluentd
logstash

Container Networking Interface (CNI)

[kata container](https://katacontainers.io/)

## workflow

https://airflow.apache.org/start.html

## orgs

moby project

[CNCF](https://www.cncf.io/)

[pipework](https://github.com/jpetazzo/pipework)
  - sdn toolkit

[k3s](https://github.com/rancher/k3s)

## dataset

## algo

> CAP v2: In a distributed system (a collection of **interconnected nodes that share data**.), you can only have two out of the following three guarantees across a **write/read pair**: Consistency, Availability, and Partition Tolerance - one of them must be sacrificed.

  Consistency: A read is guaranteed to return the most recent write for a given client.
  Availability: A non-failing node will return a reasonable response within a reasonable amount of time (no error or timeout).
  Partition Tolerance: The system will continue to function when network partitions occur.


> raft, etcd
  - write ahead log
  - lead

pasos

b+ tree

lsm tree

## toolchains

[GCP tools](https://github.com/GoogleCloudPlatform/professional-services)

## docker

https://github.com/Yelp/dumb-init

## kafka

[codebase](https://github.com/apache/kafka/tree/trunk/core/src/main/scala/kafka)

one-liner: more-than-once commit, written in scala, batching messages with logical offset, log segment file, 1 partition to 1 consumer, system page cache(no in memory cache), broker, zookeeper instead of master node, rebalance process, client handle duplicate, CRC message, monitoring events, avro protocol

activeMQ, rabbitMQ, zeroMQ, JMS spec

## Spark SQL

one-liner: R dataframe like api, Catalyst as query optimizer, nested data model based on Hive, analyze logical plan eagerly, evaluate RDD lazily. Internally, it create a logical data scan operator points to RDD. columnar compression: dict encoding, run-length encoding.

logical optimizer: constant folding, predicate pushdown, projection pruning, null propagation, boolean expr simplification.

physical planning: pipeline projection

codegen: scala quasiquote, AST to code

user-define-types for ML

## dataflow stream model

Millwheel watermark, lower bound(heuristically) on event times processed by the pipeline



## Kubenetes

> Kubenetes in action

> https://google.qwiklabs.com/focuses/878?locale=en&parent=catalog&qlcampaign=77-18-gcpd-236&utm_source=gcp&utm_campaign=kubernetes&utm_medium=documentation

> [function as a service](https://github.com/openfaas/faas)

