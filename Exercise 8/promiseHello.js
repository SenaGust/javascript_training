import getName from '../Exercise 7/promise'

function promiseHello() {
    return getName().then((value) => {
         return `Hello, ${value}`;
    });
}

export default promiseHello;