import numberCharacters from './numberCharacters';
import returnAllCharacters from './getAllCharacters';
import mockCharacters from '../Breaking Bad API/jsonCharacters';
jest.mock('./getAllCharacters');

beforeEach(() => {
    returnAllCharacters.mockClear();
});

describe('function numberCharacters', () => {
    it('should return 63', async () => {
        returnAllCharacters.mockResolvedValueOnce(mockCharacters);
    
        const result = await numberCharacters();
        
        expect(returnAllCharacters).toHaveBeenCalledTimes(1);
        expect(result).toBe(mockCharacters.length);
    });
    it('should return error', async () => {
        returnAllCharacters.mockRejectedValue('Deu erro');
        
        const result = await numberCharacters();
        
        expect(returnAllCharacters).toHaveBeenCalledTimes(1);
        expect(result).toBe('Deu erro');
    });
});