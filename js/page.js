function runGame(x) {
    let playerChoice = x;
    let randNumber = Math.floor(Math.random() * 2 + 1);



    console.log(randNumber);
}


// function runGame(x) {
//     let x = playerChoice;

//     let randNumb = Math.floor(Math.random() * 2 + 1);

//     let flipResult; 



//     if (randNumb === 1){
//         flipResult = 'tails';
//     } else {
//         flipResult = 'heads';
//     }

//     let gameResult;

//     if (playerChoice === flipResult){
//         gameResult = 'WIN'
//     } else {
//         flipResult = 'LOSS'
//     }


//     console.log(flipResult);
// }

// let predicition = document.getElementById('prediction');

// let flip = document.getElementById('flip');

// let result = document.getElementById('result');
// result.innerText = gameREsult;