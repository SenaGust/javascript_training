import mockEpisodes from '../Breaking Bad API/jsonEpisodes';
import returnAllEpisodes from './getAllEpisodes';
import baseUrlAPI from '../Breaking Bad API/url';
import axios from 'axios'
jest.mock('axios');

describe('function returnAllEpisodes', () => {
    it('should return all episodes', async () => {
        axios.get.mockResolvedValue(mockEpisodes);

        const result = await returnAllEpisodes();
        
        expect(result).toEqual(mockEpisodes);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(baseUrlAPI+'episodes')
    });
});