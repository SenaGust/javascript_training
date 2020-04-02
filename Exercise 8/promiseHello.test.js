import promiseHello from './promiseHello';
import getName from '../Exercise 7/promise';
jest.mock('../Exercise 7/promise');

beforeEach(() => {
    getName.mockClear();
});

describe('function promiseHello', () => {
    it('should return "Hello, Arceus"', async () => {
        const expectedResult = 'Hello, Arceus';
        getName.mockResolvedValue('Arceus');

        const result = await promiseHello();

        expect(getName).toHaveBeenCalledTimes(1);
        expect(result).toBe(expectedResult);
    });
    it('should return error', async () => {
        const expectedResult = 'Deu erro';
        getName.mockRejectedValue('Deu erro');

        const result = await promiseHello();

        expect(getName).toHaveBeenCalledTimes(1);
        expect(result).toBe(expectedResult);
    });
});