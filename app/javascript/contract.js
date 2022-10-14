import ABI from './abi/lottery_system-contract.json'
import {web3} from './custom/index'
let lotteryContract

async function contractConnection() {
    // const deployedAddress = process.env.CONTRACT_ADDRESS
    lotteryContract = new web3.eth.Contract(
                ABI,
                gon.contractAddress
    );
}

export {contractConnection,lotteryContract}