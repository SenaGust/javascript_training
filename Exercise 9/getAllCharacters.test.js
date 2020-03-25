import mockCharacters from '../Breaking Bad API/jsonCharacters';
import returnAllCharacters from './getAllCharacters';
import baseUrlAPI from '../Breaking Bad API/url';
import axios from 'axios'

jest.mock('axios');

describe('function returnAllCharacters', () => {
    it('should show the all characters in console', async () => {
        axios.get.mockResolvedValue(mockCharacters);

        const result = await returnAllCharacters();
        
        expect(result).toEqual(mockCharacters);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(baseUrlAPI+'characters')
    });
});