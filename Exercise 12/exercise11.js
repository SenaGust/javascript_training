import returnAllEpisodes from '../Exercise 11/getAllEpisodes';
import _ from 'lodash';

async function groupEpisodesLodash() {
    const episodes = await returnAllEpisodes();

    const onlyTitles = episodes.map(data => {return data.title});

    return _.countBy(onlyTitles, title => {return title.charAt(0)});
}

export default groupEpisodesLodash;