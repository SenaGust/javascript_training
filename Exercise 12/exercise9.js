import getAllCharacters from '../Exercise 9/getAllCharacters';
import _ from 'lodash';

async function numberCharactersLodash() {
    try {
        const characters = await getAllCharacters();

        return _.size(characters);
    } catch (error) {
        return error;
    }
}

export default numberCharactersLodash;