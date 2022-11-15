import { currentLotteryInfo } from "../web3/closeLottery";
import { convertDate } from "./closeLottery";
import { apply } from "../web3/applyLottery";

$(document).on("turbo:load", async () => {
  let lotteryInfo = await currentLotteryInfo(1);
  $("#lotteryPrice").html(lotteryInfo[0]);
  $("#openTime").html(convertDate(lotteryInfo[1]));
  $("#closeTime").html(convertDate(lotteryInfo[2]));
  if (lotteryInfo[3] == true) {
    $("#applyLotteryButton").removeClass("d-none");
  }
  if (lotteryInfo[2] > Date.now() / 1000) {
    $("#applyLotteryButton").removeClass("disabled");
  }

  $("#applyLotteryButton").on("click", async () => {
    let _appyTime = Date.parse(new Date()) / 1000;
    $("#applyContainer").addClass("d-none");
    $("#spinner").removeClass("d-none");
    var event = await apply(_appyTime, lotteryInfo[0]);
    if (event) {
      $("#spinner").addClass("d-none");
      $("#applyContainer").removeClass("d-none");
      alert("Applied Time : " + res[0].returnValues._appliedTime);
    }
  });
});
