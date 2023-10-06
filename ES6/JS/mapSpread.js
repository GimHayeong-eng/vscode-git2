//::: 객체를 직접 순회하지 않는다.
//::: 객체에서 순서가 보장되지 않는다.(정렬 불가)
const filters = {
    색상: '검정색',
    견종: '래브라도레트리버'
};

function getAppliedFilters(filters) {
    const keys = Object.keys(filters);
    const applied = [];
    for (const key of keys) {
        applied.push(`${key}:${filters[key]}`);
    }
    return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
console.log(getAppliedFilters(filters));

//::: 맵은 정렬과 순회에 필요한 기능이 내장되어 있다.
//::: entries() 메서드는 맵의 키-값의 쌍의 배열을 담은 객체인 MapIterator 를 반환 : MapIterator {['색상', '검정색'], ['견종', '래브라도레트리버']}
//::: 맵은 순서를 저장하지만 정렬 메서드(sort)가 내장되어 있지 않다. => 비교 함수를 명시적으로 제공해야 함.
//::: 맵의 spread 연산자는 키-값 쌍의 배열 반환. => 맵을 배열로 변환하는 결과.
const mapFilters = new Map()
                    .set('색상', '검정색')
                    .set('견종', '래브라도레트리버');
function checkFilters(filters) {
    for (const entry of filters) {
        console.log(entry);
    }
}
checkFilters(mapFilters);
function getAppliedMapFilters(filters) {
    const applied = [];
    for (const [key, value] of filters) {
        applied.push(`${key}:${value}`);
    }
    return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
console.log(getAppliedMapFilters(mapFilters));
//mapFilters.sort();//사용불가
//::: 맵의 비교함수
function sortByKey(a, b) {
    return a[0] > b[0] ? 1 : -1;
}
//::: 비교함수를 통해 맵을 정렬하여 결과 반환
function getSortedAppliedMapFilters(filters) {
    const applied = [];
    for (const [key, value] of [...filters].sort(sortByKey)) {
        applied.push(`${key}:${value}`);
    }
    return `[키 정렬] 선택한 조건은 ${applied.join(', ')} 입니다.`;
}
console.log(getSortedAppliedMapFilters(mapFilters));
//::: map() 메서드로 배열로 변환 용이
function getAppliedMapFiltersByMapFunc(filters) {
    const applied = [...filters].map(([key, value]) => {
        return `${key}:${value}`;
    });
    return `선택한 조건은 ${applied.join(', ')} 입니다.`;
}
console.log(getAppliedMapFiltersByMapFunc(mapFilters));
//::: chainig 으로 함수 연결
function getSortedAppliedMapFilterByMapFunc(filters) {
    const applied = [...filters]
                    .sort(sortByKey)
                    .map(([key, value]) => {
                        return `${key}:${value}`;
                    })
                    .join(', ');
    return `[키 정렬] 선택한 조건은 ${applied} 입니다.`;
}
console.log(getSortedAppliedMapFilterByMapFunc(mapFilters));