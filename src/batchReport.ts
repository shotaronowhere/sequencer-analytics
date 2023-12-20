import { createPublicClient, http, transactionType } from 'viem'
import { mainnet } from 'viem/chains'
import * as csv from 'fast-csv';
import * as fs from 'fs';
const csvStream = csv.format({ headers: true });

var writeStream = fs.createWriteStream("batchReport.csv");
csvStream.pipe(writeStream).on('end', () => process.exit());


(async () => {
    const client = createPublicClient({
        chain: mainnet,
        transport: http('https://arb1.arbitrum.io/rpc'),        
      })

    for (let i = 160357216; i < 160387480; i++) {
        const block = await client.getBlock({
            blockNumber: BigInt(i)
        });
        console.log('block: ', i)
        if (block.transactions.length == 2) {
            const transaction = await client.getTransaction({
                blockNumber: BigInt(i), 
                index: 1
              })
            if (transaction.from == '0x00000000000000000000000000000000000a4b05' && transaction.input.slice(0, 10) == '0xb6693771'){
                
                console.log('found potential batch report bn: ', i, ' tx: ', transaction.hash);
                const batchTimestamp = Number('0x'+transaction.input.slice(10, 74));
                const batchPosterAddress = '0x'+transaction.input.slice(98, 138);
                const batchNumber = Number('0x'+transaction.input.slice(138, 202));
                const batchDataGas = Number('0x'+transaction.input.slice(202, 266));
                const l1BaseFeeWei = Number('0x'+transaction.input.slice(266, 330));
                const delay = batchTimestamp - Number(block.timestamp);

                console.log("Batch timestamp: ", batchTimestamp);
                console.log("Batch poster address: ", batchPosterAddress);
                console.log("Batch number: ", batchNumber);
                console.log("Batch data gas: ", batchDataGas);
                console.log("L1 base fee wei: ", l1BaseFeeWei);
                console.log("Txn Hash: ", transaction.hash);
                csvStream.write({l2bn: i, l2ts: block.timestamp, batchTimestamp: batchTimestamp, delay: delay, batchPosterAddress: batchPosterAddress, batchNumber: batchNumber, batchDataGas: batchDataGas, l1BaseFeeWei: l1BaseFeeWei, hash: transaction.hash});
            }
        }
    }
})();