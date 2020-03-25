import baseUrlAPI from '../Breaking Bad API/url';
import axios from 'axios';

async function returnAllEpisodes() {
    return await axios.get(baseUrlAPI+'episodes');
}

export default returnAllEpisodes;