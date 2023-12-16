import {
  BridgeCallTriggered as BridgeCallTriggeredEvent,
  InboxToggle as InboxToggleEvent,
  MessageDelivered as MessageDeliveredEvent,
  OutboxToggle as OutboxToggleEvent,
  SequencerInboxUpdated as SequencerInboxUpdatedEvent
} from "../generated/BridgeImpl/BridgeImpl"
import {
  BridgeCallTriggered,
  InboxToggle,
  MessageDelivered,
  OutboxToggle,
  SequencerInboxUpdated
} from "../generated/schema"

export function handleBridgeCallTriggered(
  event: BridgeCallTriggeredEvent
): void {
  let entity = new BridgeCallTriggered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.outbox = event.params.outbox
  entity.to = event.params.to
  entity.value = event.params.value
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInboxToggle(event: InboxToggleEvent): void {
  let entity = new InboxToggle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.inbox = event.params.inbox
  entity.enabled = event.params.enabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMessageDelivered(event: MessageDeliveredEvent): void {
  let entity = new MessageDelivered(
    event.params.messageIndex.toHexString()
  )
  entity.messageIndex = event.params.messageIndex
  entity.beforeInboxAcc = event.params.beforeInboxAcc
  entity.inbox = event.params.inbox
  entity.kind = event.params.kind
  entity.sender = event.params.sender
  entity.messageDataHash = event.params.messageDataHash
  entity.baseFeeL1 = event.params.baseFeeL1
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOutboxToggle(event: OutboxToggleEvent): void {
  let entity = new OutboxToggle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.outbox = event.params.outbox
  entity.enabled = event.params.enabled

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSequencerInboxUpdated(
  event: SequencerInboxUpdatedEvent
): void {
  let entity = new SequencerInboxUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newSequencerInbox = event.params.newSequencerInbox

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
