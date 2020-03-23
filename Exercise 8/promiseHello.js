import getName from '../Exercise 7/promise'

function promiseHello() {
    getName().then((value) => {
        const test = `Hello, ${value}`;
    });

    return test;
}

export default promiseHello;