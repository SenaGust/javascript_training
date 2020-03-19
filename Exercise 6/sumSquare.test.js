import sumSquare from './sumSquare';

describe('function sumSquare', () => {
    it('should return 4', () => {
        const parameter1 = 4,
        parameter2 = 4,
        expectedResult = 4;
        Math.pow = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(2);

        const result = sumSquare(parameter1, parameter2);

        expect(Math.pow).toHaveBeenCalledTimes(2);
        expect(Math.pow).toHaveBeenNthCalledWith(1, parameter1, 1/2);
        expect(Math.pow).toHaveBeenNthCalledWith(2, parameter2, 1/2);
        expect(result).toEqual(expectedResult);
    });
});