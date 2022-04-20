const printFunction = require('./tennis_cli');

describe('cli tennis score kata', ()=>{

    test('player test score', ()=>{
        const prompt = jest.fn();
        const log = jest.fn();
        const console = {log: log};
        const loopMock = jest.fn();
        loopMock
            .mockReturnValueOnce('15 0')
            .mockReturnValueOnce('30 0')
            .mockReturnValueOnce('40 0')
            .mockReturnValueOnce('win 0')
            .mockReturnValue('game over');
        
        prompt.mockReturnValueOnce(1);
        printFunction(prompt, console);
        expect(prompt).toHaveBeenCalledWith('Which player scores? ');
        expect(log).toHaveBeenCalledWith('15 0');

        expect(loopMock).toHaveBeenCalledWith(1, '15 0');
        expect(loopMock).toHaveBeenCalledWith(2, '30 0');
        expect(loopMock).toHaveBeenCalledWith(3, '40 0');
        expect(loopMock).toHaveBeenCalledWith(4, 'win 0');
        expect(loopMock).toHaveBeenCalledWith(5, 'game over');
    });
});