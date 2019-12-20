var initialPosX = 50;
var initialPosY = 100;
var squareDefaultWidth = 20;
var squareDefaultHeight = 20;
var squareDefaultSpeed = 2;
var squareDefaultColor = "red";

var arrayOfSquares = [];

var gameArea = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 16);
    },
    clear : function()
    {
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
}

function startGame()
{
    gameArea.start();

    var newSquare = new Square(initialPosX,initialPosY,squareDefaultSpeed,squareDefaultColor);
    newSquare.drawSquare();
    arrayOfSquares.push(newSquare);
}


function updateGameArea()
{
    gameArea.clear();
    arrayOfSquares[0].positionY+=1;
    arrayOfSquares[0].drawSquare();
}

function Square(positionX, positionY, speed, color) 
{
    this.positionX = positionX;
    this.positionY = positionY;
    this.speed = speed;
    this.color = color;

    this.drawSquare = function()
    {
        gameArea.context.fillStyle = this.color;
        gameArea.context.fillRect(this.positionX, this.positionY, squareDefaultWidth, squareDefaultHeight);
    }
}
