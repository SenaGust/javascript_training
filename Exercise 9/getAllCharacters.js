import baseUrlAPI from '../Breaking Bad API/url';
import axios from 'axios';

async function returnAllCharacters() {
    return await axios.get(baseUrlAPI+'characters');
}

export default returnAllCharacters;