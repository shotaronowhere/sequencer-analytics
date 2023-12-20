import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  InvalidateKeyset as InvalidateKeysetEvent,
  OwnerFunctionCalled as OwnerFunctionCalledEvent,
  SequencerBatchDelivered as SequencerBatchDeliveredEvent,
  SetValidKeyset as SetValidKeysetEvent
} from "../generated/SequencerInboxImpl/SequencerInboxImpl"
import {
  InvalidateKeyset,
  OwnerFunctionCalled,
  SequencerBatchDelivered,
  SetValidKeyset,
  MessageDelivered,
  GlobalStat,
  HourlyStat,
  BatchReport,
  BatchReportSequenced
} from "../generated/schema"

export function handleInvalidateKeyset(event: InvalidateKeysetEvent): void {
  let entity = new InvalidateKeyset(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.keysetHash = event.params.keysetHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerFunctionCalled(
  event: OwnerFunctionCalledEvent
): void {
  let entity = new OwnerFunctionCalled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.SequencerInboxImpl_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSequencerBatchDelivered(
  event: SequencerBatchDeliveredEvent
): void {
  let hourlyStat = HourlyStat.load((event.block.timestamp.div(BigInt.fromI32(3600))).toHexString())
  if (hourlyStat == null) {
    hourlyStat = new HourlyStat((event.block.timestamp.div(BigInt.fromI32(3600))).toHexString())
    hourlyStat.U_NoDelay_Avg = BigInt.fromI32(0)
    hourlyStat.U_NoDelay_Count = BigInt.fromI32(0)
    hourlyStat.U_NoDelay_Sum = BigInt.fromI32(0)
    hourlyStat.batchPostCount = BigInt.fromI32(0)
    hourlyStat.timestamp = event.block.timestamp.div(BigInt.fromI32(3600))
  }

  hourlyStat.batchPostCount = hourlyStat.batchPostCount.plus(BigInt.fromI32(1))
  hourlyStat.save()

  let stats = GlobalStat.load("stats")
  if (stats == null) {
    stats = new GlobalStat("stats")
    stats.U_NoDelay_Avg = BigInt.fromI32(0)
    stats.U_NoDelay_Count = BigInt.fromI32(0)
    stats.U_NoDelay_Sum = BigInt.fromI32(0)
    stats.batchPostCount = BigInt.fromI32(0)
  }

  stats.batchPostCount = stats.batchPostCount.plus(BigInt.fromI32(1))
  stats.save()

  let entity = new SequencerBatchDelivered(
    event.params.batchSequenceNumber.toHexString()
  )
  entity.batchSequenceNumber = event.params.batchSequenceNumber
  entity.beforeAcc = event.params.beforeAcc
  entity.afterAcc = event.params.afterAcc
  entity.delayedAcc = event.params.delayedAcc
  entity.afterDelayedMessagesRead = event.params.afterDelayedMessagesRead
  entity.timeBounds_minTimestamp = event.params.timeBounds.minTimestamp
  entity.timeBounds_maxTimestamp = event.params.timeBounds.maxTimestamp
  entity.timeBounds_minBlockNumber = event.params.timeBounds.minBlockNumber
  entity.timeBounds_maxBlockNumber = event.params.timeBounds.maxBlockNumber
  entity.dataLocation = event.params.dataLocation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  const D = BigInt.fromU64(60*60*4) // 1 hr
  const R_inv = BigInt.fromU64(12) // 1/12 

  let prevBatch = SequencerBatchDelivered.load(event.params.batchSequenceNumber.minus(BigInt.fromI32(1)).toHexString())
  if (event.params.batchSequenceNumber.equals(BigInt.fromI32(0))) {
    entity.B = BigInt.fromI32(86400*2) // 48 hours
    entity.E = BigInt.fromI32(0)
    if (entity.afterDelayedMessagesRead.gt(BigInt.fromI32(0))){
      
      let Tr = event.block.timestamp;
      let Nr = MessageDelivered.load(event.params.afterDelayedMessagesRead.toHexString())
      if (Nr != null) {
        Tr = Nr.blockTimestamp
      } else {
        // all delayed messages are sequenced
      }

      let Nf = MessageDelivered.load(BigInt.fromI32(0).toHexString())
      if (Nf == null) {
        log.error("MessageDelivered entity not found for delayed msg num {}", [BigInt.fromI32(0).toHexString()])
        return
      }
    
      const Tf = Nf.blockTimestamp
      const E = Tr.minus(Tf)

      entity.Tf = Tf
      entity.Tr = Tr
      entity.E = E
      const U = event.block.timestamp.gt(Tf.plus(D)) ? event.block.timestamp.minus(Tf.plus(D)) : BigInt.fromI32(0)
      entity.U = U
      const U_NoDelay = event.block.timestamp.minus(Tf)
      entity.U_NoDelay = U_NoDelay
      let B_update = entity.B.plus(E.div(R_inv)).minus( E.gt(U) ? U : E)
      // saturate
      B_update = B_update.gt(BigInt.fromU32(0)) ? B_update : BigInt.fromU32(0)
      B_update = B_update.gt(BigInt.fromI32(86400*2)) ? BigInt.fromI32(86400*2) : B_update
      entity.B = B_update

      stats.U_NoDelay_Count = stats.U_NoDelay_Count.plus(BigInt.fromI32(1))
      stats.U_NoDelay_Sum = stats.U_NoDelay_Sum.plus(U_NoDelay)
      stats.U_NoDelay_Avg = stats.U_NoDelay_Sum.div(stats.U_NoDelay_Count)
      stats.save()

      hourlyStat.U_NoDelay_Count = hourlyStat.U_NoDelay_Count.plus(BigInt.fromI32(1))
      hourlyStat.U_NoDelay_Sum = hourlyStat.U_NoDelay_Sum.plus(U_NoDelay)
      hourlyStat.U_NoDelay_Avg = hourlyStat.U_NoDelay_Sum.div(hourlyStat.U_NoDelay_Count)
      hourlyStat.save()
    }
    entity.save()
  } else {
    if (prevBatch == null) {
      log.error("SequencerBatchDelivered entity not found for batchSequenceNumber {}", [event.params.batchSequenceNumber.minus(BigInt.fromI32(1)).toHexString()])
      return
    } 

    if (entity.afterDelayedMessagesRead.gt(prevBatch.afterDelayedMessagesRead)){
  
      let batchReport = BatchReport.load(prevBatch.afterDelayedMessagesRead.toHexString())
      if (batchReport == null) {
        log.info("batchReport entity not found for delayed msg num {}", [prevBatch.afterDelayedMessagesRead.toHexString()])
      } else { // batch report
          let batchReportSequenced = new BatchReportSequenced(prevBatch.afterDelayedMessagesRead.toHexString())
          batchReportSequenced.batchNum = event.params.batchSequenceNumber
          let msgDelivered = MessageDelivered.load(batchReport.messageDelivered)
          if (msgDelivered != null) {
            batchReportSequenced.delay = event.block.timestamp.minus(msgDelivered.blockTimestamp)
          }
          batchReportSequenced.batchReport = prevBatch.afterDelayedMessagesRead.toHexString()
          batchReportSequenced.save()
      } 

      let Tr = event.block.timestamp;
      let Nr = MessageDelivered.load(event.params.afterDelayedMessagesRead.toHexString())
      if (Nr != null) {
        Tr = Nr.blockTimestamp
      } else {
        // all delayed messages are sequenced
      }

      let Nf = MessageDelivered.load(prevBatch.afterDelayedMessagesRead.toHexString())
      if (Nf == null) {
        log.error("MessageDelivered entity not found for delayed msg num {}", [prevBatch.afterDelayedMessagesRead.toHexString()])
        return
      }
    
      const Tf = Nf.blockTimestamp
      const E = Tr.minus(Tf)

      entity.Tf = Tf
      entity.Tr = Tr
      entity.E = E
      const D = BigInt.fromU64(60*60*3) // 3 hr
      const R_inv = BigInt.fromU64(12) // 1/12 
      const U = event.block.timestamp.gt(Tf.plus(D)) ? event.block.timestamp.minus(Tf.plus(D)) : BigInt.fromI32(0)
      entity.U = U
      const U_NoDelay = event.block.timestamp.minus(Tf)
      entity.U_NoDelay = U_NoDelay
      
      let B_update = prevBatch.B.plus(E.div(R_inv)).minus( E.gt(U) ? U : E)
      // saturate
      B_update = B_update.gt(BigInt.fromU32(0)) ? B_update : BigInt.fromU32(0)
      B_update = B_update.gt(BigInt.fromI32(86400*2)) ? BigInt.fromI32(86400*2) : B_update
      entity.B = B_update
    
      entity.save()

      stats.U_NoDelay_Count = stats.U_NoDelay_Count.plus(BigInt.fromI32(1))
      stats.U_NoDelay_Sum = stats.U_NoDelay_Sum.plus(U_NoDelay)
      stats.U_NoDelay_Avg = stats.U_NoDelay_Sum.div(stats.U_NoDelay_Count)
      stats.save()

      hourlyStat.U_NoDelay_Count = hourlyStat.U_NoDelay_Count.plus(BigInt.fromI32(1))
      hourlyStat.U_NoDelay_Sum = hourlyStat.U_NoDelay_Sum.plus(U_NoDelay)
      hourlyStat.U_NoDelay_Avg = hourlyStat.U_NoDelay_Sum.div(hourlyStat.U_NoDelay_Count)
      hourlyStat.save()
    } else {
      entity.B = prevBatch.B
      entity.E = BigInt.fromI32(0)
      entity.save()
    }
  }
}

export function handleSetValidKeyset(event: SetValidKeysetEvent): void {
  let entity = new SetValidKeyset(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.keysetHash = event.params.keysetHash
  entity.keysetBytes = event.params.keysetBytes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
