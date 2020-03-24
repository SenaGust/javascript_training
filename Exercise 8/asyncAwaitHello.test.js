import asyncAwaitHello from './asyncAwaitHello';
import getName from '../Exercise 7/promise';
jest.mock('../Exercise 7/promise');

describe('function asyncAwaitHello', () => {
    it('should return Hello, Arceus', async () => {
        const expectedResult = 'Hello, Arceus';
        getName.mockResolvedValue('Arceus');

        const result = await asyncAwaitHello();

        expect(getName).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });
});