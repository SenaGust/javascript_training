import logArceus from './logArceus';
import getName from './promise';
jest.mock('./promise');

describe('function logArceus', () => {
    it('return Arceus on console.log', async () => {
        console.log = jest.fn();
        getName.mockResolvedValue('Arceus');

        await logArceus();
        
        expect(getName).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Arceus');
    });
});