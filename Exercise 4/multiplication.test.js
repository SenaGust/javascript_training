const {multiply} = require('./multiplication');

describe('function multiply', () => {
    it('should return 10 when I pass with 2 and 5', () => {
        const parameter1 = 2, parameter2 = 5
        expectedResult = 10;

        const result = multiply(parameter1, parameter2);

        expect(result).toBe(expectedResult);
    });
    it('should return error when I pass with \'a\' and 5', () => {
        const parameter1 = 'a', parameter2 = 5
        expectedResult = 'NaN';

        const result = multiply(parameter1, parameter2);
        
        expect(result).toThrow(expectedResult);
    });
    it('should return error when I pass with 2 and b', () => {
        const parameter1 = 2, parameter2 = 'b'
        expectedResult = 'NaN';

        const result = multiply(parameter1, parameter2);
        
        expect(result).toThrow(expectedResult);
    });
});