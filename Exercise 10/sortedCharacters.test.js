import sortedCharacters from './sortedCharacters';
import arraySortedNames from '../Breaking Bad API/sortedNames';
import mockCharacters from '../Breaking Bad API/jsonCharacters';
import returnAllCharacters from '../Exercise 9/getAllCharacters';
jest.mock('../Exercise 9/getAllCharacters');

describe('function sortedCharacters', () => {
    it('should return all sorted names', async () => {
        returnAllCharacters.mockResolvedValue(mockCharacters);
        const sort = jest.spyOn(Array.prototype, 'sort');
        const map = jest.spyOn(Array.prototype, 'map');

        const result = await sortedCharacters();
        
        expect(sort).toHaveBeenCalledTimes(1);
        expect(map).toHaveBeenCalledTimes(1);
        expect(result).toEqual(arraySortedNames);
    });
});