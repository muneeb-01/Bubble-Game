var start = document.querySelector("#b-panel #b1");
var time = 10;
var hit = 0;
var scr = 0;

function play() {
  function makeBubbles() {
    var clutter = "";

    for (var i = 1; i <= 152; i++) {
      var rn = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#b-panel").innerHTML = clutter;
  }

  function runtime() {
    var timer = setInterval(() => {
      if (time > 0) {
        time--;
        document.querySelector("#timerval").textContent = time;
      } else {
        clearInterval(timer);
        var finalScr = `<H2>Your final score is : ${scr}</H2>`;
        document.querySelector("#b-panel").innerHTML = finalScr;
      }
    }, 1000);
  }

  function hitval() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#Hitval").textContent = hit;
  }

  function scrval() {
    scr += 10;
    document.querySelector("#scrval").textContent = scr;
  }

  document
    .querySelector("#b-panel")
    .addEventListener("click", function target(dets) {
      var t = Number(dets.target.textContent);
      if (t === hit) {
        scrval();
        makeBubbles();
        hitval();
      }
    });

  runtime();
  makeBubbles();
  hitval();
}

start.addEventListener("click", function () {
  start.style.display = "none";
  play();
});
