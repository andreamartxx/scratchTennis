const printFunction = require('./tennis_cli');

describe('cli tennis score kata', ()=>{

    test('player 1 win after 4 points in a row score', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};        
        prompt
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)

        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Which player scores? ');
        
        expect(log).toHaveBeenCalledWith('15 0');
        expect(log).toHaveBeenCalledWith('30 0');
        expect(log).toHaveBeenCalledWith('40 0');
        expect(log).toHaveBeenCalledWith('win 0');
    });

    test('player 2 win after 4 points in a row score', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};        
        prompt
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(2)

        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Which player scores? ');
        
        expect(log).toHaveBeenCalledWith('0 15');
        expect(log).toHaveBeenCalledWith('0 30');
        expect(log).toHaveBeenCalledWith('0 40');
        expect(log).toHaveBeenCalledWith('0 win');
    });

    test('player 1 win after player 2 scores 30', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};        
        prompt
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)

        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Which player scores? ');
        
        expect(log).toHaveBeenCalledWith('15 0');
        expect(log).toHaveBeenCalledWith('15 15');
        expect(log).toHaveBeenCalledWith('30 15');
        expect(log).toHaveBeenCalledWith('30 30');
        expect(log).toHaveBeenCalledWith('40 30');
        expect(log).toHaveBeenCalledWith('win 30');
    });

    test('player 2 win after player 1 scores 30', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};        
        prompt
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(2)

        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Which player scores? ');
        
        expect(log).toHaveBeenCalledWith('0 15');
        expect(log).toHaveBeenCalledWith('15 15');
        expect(log).toHaveBeenCalledWith('15 30');
        expect(log).toHaveBeenCalledWith('30 30');
        expect(log).toHaveBeenCalledWith('30 40');
        expect(log).toHaveBeenCalledWith('30 win');
    });

    test('player 1 win after player 2 scores 15', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};        
        prompt
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)

        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Which player scores? ');
        
        expect(log).toHaveBeenCalledWith('15 0');
        expect(log).toHaveBeenCalledWith('15 15');
        expect(log).toHaveBeenCalledWith('30 15');
        expect(log).toHaveBeenCalledWith('40 15');
        expect(log).toHaveBeenCalledWith('win 15');
    });

    test('player 2 win after player 1 scores 15', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};        
        prompt
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(2)

        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Which player scores? ');
        
        expect(log).toHaveBeenCalledWith('0 15');
        expect(log).toHaveBeenCalledWith('15 15');
        expect(log).toHaveBeenCalledWith('15 30');
        expect(log).toHaveBeenCalledWith('15 40');
        expect(log).toHaveBeenCalledWith('15 win');
    });

    test('player 1 win after player 2 scores 40', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};        
        prompt
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)

        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Which player scores? ');
        
        expect(log).toHaveBeenCalledWith('15 0');
        expect(log).toHaveBeenCalledWith('15 15');
        expect(log).toHaveBeenCalledWith('30 15');
        expect(log).toHaveBeenCalledWith('30 30');
        expect(log).toHaveBeenCalledWith('40 40');
        expect(log).toHaveBeenCalledWith('adv 40');
        expect(log).toHaveBeenCalledWith('win 40');

    });

    test('player 2 win after player 1 scores 40', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};        
        prompt
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(2)

        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Which player scores? ');
        
        expect(log).toHaveBeenCalledWith('0 15');
        expect(log).toHaveBeenCalledWith('15 15');
        expect(log).toHaveBeenCalledWith('15 30');
        expect(log).toHaveBeenCalledWith('30 30');
        expect(log).toHaveBeenCalledWith('30 40');
        expect(log).toHaveBeenCalledWith('40 40');
        expect(log).toHaveBeenCalledWith('40 adv');
        expect(log).toHaveBeenCalledWith('40 win');
    });
});