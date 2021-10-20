let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');
let score1 = document.getElementById("player");
let score2 = document.getElementById("computer");
let write = document.getElementById("cheers");

canvas.width = 600;
canvas.height = 500;

//pobranie wysokości i szerokości obiektów
const Width = canvas.width;
const Height = canvas.height;

let playerScore = 0;
let computerScore = 0;

const ballSize = 18;
let BallX = Width/2 - ballSize/2;
let BallY = Height/2 - ballSize/2;

const gateHeight = 100;
const gateThickness = 15;

const player1 = 40;
const ai1 = 535;

const lineWidth = 5;
const lineHeight = 15;

let player2 = 200;
let ai2 = 200;

let speedX = 3;
let speedY = 3;

function Player (){
    
   ctx.fillStyle = "red";
   ctx.fillRect(player1,player2, gateThickness, gateHeight);
}

function Computer (){
    
   ctx.fillStyle = "blue";
    ctx.fillRect(ai1,ai2, gateThickness, gateHeight);
};

function table (){
    
    ctx.strokeStyle = "white";
    ctx.strokeRect(0,0,600,62.5);

    ctx.strokeStyle = "white";
    ctx.strokeRect(0,437.5,600,437.5);

    ctx.strokeStyle = "white";
    ctx.strokeRect(0,62.5,120,375);

    ctx.strokeStyle = "white";
    ctx.strokeRect(0,62.5,480,375);

    ctx.strokeStyle = "white";
    ctx.strokeRect(120,250,360,187.5);

    for(let i= 10; i<500; i+=42){
        ctx.fillStyle = "lightgray";
        ctx.fillRect(297.5, i, lineWidth, lineHeight);
    }
    
};


function Ball (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    table();

    ctx.fillStyle = "yellow";
    ctx.fillRect(BallX, BallY, ballSize,ballSize);

    BallX = BallX + speedX;
    BallY = BallY + speedY;

    if(BallY <= 0) {
        speedY *= -1;
        BallY = 0;
        acceleration();
    }
    if(BallY >= Height - ballSize) {
        speedY *= -1;
        BallY = Height - ballSize;
        acceleration();
    }
    if(BallX + ballSize >= Width){
        reset(true);
    }
    if(BallX <=0){
        reset(false);
    }

    if((BallX <= player1 + gateThickness)&&(BallX >= player1)&&(BallY + ballSize >= player2)&&(BallY <= player2 + gateHeight)) {
        speedX *= -1;
        BallX = player1 + gateThickness;
        acceleration();
    }

    if((BallX + ballSize >= ai1)&&(ballSize + BallX <= ai1 + gateThickness)&&(BallY + ballSize >= ai2)&&(BallY <= ai2 + gateHeight)){
        speedX *= -1;
        BallX = ai1 - ballSize;
        acceleration();
    }
};

canvasTop = canvas.offsetTop;

let newGame = true;

const positionOfPlayer = (event) =>{
    player2 = event.clientY - canvasTop - gateHeight/2; // aby myszka była na środku 

    if( player2 >= Height - gateHeight ){
        player2 = Height - gateHeight;
        
    }

    if(player2 <= 0){
        player2 = 0;
        
        

    }

  
    
}

const positionOfComputer = () => {

        let middleGate = ai2 + gateHeight/2;
        let middleBall = BallY + ballSize/2;
    
    if(BallX>=300){
        if(middleGate - middleBall > 160){
            console.log("a")
            ai2 -= 15;

        }else if(middleGate - middleBall > 50){
            console.log("b")
            ai2 -=10;

        }else if(middleGate - middleBall < -160){
            console.log("c")
            ai2 += 15;
        }else if(middleGate - middleBall < -50){
            console.log("d")
            ai2 += 10;
        }


    }

    if(BallX<300){
        if(middleGate - middleBall > 90){
            ai2 -= 5; 

        }else if(middleGate - middleBall < -90){
            ai2 += 5;
        }

    }
};

const acceleration = () =>{
    
    speedX *= 1.15;
    speedY *= 1.1;

    if(speedX > 12){
        speedX = 12
    }

    if(speedY > 8){
        speedY = 8;
    }
}

const reset = (anyone) => {
    
    if(anyone){
        score1.textContent = ++playerScore;

    }else{
        score2.textContent = ++computerScore;
    }

    if(playerScore >= 3) {
        alert(`Gratulacje wygranej`);
        location.reload();
    }else if (computerScore >= 3){
        alert(`Niestety, przegrałeś`);
        location.reload();
    }

    newGame = true;


};

const resetBall = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    BallX = player1 + gateThickness;
    BallY = player2 + gateHeight/2 - ballSize/2;
    ctx.fillStyle = "yellow";
    ctx.fillRect(BallX, BallY, ballSize,ballSize);

    canvas.addEventListener("click", startGame);
};

function startGame () {
    
    newGame = false;
    speedX = 2.5;
    speedY = 2.5;
};

// paletki poruszają się tylko do góry, dotykają górnej ścianki wtedy jest git, ALE
// mogą wrócić tylko do swojej początkowej wartości, w dół juz nie idą
// 2 problem zrobiłem funckje acceleartion, przyspiesza piłeczkę ale tylko podczas ruchu myszką 

canvas.addEventListener("mousemove", positionOfPlayer);

const init = () =>{
table()
if(!newGame){
    Ball();
}else{
    resetBall();
}
Player()
Computer()
positionOfComputer();

};
setInterval(init, 1000/60);



