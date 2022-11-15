import { open } from "../web3/openLottery";
import { web3 } from "../custom/index";

$(document).on("turbo:frame-load", function () {
  $("#openLotterySubmitBtn").on("click", async () => {
    var $inputs = $("#formId :input");
    // get an associative array of just the values.
    var values = {};
    $inputs.each(function () {
      values[this.id] = $(this).val();
    });
    values.form_open_time = Date.parse(values.form_open_time) / 1000;
    values.form_close_time = Date.parse(values.form_close_time) / 1000;
    form_lottery_price = web3.utils.toBN(values.form_lottery_price * 10 ** 18);
    $("#openLotteryContainer").addClass("d-none");
    $("#spinner").removeClass("d-none");
    let event = await open(
      values.form_lottery_number,
      form_lottery_price,
      values.form_open_time,
      values.form_close_time
    );
    if (event) {
      $("#openLotteryContainer").removeClass("d-none");
      $("#spinner").addClass("d-none");
      alert(
        "Lottery Price: " +
          event[0].returnValues._price +
          " Lottery Opening Time: " +
          event[0].returnValues._openTime
      );
    } else {
      window.location.href = "/";
    }
  });
});
