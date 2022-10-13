import { contractConnection,lotteryContract } from "../contract";
import {accounts} from '../custom/index'


async function open(_lotteryNumber, _lotteryPrice, _openTime, _closeTime){
    await contractConnection()
    // console.log("open time: ",_openTime)
    await lotteryContract.methods.openLottery(_lotteryNumber, _lotteryPrice, _openTime, _closeTime).send({from:accounts[0]})
    const results = await lotteryContract.getPastEvents('lotteryOpenEvent',{});
    return(results)
}
    
export {open}