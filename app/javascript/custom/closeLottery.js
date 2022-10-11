import {currentLotteryInfo} from '../web3/closeLottery'


$(document).on('turbo:frame-load',async function(){
    let lotteryInfo = await currentLotteryInfo(1)
    // let lotteryInfo = await currentLotteryInfo(2)
    console.log(lotteryInfo)
    $('#lotteryPrice').html(lotteryInfo[0])
    $('#openTime').html(convertDate(lotteryInfo[1]))
    $('#closeTime').html(convertDate(lotteryInfo[2]))
    $('#isOpen').html(changeBoolean(lotteryInfo[3]))
    $('#isWinnerSelected').html(changeBoolean(lotteryInfo[4]))
})

function convertDate(_epochTime){
    return (new Date(_epochTime * 1000)).toLocaleString()
}


function changeBoolean(_inputboolean){
    console.log(_inputboolean)
    if(_inputboolean == true){
        return 'Yes'
    }else{
        return 'No'
    }
}