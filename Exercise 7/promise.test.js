import getName from './promise'

describe('function getName', () => {
   it('should return "Arceus"', () => {
      expect.assertions(1);
      return expect(getName()).resolves.toEqual('Arceus');
   });
});