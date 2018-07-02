# interrupt

## interrupt vector

- contains the addresses of all the service routines

- asynchronous :Triggered by an event from a “device”

### program status word

- condition code bits set by comparion instructions

- CPU priority

- mode, user/kernel

# trap

Synchronous: triggered by “trap instruction” for syscall

Side-effect of executing a trap in userspace is that an “exception” is raised and program execution continues at a prescribed instruction in the kernel

# exception

Synchronous: triggered by a “fault condition” of an instruction condition

# Process

- process is active entity, program is passive entity

include

- address space

- process table entries, state, registers. open files, threads state, resources.

> parts

- text section, program code

- program counter, processor registers

- stack: function parameters, return addresses, local variables

- data section, global variables

- heap: memory dynamically allocated

## address space

- address virtualization

- protect private sections

- readonly, readwrite, execute

## process control block

> save and load PCB when interrupt or system call

- process state(running, waiting)

- program counter(location of next instruction)

- CPU registers

- CPU scheduling information, priorities, scheduling queue pointers

- memory allocated

- CPU used, clock time, time limites

- IO devices, open files

## process struct

```

pid t_pid; /* process identifier */
long state; /* state of the process */
unsigned int time_slice /* scheduling information */ 
struct task_struct *parent; /* this process’s parent */ 
struct list_head children; /* this process’s children */ 
struct files_struct *files; /* list of open files */ 
struct mm_struct *mm; /* address space of this process */

```

## process scheduling

- job queue, all processes

- ready queue, residing in main memory, ready to execute

- device queue, waiting for IO

> CPU bound, IO bound

- short-term scheduler(CPU scheduler), milisec, what to exec next

- long-term scheduler(job scheduler), sec, what to put to ready queue

- medium-term scheduler, remove, store, recover, control degree of multiprogramming


## context switch

Process Control Block

## process creation

parent `fork()` children, and `exec()` children, wait till children's termination

- sharing options, share all, share subset, share none

- execution options, execute concurrently, or parent watis until children terminate

```

pid_t pid = fork();
if (pid == 0) {
  // child process
  execv(path, executablename);
} else if (pid > 0) {
  // parent process
  waitpid(pid, &status, option);
} else {
  // fork failed
}
```

## process termination

- ask os to delete itself by calling `exit()`

- return data from child to parent using `wait()`

- parent use `abort()` to terminate child

- cascade termination, child existence is dependent on parent

> zombie, if no parent waiting

> orphan, if parent terminate without calling wait()

## param passing

- pass to registers

- block(linux/solaris), save addresses in register

- stack, pushed by program, popped by OS

## system call

system calls are an extension of ABI(Application Binary Interface)

definition agreed upon by libc and kernel

implemented as assembler largely taking the arguments already in the right registers and [TRAP](#trap)-ing into the kernel

and run a peice of assembler code:
- check the syscall number is in range

- change stack to kernel

- arguments already in place

- call to syscall_table[registers.syscall_number]

- switch back from kernel stack to user stack and [RFI]()

The compiler associates the syscall number with the kernel internal function

## system call list

- file management

create file, delete file

open, close

read, write, reposition

get, set file attributes

- device management

request, release device

read, write, reposition

get, set device attributes

attach, detach devices

- info maintenance

get, set time or date

get, set system data

get, set process, file, device attributes

- communications

crate, delete communication connection

send, receive messages, to host name, or process name, from client to server

create, gain access to memory regions

transfer status info

attach and detach remote devices

- protection

control access

get, set permissions

allow, deny user access

![system calls](./images/syscall.png)

## system programs

- file management

create, delete, copy, rename, print, dump, list

- status info

data, time, memory space, disk space, number of users

performance, logging, debugging

format and print to terminals

registry - store and retrive configuration info

- file modification

create, modify, search content, transform text

- programming-language support

compilers, assemblers, debuggers, interpreters

- program loading and execution

absolute loaders, relocatable loaders, linkage editors, overlay loaders, debugging systems

- comminicatiosn

create virtual connection among processes, users, computer systems.
absolute loaders

- background service

launch at boot time, disk checking, process scheduling, error logging, printing

subsystems, daemons

## process states

new, running, waiting, ready, terminated

---

# process scheduling

## short-term scheduler

- ready

- running

- waiting

- terminate

> running to wait, terminate are non-preemptive, all others are preemptive, caused by access to shared data, preemption in kernel mode, interrupt during crucial os activities.

## dispatcher

give control of CPU to the process selected by scheduler

- context switch

- switch to user mode

- jmp to the location

> dispatch lantency: $t_{start new proc} - t_{stop one proc}$
= confict phase(real-time CPU scheduling) + dispatch phase

### conflict phase

- preempt process running in kernel mode

- release resources needed by high prio processes

## scheduler metric

- CPU utilization

- throughtput

- turnaround time, amount of time to execute a particular process

- waiting time

- response time

### convoy effect

short process behind long process

## priority scheduling

use aging(increase prio as time progresses) to solve starvation(low prio never get served)


## round robin with quantum

80% of CPU bursts should be shorter than q

## multilevel queue

scheduling between queues

- fixed prio, serve all from foreground and then background

- time slice, 80% to fg, 20% to bg

implement aging, move between queues


## thread scheduling


process-contention scope

system-contention scope

linux macos only allow pthread_scope_system

## multi processor scheudling

- homogeneous

- asymmetric, only one processor access the data structures

- symmetric(SMP), most common; each has self-sheduling, ready queue in common, or each has its own

> processor affinity, due to memory locality, process are close to certain processor.

> might need move process across processors, either 
  - push, periodic task check load on processors, and move task across CPUs
  - pull, idle processors pulls waiting task fro busy one

## real time scheduling

- soft real time

- hard real time

### Rate Montonic Scheduling

prio assigned based on inverse of period

### earliest deadline first(EDF)

prio assigned based on deadline

### proportional share scheduling

## little's formula

in steady state, processes leaving queue must equal processes arriving

$$ n = \lambda \mathbf W $$

n: average queue length

W: average waiting time in queue

$\lambda$: average arrival rate into queue


---

# Thread

- processes are resource containers

- threads are unit of execution in a process

- threads share code, data, files

- threads has own registers, stacks

## Amdahl’s Law

$$ speedup \leq \frac{1}{S + \frac{1-S}{N}} $$

S: serial portion (parallel or serial)

N: processing cores

N goes to infinite, speedup approaches to $\frac{1}{S}$

## thread mapping

- many to one

- one to one
  - linux, window, solaris

- many to many
  - windows ThreadFiber


## pthread

- either user or kernel level

- POSIX standard IEEE 1003.1c

- include <pthread.h>
  - `void *runner(void *param)`
  - `pthread_t tid;`
  - `pthread_attr_t attr;`
  - `pthread_exit(0);`

- thread local storage

## implicit threads

- thread pools
  - create new is slow
  - size bounded
  - seperation of tasks

- OpenMP
  - `#pragma omp parallel for`

- GCD
  - block `^{}`
  - serial(main queue) and concurrent(priority low, default, high)
  - `dispatch_queue_t queue = dispatch_get_global_queue(prio_default, 0);`
  - `dispatch_async(queue, ^{});`

## Thread cancellation

- async cancel, terminate immediately

- deferred cancel, allow thread periodically check if itself should be cancelled

- cancel state either disabled or enabled, cancel default mode is deferred

- cancellation is a signal

- `pthread_testcancel()`

- cleanup handler

```
pthread_t tid;

pthread_create(&tid, 0, worker, NULL);

pthread_cancel(tid);
```


---

# IPC

- shared memory

- message passing

## Posix IPC

1. create shared memory segment

```
char * name = "this class sucks";
int shm_fd = shm_open(name, O_CREAT | O_RDWR, 0666);
```

2. open an existing memory segment to share it

3. set the size of object
```
ftruncate(shm fd, 4096)
```

4. map into address space(find free unused area)
```
char * shared_addr = mmap(NULL, 4096, PROT_READ | PROT_WRITE, MAP_SHARED, shm_fd, 0);
```

5. process write to the shared memory
```
sprintf(shared_addr, "writing to the shared memory");
```

## sockets

- Special IP address 127.0.0.1 (loopback) to refer to system on which process is running

- tcp socket, udp socket, multicast socket in Java

# RPC

- stubs

- marshalls

- RPCGen

- matchmaker

# pipes

- ordinary pipes
only access to parent-child relationship, unidirectional

- named pipes
all access, bidirectional, used for several processes

provide buffer, block, unblock producers and consumers

4kb guaranteed to be atomic

64kb

scheduling, blocking, resource management.

# process syncronization

## Critical section problem
```
do {
  entry section

    critical section

  exit sectionm

  remainder section

} while(true)

```

1. mutual exclusion

2. progress

3. bounded waiting

### Peterson's solution

load and store are atomic

turn indicates whose turn

flag indicates if ready to enter critical section

```
do {
  flag[i] = true;
  turn = j;
  while (flag[j] && turn == j);

    critical section

  flag[i] = false;

    remainder section

} while (true);
```

## locks

- test and set
```
function test_and_set(boolean * target) {
  boolean rv = *target;
  target = true;
  return rv;
}

do {
  while (test_and_set(&block));
    critical section
  lock = false;
    remainder section
} while(true);

```

- compare and swap
```
int compare_and_swap(int *value, int expected, int new_value) {
  int temp = *value;
  if (*value == expected)
    *value = new_value;
  return temp;
}

do {
  while(compare_and_swap(&lock, 0, 1) != 0);
    critical section
  lock = 0;
    remainder section
} while(true);

```

## bounded waiting mutual exclusion

```
do {
  waiting[i] = true;
  key = true;
  while (waiting[i] && key)
    key = test_and_set(&lock);

  waiting[i] = false;
    /* critical section */
  j = (i + 1) % n;
  while ((j != i) && !waiting[j])
    j = (j + 1) % n;

  if (j == i)
    lock = false;
  else
    waiting[j] = false;
     /* remainder section */
} while (true);
```

## mutex

- acquire

- release

- both must be atomic

- require busy waiting

- thus call a spinlock

```
acquire() {
  while (!available);
    /* busy wait */
  available = false;
}
release() {
  available = true;
}

```

## semaphore

- wait, P()

- signal, V()

```
wait(S) {
  while (S <= 0);
  // busy wait
  S--;
}

signal(S) {
  S++;
}

```

- counting semaphore

- binary semaphore

> > **implementation with busy waiting**

- must guarantee no processes run wait or signal of one semaphore at the same time

- thus must be put in critical section, and we have busy waiting

- implementation code is short, so chance of busy waiting is rare.

> > **implementation without busy waiting**
```
typedef struct {
  int value;
  struct process *list;
} semaphore;
```

- block

place the process on the waiting queue

- wakeup

remove the process from the waiting queue, add to ready queue


## deadlock

two or more processes are waiting indefinitely for an event that can be caused by only one of the waiting processes

P_0|P_1
--|--
wait(S);|wait(Q);
wait(Q);|wait(S);
...|...
signal(S);|signal(Q);
signal(Q);|signal(S);

## starvation


A process may never be removed from the semaphore queue in which it is
suspended

### bounded buffer problem

n buffers

- semaphore mutex = 1

- semaphore full = 0

- semaphore empty = n

> > producer

```
do {
  // produce an item;
  wait(empty);
  wait(mutex);

  ...
  // add next produced to the buffer
  ...

  signal(mutex);
  signal(full);
} while(true);
```

> > consumer
```
do {
  wait(full);
  wait(mutex);

  ...
  // remove an item from buffer

  signal(mutex);
  signal(empty);

  // consumer the item
} while(true);
```

### reader-write problem

if a writer is in the critical section and n readers are waiting, then one reader is queued on rw mutex, and n − 1 readers are queued on mutex

- semaphore rw mutex = 1
- semaphore mutex = 1
- int read count = 0

> > writer
```
do {
  wait(rw mutex);
  ...
  /* writing is performed */
  ...
  signal(rw mutex);
} while (true);
```

> > producer
```
do {
  wait(mutex);
  read count++;

  if (read count == 1)
    wait(rw mutex);

  signal(mutex);
    ...
    /* reading is performed */
    ...
  wait(mutex);
  read count--;

  if (read count == 0)
    signal(rw mutex);

  signal(mutex);
} while (true);
```

### dining-philosophers problem

five chair, five single chopsticks

when think, does not interact with others, when hungry, pick two around him or her.

allocate several resources among several processes in a deadlock-free and starvation-free manner

> > soluttion with deadlock

```
do {
  wait(chopstick[i]);
  wait(chopstick[(i+1) % 5]);
    ...
    /* eat for awhile */
    ...
  signal(chopstick[i]);
  signal(chopstick[(i+1) % 5]);
    ...
    /* think for awhile */
    ...
} while (true);
```

> > solution with [monitors](#monitors) and [conditional variables](#conditional-variables)

```
monitor philosopher-dining-problem {
  enum {THINKING, HUNGRY, EATING} state[5];
  condition self[5];

  void pickup(int i) {
    state[i] = HUNGRY;
    test[i];
    if (state[i] != EATING) {
      self[i].wait();
    }
  }

  void putdown(int i) {
    state[i] = THINKING;
    test[i + 1];
    test[(i + 4) % 5];
  }

  void test(int i) {
    if (state[(i+1)%5] != EATING && state[(i+4)%5] != EATING && state[i] == HUNGRY) {
      state[i] = EATING;
      self[i].signal();
    }
  }

  initialization_code() {
    for(int i = 0; i < 5; i++) {
      state[i] = THINKING;
    }
  }

}

DiningPhilosophers.pickup(i);

... eat ...

DiningPhilosophers.putdown(i);

```

## monitors

- high-level abstraction

- internal vars only accessible by the code within the procedure

- only one process may be active within the monitor at a time

```
monitor name {
  procedure 1 {};
  procedure 2 {};
  initialize() {};
}
```

## monitors implementation

The signaling processes can use `next` to suspend themselves.
An integer variable `next_count` is also provided to count the number of processes suspended on `next`

> external function F
```
wait(mutex);
  ...
  body of F
  ...
if (next_count > 0)
  signal(next);
else
  signal(mutex);
```


> x.wait()
x_count, x_sem both init to 0
```
x_count++;

if (next_count > 0)
  signal(next);
else
  signal(mutex);

wait(x_sem);
x_count--;

```

> x.signal()
```
if (x_count > 0) {
  next_count++;
  signal(x_sem);
  wait(next); // signal and wait
  next_count--;
}
```

## condition variables

wait and signal between two processes

- x.wait()
  - the process invoking this operation is suspended until another process invokes signal

- x.signal()
  - resume one of the processes that invoked x.wait()
  - if no x.wait(), no effect on the variable.

The x.signal() operation resumes exactly one suspended process.

If no process is suspended, then the signal() operation has no effect

> > x.wait in Q, x.signal in P, P and Q cannot continue simultaneously, thus two options:

- P signal and P wait, until Q leaves the monitor, or for another condition

- P signal and P continue, Q wait until P leaves the monitor, or Q wait for another condition

## single resource
```
monitor ResourceAllocator
{
  boolean busy;
  condition x;
  void acquire(int time) {
    if (busy)
      x.wait(time);
    busy = TRUE;
  }
  void release() {
    busy = FALSE;
    x.signal();
  }

  initialization code() {
    busy = FALSE;
  }
}
```

## sync in linux

> Prior to kernel Version 2.6, disables interrupts to implement short critical sections

> On single-cpu system, spinlocks replaced by enabling and disabling kernel preemption

## Distributed

itrusion detection system
mimicking virtual machine
mariadb for transaction
postgre for spatial

plotly

coreos
ggn fleet etcd
go-nerve health-check
go-synapse