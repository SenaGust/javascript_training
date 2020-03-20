import logArceus from './logArceus';

describe('function logArceus', () => {
    it('return Arceus on console.log', () => {
        console.log = jest.fn();

        logArceus();

        expect(console.log).toHaveBeenCalledWith('Arceus');
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});