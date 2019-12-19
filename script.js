var colorSquare;

function startGame()
{
    gameArea.start();
    colorSquare = new createColorSquare(50, 100, "red");
}

var gameArea = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.canvas.width = 400;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
    },
}

function createColorSquare(posX, posY, color)
{
    context = gameArea.context;
    context.fillStyle = color;
    context.fillRect(posX, posY, 20, 20);
}
