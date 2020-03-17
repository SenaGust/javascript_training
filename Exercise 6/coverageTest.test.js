const {makeString} = require('./coverageTest');
const multiplication = require('../Exercise 4/multiplication')

describe('function makeString for exercise 6', () => {
    it('should return the string "O resultado é: 4" ', () => {
        const parameter1 = 'O resultado é: ',
        parameter2 = 4,
        parameter3 = 4,
        expectedResult = 'O resultado é: 4';

        const multiply = jest.spyOn(multiplication, 'multiply');
        Math.pow = jest.fn();

        const result = makeString(parameter1, parameter2, parameter3);

        expect(multiply).toHaveBeenCalledTimes(0);
        expect(Math.pow).toHaveBeenNthCalledWith(1, parameter2, 1/2);
        expect(Math.pow).toHaveBeenNthCalledWith(2, parameter3, 1/2);
        expect(result).toEqual(expectedResult);
    })
})