import returnAllEpisodes from './getAllEpisodes';

async function groupEpisodes() {
    let alphabetic = [
        {
            letter: 'A',
            count: 0
        },
        {
            letter: 'B',
            count: 0
        },
        {
            letter: 'C',
            count: 0
        },
        {
            letter: 'D',
            count: 0
        },
        {
            letter: 'E',
            count: 0
        },
        {
            letter: 'F',
            count: 0
        },
        {
            letter: 'G',
            count: 0
        },
        {
            letter: 'H',
            count: 0
        },
        {
            letter: 'I',
            count: 0
        },
        {
            letter: 'J',
            count: 0
        },
        {
            letter: 'K',
            count: 0
        },
        {
            letter: 'L',
            count: 0
        },
        {
            letter: 'M',
            count: 0
        },
        {
            letter: 'N',
            count: 0
        },
        {
            letter: 'O',
            count: 0
        },
        {
            letter: 'P',
            count: 0
        },
        {
            letter: 'Q',
            count: 0
        },
        {
            letter: 'R',
            count: 0
        },
        {
            letter: 'S',
            count: 0
        },
        {
            letter: 'T',
            count: 0
        },
        {
            letter: 'U',
            count: 0
        },
        {
            letter: 'V',
            count: 0
        },
        {
            letter: 'W',
            count: 0
        },
        {
            letter: 'X',
            count: 0
        },
        {
            letter: 'Y',
            count: 0
        },
        {
            letter: 'Z',
            count: 0
        },
    ];

    const allInformation = await returnAllEpisodes();

    const onlyTitle = allInformation.map(data => data.title);
    console.log(onlyTitle);
    onlyTitle.map((data) => {
        const whereInsert = data.charCodeAt(0) - 65;
        alphabetic[whereInsert].count++;
    });

    return alphabetic;
}

export default groupEpisodes;