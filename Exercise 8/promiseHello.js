import getName from '../Exercise 7/promise'
import returnAllCharacters from '../Exercise 9/getAllCharacters';

function promiseHello() {
    return getName()
    .then((value) => {
        return `Hello, ${value}`;
    })
    .catch((message) => {
        return message;
    });
}

export default promiseHello;