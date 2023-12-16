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
  MessageSequenced,
  MessageDelivered,
  GlobalStat
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

  if (event.params.batchSequenceNumber.equals(BigInt.fromI32(0))) {
    entity.B = BigInt.fromI32(86400*2) // 48 hours
  } else {
    let prevEntity = SequencerBatchDelivered.load(event.params.batchSequenceNumber.minus(BigInt.fromI32(1)).toHexString())
    if (prevEntity == null) {
      log.error("SequencerBatchDelivered entity not found for batchSequenceNumber {}", [event.params.batchSequenceNumber.minus(BigInt.fromI32(1)).toHexString()])
      entity.B = BigInt.fromI32(86400*2) // 48 hours
    } else {
      entity.B = prevEntity.B
    }
  }

  let Tr = event.block.timestamp;
  let msgSequencedEntityTr = MessageDelivered.load(event.params.afterDelayedMessagesRead.toHexString())
  if (msgSequencedEntityTr != null) {
    Tr = msgSequencedEntityTr.blockTimestamp
  } else {
    log.info("MessageSequenced entity not found for batchSequenceNumber {}", [event.params.afterDelayedMessagesRead.toHexString()])
  }

  let Tf = Tr;

  for(let i = event.params.afterDelayedMessagesRead.minus(BigInt.fromU32(1)); i.gt(BigInt.fromI32(-1)); i = i.minus(BigInt.fromU32(1))) {
    let msgSequencedEntity = MessageSequenced.load(i.toHexString())
    if (msgSequencedEntity == null) {
      msgSequencedEntity = new MessageSequenced(i.toHexString())
      msgSequencedEntity.blockNumber = event.block.number
      msgSequencedEntity.blockTimestamp = event.block.timestamp
      msgSequencedEntity.transactionHash = event.transaction.hash
      msgSequencedEntity.messageNum = i
      msgSequencedEntity.messageDelivered = i.toHexString()
      let msgDeliveredEntity = MessageDelivered.load(msgSequencedEntity.messageDelivered)
      if (msgDeliveredEntity == null){
        log.error("MessageDelivered entity not found for MessageSequenced entity {}", [msgSequencedEntity.messageDelivered])
        continue;
      } else {
        msgSequencedEntity.delayBlocks = event.block.number.minus(msgDeliveredEntity.blockNumber)
        msgSequencedEntity.delayTime = event.block.timestamp.minus(msgDeliveredEntity.blockTimestamp)
        msgSequencedEntity.save()
        Tf = msgDeliveredEntity.blockTimestamp
      }
    } else {
      break;
    }
  }
  entity.Tf = Tf
  entity.Tr = Tr
  entity.E = Tr.minus(Tf)
  const E = Tr.minus(Tf)
  const D = BigInt.fromU64(60*60*3) // 3 hr
  const R_inv = BigInt.fromU64(12) // 1/12 
  const U = event.block.timestamp.gt(Tf.plus(D)) ? event.block.timestamp.minus(Tf.plus(D)) : BigInt.fromI32(0)
  entity.U = U
  entity.U_NoDelay = event.block.timestamp.minus(Tf)
  let B_update = entity.B.plus(E.div(R_inv)).minus( E.gt(U) ? U : E)
  // saturate
  B_update = B_update.gt(BigInt.fromU32(0)) ? B_update : BigInt.fromU32(0)
  B_update = B_update.gt(BigInt.fromI32(86400*2)) ? BigInt.fromI32(86400*2) : B_update
  entity.B = B_update

  entity.save()

  let stats = GlobalStat.load("stats")
  if (stats == null) {
    stats = new GlobalStat("stats")
    stats.U_NoDelay_Avg = BigInt.fromI32(0)
    stats.U_NoDelay_Count = BigInt.fromI32(0)
    stats.U_NoDelay_Sum = BigInt.fromI32(0)
  }

  stats.U_NoDelay_Sum = stats.U_NoDelay_Sum.plus(entity.U_NoDelay)
  stats.U_NoDelay_Count = stats.U_NoDelay_Count.plus(BigInt.fromI32(1))
  stats.U_NoDelay_Avg = stats.U_NoDelay_Sum.div(stats.U_NoDelay_Count)
  stats.save()
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
