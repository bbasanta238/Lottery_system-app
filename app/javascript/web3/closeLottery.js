import { contractConnection,lotteryContract } from "../contract";
import {accounts} from '../custom/index'

// lottery info function
async function currentLotteryInfo(_lotteryNumber){
    await contractConnection()
    return await lotteryContract.methods.getLotteryInfo(1).call()
}
// function to get particpants info
async function participants(){
    await contractConnection()
    console.log('here', await lotteryContract.methods.getLotteryParticipants().call())
}

export {currentLotteryInfo,participants}