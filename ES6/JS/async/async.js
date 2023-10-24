'use strict';

// async & await : 실행 순서 관계없는 비동기
// clear style of using promise : 순차 실행 비동기

// 1. async
function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ellie');
        }, 1000);
    });
    
}

async function asyncFetchUser() {
    setTimeout(() => {
        return 'ellie';
    }, 1000);
}

//fetchUser().then(console.log);

/*
const user = fetchUser();
console.log(
    user//프라미스 user 먼저 console.log
        .then(console.log)//프라미스가 리턴을 받으면 결과 console.log
);
console.log('...');
*/

///*
const asyncUser = asyncFetchUser();
console.log(asyncUser);
console.log('...');
//*/

// 2. await
const delay = (ms)  => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    console.log('getApple()' + new Date());
    await delay(1200);
    return '🍎';
}

async function getBanana() {
    console.log('getBanana()' + new Date());
    await delay(1000);
    return '🍌';
}

/*
function pickFruits() {
    //콜백지옥 빠져빠져빠져....
    return getApple().then(apple => getBanana().then(banana => `${apple} + ${banana}`))
}
*/

/*
async function pickFruits() {
    //콜백지옥을 async await 으로 벗어나자

    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`
}
*/

/*
async function pickFruits() {
    //콜백지옥을 async await 그리고 병렬처리로 조금 더 빨리 벗어나자
    const applePromise = getApple(); //Promise는 선언과 함께 실행
    const bananaPromise = getBanana(); //Promise는 선언과 함께 실행
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}
*/

function pickFruits() {
    //콜백지옥을 Promise.all([프라미스 배열]) 로 비동기 병렬처리로 벗어나자. 깔끔코드까지...
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}

function pickFirstFruits() {
    //Promise.race([프라미스 배열]) 중 가장 먼저 결과를 리턴하는 프라미스를 반환
    return Promise.race([getApple(), getBanana()]);
}
//getApple().then(console.log);
//getBanana().then(console.log);
pickFruits().then(console.log);
pickFirstFruits().then(console.log);