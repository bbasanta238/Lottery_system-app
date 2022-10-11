import ABI from './abi/lottery_system-contract.json'
import {web3} from './custom/index'
let lotteryContract

async function contractConnection() {
    console.log('GetValue')
    // const deployedAddress = process.env.CONTRACT_ADDRESS
    lotteryContract = new web3.eth.Contract(
                ABI,
                gon.contractAddress
    );
    // lotteryContract.methods.openLottery(1, 2, 100, 105).send({from:accounts[0]})
}

export {contractConnection,lotteryContract}