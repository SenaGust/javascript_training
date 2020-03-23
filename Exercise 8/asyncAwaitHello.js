import getName from '../Exercise 7/promise';

async function asyncAwait() {
    const name = await getName().then(value => {return value});
    return `Hello, ${name}`;
}

export default asyncAwait;