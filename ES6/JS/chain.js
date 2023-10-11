const sailors = [
    {
        name: 'yi hong',
        active: true,
        email: 'yh@yhproductions.io'
    },
    {
        name: 'alex',
        active: true,
        email: ''
    },
    {
        name: 'nathan',
        active: false,
        email: ''
    }
];

function sendEmail(email) {
    console.log(`sned mail: ${email}`);
}

//::: filter: 참을 반환하는 데이터 배열 반환
const active = sailors.filter(sailor => sailor.active);
console.log(JSON.stringify(active));

//::: map: 모든 데이터의 특정 속성 데이터 배열을 반환하되, 속성값이 없으면 기본값으로 반환
const emails = sailors
                .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`);
//console.log(JSON.stringify(emails));

//::: chain
//::: filter: 데이터가 없으면 빈배열을 반환하므로, filter 메서드에 다른 배열 메서드 호출 가능
sailors
    .filter(sailer => sailer.active)
    .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`)
    .forEach(email => sendEmail(email));