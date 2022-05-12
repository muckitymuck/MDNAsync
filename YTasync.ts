
//1
console.log("Synchronous 1");

setTimeout(_ => console.log(' Timeout 2'), 0)

Promise.resolve().then(_ => console.log(' Promise 3'));

console.log(' Synchronous 4');


import fetch from 'node-fetch';
const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

promise
    .then(res => res.json())
    .then(user => console.log('HI!', user.title))
    .catch(err => console.error('OOPS'))
console.log(' Synchronous 5')

const codeBlocker = () => {

    return Promise.resolve().then(v => {
        let i = 0;
        while(i < 1000000000) { i++; }
        return '1 billion loops done';
    })
    

}

const getFruit = async(name) => {
    const fruits = {
        pineapple:  "spiny",
        peach:      "softy",
        strawberry: "ichigo"
    }
    return fruits[name];
}
getFruit('peach').then(console.log)

const makeSmoothie = async() => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberrry');
    const promise = await Promise.all([a,b])

    return promise;
}

const fruits = ['peach', 'pineapple', 'strawberry'];

const fruitLoop = async() => {
    for (const f of fruits) {
        const emoji = await getFruit(f);
        log(emoji);
    }
}
fruitLoop();

const fruitInspection = async () => {
    if (await getFruit('peach') === "softy") {
        console.log('looks peachy!')
    }
}
fruitInspection()
