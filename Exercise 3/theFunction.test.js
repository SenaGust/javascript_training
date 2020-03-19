import theFunction from './theFunction';

import power from './power';
jest.mock('./power');
import tenTimes from './tenTimes';
jest.mock('./tenTimes');

describe('function theFunction', () => {
    it('should return 100 when I pass 10', () => {
      const usedParameter = 10;

      theFunction(power, usedParameter);
      
      expect(power).toHaveBeenCalledTimes(1);
      expect(power).toHaveBeenCalledWith(usedParameter);
    })
    it('should return 70 when I pass 7', () => {
      const usedParameter = 7;

      theFunction(tenTimes, 7);
      
      expect(tenTimes).toHaveBeenCalledTimes(1);
      expect(tenTimes).toHaveBeenCalledWith(usedParameter);
    })
});