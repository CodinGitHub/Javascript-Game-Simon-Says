let gameArray = [];
let playerArray = [];

mainLoop();

function mainLoop() {

    // reseteo del ingreso del usuario
    playerArray = [];

    // 1. Generar numero aleatorio
    let randomNumber = Math.floor(Math.random()*4 + 1)

    // 2. Agregar numero aleatorio al arreglo del juego
    gameArray.push(randomNumber);

    // 3. Mostrar secuencia
    console.log("Simon Says: " + gameArray);

    // 4. Esperar ingreso
    
}

let userInput = (input) => {
    console.log("gameArray.length: " + gameArray.length);
    console.log("playerArray.length " + playerArray.length);

    if (playerArray.length == (gameArray.length-1)){
        //5. Agregar ingreso del usuario al arreglo del usuario
        playerArray.push(input);
        if (playerArray.length < gameArray.length){
            if(compare(playerArray, gameArray) == true){
                mainLoop()
            }else{
                console.log("You Lost");
            }
        }
    }else{
        playerArray.push(input);
    }
}


let compare = (array1, array2) =>{
    // console.log(gameArray);
    console.log(playerArray);
    for(let i=0; i<array1.length ; i++){
        if (array1[i] == array2[i]){
            //
        }else{
            return false
        }
    }
    return true;
}