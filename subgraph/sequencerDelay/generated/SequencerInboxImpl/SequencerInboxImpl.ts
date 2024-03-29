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

export class InboxMessageDelivered extends ethereum.Event {
  get params(): InboxMessageDelivered__Params {
    return new InboxMessageDelivered__Params(this);
  }
}

export class InboxMessageDelivered__Params {
  _event: InboxMessageDelivered;

  constructor(event: InboxMessageDelivered) {
    this._event = event;
  }

  get messageNum(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class InboxMessageDeliveredFromOrigin extends ethereum.Event {
  get params(): InboxMessageDeliveredFromOrigin__Params {
    return new InboxMessageDeliveredFromOrigin__Params(this);
  }
}

export class InboxMessageDeliveredFromOrigin__Params {
  _event: InboxMessageDeliveredFromOrigin;

  constructor(event: InboxMessageDeliveredFromOrigin) {
    this._event = event;
  }

  get messageNum(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class InvalidateKeyset extends ethereum.Event {
  get params(): InvalidateKeyset__Params {
    return new InvalidateKeyset__Params(this);
  }
}

export class InvalidateKeyset__Params {
  _event: InvalidateKeyset;

  constructor(event: InvalidateKeyset) {
    this._event = event;
  }

  get keysetHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class OwnerFunctionCalled extends ethereum.Event {
  get params(): OwnerFunctionCalled__Params {
    return new OwnerFunctionCalled__Params(this);
  }
}

export class OwnerFunctionCalled__Params {
  _event: OwnerFunctionCalled;

  constructor(event: OwnerFunctionCalled) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class SequencerBatchData extends ethereum.Event {
  get params(): SequencerBatchData__Params {
    return new SequencerBatchData__Params(this);
  }
}

export class SequencerBatchData__Params {
  _event: SequencerBatchData;

  constructor(event: SequencerBatchData) {
    this._event = event;
  }

  get batchSequenceNumber(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class SequencerBatchDelivered extends ethereum.Event {
  get params(): SequencerBatchDelivered__Params {
    return new SequencerBatchDelivered__Params(this);
  }
}

export class SequencerBatchDelivered__Params {
  _event: SequencerBatchDelivered;

  constructor(event: SequencerBatchDelivered) {
    this._event = event;
  }

  get batchSequenceNumber(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get beforeAcc(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get afterAcc(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get delayedAcc(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get afterDelayedMessagesRead(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get timeBounds(): SequencerBatchDeliveredTimeBoundsStruct {
    return changetype<SequencerBatchDeliveredTimeBoundsStruct>(
      this._event.parameters[5].value.toTuple()
    );
  }

  get dataLocation(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class SequencerBatchDeliveredTimeBoundsStruct extends ethereum.Tuple {
  get minTimestamp(): BigInt {
    return this[0].toBigInt();
  }

  get maxTimestamp(): BigInt {
    return this[1].toBigInt();
  }

  get minBlockNumber(): BigInt {
    return this[2].toBigInt();
  }

  get maxBlockNumber(): BigInt {
    return this[3].toBigInt();
  }
}

export class SetValidKeyset extends ethereum.Event {
  get params(): SetValidKeyset__Params {
    return new SetValidKeyset__Params(this);
  }
}

export class SetValidKeyset__Params {
  _event: SetValidKeyset;

  constructor(event: SetValidKeyset) {
    this._event = event;
  }

  get keysetHash(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get keysetBytes(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class SequencerInboxImpl__dasKeySetInfoResult {
  value0: boolean;
  value1: BigInt;

  constructor(value0: boolean, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getIsValidKeyset(): boolean {
    return this.value0;
  }

  getCreationBlock(): BigInt {
    return this.value1;
  }
}

export class SequencerInboxImpl__maxTimeVariationResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getDelayBlocks(): BigInt {
    return this.value0;
  }

  getFutureBlocks(): BigInt {
    return this.value1;
  }

  getDelaySeconds(): BigInt {
    return this.value2;
  }

  getFutureSeconds(): BigInt {
    return this.value3;
  }
}

export class SequencerInboxImpl extends ethereum.SmartContract {
  static bind(address: Address): SequencerInboxImpl {
    return new SequencerInboxImpl("SequencerInboxImpl", address);
  }

  DATA_AUTHENTICATED_FLAG(): Bytes {
    let result = super.call(
      "DATA_AUTHENTICATED_FLAG",
      "DATA_AUTHENTICATED_FLAG():(bytes1)",
      []
    );

    return result[0].toBytes();
  }

  try_DATA_AUTHENTICATED_FLAG(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DATA_AUTHENTICATED_FLAG",
      "DATA_AUTHENTICATED_FLAG():(bytes1)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  HEADER_LENGTH(): BigInt {
    let result = super.call("HEADER_LENGTH", "HEADER_LENGTH():(uint256)", []);

    return result[0].toBigInt();
  }

  try_HEADER_LENGTH(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "HEADER_LENGTH",
      "HEADER_LENGTH():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  batchCount(): BigInt {
    let result = super.call("batchCount", "batchCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_batchCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("batchCount", "batchCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  bridge(): Address {
    let result = super.call("bridge", "bridge():(address)", []);

    return result[0].toAddress();
  }

  try_bridge(): ethereum.CallResult<Address> {
    let result = super.tryCall("bridge", "bridge():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dasKeySetInfo(param0: Bytes): SequencerInboxImpl__dasKeySetInfoResult {
    let result = super.call(
      "dasKeySetInfo",
      "dasKeySetInfo(bytes32):(bool,uint64)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new SequencerInboxImpl__dasKeySetInfoResult(
      result[0].toBoolean(),
      result[1].toBigInt()
    );
  }

  try_dasKeySetInfo(
    param0: Bytes
  ): ethereum.CallResult<SequencerInboxImpl__dasKeySetInfoResult> {
    let result = super.tryCall(
      "dasKeySetInfo",
      "dasKeySetInfo(bytes32):(bool,uint64)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SequencerInboxImpl__dasKeySetInfoResult(
        value[0].toBoolean(),
        value[1].toBigInt()
      )
    );
  }

  getKeysetCreationBlock(ksHash: Bytes): BigInt {
    let result = super.call(
      "getKeysetCreationBlock",
      "getKeysetCreationBlock(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(ksHash)]
    );

    return result[0].toBigInt();
  }

  try_getKeysetCreationBlock(ksHash: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getKeysetCreationBlock",
      "getKeysetCreationBlock(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(ksHash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  inboxAccs(index: BigInt): Bytes {
    let result = super.call("inboxAccs", "inboxAccs(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBytes();
  }

  try_inboxAccs(index: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("inboxAccs", "inboxAccs(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  isBatchPoster(param0: Address): boolean {
    let result = super.call("isBatchPoster", "isBatchPoster(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isBatchPoster(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isBatchPoster",
      "isBatchPoster(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isValidKeysetHash(ksHash: Bytes): boolean {
    let result = super.call(
      "isValidKeysetHash",
      "isValidKeysetHash(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(ksHash)]
    );

    return result[0].toBoolean();
  }

  try_isValidKeysetHash(ksHash: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isValidKeysetHash",
      "isValidKeysetHash(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(ksHash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  maxTimeVariation(): SequencerInboxImpl__maxTimeVariationResult {
    let result = super.call(
      "maxTimeVariation",
      "maxTimeVariation():(uint256,uint256,uint256,uint256)",
      []
    );

    return new SequencerInboxImpl__maxTimeVariationResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_maxTimeVariation(): ethereum.CallResult<
    SequencerInboxImpl__maxTimeVariationResult
  > {
    let result = super.tryCall(
      "maxTimeVariation",
      "maxTimeVariation():(uint256,uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SequencerInboxImpl__maxTimeVariationResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt()
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

  totalDelayedMessagesRead(): BigInt {
    let result = super.call(
      "totalDelayedMessagesRead",
      "totalDelayedMessagesRead():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalDelayedMessagesRead(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalDelayedMessagesRead",
      "totalDelayedMessagesRead():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddSequencerL2BatchCall extends ethereum.Call {
  get inputs(): AddSequencerL2BatchCall__Inputs {
    return new AddSequencerL2BatchCall__Inputs(this);
  }

  get outputs(): AddSequencerL2BatchCall__Outputs {
    return new AddSequencerL2BatchCall__Outputs(this);
  }
}

export class AddSequencerL2BatchCall__Inputs {
  _call: AddSequencerL2BatchCall;

  constructor(call: AddSequencerL2BatchCall) {
    this._call = call;
  }

  get sequenceNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get afterDelayedMessagesRead(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get gasRefunder(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get prevMessageCount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get newMessageCount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class AddSequencerL2BatchCall__Outputs {
  _call: AddSequencerL2BatchCall;

  constructor(call: AddSequencerL2BatchCall) {
    this._call = call;
  }
}

export class AddSequencerL2BatchFromOriginCall extends ethereum.Call {
  get inputs(): AddSequencerL2BatchFromOriginCall__Inputs {
    return new AddSequencerL2BatchFromOriginCall__Inputs(this);
  }

  get outputs(): AddSequencerL2BatchFromOriginCall__Outputs {
    return new AddSequencerL2BatchFromOriginCall__Outputs(this);
  }
}

export class AddSequencerL2BatchFromOriginCall__Inputs {
  _call: AddSequencerL2BatchFromOriginCall;

  constructor(call: AddSequencerL2BatchFromOriginCall) {
    this._call = call;
  }

  get sequenceNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get afterDelayedMessagesRead(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get gasRefunder(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class AddSequencerL2BatchFromOriginCall__Outputs {
  _call: AddSequencerL2BatchFromOriginCall;

  constructor(call: AddSequencerL2BatchFromOriginCall) {
    this._call = call;
  }
}

export class AddSequencerL2BatchFromOrigin1Call extends ethereum.Call {
  get inputs(): AddSequencerL2BatchFromOrigin1Call__Inputs {
    return new AddSequencerL2BatchFromOrigin1Call__Inputs(this);
  }

  get outputs(): AddSequencerL2BatchFromOrigin1Call__Outputs {
    return new AddSequencerL2BatchFromOrigin1Call__Outputs(this);
  }
}

export class AddSequencerL2BatchFromOrigin1Call__Inputs {
  _call: AddSequencerL2BatchFromOrigin1Call;

  constructor(call: AddSequencerL2BatchFromOrigin1Call) {
    this._call = call;
  }

  get sequenceNumber(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get afterDelayedMessagesRead(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get gasRefunder(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get prevMessageCount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get newMessageCount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class AddSequencerL2BatchFromOrigin1Call__Outputs {
  _call: AddSequencerL2BatchFromOrigin1Call;

  constructor(call: AddSequencerL2BatchFromOrigin1Call) {
    this._call = call;
  }
}

export class ForceInclusionCall extends ethereum.Call {
  get inputs(): ForceInclusionCall__Inputs {
    return new ForceInclusionCall__Inputs(this);
  }

  get outputs(): ForceInclusionCall__Outputs {
    return new ForceInclusionCall__Outputs(this);
  }
}

export class ForceInclusionCall__Inputs {
  _call: ForceInclusionCall;

  constructor(call: ForceInclusionCall) {
    this._call = call;
  }

  get _totalDelayedMessagesRead(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get kind(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get l1BlockAndTime(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get baseFeeL1(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get sender(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get messageDataHash(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class ForceInclusionCall__Outputs {
  _call: ForceInclusionCall;

  constructor(call: ForceInclusionCall) {
    this._call = call;
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

  get bridge_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get maxTimeVariation_(): InitializeCallMaxTimeVariation_Struct {
    return changetype<InitializeCallMaxTimeVariation_Struct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class InitializeCallMaxTimeVariation_Struct extends ethereum.Tuple {
  get delayBlocks(): BigInt {
    return this[0].toBigInt();
  }

  get futureBlocks(): BigInt {
    return this[1].toBigInt();
  }

  get delaySeconds(): BigInt {
    return this[2].toBigInt();
  }

  get futureSeconds(): BigInt {
    return this[3].toBigInt();
  }
}

export class InvalidateKeysetHashCall extends ethereum.Call {
  get inputs(): InvalidateKeysetHashCall__Inputs {
    return new InvalidateKeysetHashCall__Inputs(this);
  }

  get outputs(): InvalidateKeysetHashCall__Outputs {
    return new InvalidateKeysetHashCall__Outputs(this);
  }
}

export class InvalidateKeysetHashCall__Inputs {
  _call: InvalidateKeysetHashCall;

  constructor(call: InvalidateKeysetHashCall) {
    this._call = call;
  }

  get ksHash(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class InvalidateKeysetHashCall__Outputs {
  _call: InvalidateKeysetHashCall;

  constructor(call: InvalidateKeysetHashCall) {
    this._call = call;
  }
}

export class RemoveDelayAfterForkCall extends ethereum.Call {
  get inputs(): RemoveDelayAfterForkCall__Inputs {
    return new RemoveDelayAfterForkCall__Inputs(this);
  }

  get outputs(): RemoveDelayAfterForkCall__Outputs {
    return new RemoveDelayAfterForkCall__Outputs(this);
  }
}

export class RemoveDelayAfterForkCall__Inputs {
  _call: RemoveDelayAfterForkCall;

  constructor(call: RemoveDelayAfterForkCall) {
    this._call = call;
  }
}

export class RemoveDelayAfterForkCall__Outputs {
  _call: RemoveDelayAfterForkCall;

  constructor(call: RemoveDelayAfterForkCall) {
    this._call = call;
  }
}

export class SetIsBatchPosterCall extends ethereum.Call {
  get inputs(): SetIsBatchPosterCall__Inputs {
    return new SetIsBatchPosterCall__Inputs(this);
  }

  get outputs(): SetIsBatchPosterCall__Outputs {
    return new SetIsBatchPosterCall__Outputs(this);
  }
}

export class SetIsBatchPosterCall__Inputs {
  _call: SetIsBatchPosterCall;

  constructor(call: SetIsBatchPosterCall) {
    this._call = call;
  }

  get addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isBatchPoster_(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetIsBatchPosterCall__Outputs {
  _call: SetIsBatchPosterCall;

  constructor(call: SetIsBatchPosterCall) {
    this._call = call;
  }
}

export class SetMaxTimeVariationCall extends ethereum.Call {
  get inputs(): SetMaxTimeVariationCall__Inputs {
    return new SetMaxTimeVariationCall__Inputs(this);
  }

  get outputs(): SetMaxTimeVariationCall__Outputs {
    return new SetMaxTimeVariationCall__Outputs(this);
  }
}

export class SetMaxTimeVariationCall__Inputs {
  _call: SetMaxTimeVariationCall;

  constructor(call: SetMaxTimeVariationCall) {
    this._call = call;
  }

  get maxTimeVariation_(): SetMaxTimeVariationCallMaxTimeVariation_Struct {
    return changetype<SetMaxTimeVariationCallMaxTimeVariation_Struct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class SetMaxTimeVariationCall__Outputs {
  _call: SetMaxTimeVariationCall;

  constructor(call: SetMaxTimeVariationCall) {
    this._call = call;
  }
}

export class SetMaxTimeVariationCallMaxTimeVariation_Struct extends ethereum.Tuple {
  get delayBlocks(): BigInt {
    return this[0].toBigInt();
  }

  get futureBlocks(): BigInt {
    return this[1].toBigInt();
  }

  get delaySeconds(): BigInt {
    return this[2].toBigInt();
  }

  get futureSeconds(): BigInt {
    return this[3].toBigInt();
  }
}

export class SetValidKeysetCall extends ethereum.Call {
  get inputs(): SetValidKeysetCall__Inputs {
    return new SetValidKeysetCall__Inputs(this);
  }

  get outputs(): SetValidKeysetCall__Outputs {
    return new SetValidKeysetCall__Outputs(this);
  }
}

export class SetValidKeysetCall__Inputs {
  _call: SetValidKeysetCall;

  constructor(call: SetValidKeysetCall) {
    this._call = call;
  }

  get keysetBytes(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SetValidKeysetCall__Outputs {
  _call: SetValidKeysetCall;

  constructor(call: SetValidKeysetCall) {
    this._call = call;
  }
}
