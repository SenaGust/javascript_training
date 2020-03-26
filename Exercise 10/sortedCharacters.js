import returnAllCharacters from '../Exercise 9/getAllCharacters';

async function sortedCharacters() {
    const allInformation = (await returnAllCharacters());

    const onlyNames = allInformation.map(data => {
        return data.name;
    });

    return onlyNames.sort((srtring1, srtring2) => {
        return (srtring1.localeCompare(srtring2, 'en', {sensitive: 'base'}));
    });
}

export default sortedCharacters;