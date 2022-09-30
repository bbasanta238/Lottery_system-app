import { contractConnection,lotteryContract } from "../contract";
import {accounts} from '../custom/index'


async function open(){
    await contractConnection()
    
    lotteryContract.methods.openLottery(1, 2, 100, 105).send({from:accounts[0]})
}
    
export {open}