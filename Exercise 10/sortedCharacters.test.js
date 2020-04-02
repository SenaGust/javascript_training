import sortedCharacters from './sortedCharacters';
import arraySortedNames from '../Breaking Bad API/sortedNames';
import mockCharacters from '../Breaking Bad API/jsonCharacters';
import returnAllCharacters from '../Exercise 9/getAllCharacters';
jest.mock('../Exercise 9/getAllCharacters');

describe('function sortedCharacters', () => {
    it('should return all sorted api\'s names', async () => {
        returnAllCharacters.mockResolvedValue(mockCharacters);

        const result = await sortedCharacters();
        
        expect(result).toEqual(arraySortedNames);
    });
    it('should return all sorted letters', async () => {
        const alphabet = [
            { name: 'X'}, { name:'N'}, { name:'a'}, { name:'P'}, { name:'b'}, { name:'Y'}, { name:'F'}, { name:'c'},
            { name:'J'}, { name:'i'}, { name:'d'}, { name:'j'}, { name:'A'}, { name:'k'}, { name:'l'}, { name:'R'},
            { name:'M'}, { name:'B'}, { name:'m'}, { name:'G'}, { name:'K'}, { name:'n'}, { name:'E'}, { name:'o'},
            { name:'p'}, { name:'q'}, { name:'Q'}, { name:'r'}, { name:'s'}, { name:'I'}, { name:'S'}, { name:'D'},
            { name:'t'}, { name:'W'}, { name:'O'}, { name:'u'}, { name:'L'}, { name:'v'}, { name:'w'}, { name:'U'},
            { name:'x'}, { name:'y'}, { name:'z'}, { name:'H'}, { name:'Z'}, {name: 'V'}, {name: 'T'}, {name: 'C'},
            {name: 'e'}, {name: 'f'}, {name: 'g'}, {name: 'h'},  
          ],
          sortedAlphabet=[
              "a", "A", "b", "B", "c", "C", "d", "D", 
          "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", 
          "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", 
          "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", 
          "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"
        ];

        returnAllCharacters.mockResolvedValue(shuffle(alphabet));

        const result = await sortedCharacters();

        expect(result).toEqual(sortedAlphabet);
    });
    it('should return error', async () => {
      const alphabet = [
          { name: 'X'}, { name:'N'}, { name:'a'}, { name:'P'}, { name:'b'}, { name:'Y'}, { name:'F'}, { name:'c'},
          { name:'J'}, { name:'i'}, { name:'d'}, { name:'j'}, { name:'A'}, { name:'k'}, { name:'l'}, { name:'R'},
          { name:'M'}, { name:'B'}, { name:'m'}, { name:'G'}, { name:'K'}, { name:'n'}, { name:'E'}, { name:'o'},
          { name:'p'}, { name:'q'}, { name:'Q'}, { name:'r'}, { name:'s'}, { name:'I'}, { name:'S'}, { name:'D'},
          { name:'t'}, { name:'W'}, { name:'O'}, { name:'u'}, { name:'L'}, { name:'v'}, { name:'w'}, { name:'U'},
          { name:'x'}, { name:'y'}, { name:'z'}, { name:'H'}, { name:'Z'}, {name: 'V'}, {name: 'T'}, {name: 'C'},
          {name: 'e'}, {name: 'f'}, {name: 'g'}, {name: 'h'},  
        ];

      returnAllCharacters.mockRejectedValue('Deu erro');

      const result = await sortedCharacters();

      expect(result).toEqual('Deu erro');
  });
});

function shuffle(array) {
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }