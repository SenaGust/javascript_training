const {makeString} = require('./testsTrulyUnitary');
const multiply = require('../Exercise 4/multiplication')

describe('function makeString', () => {
    it('should return the string "2 * 1 = 2" ', () => {
        const parameter1 = '2 * 1 = ',
        parameter2 = '2',
        parameter3 = '1',
        expectedResult = '2 * 1 = 2';

        const multiply = jest.fn((parameter2, parameter3) => (parameter2 * parameter3));
        console.log(multiply(1,2));
        
        const result = makeString(parameter1, parameter2, parameter3);
        expect(result).toEqual(expectedResult);
    })
})