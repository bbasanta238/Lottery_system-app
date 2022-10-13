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

// function to select winner
async function selectLotteryWinner(_invokedTime){
    await contractConnection()
    await lotteryContract.methods.selectWinner(_invokedTime).send({from: accounts[0]})
    const winnerResults = await lotteryContract.getPastEvents('transferredToWinner',{});
    console.log("here are events of winner lottery :", winnerResults.events)
    // const managerResults= await lotteryContract.getPastEvents('transferredToManager',{});
    // console.log("here are events of winner lottery :", managerResults)
    return(winnerResults)
}

// function to close lottery
async function closeCurrentLottery(_invokedTime){
    await contractConnection()
    await lotteryContract.methods.closeLottery(_invokedTime).send({from:accounts[0]})
}

// get lottery owner Address
async function lotteryOwner(){
    await contractConnection()
    console.log("the lottery owner : ", await lotteryContract.methods.owner().call())
}

export {currentLotteryInfo,participants,selectLotteryWinner,closeCurrentLottery,lotteryOwner}