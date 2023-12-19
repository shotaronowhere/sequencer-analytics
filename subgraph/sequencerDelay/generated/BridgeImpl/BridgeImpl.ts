// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BridgeCallTriggered extends ethereum.Event {
  get params(): BridgeCallTriggered__Params {
    return new BridgeCallTriggered__Params(this);
  }
}

export class BridgeCallTriggered__Params {
  _event: BridgeCallTriggered;

  constructor(event: BridgeCallTriggered) {
    this._event = event;
  }

  get outbox(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class InboxToggle extends ethereum.Event {
  get params(): InboxToggle__Params {
    return new InboxToggle__Params(this);
  }
}

export class InboxToggle__Params {
  _event: InboxToggle;

  constructor(event: InboxToggle) {
    this._event = event;
  }

  get inbox(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class MessageDelivered extends ethereum.Event {
  get params(): MessageDelivered__Params {
    return new MessageDelivered__Params(this);
  }
}

export class MessageDelivered__Params {
  _event: MessageDelivered;

  constructor(event: MessageDelivered) {
    this._event = event;
  }

  get messageIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get beforeInboxAcc(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get inbox(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get kind(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get sender(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get messageDataHash(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }

  get baseFeeL1(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get timestamp(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class OutboxToggle extends ethereum.Event {
  get params(): OutboxToggle__Params {
    return new OutboxToggle__Params(this);
  }
}

export class OutboxToggle__Params {
  _event: OutboxToggle;

  constructor(event: OutboxToggle) {
    this._event = event;
  }

  get outbox(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class SequencerInboxUpdated extends ethereum.Event {
  get params(): SequencerInboxUpdated__Params {
    return new SequencerInboxUpdated__Params(this);
  }
}

export class SequencerInboxUpdated__Params {
  _event: SequencerInboxUpdated;

  constructor(event: SequencerInboxUpdated) {
    this._event = event;
  }

  get newSequencerInbox(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class BridgeImpl__enqueueSequencerMessageResult {
  value0: BigInt;
  value1: Bytes;
  value2: Bytes;
  value3: Bytes;

  constructor(value0: BigInt, value1: Bytes, value2: Bytes, value3: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytes(this.value2));
    map.set("value3", ethereum.Value.fromFixedBytes(this.value3));
    return map;
  }

  getSeqMessageIndex(): BigInt {
    return this.value0;
  }

  getBeforeAcc(): Bytes {
    return this.value1;
  }

  getDelayedAcc(): Bytes {
    return this.value2;
  }

  getAcc(): Bytes {
    return this.value3;
  }
}

export class BridgeImpl__executeCallResult {
  value0: boolean;
  value1: Bytes;

  constructor(value0: boolean, value1: Bytes) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBytes(this.value1));
    return map;
  }

  getSuccess(): boolean {
    return this.value0;
  }

  getReturnData(): Bytes {
    return this.value1;
  }
}

export class BridgeImpl extends ethereum.SmartContract {
  static bind(address: Address): BridgeImpl {
    return new BridgeImpl("BridgeImpl", address);
  }

  activeOutbox(): Address {
    let result = super.call("activeOutbox", "activeOutbox():(address)", []);

    return result[0].toAddress();
  }

  try_activeOutbox(): ethereum.CallResult<Address> {
    let result = super.tryCall("activeOutbox", "activeOutbox():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allowedDelayedInboxList(param0: BigInt): Address {
    let result = super.call(
      "allowedDelayedInboxList",
      "allowedDelayedInboxList(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_allowedDelayedInboxList(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "allowedDelayedInboxList",
      "allowedDelayedInboxList(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allowedDelayedInboxes(inbox: Address): boolean {
    let result = super.call(
      "allowedDelayedInboxes",
      "allowedDelayedInboxes(address):(bool)",
      [ethereum.Value.fromAddress(inbox)]
    );

    return result[0].toBoolean();
  }

  try_allowedDelayedInboxes(inbox: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowedDelayedInboxes",
      "allowedDelayedInboxes(address):(bool)",
      [ethereum.Value.fromAddress(inbox)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  allowedOutboxList(param0: BigInt): Address {
    let result = super.call(
      "allowedOutboxList",
      "allowedOutboxList(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_allowedOutboxList(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "allowedOutboxList",
      "allowedOutboxList(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  allowedOutboxes(outbox: Address): boolean {
    let result = super.call(
      "allowedOutboxes",
      "allowedOutboxes(address):(bool)",
      [ethereum.Value.fromAddress(outbox)]
    );

    return result[0].toBoolean();
  }

  try_allowedOutboxes(outbox: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowedOutboxes",
      "allowedOutboxes(address):(bool)",
      [ethereum.Value.fromAddress(outbox)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  delayedInboxAccs(param0: BigInt): Bytes {
    let result = super.call(
      "delayedInboxAccs",
      "delayedInboxAccs(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBytes();
  }

  try_delayedInboxAccs(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "delayedInboxAccs",
      "delayedInboxAccs(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  delayedMessageCount(): BigInt {
    let result = super.call(
      "delayedMessageCount",
      "delayedMessageCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_delayedMessageCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "delayedMessageCount",
      "delayedMessageCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  enqueueSequencerMessage(
    dataHash: Bytes,
    afterDelayedMessagesRead: BigInt,
    prevMessageCount: BigInt,
    newMessageCount: BigInt
  ): BridgeImpl__enqueueSequencerMessageResult {
    let result = super.call(
      "enqueueSequencerMessage",
      "enqueueSequencerMessage(bytes32,uint256,uint256,uint256):(uint256,bytes32,bytes32,bytes32)",
      [
        ethereum.Value.fromFixedBytes(dataHash),
        ethereum.Value.fromUnsignedBigInt(afterDelayedMessagesRead),
        ethereum.Value.fromUnsignedBigInt(prevMessageCount),
        ethereum.Value.fromUnsignedBigInt(newMessageCount)
      ]
    );

    return new BridgeImpl__enqueueSequencerMessageResult(
      result[0].toBigInt(),
      result[1].toBytes(),
      result[2].toBytes(),
      result[3].toBytes()
    );
  }

  try_enqueueSequencerMessage(
    dataHash: Bytes,
    afterDelayedMessagesRead: BigInt,
    prevMessageCount: BigInt,
    newMessageCount: BigInt
  ): ethereum.CallResult<BridgeImpl__enqueueSequencerMessageResult> {
    let result = super.tryCall(
      "enqueueSequencerMessage",
      "enqueueSequencerMessage(bytes32,uint256,uint256,uint256):(uint256,bytes32,bytes32,bytes32)",
      [
        ethereum.Value.fromFixedBytes(dataHash),
        ethereum.Value.fromUnsignedBigInt(afterDelayedMessagesRead),
        ethereum.Value.fromUnsignedBigInt(prevMessageCount),
        ethereum.Value.fromUnsignedBigInt(newMessageCount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BridgeImpl__enqueueSequencerMessageResult(
        value[0].toBigInt(),
        value[1].toBytes(),
        value[2].toBytes(),
        value[3].toBytes()
      )
    );
  }

  executeCall(
    to: Address,
    value: BigInt,
    data: Bytes
  ): BridgeImpl__executeCallResult {
    let result = super.call(
      "executeCall",
      "executeCall(address,uint256,bytes):(bool,bytes)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );

    return new BridgeImpl__executeCallResult(
      result[0].toBoolean(),
      result[1].toBytes()
    );
  }

  try_executeCall(
    to: Address,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<BridgeImpl__executeCallResult> {
    let result = super.tryCall(
      "executeCall",
      "executeCall(address,uint256,bytes):(bool,bytes)",
      [
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new BridgeImpl__executeCallResult(
        value[0].toBoolean(),
        value[1].toBytes()
      )
    );
  }

  rollup(): Address {
    let result = super.call("rollup", "rollup():(address)", []);

    return result[0].toAddress();
  }

  try_rollup(): ethereum.CallResult<Address> {
    let result = super.tryCall("rollup", "rollup():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sequencerInbox(): Address {
    let result = super.call("sequencerInbox", "sequencerInbox():(address)", []);

    return result[0].toAddress();
  }

  try_sequencerInbox(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "sequencerInbox",
      "sequencerInbox():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sequencerInboxAccs(param0: BigInt): Bytes {
    let result = super.call(
      "sequencerInboxAccs",
      "sequencerInboxAccs(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBytes();
  }

  try_sequencerInboxAccs(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "sequencerInboxAccs",
      "sequencerInboxAccs(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  sequencerMessageCount(): BigInt {
    let result = super.call(
      "sequencerMessageCount",
      "sequencerMessageCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_sequencerMessageCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sequencerMessageCount",
      "sequencerMessageCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sequencerReportedSubMessageCount(): BigInt {
    let result = super.call(
      "sequencerReportedSubMessageCount",
      "sequencerReportedSubMessageCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_sequencerReportedSubMessageCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sequencerReportedSubMessageCount",
      "sequencerReportedSubMessageCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  submitBatchSpendingReport(sender: Address, messageDataHash: Bytes): BigInt {
    let result = super.call(
      "submitBatchSpendingReport",
      "submitBatchSpendingReport(address,bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromFixedBytes(messageDataHash)
      ]
    );

    return result[0].toBigInt();
  }

  try_submitBatchSpendingReport(
    sender: Address,
    messageDataHash: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "submitBatchSpendingReport",
      "submitBatchSpendingReport(address,bytes32):(uint256)",
      [
        ethereum.Value.fromAddress(sender),
        ethereum.Value.fromFixedBytes(messageDataHash)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AcceptFundsFromOldBridgeCall extends ethereum.Call {
  get inputs(): AcceptFundsFromOldBridgeCall__Inputs {
    return new AcceptFundsFromOldBridgeCall__Inputs(this);
  }

  get outputs(): AcceptFundsFromOldBridgeCall__Outputs {
    return new AcceptFundsFromOldBridgeCall__Outputs(this);
  }
}

export class AcceptFundsFromOldBridgeCall__Inputs {
  _call: AcceptFundsFromOldBridgeCall;

  constructor(call: AcceptFundsFromOldBridgeCall) {
    this._call = call;
  }
}

export class AcceptFundsFromOldBridgeCall__Outputs {
  _call: AcceptFundsFromOldBridgeCall;

  constructor(call: AcceptFundsFromOldBridgeCall) {
    this._call = call;
  }
}

export class EnqueueDelayedMessageCall extends ethereum.Call {
  get inputs(): EnqueueDelayedMessageCall__Inputs {
    return new EnqueueDelayedMessageCall__Inputs(this);
  }

  get outputs(): EnqueueDelayedMessageCall__Outputs {
    return new EnqueueDelayedMessageCall__Outputs(this);
  }
}

export class EnqueueDelayedMessageCall__Inputs {
  _call: EnqueueDelayedMessageCall;

  constructor(call: EnqueueDelayedMessageCall) {
    this._call = call;
  }

  get kind(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get sender(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get messageDataHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class EnqueueDelayedMessageCall__Outputs {
  _call: EnqueueDelayedMessageCall;

  constructor(call: EnqueueDelayedMessageCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class EnqueueSequencerMessageCall extends ethereum.Call {
  get inputs(): EnqueueSequencerMessageCall__Inputs {
    return new EnqueueSequencerMessageCall__Inputs(this);
  }

  get outputs(): EnqueueSequencerMessageCall__Outputs {
    return new EnqueueSequencerMessageCall__Outputs(this);
  }
}

export class EnqueueSequencerMessageCall__Inputs {
  _call: EnqueueSequencerMessageCall;

  constructor(call: EnqueueSequencerMessageCall) {
    this._call = call;
  }

  get dataHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get afterDelayedMessagesRead(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get prevMessageCount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get newMessageCount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class EnqueueSequencerMessageCall__Outputs {
  _call: EnqueueSequencerMessageCall;

  constructor(call: EnqueueSequencerMessageCall) {
    this._call = call;
  }

  get seqMessageIndex(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get beforeAcc(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }

  get delayedAcc(): Bytes {
    return this._call.outputValues[2].value.toBytes();
  }

  get acc(): Bytes {
    return this._call.outputValues[3].value.toBytes();
  }
}

export class ExecuteCallCall extends ethereum.Call {
  get inputs(): ExecuteCallCall__Inputs {
    return new ExecuteCallCall__Inputs(this);
  }

  get outputs(): ExecuteCallCall__Outputs {
    return new ExecuteCallCall__Outputs(this);
  }
}

export class ExecuteCallCall__Inputs {
  _call: ExecuteCallCall;

  constructor(call: ExecuteCallCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class ExecuteCallCall__Outputs {
  _call: ExecuteCallCall;

  constructor(call: ExecuteCallCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }

  get returnData(): Bytes {
    return this._call.outputValues[1].value.toBytes();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get rollup_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class SetDelayedInboxCall extends ethereum.Call {
  get inputs(): SetDelayedInboxCall__Inputs {
    return new SetDelayedInboxCall__Inputs(this);
  }

  get outputs(): SetDelayedInboxCall__Outputs {
    return new SetDelayedInboxCall__Outputs(this);
  }
}

export class SetDelayedInboxCall__Inputs {
  _call: SetDelayedInboxCall;

  constructor(call: SetDelayedInboxCall) {
    this._call = call;
  }

  get inbox(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetDelayedInboxCall__Outputs {
  _call: SetDelayedInboxCall;

  constructor(call: SetDelayedInboxCall) {
    this._call = call;
  }
}

export class SetOutboxCall extends ethereum.Call {
  get inputs(): SetOutboxCall__Inputs {
    return new SetOutboxCall__Inputs(this);
  }

  get outputs(): SetOutboxCall__Outputs {
    return new SetOutboxCall__Outputs(this);
  }
}

export class SetOutboxCall__Inputs {
  _call: SetOutboxCall;

  constructor(call: SetOutboxCall) {
    this._call = call;
  }

  get outbox(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get enabled(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetOutboxCall__Outputs {
  _call: SetOutboxCall;

  constructor(call: SetOutboxCall) {
    this._call = call;
  }
}

export class SetSequencerInboxCall extends ethereum.Call {
  get inputs(): SetSequencerInboxCall__Inputs {
    return new SetSequencerInboxCall__Inputs(this);
  }

  get outputs(): SetSequencerInboxCall__Outputs {
    return new SetSequencerInboxCall__Outputs(this);
  }
}

export class SetSequencerInboxCall__Inputs {
  _call: SetSequencerInboxCall;

  constructor(call: SetSequencerInboxCall) {
    this._call = call;
  }

  get _sequencerInbox(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSequencerInboxCall__Outputs {
  _call: SetSequencerInboxCall;

  constructor(call: SetSequencerInboxCall) {
    this._call = call;
  }
}

export class SetSequencerReportedSubMessageCountCall extends ethereum.Call {
  get inputs(): SetSequencerReportedSubMessageCountCall__Inputs {
    return new SetSequencerReportedSubMessageCountCall__Inputs(this);
  }

  get outputs(): SetSequencerReportedSubMessageCountCall__Outputs {
    return new SetSequencerReportedSubMessageCountCall__Outputs(this);
  }
}

export class SetSequencerReportedSubMessageCountCall__Inputs {
  _call: SetSequencerReportedSubMessageCountCall;

  constructor(call: SetSequencerReportedSubMessageCountCall) {
    this._call = call;
  }

  get newMsgCount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSequencerReportedSubMessageCountCall__Outputs {
  _call: SetSequencerReportedSubMessageCountCall;

  constructor(call: SetSequencerReportedSubMessageCountCall) {
    this._call = call;
  }
}

export class SubmitBatchSpendingReportCall extends ethereum.Call {
  get inputs(): SubmitBatchSpendingReportCall__Inputs {
    return new SubmitBatchSpendingReportCall__Inputs(this);
  }

  get outputs(): SubmitBatchSpendingReportCall__Outputs {
    return new SubmitBatchSpendingReportCall__Outputs(this);
  }
}

export class SubmitBatchSpendingReportCall__Inputs {
  _call: SubmitBatchSpendingReportCall;

  constructor(call: SubmitBatchSpendingReportCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get messageDataHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SubmitBatchSpendingReportCall__Outputs {
  _call: SubmitBatchSpendingReportCall;

  constructor(call: SubmitBatchSpendingReportCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
