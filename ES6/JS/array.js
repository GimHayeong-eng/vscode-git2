//:::: spread 연산자를 통한 원본 조작없는 정렬
const team = ['Joe', 'Dyan', 'Bea', 'Theo'];

function alphabetizeTeam(team) {
    return [...team].sort();
}

console.log(`before: ${JSON.stringify(team)}`);
console.log(JSON.stringify(alphabetizeTeam(team)));
console.log(`after: ${JSON.stringify(team)}`);

//::: filter 함수를 통한 객체 조회
const staff = [
    {
        name: 'Wesley',
        position: 'musician'
    },
    {
        name: 'Davis',
        position: 'engineer'
    }
];
function getMusicians(staff) {
    return staff.filter(member => member.position === 'musician');
}
console.log(`before: ${JSON.stringify(staff)}`);
console.log(JSON.stringify(getMusicians(staff)));
console.log(`before: ${JSON.stringify(staff)}`);

//::: 객체 키 배열로 특정 키 조회
const game1 = {
    player:'Jim Jonas',
    hits: 2,
    runs: 1,
    errors: 0
};
const game2 = {
    player:'Jim Jonas',
    hits: 3,
    runs: 0,
    errors: 1
};

const total = {};
const stats = Object.keys(game1);//객체 키 배열 반환
for (let i = 0; i < stats.length; i++) {
    const stat = stats[i];
    if (stat !== 'player') {
        total[stat] = game1[stat] + game2[stat];
    }
}
console.log(JSON.stringify(total));

//::: 2차원 배열로 키-값 구현
const dogPair = [
    ['name', 'Don'],
    ['color', 'black']
];
function getName(dog) {
    return dog.find(attribute => {
        return attribute[0] === 'name';
    })[1];
}
console.log(`Name: ${getName(dogPair)}`);

//::: indexOf 함수에서 첫번째 항목에서 찾는 경우 0을 반환하여 indexOf 를 boolean 형으로 사용 불가하여 숫자 -1과 비교하는 번거로움 => includes 사용
const section = ['shipping', 'contact'];
console.log(`indexOf('shopping') === true: ${(section.indexOf('shipping') ? 'true' : 'false')}`);//false
console.log(`indexOf('shopping') > -1: ${(section.indexOf('shipping') > -1 ? 'true' : 'false')}`);//true
console.log(`includes('shipping'): ${(section.includes('shipping') ? 'true' : 'false')}`);//true
