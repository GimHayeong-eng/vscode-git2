const callback = function(collectedValues, item) {
    return [...collectedValues, item];
}

const saying = ['veni', 'vdei', 'veci'];
const initialValue = [];
const copy = saying.reduce(callback, initialValue);

console.log(JSON.stringify(saying));
console.log(JSON.stringify(copy));

const dogs = [
    {
        이름: '맥스',
        크기: '소형견',
        견종: '보스턴테리어',
        색상: '검정색'
    },
    {
        이름: '도니',
        크기: '대형견',
        견종: '래브라도레트리버',
        색상: '검정색'
    },
    {
        이름: '섀도',
        크기: '중형견',
        견종: '래브라도레트리버',
        색상: '갈색'
    }
];

//::: 배열.reduce((반환배열, 배열항목) => {}, 반환배열초기화)
const colors = dogs.reduce((rtnColors, dog) => {
    //중복값이면 반환배열에 추가하지 않음
    if (rtnColors.includes(dog['색상'])) {
        return rtnColors;
    }
    //중복값이 아니면 반환배열에 추가
    return [...rtnColors, dog['색상']];
}, []);

console.log(JSON.stringify(colors));

//::: map: 단일 속성만 추출할 때 유용
const mapColors = dogs.map(dog => dog['색상']);
const reduceColors = dogs.reduce((colors, dog) => { return [...colors, dog['색상']]}, []);
console.log(JSON.stringify(mapColors));
console.log(JSON.stringify(reduceColors));

//::: reduce: 반복 횟수를 최소화하며 변환되는 데이터 형태를 유추할 수 있게 하고 데이터의 크기와 형태를 동시에 변경 가능
const filters = dogs.reduce((rtnFilters, item) => {
    rtnFilters.breed.add(item['견종']);
    rtnFilters.size.add(item['크기']);
    rtnFilters.color.add(item['색상']);

    return rtnFilters;
}, {
    breed: new Set(),
    size: new Set(),
    color: new Set()
});
filters.breed.forEach(item => console.log(item));
filters.size.forEach(item => console.log(item));
filters.color.forEach(item => console.log(item));

const developers = [
    {
        name: 'Jeff',
        language: 'php'
    },
    {
        name: 'Ashley',
        language: 'python'
    },
    {
        name: 'Sara',
        language: 'python'
    },
    {
        name: 'Joe',
        language: 'javascript'
    }
];

const aggregated = developers.reduce((specialities, developer) => {
    const count = specialities[developer.language] || 0;
    return {...specialities, [developer.language]: count + 1}
}, {});
console.log(JSON.stringify(aggregated));