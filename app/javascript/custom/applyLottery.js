import {currentLotteryInfo} from '../web3/closeLottery'
import {convertDate} from './closeLottery'
import {apply} from '../web3/applyLottery'

$(document).on('turbo:load',async ()=>{
   
    let lotteryInfo = await currentLotteryInfo(1)
    console.log(lotteryInfo)
    $('#lotteryPrice').html(lotteryInfo[0])
    $('#openTime').html(convertDate(lotteryInfo[1]))
    $('#closeTime').html(convertDate(lotteryInfo[2]))

    if(lotteryInfo[3] == true){
        $('#applyLotteryButton').removeClass('d-none')
    }

    $('#applyLotteryButton').on('click',()=>{
        let _appyTime = Date.parse(new Date())/1000
        // console.log(_appyTime)
        apply(_appyTime,lotteryInfo[0])
    })
})