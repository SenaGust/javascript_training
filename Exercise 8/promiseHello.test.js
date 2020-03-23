import promiseHello from './promiseHello';
import getName from '../Exercise 7/promise';
jest.mock('../Exercise 7/promise');

describe('function promiseHello', () => {
    it('should return "Hello, Arceus"',() => {
        getName.mockReturnValue(Promise.resolve('Arceus'));

        const result = promiseHello();

        expect(result).toBe('Hello, Arceus');
    });
});