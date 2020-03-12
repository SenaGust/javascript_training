const {power, tenTimes, theFunction} = require ('./theFunction');

describe('function theFunction', () => {
    it('should return 100 when I pass 10', () => {
      const usedParameter = 10;
      const power = jest.fn();

      theFunction(power, usedParameter);
      
      expect(power).toHaveBeenCalledTimes(1);
      expect(power).toHaveBeenCalledWith(usedParameter);
    })
    it('should return 70 when I pass 7', () => {
      const usedParameter = 7;
      const tenTimes = jest.fn();

      theFunction(tenTimes, 7);
      
      expect(tenTimes).toHaveBeenCalledTimes(1);
      expect(tenTimes).toHaveBeenCalledWith(usedParameter);
    })
});

describe('function tenTimes', () => {
    it('should return 70 when I pass 7', () => {
        const result = tenTimes(7);
        expect(result).toBe(70);
      })
});

describe('function power', () => {
    it('should return 100 when I pass 100', () => {
        const result = power(10);
        expect(result).toBe(100);
      })
});