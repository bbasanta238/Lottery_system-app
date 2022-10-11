import { contractConnection,lotteryContract } from "../contract";
import {accounts} from '../custom/index'


async function open(_lotteryNumber, _lotteryPrice, _openTime, _closeTime){
    await contractConnection()
    console.log("open time: ",_openTime)
    lotteryContract.methods.openLottery(_lotteryNumber, _lotteryPrice, _openTime, _closeTime).send({from:accounts[0]})
}
    
export {open}