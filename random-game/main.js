
// select canvas
const cvs = document.getElementById('canvas');

// add a border to cvs
cvs.style.border = '2px solid black';

// game const and let
const FPS = 1000 / 20;
let gameLoop;

// game loop
function cadre() {
    console.log('test')
    let gameLoop

// проверка на столкновение со стеной или телом змеи
    if(hitWall() || hitSelf())  {
        clearInterval
        gameOver()
    }
}

gameLoop = setInterval(cadre, FPS);
