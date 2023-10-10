
// select canvas
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

// add a border to cvs
cvs.style.border = '1px solid black';

// cvs  measuring
const width = cvs.width;
const height = cvs.height;

// game const and let
const FPS = 1000 / 20;
let gameLoop;

//colors game
let boardColor = 'blue'

//рисуем поле для змеи
function paintBoard () {
    ctx.fillStyle = boardColor
    ctx.fillRect(0, 0, width, height)
}

// game loop
function cadre() {
    paintBoard();
    //paintFood();
    //movSnake();
    //paintSnake();
    //renderScore();

// проверка на столкновение со стеной и телом змеи
    if(hitWall() || hitSelf())  {
        clearInterval
        gameOver()
        
    }
}

gameLoop = setInterval(cadre, FPS);
