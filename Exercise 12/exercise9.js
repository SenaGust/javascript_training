import getAllCharacters from '../Exercise 9/getAllCharacters';
import _ from 'lodash';

async function numberCharactersLodash() {
    const characters = await getAllCharacters();

    return _.size(characters);
}

export default numberCharactersLodash;