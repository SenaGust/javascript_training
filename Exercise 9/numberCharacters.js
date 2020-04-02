import returnAllCharacters from './getAllCharacters';

async function numberCharacters() {
    try {
        const characters = await returnAllCharacters();
        return characters.length;
    } catch (error) {
        return error;
    }
}

export default numberCharacters;