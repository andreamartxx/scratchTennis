scoreTable=['0', '15', '30', '40'];

class Tennis{

    #playerOne;
    #playerTwo;

    constructor(){
        this.#playerOne = 0;
        this.#playerTwo = 0;
    }

    score(){

        if((this.#playerOne >= 3 && this.#playerTwo >=3) && (this.#playerOne - this.#playerTwo) == 1){
            return `adv ${scoreTable[3]}`
        }
        if((this.#playerOne >= 3 && this.#playerTwo >=3) && (this.#playerTwo - this.#playerOne) == 1 ){
            return`${scoreTable[3]} adv`;
        }
        if(this.#playerOne == this.#playerTwo && (this.#playerOne >= 3)){
            return `${scoreTable[3]} ${scoreTable[3]}`
        }
        if(this.#playerTwoWinsPlayerOneForty()){
            return `${scoreTable[3]} win`
        }
        if(this.#playerOneWinsPlayerTwoForty()){
            return `win ${scoreTable[3]}`;        
        }
        if(this.#playerOneWinsPlayerTwoLessThanForty()){
            return `win ${scoreTable[this.#playerTwo]}`
        }
        if(this.#playerTwoWinsPlayerOneLessThanForty()){
            return `${scoreTable[this.#playerOne]} win`
        }
        return `${scoreTable[this.#playerOne]} ${scoreTable[this.#playerTwo]}`;
    }

    #playerTwoWinsPlayerOneLessThanForty() {
        return this.#playerOne < 3 && this.#playerTwo == 4;
    }

    #playerOneWinsPlayerTwoLessThanForty() {
        return this.#playerOne == 4 && this.#playerTwo < 3;
    }

    #playerOneWinsPlayerTwoForty() {
        return (this.#playerOne >= 3 && this.#playerTwo >= 3) && (this.#playerOne - this.#playerTwo) == 2;
    }

    #playerTwoWinsPlayerOneForty(){
        return (this.#playerOne >= 3 && this.#playerTwo >=3) && (this.#playerTwo - this.#playerOne) == 2
    }
    
    playerOneScored(){
        this.#throwingErrorAfterWinning();
        this.#playerOne++;
    }

    playerTwoScored(){
        this.#throwingErrorAfterWinning();
        this.#playerTwo++;
    }

    isGameOver(){
        if (this.#playerOneWinsPlayerTwoLessThanForty() || this.#playerTwoWinsPlayerOneLessThanForty() || this.#playerOneWinsPlayerTwoForty() || this.#playerTwoWinsPlayerOneForty()) {
            return true;
        }
    }

    #throwingErrorAfterWinning() {
        if (this.#playerOneWinsPlayerTwoLessThanForty() || this.#playerTwoWinsPlayerOneLessThanForty() || this.#playerOneWinsPlayerTwoForty() || this.#playerTwoWinsPlayerOneForty()) {
            throw new Error("Game over");
        }
    }
}

module.exports = Tennis;