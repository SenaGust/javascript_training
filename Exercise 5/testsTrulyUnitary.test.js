const {makeString} = require('./testsTrulyUnitary');
const multiplication = require('../Exercise 4/multiplication')

describe('function makeString', () => {
    it('should return the string "2 * 1 = 2" ', () => {
        const parameter1 = '2 * 1 = ',
        parameter2 = '2',
        parameter3 = '1',
        expectedResult = '2 * 1 = 2';
        const multiply = jest.spyOn(multiplication, 'multiply')
        .mockImplementation((num1, num2) => num1 * num2);

        const result = makeString(parameter1, parameter2, parameter3);

        expect(multiply).toHaveBeenCalledWith(parameter2, parameter3);
        expect(multiply).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    })
})