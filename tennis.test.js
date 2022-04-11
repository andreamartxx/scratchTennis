const Tennis = require('./tennis');

describe('tennis score', ()=>{
    test('score 0 0', ()=>{
        const tennis = new Tennis();
        expect(tennis.score()).toBe('0 0');
    });

    test('score 15 0', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        expect(tennis.score()).toBe('15 0');
    });

    test('score 0 15', ()=>{
        const tennis = new Tennis();
        tennis.playerTwoScored();
        expect(tennis.score()).toBe('0 15');
    });

    test('score 30 0', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        expect(tennis.score()).toBe('30 0');
    });

    test('score 40 0', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        expect(tennis.score()).toBe('40 0');
    });

    test('player 1 wins', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        expect(tennis.score()).toBe('win 0');
    });

    test('score adv 40', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        expect(tennis.score()).toBe('adv 40');
    });

    test('score 40 adv', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        expect(tennis.score()).toBe('40 adv');
    });

    test('score 40 40', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        expect(tennis.score()).toBe('40 40');
    });

    test('score adv 40', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        expect(tennis.score()).toBe('adv 40');
    });

    test('score 40 adv', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        expect(tennis.score()).toBe('40 adv');
    });

    test('score 40 40', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        expect(tennis.score()).toBe('40 40');
    });

    test('score 40 win', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        expect(tennis.score()).toBe('40 win');
    });

    test('score win 40', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        expect(tennis.score()).toBe('win 40');
    });

    test('score win 30', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        expect(tennis.score()).toBe('win 30');
    });

    test('score 30 win', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        expect(tennis.score()).toBe('30 win');
    });

    test('score win 15', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        expect(tennis.score()).toBe('win 15');
    });

    test('no one can score after someone won', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        expect(()=> tennis.playerOneScored()).toThrow("Game over");
        expect(()=> tennis.playerTwoScored()).toThrow("Game over");

    });

    test('no one can score after someone won', ()=>{
        const tennis = new Tennis();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        expect(()=> tennis.playerOneScored()).toThrow("Game over");
        expect(()=> tennis.playerTwoScored()).toThrow("Game over");

    });

    test('no one can score after someone won', ()=>{
        const tennis = new Tennis();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        expect(()=> tennis.playerOneScored()).toThrow("Game over");
        expect(()=> tennis.playerTwoScored()).toThrow("Game over");

    });

    test('no one can score after someone won', ()=>{
        const tennis = new Tennis();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerOneScored();
        tennis.playerTwoScored();
        tennis.playerTwoScored();
        expect(()=> tennis.playerOneScored()).toThrow("Game over");
        expect(()=> tennis.playerTwoScored()).toThrow("Game over");

    });
});