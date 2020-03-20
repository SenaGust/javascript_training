import getName from './promise'

describe('function getName', () => {
   it('should return "Arceus"', () => {
    Promise.resolve = jest.fn();

    getName();

    expect(Promise.resolve).toHaveBeenCalledWith('Arceus');
    expect(Promise.resolve).toHaveBeenCalledTimes(1);
   });
});