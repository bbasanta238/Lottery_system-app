import { contractConnection,lotteryContract } from "../contract";
import {web3,accounts} from '../custom/index'


async function apply(_applyTime,_lotteryPrice){
    await contractConnection()

    // console.log("open time: ",_openTime)
    await lotteryContract.methods.applyLottery(_applyTime).send({from:accounts[0], value: _lotteryPrice})
}
    
export {apply}