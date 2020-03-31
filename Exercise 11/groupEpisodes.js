import returnAllEpisodes from './getAllEpisodes';

async function groupEpisodes() {
    const episodes = await returnAllEpisodes();

    const onlyTitles = episodes.map(data => {return data.title});

    const sortedTitles = onlyTitles.sort((srtring1, srtring2) => {
        return (srtring1.localeCompare(srtring2, 'en', {sensitive: 'base'}));
    });
    
    let grouped = {};

    sortedTitles.map((title) => {
           if(isNaN(grouped[title.charAt(0)])) {
            Object.defineProperty(grouped, title.charAt(0), {
                    value: 1,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            } else {
                grouped[title.charAt(0)]++;
            }
    });
    
    return grouped;
}

export default groupEpisodes;