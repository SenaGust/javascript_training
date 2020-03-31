import groupEpisodes from './groupEpisodes';
import returnAllEpisodes from './getAllEpisodes';
import mockEpisodes from '../Breaking Bad API/jsonEpisodes';
jest.mock('./getAllEpisodes');

describe('function numberEpisodes', () => {
    it('should return group episodes', async () => {
        const mock = [ 
            {title: "Something"}, 
            {title: "Something 2"}, 
            {title: "Especial delivery"}
        ];
        const expectedResult = {
            "E": 1,
            "S": 2
        };

        returnAllEpisodes.mockResolvedValueOnce(mock);
    
        const result = await groupEpisodes();

        expected(returnAllEpisodes).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    })
});