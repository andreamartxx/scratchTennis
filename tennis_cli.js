function printTennis(){
    
    const Tennis = require('./tennis');

    const tennis = new Tennis();

    const prompt = require("prompt-sync")();

    do{
        players = prompt('Which player scores? ');

        if(players == 1){
            tennis.playerOneScored();
            console.log(tennis.score());
        }else if(players == 2){
            tennis.playerTwoScored();
            console.log(tennis.score());
        }
    }while(players != tennis.throwingErrorAfterWinning)
}

printTennis();