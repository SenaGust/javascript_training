import firstCharIsDigitOrNumber from './isDigitOrNumber';

describe('function firstCharIsDigitOrNumber', () => {
    it('should return true when I pass "5"', () => {
        const expectedResult = true,
        parameter = '51';

        const result = firstCharIsDigitOrNumber(parameter);

        expect(result).toBe(expectedResult);
    });
    it('should return true when I pass "breaking bad"', () => {
        const expectedResult = true,
        parameter = 'breaking bad';

        const result = firstCharIsDigitOrNumber(parameter);

        expect(result).toBe(expectedResult);
    });
    it('should return false when I pass "&a1"', () => {
        const expectedResult = false,
        parameter = '&a1';

        const result = firstCharIsDigitOrNumber(parameter);

        expect(result).toBe(expectedResult);
    });
});