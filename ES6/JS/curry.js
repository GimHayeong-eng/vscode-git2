const dogs = [
    {
        이름: '맥스',
        무게: 10,
        견종: '보스턴테리어',
        지역: '위스콘신',
        색상: '검정색'
    },
    {
        이름: '도니',
        무게: 90,
        견종: '래브라도레트리버',
        지역: '캔자스',
        색상: '검정색'
    },
    {
        이름: '섀도',
        무게: 40,
        견종: '래브라도레트리버',
        지역: '위스콘신',
        색상: '갈색'
    }
];

function getDogNames(dogs, filter) {
    const [key, value] = filter;
    return dogs
        .filter(dog => dog[key] === value)
        .map(dog => dog['이름']);
}

function getDogNamesFunc(dogs, filterFunc) {
    return dogs
        .filter(filterFunc)
        .map(dog => dog['이름']);
}

console.log(getDogNames(dogs, ['색상', '검정색']));
console.log(getDogNamesFunc(dogs, dog => dog['색상'] === '검정색'));
console.log(getDogNamesFunc(dogs, dog => dog['무게'] < 20));

//::: 무게 비교 조건 상수 20 도 변수화 하고 고차함수로 저장한 후 재사용
const weightCheck = weight => dog => dog['무게'] < weight;
console.log(getDogNamesFunc(dogs, weightCheck(20)));
console.log(getDogNamesFunc(dogs, weightCheck(50)));

const identity = field => value => dog => dog[field] === value;
const colorCheck = identity('색상');
const stateCheck = identity('지역');
console.log(getDogNamesFunc(dogs, colorCheck('갈색')));
console.log(getDogNamesFunc(dogs, stateCheck('위스콘신')));

//::: AND 연산
function allFilters(dogs, ...checkFuncs) {
    return dogs
        .filter(dog => checkFuncs.every(checkFunc => checkFunc(dog)))
        .map(dog => dog['이름']);
}
const resultEvery = allFilters(dogs, colorCheck('검정색', stateCheck('캔자스')));
console.log(resultEvery);

//::: OR 연산
function anyFilters(dogs, ...checkFuncs) {
    return dogs
        .filter(dog => checkFuncs.some(checkFunc => checkFunc(dog)))
        .map(dog => dog['이름']);
}
const resultSome = anyFilters(dogs, weightCheck(20), colorCheck('갈색'));
console.log(resultSome);