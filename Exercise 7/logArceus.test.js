import logArceus from './logArceus';
import getName from './promise';
jest.mock('./promise');

describe('function logArceus', () => {
    it('return Arceus on console.log', () => {
        getName.mockReturnValue(Promise.resolve('Arceus'));

        logArceus();
        
        expect(getName).toHaveBeenCalledTimes(1);
    });
});