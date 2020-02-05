class Master {
  sendTask() {}
  // softstate
  // new elected master can completely reconstruct from slaves
}
class StandbyMaster extends Master {

}

class Slave {

}



class Executor {
  sendStatus(taskId, status)

  lauchTask(taskDiscriptor)
  killTask(taskId)
}

class HadoopExecutor {

}

class MPIExecutor {

}



class Framework {
  // elastic: Hadoop, Hydrad  
  // rigid: MPI
  accept() {}
  reject() {}
}


class Task {

}

class ConstantTask {

}

class ExponentialTask {

}

class Scheduler {
  // callbacks
  resourceOffer(offerId, offers)
  offerRescinded(offerId)
  statusUpdate(taskId, status)
  slaveLost(slaveId)

  // actions
  replyToOffer(offerId, tasks)
  setNeedsOffer(bool)
  setFilters(filters)
  getGuaranteedShare()
  killTask(taskId)
}

class HadoopScheduler {

}

class MPIScheduler {

}


class Metrics {
  frameworkRampupTime() {}
  jobCompletionTime() {}
  systemUtilization() {}
}

class MTTR {}

enum jobType {
  selection = 1,
  textSearch,
  aggregation,
  join
}

class ZooKeeperQuorum {}