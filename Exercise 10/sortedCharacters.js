import returnAllCharacters from '../Exercise 9/getAllCharacters';

async function sortedCharacters() {
    const allInformation = (await returnAllCharacters());

    const onlyNames = allInformation.map(data => {
        return data.name;
    });

    return onlyNames.sort();
}

export default sortedCharacters;