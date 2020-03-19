import makeString from './coverageTest';

import multiply from '../Exercise 4/multiplication';
jest.mock('../Exercise 4/multiplication');
import sumSquare from './sumSquare';
jest.mock('./sumSquare');

beforeEach(() => {
    multiply.mockClear();
    sumSquare.mockClear();
});

describe('function makeString for exercise 6', () => {
    it('should return the string "O resultado é: 4" (using if)', () => {
        const parameter1 = 'O resultado é: ',
        parameter2 = 4,
        parameter3 = 4,
        expectedResult = 'O resultado é: 4';

        sumSquare.mockReturnValueOnce(4);

        const result = makeString(parameter1, parameter2, parameter3);

        expect(multiply).toHaveBeenCalledTimes(0);
        expect(sumSquare).toHaveBeenCalledTimes(1);
        expect(sumSquare).toHaveBeenCalledWith(parameter2, parameter3);
        expect(result).toEqual(expectedResult);
    });
    it('should return the string "O resultado é: 2" (not using if) ', () => {
        const parameter1 = 'O resultado é: ',
        parameter2 = 2,
        parameter3 = 1,
        expectedResult = 'O resultado é: 2';

        multiply.mockReturnValueOnce(2);

        const result = makeString(parameter1, parameter2, parameter3);

        expect(sumSquare).toHaveBeenCalledTimes(0);
        expect(multiply).toHaveBeenCalledTimes(1);
        expect(multiply).toHaveBeenCalledWith(parameter2, parameter3);
        expect(result).toEqual(expectedResult);
    });
    it('should return error', () => {
        const parameter1 = 'O resultado é: ',
        parameter2 = 'q',
        parameter3 = 1,
        expectedResult = 'Please, try again because the second and/or third parameters must be numbers.';

        multiply.mockImplementation((parameter2, parameter3) => {
            if (isNaN(num1) || isNaN(num2)) {
                throw "TypeError";
            }
        });
        const result = makeString(parameter1, parameter2, parameter3);

        expect(sumSquare).toHaveBeenCalledTimes(0);
        expect(multiply).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });
    it('should return error', () => {
        const parameter1 = 'O resultado é: ',
        parameter2 = 1,
        parameter3 = 'q',
        expectedResult = 'Please, try again because the second and/or third parameters must be numbers.';

        multiply.mockImplementation((parameter2, parameter3) => {
            if (isNaN(num1) || isNaN(num2)) {
                throw "TypeError";
            }
        });
        const result = makeString(parameter1, parameter2, parameter3);

        expect(sumSquare).toHaveBeenCalledTimes(0);
        expect(multiply).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });
});
