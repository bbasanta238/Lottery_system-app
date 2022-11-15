import { accounts, web3 } from "./index";

$(document).on("turbo:load", async () => {
  console.log("signup");
  $("#registrationBtn").on("click", (e) => {
    console.log("pressed");
    e.preventDefault();
    $("#new_user").append(
      `<input type="hidden" name="user[wallet_address]" value="${accounts[0]}">`
    );
    console.log($("#new_user"));
    // e.preventDefault();
    $("#new_user").trigger("submit");
  });
});
