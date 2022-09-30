import Web3 from 'web3';
// import ABI from './ABI.json'
import {open} from '../web3/openLottery'

let web3 
let accounts


$(async function(){
    if (typeof window.ethereum !== 'undefined') {
       
        web3= new Web3(await Web3.givenProvider)
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        message = `Your want to Login in this website via account ${accounts[0]}`

        if (await checkSignature(message)){
            login()
        }   
        
        $('#openLotteryId').on("click",()=>{
            open()
        })
    }else{
        alert("Please install metamask");   
    }
})


$(document).on('turbo:load',function(){
    // console.log('type of accounts : ', typeof(accounts))
    login() 
         
})


// function to change the login and logout
const login = ()=>{
    if((typeof(accounts) != "undefined") && accounts.length ){
        console.log('account is : ', accounts[0])
        $("#loginId").html(accounts[0])
        $('#logoutId').removeClass('d-none')
    }  
}


// function to check signature
const checkSignature = async(message)=>{
    console.log("localstorage from",window.localStorage.getItem('signature'))
    if((localStorage.getItem('signature'))=='true')
    {
        return true
    }
    else{
        await web3.eth.personal.sign(message,accounts[0])
        localStorage.setItem('signature','true');
        return true
    }
}

export {web3 , accounts}


// async function getvalue() {
//     console.log('GetValue')
//     // const deployedAddress = process.env.CONTRACT_ADDRESS
//     const lotteryContract = new web3.eth.Contract(
//                 ABI,
//                 "0x86215A622796C8d93fff2795f3b43E50d902951C"
//     );
//     lotteryContract.methods.openLottery(1, 2, 100, 105).send({from:accounts[0]})
//     }

    
    // contractFirst.methods.getValue().call().then(function (result) {                
    //     $('#getValue').html(result)
    // });
