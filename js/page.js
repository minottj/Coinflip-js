function runGame(x) {
    let playerChoice = x;
    let randNumber = Math.floor(Math.random() * 2 + 1);
    let flipResult;



    
    if (randNumber === 1) {
        flipresult = 'tails';
    } else {
        flipresult ='heads';
    }

    let gameResult;
    if (playerChoice === flipResult){
          gameResult = 'WIN';
          } else {
          gameResult = 'LOSS';
        }

     console.log(flipResult);

     let predicition = document.getElementById ('prediction');
     let flip = document.getElementById ('flip');
    //  let result = document.getElementById ('flip');
    //  result.innerText = gameResult;
}
