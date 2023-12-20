import {
  ArbGasInfo,
} from "../generated/ArbGasInfo/ArbGasInfo"
import {
  NodeInterface,
} from "../generated/ArbGasInfo/NodeInterface"
import {
  blockInfo,
  hourlyStat
} from "../generated/schema"
import { ethereum, Address, BigInt} from '@graphprotocol/graph-ts'


export function handleBlock(block: ethereum.Block): void {
  const arbGasPrecompile = ethereum.Value.fromAddress(Address.fromString('0x000000000000000000000000000000000000006c'));
  const nodeInferfacePrecompile = ethereum.Value.fromAddress(Address.fromString('0x00000000000000000000000000000000000000c8'));
  let arbGas = ArbGasInfo.bind(arbGasPrecompile.toAddress());
  //let nodeInterface = NodeInterface.bind(nodeInferfacePrecompile.toAddress());
  //const batchNum = nodeInterface.try_findBatchContainingBlock(block.number);
  //const l1blockNum = nodeInterface.try_blockL1Num(block.number)
  const gasBacklogTry = arbGas.try_getGasBacklog();
  if (gasBacklogTry.reverted) {
    // probably pre-nitro?
    return;
  }
  const gasBacklog = arbGas.getGasBacklog();
  const L1BaseFee = arbGas.getL1BaseFeeEstimate();
  const L1pricingsurplus = arbGas.getL1PricingSurplus();
  const info = new blockInfo(block.hash);
  info.blockNumber = block.number;
  info.timestamp = block.timestamp;
  info.l1GasPrice = L1BaseFee
  info.gasBlocklog = gasBacklog
  info.l1PricingSurplus = L1pricingsurplus;
  info.l2GasPrice = block.baseFeePerGas;
  /*
  if (!batchNum.reverted)
    info.batchNum = batchNum.value;
  if (!l1blockNum.reverted)
    info.l1BlockNumber = l1blockNum.value;*/
  info.save()

  let stat = hourlyStat.load((block.timestamp.div(BigInt.fromI32(3600))).toHexString())
  if (stat == null){
    stat = new hourlyStat((block.timestamp.div(BigInt.fromI32(3600))).toHexString());
    stat.timestamp = block.timestamp.div(BigInt.fromI32(3600)).times(BigInt.fromI32(3600));
    stat.l1GasPriceSum = BigInt.fromI32(0);
    stat.gasBlocklogSum = BigInt.fromI32(0);
    stat.l1PricingSurplusSum = BigInt.fromI32(0);
    stat.l2GasPriceSum = BigInt.fromI32(0);
    stat.count = BigInt.fromI32(0);
  }
  stat.l1GasPriceSum = stat.l1GasPriceSum.plus(L1BaseFee)
  stat.gasBlocklogSum = stat.gasBlocklogSum.plus(gasBacklog)
  stat.l1PricingSurplusSum = stat.l1PricingSurplusSum.plus(L1pricingsurplus);
  stat.l2GasPriceSum = stat.l2GasPriceSum.plus(block.baseFeePerGas as BigInt);
  stat.count = stat.count.plus(BigInt.fromI32(1));
  stat.l1GasPriceAvg = stat.l1GasPriceSum.div(stat.count);
  stat.gasBlocklogAvg = stat.gasBlocklogSum.div(stat.count);
  stat.l1PricingSurplusAvg = stat.l1PricingSurplusSum.div(stat.count);
  stat.l2GasPriceAvg = stat.l2GasPriceSum.div(stat.count);
  stat.save()
}