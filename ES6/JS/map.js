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
//::: 객체를 사용한 객체 키-값 설정/삭제/초기화
let filters = {};
function addFilters(filters, key, value) {
    filters[key] = value;
}
function deleteFilters(filters, key) {
    delete filters[key];
}
function clearFilters(filters) {
    filters = {};
    return filters;
}
console.log(JSON.stringify(filters));
addFilters(filters, '이름', '섀도');
console.log(JSON.stringify(filters));
deleteFilters(filters, '이름');
console.log(JSON.stringify(filters));
addFilters(filters, '이름', '도그');
//::: 동일키이면 마지막 값으로 갱신
addFilters(filters, '이름', '섀도');
addFilters(filters, '견종', '소형견');
console.log(JSON.stringify(filters));
filters = clearFilters(filters);
console.log(JSON.stringify(filters));

//::: MAP : 키-값 쌍의 추가/삭제 빈번. 키가 문자열이 아닌 경우 사용하면 좋다.
//::: Map 을 사용한 키-값 설정/삭제/초기화
let mapFilters = new Map();
console.log(JSON.stringify(mapFilters));
mapFilters.set('이름', '섀도');
console.log(JSON.stringify(mapFilters.get('이름')));
mapFilters.delete('이름');
console.log(JSON.stringify(mapFilters.get('이름')));
mapFilters.set('이름', '도그');
//::: 동일키이면 마지막 값으로 갱신
mapFilters.set('이름', '섀도');
mapFilters.set('견종', '소형견');
console.log(JSON.stringify(mapFilters.get('이름')));
console.log(JSON.stringify(mapFilters.get('견종')));
mapFilters.clear();
console.log(JSON.stringify(mapFilters.get('이름')));
console.log(JSON.stringify(mapFilters.get('견종')));


const petFilters = new Map();
function addFiltersMap(filters, key, value) {
    filters.set(key, value);
}
function deleteFiltersMap(filters, key) {
    filters.delete(key);
}
function clearFiltersMap(filters) {
    filters.clear();
}
addFiltersMap(petFilters, '색상', '검정색');
console.log(JSON.stringify(petFilters.get('색상')));
deleteFiltersMap(petFilters, '색상');
console.log(JSON.stringify(petFilters.get('색상')));
addFiltersMap(petFilters, '색상', '검정색');
addFiltersMap(petFilters, '견종', '래브라도레트리버');
console.log(JSON.stringify(petFilters.get('색상')));
console.log(JSON.stringify(petFilters.get('견종')));
clearFiltersMap(petFilters);
console.log(JSON.stringify(petFilters.get('색상')));
console.log(JSON.stringify(petFilters.get('견종')));

let errors = new Map([
    [100, '이름이 잘못되었습니다.'],
    [110, '이름에는 문자만 입력할 수 있습니다.'],
    [200, '색상이 잘못되었습니다.']
]);
console.log(errors.get(100));
for(const ekey of errors.keys()){
    console.log(`${ekey}: ${errors.get(ekey)}`);
}