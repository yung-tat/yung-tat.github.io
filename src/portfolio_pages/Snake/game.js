// Get Canvas and Context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Screen Object
var Screen = {
  pSize: 20,
  sWidth: 20,
  sHeight: 20
};

// Set Canvas dimensions to Screen dimensions
canvas.width = Screen.pSize * Screen.sWidth;
canvas.height = Screen.pSize * Screen.sHeight;

// Clear Screen function
function clearScreen() {
  canvas.height = Screen.pSize * Screen.sHeight;
}

// Clamp function
function flipClamp(target, min, max) {
  if (target < min) {
    return max;
  } else if (target > max) {
    return min;
  } else {
    return target
  }
}

// Player Body Object
function PlayerBody() {
  this.xCoord = 0;
  this.yCoord = 0;
  this.lxCoord = 0;
  this.lyCoord = 0;
  this.direction = 'right';
}

// Create Player Array
var playerArray = [new PlayerBody()];

// Move player
function movePlayer() {
  // Save Last Coords
  playerArray[0].lxCoord = playerArray[0].xCoord;
  playerArray[0].lyCoord = playerArray[0].yCoord;
  // Move Head
  if (playerArray[0].direction == 'down') {
    playerArray[0].yCoord += Screen.pSize;
  } else if (playerArray[0].direction == 'left') {
    playerArray[0].xCoord -= Screen.pSize;
  } else if (playerArray[0].direction == 'right') {
    playerArray[0].xCoord += Screen.pSize;
  } else {
    playerArray[0].yCoord -= Screen.pSize;
  }
  playerArray[0].xCoord = flipClamp(playerArray[0].xCoord, 0, Screen.pSize * Screen.sWidth - Screen.pSize);
  playerArray[0].yCoord = flipClamp(playerArray[0].yCoord, 0, Screen.pSize * Screen.sHeight - Screen.pSize);
  // Move Rest of Body
  for (var i = playerArray.length - 1; i >= 1; i--) {
    playerArray[i].lxCoord = playerArray[i].xCoord;
    playerArray[i].lyCoord = playerArray[i].yCoord
    playerArray[i].xCoord = playerArray[i - 1].xCoord;
    playerArray[i].yCoord = playerArray[i - 1].yCoord;
  }
}

document.onkeydown = checkKey;

// Key Listener
function checkKey() {
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            playerArray[0].direction = 'left';
            break;
        case 38:
            playerArray[0].direction = 'up';
            break;
        case 39:
            playerArray[0].direction = 'right';
            break;
        case 40:
            playerArray[0].direction = 'down';
            break;
    }
};
}

// Render the player
function renderPlayer() {
  ctx.fillStyle = "Black";
  // Render the player array
  for (var i = 0; i < playerArray.length; i++) {
    var x = playerArray[i].xCoord;
    var y = playerArray[i].yCoord;
    ctx.fillRect(x, y, 20, 20);
  }
}

// Get Randome Number
function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

var pointExists = false;
var point = {
  xCoord: 0,
  yCoord: 0
};

function spawnPoint() {
  while (!pointExists) {
    var x = Math.floor(randomNum(0, Screen.sWidth - 0.1)) * 20;
    var y = Math.floor(randomNum(0, Screen.sHeight - 0.1)) * 20;
    for (var i = 0; i < playerArray.length; i++) {
      if (x != playerArray[i].xCoord && y != playerArray[i].yCoord) {
        point.xCoord = x;
        point.yCoord = y;
        pointExists = true;
      }
    }
    //console.log(point.xCoord);
    //console.log(point.yCoord);
  }
}

function renderPoint() {
  ctx.fillStyle = "Red";
  ctx.fillRect(point.xCoord - 2, point.yCoord - 2, Screen.pSize + 4, Screen.pSize + 4);
}

var addNewBody = true;

function addBody() {
  if (addNewBody) {
    var newBody = new PlayerBody();
    newBody.xCoord = playerArray[playerArray.length - 1].lxCoord;
    newBody.yCoord = playerArray[playerArray.length - 1].lyCoord;
    //console.log(playerArray[playerArray.length - 1].lxCoord);
    //console.log(playerArray[playerArray.length - 1].lyCoord);
    playerArray.push(newBody);
    addNewBody = false;
  }
}

function checkCollision() {
  // Check Point Collision
  if (point.xCoord == playerArray[0].xCoord && point.yCoord == playerArray[0].yCoord) {
    pointExists = false;
    addNewBody = true;
  }
  // Check Body Collision
  for (var i = 2; i < playerArray.length; i++) {
    if (playerArray[i].xCoord == playerArray[0].xCoord && playerArray[i].yCoord == playerArray[0].yCoord) {
      gameOver = true;
    }
  }
}

function checkLoss() {
  if (gameOver) {
    clearInterval(gameLoop);
  }
}

// Game Loop Function
function gameFrame() {
  clearScreen();
  spawnPoint();
  renderPoint();
  checkKey();
  movePlayer();
  addBody();
  checkCollision();
  renderPlayer();
  checkLoss();
}

var gameOver = false;

// Run Game
var gameLoop = setInterval(gameFrame, 150);
