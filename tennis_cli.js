function printTennis(prompt, console){
    
    const Tennis = require('./tennis');

    const tennis = new Tennis();

    do{
        userInput = prompt('Which player scores? ');

        if(userInput == 1){
            tennis.playerOneScored();
            console.log(tennis.score());
        }else if(userInput == 2){
            tennis.playerTwoScored();
            console.log(tennis.score());
        }
    }while(!tennis.isGameOver())
}

module.exports = printTennis;