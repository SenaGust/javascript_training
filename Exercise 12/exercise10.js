import returnAllCharacters from '../Exercise 9/getAllCharacters';
import _ from 'lodash';

async function sortedCharactersLodash() {
    try {
        const allInformation = (await returnAllCharacters());
        
        const onlyNames = allInformation.map(data => data.name);

        return _.orderBy(onlyNames, [name => name.toLowerCase(), name => name], ['asc', 'desc']);
    } catch (error) {
        return error;
    }
   
}

export default sortedCharactersLodash;