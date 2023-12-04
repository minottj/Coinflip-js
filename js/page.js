function runGame(x) {
    let playerChoice = x;
    let randNumber = Math.floor(Math.random() * 2 + 1);



    console.log(randNumber);
    
    if(randNumber===1){
        flipresult = 'tails';
    } else {
        flipresult ='heads';
    }

    let gameResult;
    if (playerChoice === flipResult){
          gameResult = 'WIN'
          } else {
          flipResult = 'LOSS'
        }

     console.log(flipResult);

     let predicition = documentElementById ('prediction');
     let flip = documentElementById ('flip');
     let result = documentElementById ('flip');
     result.innerText = gameResult;
}
