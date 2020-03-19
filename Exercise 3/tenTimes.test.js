import tenTimes from './tenTimes';

describe('function tenTimes', () => {
    it('should return 70 when I pass 7', () => {
        const parameter1 = 7,
        expectedResult = 70;

        const result = tenTimes(parameter1);

        expect(result).toBe(expectedResult);
      })
});