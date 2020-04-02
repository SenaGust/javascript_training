import groupEpisodes from './groupEpisodes';
import returnAllEpisodes from './getAllEpisodes';
import mockEpisodes from '../Breaking Bad API/jsonEpisodes';
jest.mock('./getAllEpisodes');

beforeEach(() => {
    returnAllEpisodes.mockClear();
});

describe('function numberEpisodes', () => {
    it('should return group episodes', async () => {
        const mock = [ 
            {title: "Something"}, 
            {title: "Something 2"}, 
            {title: "Especial delivery"}
        ],
        expectedResult = {
            "E": 1,
            "S": 2
        };

        returnAllEpisodes.mockResolvedValueOnce(mock);
    
        const result = await groupEpisodes();

        expect(returnAllEpisodes).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });
    it('should return group episodes', async () => {
        const expectedResult = {
            ".": 1,
            "4": 1,
            "A": 5,
            "B": 12,
            "C": 10,
            "D": 2,
            "E": 2,
            "F": 8,
            "G": 6,
            "H": 4,
            "I": 3,
            "K": 2,
            "L": 2,
            "M": 6,
            "N": 4,
            "O": 5,
            "P": 6,
            "Q": 1,
            "R": 3,
            "S": 12,
            "T": 3,
            "U": 1,
            "W": 3,
        };

        returnAllEpisodes.mockResolvedValueOnce(mockEpisodes);
    
        const result = await groupEpisodes();
        
        expect(returnAllEpisodes).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });
    it('should return group episodes', async () => {
        const expectedResult = 'Deu erro';

        returnAllEpisodes.mockRejectedValueOnce('Deu erro');
    
        const result = await groupEpisodes();
        
        expect(returnAllEpisodes).toHaveBeenCalledTimes(1);
        expect(result).toEqual(expectedResult);
    });
});