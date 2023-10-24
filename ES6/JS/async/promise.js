'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer : Promise
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work : network, read files ...
    console.log('doing something...');
    setTimeout(() => {
        //resolve('ellie');
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers : then, catch, finally
//promise.then(console.log).catch(console.log).finally(console.log('finally'));
promise //
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
});

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

// num = 1
fetchNumber
    .then(num => num * 2)// 1 * 2 = 2
    .then(num => num * 3)// 2 * 3 = 6
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);// 6 - 1 = 5
        })
    })
    .then(num => console.log(num));// 5

//4. Error Handling
const getHen = () => new Promise((resolve, reject) => setTimeout(() => resolve('🐓'), 1000));
const getEgg = (hen) => new Promise((resolve, reject) => setTimeout(() => resolve(`${hen} => 🥚`), 1000));
//const getEgg = (hen) => new Promise((resolve, reject) => setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000));
const getCook = (egg) => new Promise((resolve, reject) => setTimeout(() => resolve(`${egg} => 🍳`), 1000));

getHen()//
    .then(getEgg)
    .catch(error => `🍞`) //getEgg 에러 캐치 : 대체 결과 리턴하고 다음 then 으로...
    .then(getCook)
    .then(console.log)
    .catch(console.log);
/*
getHen()
    .then(hen => getEgg(hen))
    .then(egg => getCook(egg))
    .then(meal => console.log(meal))
    .catch(error => console.log(error));
*/    