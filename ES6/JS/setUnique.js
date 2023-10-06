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

function getColors(dogs) {
    return dogs.map(dog => dog['색상']);
}
console.log(JSON.stringify(getColors(dogs)));
function getUnique(attributes) {
    const unique = [];
    for (const attribute of attributes) {
        if (!unique.includes(attribute)) {
            unique.push(attribute);
        }
    }
    return unique;
}

//::: Set: 중첩하지 않은 값들을 담은 객체
//::: add(), has(), delete(), clear() 메서드 내장
//::: 이미 존재하는 값을 추가하면 무시되고 원래 위치는 유지됨
console.log(JSON.stringify(getUnique(getColors(dogs))));
//::: 중첩하지 않은 값들을 Set 로 추출한 후, 배열로 변환하여 반환
function getUniqueSet(attributes) {
    return [...new Set(attributes)];
}
console.log(JSON.stringify(getUniqueSet(getColors(dogs))));
//::: add() 메서드를 사용하여 색상 속성의 유일값의 배열을 반환
function getUniqueColors(dogs) {
    const unique = new Set();
    for(const dog of dogs) {
        unique.add(dog.색상);
    }
    return [...unique];
}
console.log(JSON.stringify(getUniqueColors(dogs)));

function getUniqueColorsByReduce(dogs) {
    return [...dogs.reduce((unique, { 색상 }) => unique.add(색상)
                            , new Set())
            ];
}
console.log('reduce((리턴 데이터, { 추출변수명 }) => 추출변수 처리, 리턴 데이터형 초기화)');
console.log(JSON.stringify(getUniqueColors(dogs)));
