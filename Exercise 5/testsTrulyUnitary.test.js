import makeString from './testsTrulyUnitary';

import multiply from '../Exercise 4/multiplication';
jest.mock('../Exercise 4/multiplication');

beforeEach(() => {
    multiply.mockClear();
});

describe('function makeString', () => {
    it('should return the string "2 * 1 = 2" ', () => {
        const parameter1 = '2 * 1 = ',
        parameter2 = 2,
        parameter3 = 1,
        expectedResult = '2 * 1 = 2';
        multiply.mockReturnValueOnce(2);

        const result = makeString(parameter1, parameter2, parameter3);
        
        expect(multiply).toHaveBeenCalledTimes(1);
        expect(multiply).toHaveBeenCalledWith(parameter2, parameter3);
        expect(result).toEqual(expectedResult);
    });
    it('should return error', () => {
        const parameter1 = '2 * 1 = ',
        parameter2 = 'q',
        parameter3 = 1,
        expectedResult = 'Please, try again because the second and/or third parameters must be numbers.';
        multiply.mockImplementation((num1, num2) => {
            throw "TypeError";
        });

        const result = makeString(parameter1, parameter2, parameter3);

        expect(multiply).toHaveBeenCalledTimes(1);
        expect(multiply).toHaveBeenCalledWith(parameter2, parameter3);
        expect(result).toEqual(expectedResult);
    });
    it('should return error', () => {
        const parameter1 = '2 * 1 = ',
        parameter2 = 1,
        parameter3 = 'q',
        expectedResult = 'Please, try again because the second and/or third parameters must be numbers.';
        multiply.mockImplementation((num1, num2) => {
            throw "TypeError";
        });
        
        const result = makeString(parameter1, parameter2, parameter3);

        expect(multiply).toHaveBeenCalledTimes(1);
        expect(multiply).toHaveBeenCalledWith(parameter2, parameter3);
        expect(result).toEqual(expectedResult);
    });
});