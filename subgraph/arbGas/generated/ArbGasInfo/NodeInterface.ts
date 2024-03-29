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

export class NodeInterface__constructOutboxProofResult {
  value0: Bytes;
  value1: Bytes;
  value2: Array<Bytes>;

  constructor(value0: Bytes, value1: Bytes, value2: Array<Bytes>) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytes(this.value1));
    map.set("value2", ethereum.Value.fromFixedBytesArray(this.value2));
    return map;
  }

  getSend(): Bytes {
    return this.value0;
  }

  getRoot(): Bytes {
    return this.value1;
  }

  getProof(): Array<Bytes> {
    return this.value2;
  }
}

export class NodeInterface__legacyLookupMessageBatchProofResult {
  value0: Array<Bytes>;
  value1: BigInt;
  value2: Address;
  value3: Address;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: Bytes;

  constructor(
    value0: Array<Bytes>,
    value1: BigInt,
    value2: Address,
    value3: Address,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: Bytes
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytesArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromAddress(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromBytes(this.value8));
    return map;
  }

  getProof(): Array<Bytes> {
    return this.value0;
  }

  getPath(): BigInt {
    return this.value1;
  }

  getL2Sender(): Address {
    return this.value2;
  }

  getL1Dest(): Address {
    return this.value3;
  }

  getL2Block(): BigInt {
    return this.value4;
  }

  getL1Block(): BigInt {
    return this.value5;
  }

  getTimestamp(): BigInt {
    return this.value6;
  }

  getAmount(): BigInt {
    return this.value7;
  }

  getCalldataForL1(): Bytes {
    return this.value8;
  }
}

export class NodeInterface extends ethereum.SmartContract {
  static bind(address: Address): NodeInterface {
    return new NodeInterface("NodeInterface", address);
  }

  constructOutboxProof(
    size: BigInt,
    leaf: BigInt
  ): NodeInterface__constructOutboxProofResult {
    let result = super.call(
      "constructOutboxProof",
      "constructOutboxProof(uint64,uint64):(bytes32,bytes32,bytes32[])",
      [
        ethereum.Value.fromUnsignedBigInt(size),
        ethereum.Value.fromUnsignedBigInt(leaf)
      ]
    );

    return new NodeInterface__constructOutboxProofResult(
      result[0].toBytes(),
      result[1].toBytes(),
      result[2].toBytesArray()
    );
  }

  try_constructOutboxProof(
    size: BigInt,
    leaf: BigInt
  ): ethereum.CallResult<NodeInterface__constructOutboxProofResult> {
    let result = super.tryCall(
      "constructOutboxProof",
      "constructOutboxProof(uint64,uint64):(bytes32,bytes32,bytes32[])",
      [
        ethereum.Value.fromUnsignedBigInt(size),
        ethereum.Value.fromUnsignedBigInt(leaf)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NodeInterface__constructOutboxProofResult(
        value[0].toBytes(),
        value[1].toBytes(),
        value[2].toBytesArray()
      )
    );
  }

  findBatchContainingBlock(blockNum: BigInt): BigInt {
    let result = super.call(
      "findBatchContainingBlock",
      "findBatchContainingBlock(uint64):(uint64)",
      [ethereum.Value.fromUnsignedBigInt(blockNum)]
    );

    return result[0].toBigInt();
  }

  try_findBatchContainingBlock(blockNum: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "findBatchContainingBlock",
      "findBatchContainingBlock(uint64):(uint64)",
      [ethereum.Value.fromUnsignedBigInt(blockNum)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  blockL1Num(l2BlockNum: BigInt): BigInt {
    let result = super.call("blockL1Num", "blockL1Num(uint64):(uint64)", [
      ethereum.Value.fromUnsignedBigInt(l2BlockNum)
    ]);

    return result[0].toBigInt();
  }

  try_blockL1Num(l2BlockNum: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("blockL1Num", "blockL1Num(uint64):(uint64)", [
      ethereum.Value.fromUnsignedBigInt(l2BlockNum)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getL1Confirmations(blockHash: Bytes): BigInt {
    let result = super.call(
      "getL1Confirmations",
      "getL1Confirmations(bytes32):(uint64)",
      [ethereum.Value.fromFixedBytes(blockHash)]
    );

    return result[0].toBigInt();
  }

  try_getL1Confirmations(blockHash: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getL1Confirmations",
      "getL1Confirmations(bytes32):(uint64)",
      [ethereum.Value.fromFixedBytes(blockHash)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  legacyLookupMessageBatchProof(
    batchNum: BigInt,
    index: BigInt
  ): NodeInterface__legacyLookupMessageBatchProofResult {
    let result = super.call(
      "legacyLookupMessageBatchProof",
      "legacyLookupMessageBatchProof(uint256,uint64):(bytes32[],uint256,address,address,uint256,uint256,uint256,uint256,bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(batchNum),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return new NodeInterface__legacyLookupMessageBatchProofResult(
      result[0].toBytesArray(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toAddress(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBytes()
    );
  }

  try_legacyLookupMessageBatchProof(
    batchNum: BigInt,
    index: BigInt
  ): ethereum.CallResult<NodeInterface__legacyLookupMessageBatchProofResult> {
    let result = super.tryCall(
      "legacyLookupMessageBatchProof",
      "legacyLookupMessageBatchProof(uint256,uint64):(bytes32[],uint256,address,address,uint256,uint256,uint256,uint256,bytes)",
      [
        ethereum.Value.fromUnsignedBigInt(batchNum),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NodeInterface__legacyLookupMessageBatchProofResult(
        value[0].toBytesArray(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toAddress(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBytes()
      )
    );
  }

  nitroGenesisBlock(): BigInt {
    let result = super.call(
      "nitroGenesisBlock",
      "nitroGenesisBlock():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_nitroGenesisBlock(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "nitroGenesisBlock",
      "nitroGenesisBlock():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class EstimateRetryableTicketCall extends ethereum.Call {
  get inputs(): EstimateRetryableTicketCall__Inputs {
    return new EstimateRetryableTicketCall__Inputs(this);
  }

  get outputs(): EstimateRetryableTicketCall__Outputs {
    return new EstimateRetryableTicketCall__Outputs(this);
  }
}

export class EstimateRetryableTicketCall__Inputs {
  _call: EstimateRetryableTicketCall;

  constructor(call: EstimateRetryableTicketCall) {
    this._call = call;
  }

  get sender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get deposit(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get l2CallValue(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get excessFeeRefundAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get callValueRefundAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class EstimateRetryableTicketCall__Outputs {
  _call: EstimateRetryableTicketCall;

  constructor(call: EstimateRetryableTicketCall) {
    this._call = call;
  }
}

export class GasEstimateComponentsCall extends ethereum.Call {
  get inputs(): GasEstimateComponentsCall__Inputs {
    return new GasEstimateComponentsCall__Inputs(this);
  }

  get outputs(): GasEstimateComponentsCall__Outputs {
    return new GasEstimateComponentsCall__Outputs(this);
  }
}

export class GasEstimateComponentsCall__Inputs {
  _call: GasEstimateComponentsCall;

  constructor(call: GasEstimateComponentsCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get contractCreation(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class GasEstimateComponentsCall__Outputs {
  _call: GasEstimateComponentsCall;

  constructor(call: GasEstimateComponentsCall) {
    this._call = call;
  }

  get gasEstimate(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get gasEstimateForL1(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get baseFee(): BigInt {
    return this._call.outputValues[2].value.toBigInt();
  }

  get l1BaseFeeEstimate(): BigInt {
    return this._call.outputValues[3].value.toBigInt();
  }
}

export class GasEstimateL1ComponentCall extends ethereum.Call {
  get inputs(): GasEstimateL1ComponentCall__Inputs {
    return new GasEstimateL1ComponentCall__Inputs(this);
  }

  get outputs(): GasEstimateL1ComponentCall__Outputs {
    return new GasEstimateL1ComponentCall__Outputs(this);
  }
}

export class GasEstimateL1ComponentCall__Inputs {
  _call: GasEstimateL1ComponentCall;

  constructor(call: GasEstimateL1ComponentCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get contractCreation(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get data(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class GasEstimateL1ComponentCall__Outputs {
  _call: GasEstimateL1ComponentCall;

  constructor(call: GasEstimateL1ComponentCall) {
    this._call = call;
  }

  get gasEstimateForL1(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get baseFee(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }

  get l1BaseFeeEstimate(): BigInt {
    return this._call.outputValues[2].value.toBigInt();
  }
}
