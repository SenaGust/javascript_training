import asyncAwaitHello from './asyncAwaitHello';
import getName from '../Exercise 7/promise';
jest.mock('../Exercise 7/promise');

beforeEach(() => {
    getName.mockClear();
});

describe('function asyncAwaitHello', () => {
    it('should return Hello, Arceus', async () => {
        const expectedResult = 'Hello, Arceus';
        getName.mockResolvedValue('Arceus');

        const result = await asyncAwaitHello();

        expect(getName).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });
    it('should return error', async () => {
        const expectedResult = 'Deu erro';
        getName.mockRejectedValue('Deu erro');

        const result = await asyncAwaitHello();

        expect(getName).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });
});