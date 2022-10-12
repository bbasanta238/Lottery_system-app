// Entry point for the build script in your package.json
// import { Turbo } from "@hotwired/turbo-rails"
// Turbo.session.drive = false
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

// js library
import "./src/jquery"
import "./src/web3"

// custom js for metamask connection
import "./custom/index"

// custom js for the DOM access 
import "./custom/openLotteryForm"
import "./custom/closeLottery"
import "./custom/applyLottery"





