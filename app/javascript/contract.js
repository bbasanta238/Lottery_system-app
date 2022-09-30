import ABI from './abi/lottery_system-contract.json'
import {web3} from './custom/index'
let lotteryContract

async function contractConnection() {
    console.log('GetValue')
    // const deployedAddress = process.env.CONTRACT_ADDRESS
    lotteryContract = new web3.eth.Contract(
                ABI,
                "0x86215A622796C8d93fff2795f3b43E50d902951C"
    );
    // lotteryContract.methods.openLottery(1, 2, 100, 105).send({from:accounts[0]})
}

export {contractConnection,lotteryContract}