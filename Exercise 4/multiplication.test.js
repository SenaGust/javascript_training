const {multiply} = require('./multiplication');

describe('function multiply', () => {
    it('should return 10 when I pass with 2 and 5', () => {
        const parameter1 = 2, parameter2 = 5
        expectedResult = 10;

        const result = multiply(parameter1, parameter2);

        expect(result).toBe(expectedResult);
    });
