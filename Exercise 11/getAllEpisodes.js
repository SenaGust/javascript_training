import baseUrlAPI from '../Breaking Bad API/url';

function returnAllEpisodes() {
    return await axios.get(baseUrlAPI+'episodes');
}

export default returnAllEpisodes;