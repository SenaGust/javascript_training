import makeString from './coverageTest';
import multiply from '../Exercise 4/multiplication';
import sumSquare from './sumSquare';

describe('function makeString for exercise 6', () => {
    it('should return the string "O resultado é: 4" (using if)', () => {
        const parameter1 = 'O resultado é: ',
        parameter2 = 4,
        parameter3 = 4,
        expectedResult = 'O resultado é: 4';

        const multiply = jest.spyOn(multiplication, 'multiply');
        Math.pow = jest.fn()
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(2);

        const result = makeString(parameter1, parameter2, parameter3);

        expect(multiply).toHaveBeenCalledTimes(0);
        expect(Math.pow).toHaveBeenNthCalledWith(1, parameter2, 1/2);
        expect(Math.pow).toHaveBeenNthCalledWith(2, parameter3, 1/2);
        expect(result).toEqual(expectedResult);
    });
    it('should return the string "O resultado é: 2" (not using if) ', () => {
        const parameter1 = 'O resultado é: ',
        parameter2 = 2,
        parameter3 = 1,
        expectedResult = 'O resultado é: 2';

        const multiply = jest.spyOn(multiplication, 'multiply')
        .mockImplementation((num1, num2) => num1 * num2);
        Math.pow = jest.fn();

        const result = makeString(parameter1, parameter2, parameter3);

        expect(Math.pow).toHaveBeenCalledTimes(0);
        expect(multiply).toHaveBeenCalledTimes(1);
        expect(multiply).toHaveBeenNthCalledWith(1, parameter2, parameter3);
        expect(result).toEqual(expectedResult);
    });
});
