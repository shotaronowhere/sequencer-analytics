import {
  ArbGasInfo,
} from "../generated/ArbGasInfo/ArbGasInfo"
import {
  NodeInterface,
} from "../generated/ArbGasInfo/NodeInterface"
import {
  blockInfo
} from "../generated/schema"
import { ethereum, Address} from '@graphprotocol/graph-ts'


export function handleBlock(block: ethereum.Block): void {
  const arbGasPrecompile = ethereum.Value.fromAddress(Address.fromString('0x000000000000000000000000000000000000006c'));
  const nodeInferfacePrecompile = ethereum.Value.fromAddress(Address.fromString('0x00000000000000000000000000000000000000c8'));
  let arbGas = ArbGasInfo.bind(arbGasPrecompile.toAddress());
  //let nodeInterface = NodeInterface.bind(nodeInferfacePrecompile.toAddress());
  //const batchNum = nodeInterface.try_findBatchContainingBlock(block.number);
  //const l1blockNum = nodeInterface.try_blockL1Num(block.number)
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
}