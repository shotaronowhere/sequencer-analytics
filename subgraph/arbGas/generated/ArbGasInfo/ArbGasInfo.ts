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

export class ArbGasInfo__getGasAccountingParamsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class ArbGasInfo__getPricesInArbGasResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class ArbGasInfo__getPricesInArbGasWithAggregatorResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }
}

export class ArbGasInfo__getPricesInWeiResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }

  getValue3(): BigInt {
    return this.value3;
  }

  getValue4(): BigInt {
    return this.value4;
  }

  getValue5(): BigInt {
    return this.value5;
  }
}

export class ArbGasInfo__getPricesInWeiWithAggregatorResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    return map;
  }

  getValue0(): BigInt {
    return this.value0;
  }

  getValue1(): BigInt {
    return this.value1;
  }

  getValue2(): BigInt {
    return this.value2;
  }

  getValue3(): BigInt {
    return this.value3;
  }

  getValue4(): BigInt {
    return this.value4;
  }

  getValue5(): BigInt {
    return this.value5;
  }
}

export class ArbGasInfo extends ethereum.SmartContract {
  static bind(address: Address): ArbGasInfo {
    return new ArbGasInfo("ArbGasInfo", address);
  }

  getAmortizedCostCapBips(): BigInt {
    let result = super.call(
      "getAmortizedCostCapBips",
      "getAmortizedCostCapBips():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_getAmortizedCostCapBips(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAmortizedCostCapBips",
      "getAmortizedCostCapBips():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCurrentTxL1GasFees(): BigInt {
    let result = super.call(
      "getCurrentTxL1GasFees",
      "getCurrentTxL1GasFees():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getCurrentTxL1GasFees(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCurrentTxL1GasFees",
      "getCurrentTxL1GasFees():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGasAccountingParams(): ArbGasInfo__getGasAccountingParamsResult {
    let result = super.call(
      "getGasAccountingParams",
      "getGasAccountingParams():(uint256,uint256,uint256)",
      []
    );

    return new ArbGasInfo__getGasAccountingParamsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getGasAccountingParams(): ethereum.CallResult<
    ArbGasInfo__getGasAccountingParamsResult
  > {
    let result = super.tryCall(
      "getGasAccountingParams",
      "getGasAccountingParams():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ArbGasInfo__getGasAccountingParamsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getGasBacklog(): BigInt {
    let result = super.call("getGasBacklog", "getGasBacklog():(uint64)", []);

    return result[0].toBigInt();
  }

  try_getGasBacklog(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getGasBacklog", "getGasBacklog():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGasBacklogTolerance(): BigInt {
    let result = super.call(
      "getGasBacklogTolerance",
      "getGasBacklogTolerance():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_getGasBacklogTolerance(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getGasBacklogTolerance",
      "getGasBacklogTolerance():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getL1BaseFeeEstimate(): BigInt {
    let result = super.call(
      "getL1BaseFeeEstimate",
      "getL1BaseFeeEstimate():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getL1BaseFeeEstimate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getL1BaseFeeEstimate",
      "getL1BaseFeeEstimate():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getL1BaseFeeEstimateInertia(): BigInt {
    let result = super.call(
      "getL1BaseFeeEstimateInertia",
      "getL1BaseFeeEstimateInertia():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_getL1BaseFeeEstimateInertia(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getL1BaseFeeEstimateInertia",
      "getL1BaseFeeEstimateInertia():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getL1FeesAvailable(): BigInt {
    let result = super.call(
      "getL1FeesAvailable",
      "getL1FeesAvailable():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getL1FeesAvailable(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getL1FeesAvailable",
      "getL1FeesAvailable():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getL1GasPriceEstimate(): BigInt {
    let result = super.call(
      "getL1GasPriceEstimate",
      "getL1GasPriceEstimate():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getL1GasPriceEstimate(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getL1GasPriceEstimate",
      "getL1GasPriceEstimate():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getL1PricingSurplus(): BigInt {
    let result = super.call(
      "getL1PricingSurplus",
      "getL1PricingSurplus():(int256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getL1PricingSurplus(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getL1PricingSurplus",
      "getL1PricingSurplus():(int256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMinimumGasPrice(): BigInt {
    let result = super.call(
      "getMinimumGasPrice",
      "getMinimumGasPrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getMinimumGasPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getMinimumGasPrice",
      "getMinimumGasPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPerBatchGasCharge(): BigInt {
    let result = super.call(
      "getPerBatchGasCharge",
      "getPerBatchGasCharge():(int64)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPerBatchGasCharge(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPerBatchGasCharge",
      "getPerBatchGasCharge():(int64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPricesInArbGas(): ArbGasInfo__getPricesInArbGasResult {
    let result = super.call(
      "getPricesInArbGas",
      "getPricesInArbGas():(uint256,uint256,uint256)",
      []
    );

    return new ArbGasInfo__getPricesInArbGasResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getPricesInArbGas(): ethereum.CallResult<
    ArbGasInfo__getPricesInArbGasResult
  > {
    let result = super.tryCall(
      "getPricesInArbGas",
      "getPricesInArbGas():(uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ArbGasInfo__getPricesInArbGasResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getPricesInArbGasWithAggregator(
    aggregator: Address
  ): ArbGasInfo__getPricesInArbGasWithAggregatorResult {
    let result = super.call(
      "getPricesInArbGasWithAggregator",
      "getPricesInArbGasWithAggregator(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(aggregator)]
    );

    return new ArbGasInfo__getPricesInArbGasWithAggregatorResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getPricesInArbGasWithAggregator(
    aggregator: Address
  ): ethereum.CallResult<ArbGasInfo__getPricesInArbGasWithAggregatorResult> {
    let result = super.tryCall(
      "getPricesInArbGasWithAggregator",
      "getPricesInArbGasWithAggregator(address):(uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(aggregator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ArbGasInfo__getPricesInArbGasWithAggregatorResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  getPricesInWei(): ArbGasInfo__getPricesInWeiResult {
    let result = super.call(
      "getPricesInWei",
      "getPricesInWei():(uint256,uint256,uint256,uint256,uint256,uint256)",
      []
    );

    return new ArbGasInfo__getPricesInWeiResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_getPricesInWei(): ethereum.CallResult<ArbGasInfo__getPricesInWeiResult> {
    let result = super.tryCall(
      "getPricesInWei",
      "getPricesInWei():(uint256,uint256,uint256,uint256,uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ArbGasInfo__getPricesInWeiResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  getPricesInWeiWithAggregator(
    aggregator: Address
  ): ArbGasInfo__getPricesInWeiWithAggregatorResult {
    let result = super.call(
      "getPricesInWeiWithAggregator",
      "getPricesInWeiWithAggregator(address):(uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(aggregator)]
    );

    return new ArbGasInfo__getPricesInWeiWithAggregatorResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt()
    );
  }

  try_getPricesInWeiWithAggregator(
    aggregator: Address
  ): ethereum.CallResult<ArbGasInfo__getPricesInWeiWithAggregatorResult> {
    let result = super.tryCall(
      "getPricesInWeiWithAggregator",
      "getPricesInWeiWithAggregator(address):(uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromAddress(aggregator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ArbGasInfo__getPricesInWeiWithAggregatorResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt()
      )
    );
  }

  getPricingInertia(): BigInt {
    let result = super.call(
      "getPricingInertia",
      "getPricingInertia():(uint64)",
      []
    );

    return result[0].toBigInt();
  }

  try_getPricingInertia(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getPricingInertia",
      "getPricingInertia():(uint64)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}
