import returnAllCharacters from './getAllCharacters';

async function numberCharacters() {
    const characters = await returnAllCharacters();
    return characters.length;
}

export default numberCharacters;