import {open} from '../web3/openLottery'



$(document).on('turbo:frame-load',function(){
    $('#openLotterySubmitBtn').on("click",()=>{

    var $inputs = $('#formId :input');

    // get an associative array of just the values.
    var values = {};
    $inputs.each(function() {
        values[this.id] = $(this).val();
    });
    
    values.form_open_time = Date.parse(values.form_open_time)/1000
    values.form_close_time = Date.parse(values.form_close_time)/1000
    console.log(values.form_open_time)
    open(values.form_lottery_number,values.form_lottery_price,values.form_open_time,values.form_close_time)
    })
    
})


