import numberCharactersLodash from './exercise9';
import returnAllCharacters from '../Exercise 9/getAllCharacters';
import mockCharacters from '../Breaking Bad API/jsonCharacters';
jest.mock('../Exercise 9/getAllCharacters')
import _ from 'lodash';
jest.mock('lodash');

beforeEach(() => {
    returnAllCharacters.mockClear();
});

describe('function numberCharactersLodash', () => {
    it('should return 63', async () => {
        returnAllCharacters.mockResolvedValueOnce(mockCharacters);
        _.size.mockReturnValue(63);

        const result = await numberCharactersLodash();

        expect(_.size).toHaveBeenCalledTimes(1);
        expect(_.size).toHaveBeenCalledWith(mockCharacters);
        expect(returnAllCharacters).toHaveBeenCalledTimes(1);
        expect(result).toBe(mockCharacters.length);
    });
    it('should return error', async () => {
        const expectError = 'Deu erro';
        returnAllCharacters.mockRejectedValueOnce('Deu erro');

        const result = await numberCharactersLodash();

        expect(returnAllCharacters).toHaveBeenCalledTimes(1);
        expect(result).toBe(expectError);
    });
});