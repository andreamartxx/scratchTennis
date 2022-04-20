const printFunction = require('./tennis_cli');

describe('cli tennis score kata', ()=>{

    test('player test score', ()=>{
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
});