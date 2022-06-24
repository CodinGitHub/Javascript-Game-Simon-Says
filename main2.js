let gameArray = [1,2,3,4,5];

let gameObject = {
    'redBtn': function play(){
        console.log(1)
    },
}

btnContainer.addEventListener('click', (event)=>{
    let playerChoise = event.srcElement.id;
    let playerElement = event.srcElement;
    console.log(gameObject[playerChoise])
});