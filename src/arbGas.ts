import { getSdk } from "../generated/arb-gas";
import { GraphQLClient } from "graphql-request";
import * as csv from 'fast-csv';
import * as fs from 'fs';
const csvStream = csv.format({ headers: true });

var writeStream = fs.createWriteStream("gas.csv");
csvStream.pipe(writeStream).on('end', () => process.exit());

const sdk = getSdk(new GraphQLClient("https://api.thegraph.com/subgraphs/name/shotaronowhere/arb-gas-analytics-sparse"));


const writeData = async (block: number) :  Promise<[boolean, number]> => {
    return await sdk.blockInfos({block: block}).then((data) => {
        data.blockInfos.forEach((blockInfo) => {
            csvStream.write({timestamp: blockInfo.timestamp, l2GasPrice: blockInfo.l2GasPrice, l1GasPrice: blockInfo.l1GasPrice, l1PricingSurplus: blockInfo.l1PricingSurplus, l2GasBacklog: blockInfo.gasBlocklog});
        })
        const isMore = data.blockInfos.length > 0;
        return [isMore, isMore ? data.blockInfos[data.blockInfos.length-1].blockNumber : 0];
    })
}

(async ()=> {
    let [isMore, blockNumber] = await writeData(0);
    console.log("written up to blockNumber: ", blockNumber)
    while(isMore) {
        [isMore, blockNumber] = await writeData(blockNumber);
        console.log("written up to blockNumber: ", blockNumber)
    }
    console.log("finished");
})()