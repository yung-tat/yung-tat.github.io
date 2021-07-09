var gameState = false;

var counter = 0;

var r = "RC";
var p = "PC";
var s = "SC";

function reset() {
  var resultPic = document.getElementById("RR");
  resultPic.classList.remove("show");
  resultPic = document.getElementById("PR");
  resultPic.classList.remove("show");
  resultPic = document.getElementById("SR");
  resultPic.classList.remove("show");
  gameState = false;
}

function showWatamePicture(value) {
  var watame = document.getElementById("WATAME");
  watame.style.opacity = value;
}

function selectChoice(choice) {
  if (!gameState) {
    var result = "";
    if (choice === "RC") {
      result = "PR";
    } else if (choice === "PC") {
      result = "SR";
    } else if (choice === "SC") {
      result = "RR";
    }
    var resultPic = document.getElementById(result);
    resultPic.classList.add("show");
    gameState = true;
    counter += 0.05;
    showWatamePicture(counter);
  } else {
    reset();
    selectChoice(choice);
  }
}
