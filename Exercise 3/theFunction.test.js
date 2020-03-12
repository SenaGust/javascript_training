const {power, tenTimes, theFunction} = require ('./theFunction');

describe('function theFunction', () => {
    it('return 100', () => {
      const result = theFunction(power, 10);
      expect(result).toBe(100);
    })
    it('return 70', () => {
        const result = theFunction(tenTimes, 7);
        expect(result).toBe(70);
      })
});

describe('function tenTimes', () => {
    it('return 80', () => {
        const result = tenTimes(8);
        expect(result).toBe(80);
      })
});

describe('function power', () => {
    it('return 10000', () => {
        const result = power(100);
        expect(result).toBe(10000);
      })
});