import Web3 from 'web3';
$(async function(){
    let message
    let accounts
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(await Web3.givenProvider)
        console.log("this is provider : ", web3)
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        message = `Your want to Login in this website via account ${accounts[0]}`
        let signature = await web3.eth.personal.sign(message,accounts[0])
        console.log("signature : ",signature)
    }else{
        alert("Please install metamask");   
    }
    if(accounts.length){
        $("#loginId").html(accounts[0])
        $('#logoutId').removeClass('d-none')
    }
})