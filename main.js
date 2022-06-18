/*
Red = 1
Blue = 2
Yellow = 3
Gree = 4
*/

let start = document.getElementById('startBtn');
let game = document.querySelector('.main-container');
let redBtn = document.getElementById('redBtn');
let blueBtn = document.getElementById('blueBtn');
let yellowBtn = document.getElementById('yellowBtn');
let greenBtn = document.getElementById('greenBtn');

let gameArray = [];
let playerArray = [];
let score = 0;

let sound1 = new Audio('./sounds/simonSound1.mp3');
let sound2 = new Audio('./sounds/simonSound2.mp3');
let sound3 = new Audio('./sounds/simonSound3.mp3');
let sound4 = new Audio('./sounds/simonSound4.mp3');

start.addEventListener('click', ()=>{
    mainLoop();
});

game.addEventListener('click', (event)=>{
    // console.log(event.target.id);
});

function changeColor(idE, togleClass){
    idE.classList.toggle(togleClass);
    setTimeout(()=>{
        idE.classList.toggle(togleClass);
    },300)
}

function mainLoop() {

    // reseteo del ingreso del usuario
    playerArray = [];

    // 1. Generar numero aleatorio
    let randomNumber = Math.floor(Math.random()*4 + 1)

    // 2. Agregar numero aleatorio al arreglo del juego
    gameArray.push(randomNumber);
    for(let i=0; i<gameArray.length; i++){
        
        setTimeout(()=>{
            switch(gameArray[i]){
                case 1: //Red
                        sound1.play();
                        changeColor(redBtn, 'brightRed');
                    break;
    
                case 2: //Blue
                        sound2.play();
                        changeColor(blueBtn, 'brightBlue');
                    break;
    
                case 3: //Yellow
                        sound3.play();
                        changeColor(yellowBtn, 'brightYellow');
                    break;
    
                case 4: // Green
                        sound4.play();
                        changeColor(greenBtn, 'brightGreen');
                    break;
            }
        }, 500*i);
        
       
    }
    
    
    // 3. Mostrar secuencia
    console.log("Simon Says: " + gameArray);

    // 4. Esperar ingreso
    
}

btnContainer.addEventListener('click', (event)=>{
    let playerChoise = event.srcElement.id;
    let playerElement = event.srcElement;


    switch(playerChoise){
        case 'redBtn':
            sound1.play();
            changeColor(playerElement, 'brightRed');
            break;
        case 'blueBtn':
            sound2.play();
            changeColor(playerElement, 'brightBlue');
            break;
        case 'yellowBtn':
            sound3.play();
            changeColor(playerElement, 'brightYellow');
            break;
        case 'greenBtn':
            sound4.play();
            changeColor(playerElement, 'brightGreen');
            break;
    }

    

    playerArray.push(playerChoise);

    console.log('playerArray' + playerArray)
    console.log('gameArray' + gameArray)
     
    if(playerArray.length == gameArray.length){
        if(compareArrays(playerArray, gameArray)){
            score++
            scoreDiv.innerHTML = score;
            setTimeout(()=>{
                mainLoop();
            }, 500);
        }else{
            message.innerHTML = 'Fallaste'
        }
        
    }else{
        console.log('Esperando')
    }
    
});

function compareArrays(array1, array2){
    for(let i=0; i<= array1.length; i++){
        if (array1[i] != array2[i]) {
            return false;
        }
    }
    return true;
}

function playSound(number){
    let numberSwitch = number;

}