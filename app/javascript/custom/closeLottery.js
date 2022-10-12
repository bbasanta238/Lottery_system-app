import {currentLotteryInfo,participants,selectLotteryWinner,closeCurrentLottery,lotteryOwner} from '../web3/closeLottery'


$(document).on('turbo:frame-load',async function(){
    let lotteryInfo = await currentLotteryInfo(1)
    await lotteryOwner()


    // element of Lottery Info
    $('#lotteryPrice').html(lotteryInfo[0])
    $('#openTime').html(convertDate(lotteryInfo[1]))
    $('#closeTime').html(convertDate(lotteryInfo[2]))
    $('#isOpen').html(changeBoolean(lotteryInfo[3]))
    $('#isWinnerSelected').html(changeBoolean(lotteryInfo[4]))


    // elements of participant
    //  await participants() 
    // console.log("the participants",participantInfo)

    /**
     * button of select winner
     */
    console.log("date",parseInt(Date.now()/1000))
    if(lotteryInfo[2]<(parseInt((Date.now())/1000))){
        $('#selectWinnerBtn').removeClass('d-none')
    }

    $('#selectWinnerBtn').on('click',async ()=>{
        console.log(await selectLotteryWinner(parseInt((Date.now())/1000)))
    })

    /**
     * button of close Lottery
     */
    if(lotteryInfo[4]==true){
        $('#closeLotteryBtn').removeClass('d-none')
    }

    $('#closeLotteryBtn').on('click',async ()=>{
        console.log(await closeCurrentLottery(parseInt((Date.now())/1000)))
    })
})

function convertDate(_epochTime){
    return (new Date(_epochTime * 1000)).toLocaleString()
}


function changeBoolean(_inputboolean){
    if(_inputboolean == true){
        return 'Yes'
    }else{
        return 'No'
    }
}

export {convertDate, changeBoolean}