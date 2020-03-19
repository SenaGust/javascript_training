import theFunction from './theFunction';

import power from './power';
jest.mock('./power');
import tenTimes from './tenTimes';
jest.mock('./tenTimes');

beforeEach(() => {
  power.mockClear();
  tenTimes.mockClear();
});

describe('function theFunction', () => {
    it('should return 100 when I pass 10', () => {
      const usedParameter = 10;

      theFunction(power, usedParameter);
      
      expect(tenTimes).toHaveBeenCalledTimes(0);
      expect(power).toHaveBeenCalledTimes(1);
      expect(power).toHaveBeenCalledWith(usedParameter);
    })
    it('should return 70 when I pass 7', () => {
      const usedParameter = 7;

      theFunction(tenTimes, 7);
      
      expect(power).toHaveBeenCalledTimes(0);
      expect(tenTimes).toHaveBeenCalledTimes(1);
      expect(tenTimes).toHaveBeenCalledWith(usedParameter);
    })
});