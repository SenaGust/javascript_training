import power from './power';

describe('function power', () => {
    it('should return 100 when I pass 10', () => {
        const parameter1 = 10,
        expectedResult = 100;

        const result = power(parameter1);
        
        expect(result).toBe(expectedResult);
      });
});