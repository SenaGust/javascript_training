import getName from '../Exercise 7/promise';

async function asyncAwait() {
    try {
        const name = await getName();
        return `Hello, ${name}`;
    } catch (error) {
        return error;
    }
}

export default asyncAwait;