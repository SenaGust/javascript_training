import groupEpisodes from './groupEpisodes';
import returnAllEpisodes from './getAllEpisodes';
import mockEpisodes from '../Breaking Bad API/jsonEpisodes';
jest.mock('./getAllEpisodes');

describe('function numberEpisodes', () => {
    it('should return group episodes', async () => {
        returnAllEpisodes.mockResolvedValueOnce(mockEpisodes);
    
        const result = await groupEpisodes();
        console.log(result)
        expect(returnAllEpisodes).toHaveBeenCalledTimes(1);
        expect(result).toBe(mockEpisodes);
    })
});