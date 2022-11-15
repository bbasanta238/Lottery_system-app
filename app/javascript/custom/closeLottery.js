import {
  currentLotteryInfo,
  participants,
  selectLotteryWinner,
  closeCurrentLottery,
  lotteryOwner,
} from "../web3/closeLottery";

$(document).on("turbo:frame-load", async function () {
  let lotteryInfo = await currentLotteryInfo(1);
  await lotteryOwner();
  // element of Lottery Info
  $("#lotteryPrice").html(lotteryInfo[0]);
  $("#openTime").html(convertDate(lotteryInfo[1]));
  $("#closeTime").html(convertDate(lotteryInfo[2]));
  $("#isWinnerSelected").html(changeBoolean(lotteryInfo[4]));

  if (lotteryInfo[2] > Date.now() / 1000) {
    $("#isOpen").html("Yes");
  } else {
    $("#isOpen").html("No");
  }

  // elements of participant
  $("#showParticipant").on("click", async () => {
    let lotteryParticipant = await participants();
    var table_body = '<table border="1">';
    for (var i = 0; i < lotteryParticipant.length; i++) {
      table_body += "<tr>";
      table_body += "<td>";
      table_body += i + 1;
      table_body += "</td>";
      table_body += "<td>";
      table_body += lotteryParticipant[i];
      table_body += "</td>";
      table_body += "</tr>";
    }
    table_body += "</table>";
    $("#tableDiv").html(table_body);
  });
  if (lotteryInfo[2] < parseInt(Date.now() / 1000) && lotteryInfo[4] == false) {
    $("#selectWinnerBtn").removeClass("d-none");
  }

  $("#selectWinnerBtn").on("click", async () => {
    $("#closeCard").addClass("d-none");
    $("#spinner").removeClass("d-none");
    let res = await selectLotteryWinner(parseInt(Date.now() / 1000));
    if (res) {
      $("#spinner").addClass("d-none");
      $("#closeCard").removeClass("d-none");
      $("#selectWinnerBtn").removeClass("d-none");
      $("#closeLotteryBtn").removeClass("d-none");
      alert("Winner " + res[0].returnValues._winnerAddress);
    }
  });
  if (lotteryInfo[4] == true) {
    $("#closeLotteryBtn").removeClass("d-none");
  }
  $("#closeLotteryBtn").on("click", async () => {
    console.log(await closeCurrentLottery(parseInt(Date.now() / 1000)));
  });
});

function convertDate(_epochTime) {
  return new Date(_epochTime * 1000).toLocaleString();
}

function changeBoolean(_inputboolean) {
  if (_inputboolean == true) {
    return "Yes";
  } else {
    return "No";
  }
}

export { convertDate, changeBoolean };
