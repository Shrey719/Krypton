// yes i skidded this from ultravoilet-static

"use strict";
const stockSW = "/uv/sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"]


function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");

    throw new Error("Your browser doesn't support service workers.");
  }

   navigator.serviceWorker.register(stockSW);
}


const connection = new BareMux.BareMuxConnection("/baremux/worker.js")
let wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";
connection.setTransport("/epoxy/index.mjs", [{ wisp: wispUrl }]);
registerSW()