let start = document.getElementById('startBtn');

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

function mainLoop() {

    // reseteo del ingreso del usuario
    playerArray = [];

    // 1. Generar numero aleatorio
    let randomNumber = Math.floor(Math.random()*4 + 1)

    // 2. Agregar numero aleatorio al arreglo del juego
    gameArray.push(randomNumber);
    for(let i=0; i<gameArray.length; i++){
        
        switch(gameArray[i]){
            case 1:
                    sound1.play();
                break;

            case 2:
                    sound2.play();
                break;

            case 3:
                    sound3.play();
                break;

            case 4:
                    sound4.play();
                break;
        }
       
    }
    
    
    // 3. Mostrar secuencia
    console.log("Simon Says: " + gameArray);

    // 4. Esperar ingreso
    
}

btnContainer.addEventListener('click', (event)=>{
    let playerChoise = event.srcElement.id;
    
    // console.log(playerChoise)
    switch(playerChoise){
        case '1':
            sound1.play();
            break;
        case '2':
            sound2.play();
            break;
        case '3':
            sound3.play();
            break;
        case '4':
            sound4.play();
            break;
    }

    playerArray.push(playerChoise);
     
    if(playerArray.length == gameArray.length){
        if(compareArrays(playerArray, gameArray)){
            score++
            scoreDiv.innerHTML = score;
            mainLoop();
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