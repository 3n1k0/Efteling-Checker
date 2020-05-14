const rp = require("request-promise");
const url = "https://www.efteling.com/en/park/tickets";

function yo() {
  rp.post("http://api.justyo.co/yo/", {
    form: {
      api_token: "01bd8b34-faf7-463e-8948-aae13f01ae5d",
      username: "ANNIEKOSTOLANY",
      link: url,
    },
  });
}

function check() {
  rp(url).then(function (html) {
    if (
      html.includes(
        "Currently we are working on a reservation system to reserve your visit to Efteling. Keep an eye on the website for more information."
      )
    ) {
      console.log("Meg mindig benne van.");
    } else {
      console.log("nincsbenne");
      yo();
    }
  });
}

console.log("Starting...");

check();

setInterval(() => {
  check();
}, 300000);
