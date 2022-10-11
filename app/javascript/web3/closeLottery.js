import { contractConnection,lotteryContract } from "../contract";
import {accounts} from '../custom/index'


async function currentLotteryInfo(_lotteryNumber){
    await contractConnection()
    
    return await lotteryContract.methods.getLotteryInfo(_lotteryNumber).call()
}
    
export {currentLotteryInfo}