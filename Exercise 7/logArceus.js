import getName from './promise';

function logArceus() {
    getName().then((value) => {
        console.log(value);
    });
}

export default logArceus;