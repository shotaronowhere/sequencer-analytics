import { getSdk } from "../generated/sequencer-analysis";
import { GraphQLClient } from "graphql-request";
import * as csv from 'fast-csv';
import * as fs from 'fs';
const csvStream = csv.format({ headers: true });

var writeStream = fs.createWriteStream("delay.csv");
csvStream.pipe(writeStream).on('end', () => process.exit());

const sdk = getSdk(new GraphQLClient("https://api.thegraph.com/subgraphs/name/shotaronowhere/sequencer-analytics"));


const writeData = async (ts: number) :  Promise<[boolean, number]> => {
    return await sdk.hourlyStats({ts: ts}).then((data) => {
        data.hourlyStats.forEach((hourlyStat) => {
            csvStream.write({delay: hourlyStat.U_NoDelay_Avg, timestamp: hourlyStat.timestamp*3600});
        })
        const isMore = data.hourlyStats.length > 0;
        return [isMore, isMore ? data.hourlyStats[data.hourlyStats.length-1].timestamp : 0];
    })
}

(async ()=> {
    let [isMore, ts] = await writeData(0);
    console.log("written up to ts: ", ts)
    while(isMore) {
        [isMore, ts] = await writeData(ts);
        console.log("written up to ts: ", ts)
    }
    console.log("finished");
})()