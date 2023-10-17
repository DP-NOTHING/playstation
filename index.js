let button = document.querySelector(".button");
let buttonText = document.querySelector(".button p");
let thankText = document.querySelector(".button p:last-child");

let timeLine = new TimelineMax({
  paused: false
});

button.addEventListener("click", () => {
  timeLine
    .to(buttonText, 0.6, {
      opacity: 0
    })
    .to(button, 0.8, {
      height: 0.2,
      opacity: 0.5,
      boxShadow: "0px 0px 35px 7px #cd28fa",
      delay: 0.15
    })
    .to(button, 0.1, {
      opacity: 0.5,
      background: "#26ff92"
    })
    .to(button, 0, {
      width: 1,
      delay: 0.15
    })
    .to(button, 0.1, {
      boxShadow: "0px 0px 100px 55px #fa2856",
      y: 90,
      height: 100,
      delay: 0.23
    })
    .to(button, 0.3, {
      height: 1000,
      y: -1500,
      boxShadow: "0px 0px 85px 17px #fa2856",
      delay: 0.2
    })
    .to(".thank", 1, {
      opacity: 1,
      delay: 0.3
    });
});
let button2 = document.querySelector(".button2");
let button2Text = document.querySelector(".button2 p");
let thank2Text = document.querySelector(".button2 p:last-child");

let timeLine2 = new TimelineMax({
  paused: false
});

button2.addEventListener("click", () => {
  timeLine
    .to(button2Text, 0.6, {
      opacity: 0
    })
    .to(button2, 0.8, {
      height: 0.2,
      opacity: 0.5,
      boxShadow: "0px 0px 35px 7px #cd28fa",
      delay: 0.15
    })
    .to(button2, 0.1, {
      opacity: 0.5,
      background: "#26ff92"
    })
    .to(button2, 0, {
      width: 1,
      delay: 0.15
    })
    .to(button2, 0.1, {
      boxShadow: "0px 0px 100px 55px #fa2856",
      y: 90,
      height: 100,
      delay: 0.23
    })
    .to(button2, 0.3, {
      height: 1000,
      y: -1500,
      boxShadow: "0px 0px 85px 17px #fa2856",
      delay: 0.2
    })
    .to(".thank2", 1, {
      opacity: 1,
      delay: 0.3
    });
});

let button1 = document.querySelector(".button1");
let button1Text = document.querySelector(".button1 p");
let thank1Text = document.querySelector(".button1 p:last-child");

let timeLine1 = new TimelineMax({
  paused: false
});

button1.addEventListener("click", () => {
  timeLine
    .to(button1Text, 0.6, {
      opacity: 0
    })
    .to(button1, 0.8, {
      height: 0.2,
      opacity: 0.5,
      boxShadow: "0px 0px 35px 7px #cd28fa",
      delay: 0.15
    })
    .to(button1, 0.1, {
      opacity: 0.5,
      background: "#26ff92"
    })
    .to(button1, 0, {
      width: 1,
      delay: 0.15
    })
    .to(button1, 0.1, {
      boxShadow: "0px 0px 100px 55px #fa2856",
      y: 90,
      height: 100,
      delay: 0.23
    })
    .to(button1, 0.3, {
      height: 1000,
      y: -1500,
      boxShadow: "0px 0px 85px 17px #fa2856",
      delay: 0.2
    })
    .to(".thank1", 1, {
      opacity: 1,
      delay: 0.3
    });
});
let button3 = document.querySelector(".button3");
let button3Text = document.querySelector(".button3 p");
let thank3Text = document.querySelector(".button3 p:last-child");

let timeLine3 = new TimelineMax({
  paused: false
});

button3.addEventListener("click", () => {
  timeLine
    .to(button3Text, 0.6, {
      opacity: 0
    })
    .to(button3, 0.8, {
      height: 0.2,
      opacity: 0.5,
      boxShadow: "0px 0px 35px 7px #cd28fa",
      delay: 0.15
    })
    .to(button3, 0.1, {
      opacity: 0.5,
      background: "#26ff92"
    })
    .to(button3, 0, {
      width: 1,
      delay: 0.15
    })
    .to(button3, 0.1, {
      boxShadow: "0px 0px 100px 55px #fa2856",
      y: 90,
      height: 100,
      delay: 0.23
    })
    .to(button3, 0.3, {
      height: 1000,
      y: -1500,
      boxShadow: "0px 0px 85px 17px #fa2856",
      delay: 0.2
    })
    .to(".thank3", 1, {
      opacity: 1,
      delay: 0.3
    });
});
let button4 = document.querySelector(".button4");
let button4Text = document.querySelector(".button4 p");
let thank4Text = document.querySelector(".button4 p:last-child");

let timeLine4 = new TimelineMax({
  paused: false
});

button4.addEventListener("click", () => {
  timeLine
    .to(button4Text, 0.6, {
      opacity: 0
    })
    .to(button4, 0.8, {
      height: 0.2,
      opacity: 0.5,
      boxShadow: "0px 0px 35px 7px #cd28fa",
      delay: 0.15
    })
    .to(button4, 0.1, {
      opacity: 0.5,
      background: "#26ff92"
    })
    .to(button4, 0, {
      width: 1,
      delay: 0.15
    })
    .to(button4, 0.1, {
      boxShadow: "0px 0px 100px 55px #fa2856",
      y: 90,
      height: 100,
      delay: 0.23
    })
    .to(button4, 0.3, {
      height: 1000,
      y: -1500,
      boxShadow: "0px 0px 85px 17px #fa2856",
      delay: 0.2
    })
    .to(".thank4", 1, {
      opacity: 1,
      delay: 0.3
    });
});
let button5 = document.querySelector(".button5");
let button5Text = document.querySelector(".button5 p");
let thank5Text = document.querySelector(".button5 p:last-child");

let timeLine5 = new TimelineMax({
  paused: false
});

button5.addEventListener("click", () => {
  timeLine
    .to(button5Text, 0.6, {
      opacity: 0
    })
    .to(button5, 0.8, {
      height: 0.2,
      opacity: 0.5,
      boxShadow: "0px 0px 35px 7px #cd28fa",
      delay: 0.15
    })
    .to(button5, 0.1, {
      opacity: 0.5,
      background: "#26ff92"
    })
    .to(button5, 0, {
      width: 1,
      delay: 0.15
    })
    .to(button5, 0.1, {
      boxShadow: "0px 0px 100px 55px #fa2856",
      y: 90,
      height: 100,
      delay: 0.23
    })
    .to(button5, 0.3, {
      height: 1000,
      y: -1500,
      boxShadow: "0px 0px 85px 17px #fa2856",
      delay: 0.2
    })
    .to(".thank5", 1, {
      opacity: 1,
      delay: 0.3
    });
});
