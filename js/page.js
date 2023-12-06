function runGame(x) {
    let playerChoice = x;
    let randNumber = Math.floor(Math.random() * 2 + 1);
    let flipResult;
    if (randNumber === 1) {
        flipResult = 'tails';
    } else {
        flipResult = 'heads';
    }

    let gameResult;
    if (playerChoice === flipResult){
          gameResult = 'WIN';
          } else {
          gameResult = 'LOSS';
        }


     let prediction = document.getElementById('prediction');
     let flip = document.getElementById('flip');
     let result = document.getElementById('result');

     prediction.innerText = playerChoice;
     flip.innerText = flipResult;
     result.innerText = gameResult;
}
