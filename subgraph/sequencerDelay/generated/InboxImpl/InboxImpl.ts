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

export class AllowListAddressSet extends ethereum.Event {
  get params(): AllowListAddressSet__Params {
    return new AllowListAddressSet__Params(this);
  }
}

export class AllowListAddressSet__Params {
  _event: AllowListAddressSet;

  constructor(event: AllowListAddressSet) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get val(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class AllowListEnabledUpdated extends ethereum.Event {
  get params(): AllowListEnabledUpdated__Params {
    return new AllowListEnabledUpdated__Params(this);
  }
}

export class AllowListEnabledUpdated__Params {
  _event: AllowListEnabledUpdated;

  constructor(event: AllowListEnabledUpdated) {
    this._event = event;
  }

  get isEnabled(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

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

export class Paused extends ethereum.Event {
  get params(): Paused__Params {
    return new Paused__Params(this);
  }
}

export class Paused__Params {
  _event: Paused;

  constructor(event: Paused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Unpaused extends ethereum.Event {
  get params(): Unpaused__Params {
    return new Unpaused__Params(this);
  }
}

export class Unpaused__Params {
  _event: Unpaused;

  constructor(event: Unpaused) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class InboxImpl extends ethereum.SmartContract {
  static bind(address: Address): InboxImpl {
    return new InboxImpl("InboxImpl", address);
  }

  allowListEnabled(): boolean {
    let result = super.call(
      "allowListEnabled",
      "allowListEnabled():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_allowListEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowListEnabled",
      "allowListEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  calculateRetryableSubmissionFee(dataLength: BigInt, baseFee: BigInt): BigInt {
    let result = super.call(
      "calculateRetryableSubmissionFee",
      "calculateRetryableSubmissionFee(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(dataLength),
        ethereum.Value.fromUnsignedBigInt(baseFee)
      ]
    );

    return result[0].toBigInt();
  }

  try_calculateRetryableSubmissionFee(
    dataLength: BigInt,
    baseFee: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateRetryableSubmissionFee",
      "calculateRetryableSubmissionFee(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(dataLength),
        ethereum.Value.fromUnsignedBigInt(baseFee)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isAllowed(param0: Address): boolean {
    let result = super.call("isAllowed", "isAllowed(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_isAllowed(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isAllowed", "isAllowed(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  paused(): boolean {
    let result = super.call("paused", "paused():(bool)", []);

    return result[0].toBoolean();
  }

  try_paused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("paused", "paused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  sendContractTransaction(
    gasLimit: BigInt,
    maxFeePerGas: BigInt,
    to: Address,
    value: BigInt,
    data: Bytes
  ): BigInt {
    let result = super.call(
      "sendContractTransaction",
      "sendContractTransaction(uint256,uint256,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(maxFeePerGas),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBigInt();
  }

  try_sendContractTransaction(
    gasLimit: BigInt,
    maxFeePerGas: BigInt,
    to: Address,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sendContractTransaction",
      "sendContractTransaction(uint256,uint256,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(maxFeePerGas),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sendL2Message(messageData: Bytes): BigInt {
    let result = super.call("sendL2Message", "sendL2Message(bytes):(uint256)", [
      ethereum.Value.fromBytes(messageData)
    ]);

    return result[0].toBigInt();
  }

  try_sendL2Message(messageData: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sendL2Message",
      "sendL2Message(bytes):(uint256)",
      [ethereum.Value.fromBytes(messageData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sendL2MessageFromOrigin(messageData: Bytes): BigInt {
    let result = super.call(
      "sendL2MessageFromOrigin",
      "sendL2MessageFromOrigin(bytes):(uint256)",
      [ethereum.Value.fromBytes(messageData)]
    );

    return result[0].toBigInt();
  }

  try_sendL2MessageFromOrigin(messageData: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sendL2MessageFromOrigin",
      "sendL2MessageFromOrigin(bytes):(uint256)",
      [ethereum.Value.fromBytes(messageData)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sendUnsignedTransaction(
    gasLimit: BigInt,
    maxFeePerGas: BigInt,
    nonce: BigInt,
    to: Address,
    value: BigInt,
    data: Bytes
  ): BigInt {
    let result = super.call(
      "sendUnsignedTransaction",
      "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(maxFeePerGas),
        ethereum.Value.fromUnsignedBigInt(nonce),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBigInt();
  }

  try_sendUnsignedTransaction(
    gasLimit: BigInt,
    maxFeePerGas: BigInt,
    nonce: BigInt,
    to: Address,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sendUnsignedTransaction",
      "sendUnsignedTransaction(uint256,uint256,uint256,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(maxFeePerGas),
        ethereum.Value.fromUnsignedBigInt(nonce),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sendUnsignedTransactionToFork(
    gasLimit: BigInt,
    maxFeePerGas: BigInt,
    nonce: BigInt,
    to: Address,
    value: BigInt,
    data: Bytes
  ): BigInt {
    let result = super.call(
      "sendUnsignedTransactionToFork",
      "sendUnsignedTransactionToFork(uint256,uint256,uint256,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(maxFeePerGas),
        ethereum.Value.fromUnsignedBigInt(nonce),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );

    return result[0].toBigInt();
  }

  try_sendUnsignedTransactionToFork(
    gasLimit: BigInt,
    maxFeePerGas: BigInt,
    nonce: BigInt,
    to: Address,
    value: BigInt,
    data: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sendUnsignedTransactionToFork",
      "sendUnsignedTransactionToFork(uint256,uint256,uint256,address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(maxFeePerGas),
        ethereum.Value.fromUnsignedBigInt(nonce),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromBytes(data)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  sendWithdrawEthToFork(
    gasLimit: BigInt,
    maxFeePerGas: BigInt,
    nonce: BigInt,
    value: BigInt,
    withdrawTo: Address
  ): BigInt {
    let result = super.call(
      "sendWithdrawEthToFork",
      "sendWithdrawEthToFork(uint256,uint256,uint256,uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(maxFeePerGas),
        ethereum.Value.fromUnsignedBigInt(nonce),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromAddress(withdrawTo)
      ]
    );

    return result[0].toBigInt();
  }

  try_sendWithdrawEthToFork(
    gasLimit: BigInt,
    maxFeePerGas: BigInt,
    nonce: BigInt,
    value: BigInt,
    withdrawTo: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "sendWithdrawEthToFork",
      "sendWithdrawEthToFork(uint256,uint256,uint256,uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(gasLimit),
        ethereum.Value.fromUnsignedBigInt(maxFeePerGas),
        ethereum.Value.fromUnsignedBigInt(nonce),
        ethereum.Value.fromUnsignedBigInt(value),
        ethereum.Value.fromAddress(withdrawTo)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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
}

export class CreateRetryableTicketCall extends ethereum.Call {
  get inputs(): CreateRetryableTicketCall__Inputs {
    return new CreateRetryableTicketCall__Inputs(this);
  }

  get outputs(): CreateRetryableTicketCall__Outputs {
    return new CreateRetryableTicketCall__Outputs(this);
  }
}

export class CreateRetryableTicketCall__Inputs {
  _call: CreateRetryableTicketCall;

  constructor(call: CreateRetryableTicketCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get l2CallValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get maxSubmissionCost(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get excessFeeRefundAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get callValueRefundAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class CreateRetryableTicketCall__Outputs {
  _call: CreateRetryableTicketCall;

  constructor(call: CreateRetryableTicketCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreateRetryableTicketNoRefundAliasRewriteCall extends ethereum.Call {
  get inputs(): CreateRetryableTicketNoRefundAliasRewriteCall__Inputs {
    return new CreateRetryableTicketNoRefundAliasRewriteCall__Inputs(this);
  }

  get outputs(): CreateRetryableTicketNoRefundAliasRewriteCall__Outputs {
    return new CreateRetryableTicketNoRefundAliasRewriteCall__Outputs(this);
  }
}

export class CreateRetryableTicketNoRefundAliasRewriteCall__Inputs {
  _call: CreateRetryableTicketNoRefundAliasRewriteCall;

  constructor(call: CreateRetryableTicketNoRefundAliasRewriteCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get l2CallValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get maxSubmissionCost(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get excessFeeRefundAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get callValueRefundAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class CreateRetryableTicketNoRefundAliasRewriteCall__Outputs {
  _call: CreateRetryableTicketNoRefundAliasRewriteCall;

  constructor(call: CreateRetryableTicketNoRefundAliasRewriteCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositEthCall extends ethereum.Call {
  get inputs(): DepositEthCall__Inputs {
    return new DepositEthCall__Inputs(this);
  }

  get outputs(): DepositEthCall__Outputs {
    return new DepositEthCall__Outputs(this);
  }
}

export class DepositEthCall__Inputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositEthCall__Outputs {
  _call: DepositEthCall;

  constructor(call: DepositEthCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class DepositEth1Call extends ethereum.Call {
  get inputs(): DepositEth1Call__Inputs {
    return new DepositEth1Call__Inputs(this);
  }

  get outputs(): DepositEth1Call__Outputs {
    return new DepositEth1Call__Outputs(this);
  }
}

export class DepositEth1Call__Inputs {
  _call: DepositEth1Call;

  constructor(call: DepositEth1Call) {
    this._call = call;
  }
}

export class DepositEth1Call__Outputs {
  _call: DepositEth1Call;

  constructor(call: DepositEth1Call) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
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

  get _bridge(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _sequencerInbox(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PostUpgradeInitCall extends ethereum.Call {
  get inputs(): PostUpgradeInitCall__Inputs {
    return new PostUpgradeInitCall__Inputs(this);
  }

  get outputs(): PostUpgradeInitCall__Outputs {
    return new PostUpgradeInitCall__Outputs(this);
  }
}

export class PostUpgradeInitCall__Inputs {
  _call: PostUpgradeInitCall;

  constructor(call: PostUpgradeInitCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class PostUpgradeInitCall__Outputs {
  _call: PostUpgradeInitCall;

  constructor(call: PostUpgradeInitCall) {
    this._call = call;
  }
}

export class SendContractTransactionCall extends ethereum.Call {
  get inputs(): SendContractTransactionCall__Inputs {
    return new SendContractTransactionCall__Inputs(this);
  }

  get outputs(): SendContractTransactionCall__Outputs {
    return new SendContractTransactionCall__Outputs(this);
  }
}

export class SendContractTransactionCall__Inputs {
  _call: SendContractTransactionCall;

  constructor(call: SendContractTransactionCall) {
    this._call = call;
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SendContractTransactionCall__Outputs {
  _call: SendContractTransactionCall;

  constructor(call: SendContractTransactionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SendL1FundedContractTransactionCall extends ethereum.Call {
  get inputs(): SendL1FundedContractTransactionCall__Inputs {
    return new SendL1FundedContractTransactionCall__Inputs(this);
  }

  get outputs(): SendL1FundedContractTransactionCall__Outputs {
    return new SendL1FundedContractTransactionCall__Outputs(this);
  }
}

export class SendL1FundedContractTransactionCall__Inputs {
  _call: SendL1FundedContractTransactionCall;

  constructor(call: SendL1FundedContractTransactionCall) {
    this._call = call;
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SendL1FundedContractTransactionCall__Outputs {
  _call: SendL1FundedContractTransactionCall;

  constructor(call: SendL1FundedContractTransactionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SendL1FundedUnsignedTransactionCall extends ethereum.Call {
  get inputs(): SendL1FundedUnsignedTransactionCall__Inputs {
    return new SendL1FundedUnsignedTransactionCall__Inputs(this);
  }

  get outputs(): SendL1FundedUnsignedTransactionCall__Outputs {
    return new SendL1FundedUnsignedTransactionCall__Outputs(this);
  }
}

export class SendL1FundedUnsignedTransactionCall__Inputs {
  _call: SendL1FundedUnsignedTransactionCall;

  constructor(call: SendL1FundedUnsignedTransactionCall) {
    this._call = call;
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SendL1FundedUnsignedTransactionCall__Outputs {
  _call: SendL1FundedUnsignedTransactionCall;

  constructor(call: SendL1FundedUnsignedTransactionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SendL1FundedUnsignedTransactionToForkCall extends ethereum.Call {
  get inputs(): SendL1FundedUnsignedTransactionToForkCall__Inputs {
    return new SendL1FundedUnsignedTransactionToForkCall__Inputs(this);
  }

  get outputs(): SendL1FundedUnsignedTransactionToForkCall__Outputs {
    return new SendL1FundedUnsignedTransactionToForkCall__Outputs(this);
  }
}

export class SendL1FundedUnsignedTransactionToForkCall__Inputs {
  _call: SendL1FundedUnsignedTransactionToForkCall;

  constructor(call: SendL1FundedUnsignedTransactionToForkCall) {
    this._call = call;
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SendL1FundedUnsignedTransactionToForkCall__Outputs {
  _call: SendL1FundedUnsignedTransactionToForkCall;

  constructor(call: SendL1FundedUnsignedTransactionToForkCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SendL2MessageCall extends ethereum.Call {
  get inputs(): SendL2MessageCall__Inputs {
    return new SendL2MessageCall__Inputs(this);
  }

  get outputs(): SendL2MessageCall__Outputs {
    return new SendL2MessageCall__Outputs(this);
  }
}

export class SendL2MessageCall__Inputs {
  _call: SendL2MessageCall;

  constructor(call: SendL2MessageCall) {
    this._call = call;
  }

  get messageData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SendL2MessageCall__Outputs {
  _call: SendL2MessageCall;

  constructor(call: SendL2MessageCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SendL2MessageFromOriginCall extends ethereum.Call {
  get inputs(): SendL2MessageFromOriginCall__Inputs {
    return new SendL2MessageFromOriginCall__Inputs(this);
  }

  get outputs(): SendL2MessageFromOriginCall__Outputs {
    return new SendL2MessageFromOriginCall__Outputs(this);
  }
}

export class SendL2MessageFromOriginCall__Inputs {
  _call: SendL2MessageFromOriginCall;

  constructor(call: SendL2MessageFromOriginCall) {
    this._call = call;
  }

  get messageData(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SendL2MessageFromOriginCall__Outputs {
  _call: SendL2MessageFromOriginCall;

  constructor(call: SendL2MessageFromOriginCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SendUnsignedTransactionCall extends ethereum.Call {
  get inputs(): SendUnsignedTransactionCall__Inputs {
    return new SendUnsignedTransactionCall__Inputs(this);
  }

  get outputs(): SendUnsignedTransactionCall__Outputs {
    return new SendUnsignedTransactionCall__Outputs(this);
  }
}

export class SendUnsignedTransactionCall__Inputs {
  _call: SendUnsignedTransactionCall;

  constructor(call: SendUnsignedTransactionCall) {
    this._call = call;
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SendUnsignedTransactionCall__Outputs {
  _call: SendUnsignedTransactionCall;

  constructor(call: SendUnsignedTransactionCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SendUnsignedTransactionToForkCall extends ethereum.Call {
  get inputs(): SendUnsignedTransactionToForkCall__Inputs {
    return new SendUnsignedTransactionToForkCall__Inputs(this);
  }

  get outputs(): SendUnsignedTransactionToForkCall__Outputs {
    return new SendUnsignedTransactionToForkCall__Outputs(this);
  }
}

export class SendUnsignedTransactionToForkCall__Inputs {
  _call: SendUnsignedTransactionToForkCall;

  constructor(call: SendUnsignedTransactionToForkCall) {
    this._call = call;
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get value(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SendUnsignedTransactionToForkCall__Outputs {
  _call: SendUnsignedTransactionToForkCall;

  constructor(call: SendUnsignedTransactionToForkCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SendWithdrawEthToForkCall extends ethereum.Call {
  get inputs(): SendWithdrawEthToForkCall__Inputs {
    return new SendWithdrawEthToForkCall__Inputs(this);
  }

  get outputs(): SendWithdrawEthToForkCall__Outputs {
    return new SendWithdrawEthToForkCall__Outputs(this);
  }
}

export class SendWithdrawEthToForkCall__Inputs {
  _call: SendWithdrawEthToForkCall;

  constructor(call: SendWithdrawEthToForkCall) {
    this._call = call;
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get nonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get withdrawTo(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class SendWithdrawEthToForkCall__Outputs {
  _call: SendWithdrawEthToForkCall;

  constructor(call: SendWithdrawEthToForkCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetAllowListCall extends ethereum.Call {
  get inputs(): SetAllowListCall__Inputs {
    return new SetAllowListCall__Inputs(this);
  }

  get outputs(): SetAllowListCall__Outputs {
    return new SetAllowListCall__Outputs(this);
  }
}

export class SetAllowListCall__Inputs {
  _call: SetAllowListCall;

  constructor(call: SetAllowListCall) {
    this._call = call;
  }

  get user(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get val(): Array<boolean> {
    return this._call.inputValues[1].value.toBooleanArray();
  }
}

export class SetAllowListCall__Outputs {
  _call: SetAllowListCall;

  constructor(call: SetAllowListCall) {
    this._call = call;
  }
}

export class SetAllowListEnabledCall extends ethereum.Call {
  get inputs(): SetAllowListEnabledCall__Inputs {
    return new SetAllowListEnabledCall__Inputs(this);
  }

  get outputs(): SetAllowListEnabledCall__Outputs {
    return new SetAllowListEnabledCall__Outputs(this);
  }
}

export class SetAllowListEnabledCall__Inputs {
  _call: SetAllowListEnabledCall;

  constructor(call: SetAllowListEnabledCall) {
    this._call = call;
  }

  get _allowListEnabled(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class SetAllowListEnabledCall__Outputs {
  _call: SetAllowListEnabledCall;

  constructor(call: SetAllowListEnabledCall) {
    this._call = call;
  }
}

export class UniswapCreateRetryableTicketCall extends ethereum.Call {
  get inputs(): UniswapCreateRetryableTicketCall__Inputs {
    return new UniswapCreateRetryableTicketCall__Inputs(this);
  }

  get outputs(): UniswapCreateRetryableTicketCall__Outputs {
    return new UniswapCreateRetryableTicketCall__Outputs(this);
  }
}

export class UniswapCreateRetryableTicketCall__Inputs {
  _call: UniswapCreateRetryableTicketCall;

  constructor(call: UniswapCreateRetryableTicketCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get l2CallValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get maxSubmissionCost(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get excessFeeRefundAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get callValueRefundAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class UniswapCreateRetryableTicketCall__Outputs {
  _call: UniswapCreateRetryableTicketCall;

  constructor(call: UniswapCreateRetryableTicketCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnsafeCreateRetryableTicketCall extends ethereum.Call {
  get inputs(): UnsafeCreateRetryableTicketCall__Inputs {
    return new UnsafeCreateRetryableTicketCall__Inputs(this);
  }

  get outputs(): UnsafeCreateRetryableTicketCall__Outputs {
    return new UnsafeCreateRetryableTicketCall__Outputs(this);
  }
}

export class UnsafeCreateRetryableTicketCall__Inputs {
  _call: UnsafeCreateRetryableTicketCall;

  constructor(call: UnsafeCreateRetryableTicketCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get l2CallValue(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get maxSubmissionCost(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get excessFeeRefundAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get callValueRefundAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get gasLimit(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[7].value.toBytes();
  }
}

export class UnsafeCreateRetryableTicketCall__Outputs {
  _call: UnsafeCreateRetryableTicketCall;

  constructor(call: UnsafeCreateRetryableTicketCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
