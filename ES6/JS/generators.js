function* getCairoTrilogy() {
    yield '궁전 샛길';
    yield '욕망의 궁전';
    yield '설탕 거리';
}

const trilogy = getCairoTrilogy();
let item = trilogy.next();// { value: '궁전 샛길', done: false }
while(item.done === false) {
    console.log(item);
    item = trilogy.next();
}
//console.log(trilogy.next());
//console.log(trilogy.next());
//console.log(trilogy.next());
//console.log(trilogy.next());

console.log([...getCairoTrilogy()]);

const readingList = {
    '깡패단의 방문': true,
    '맨해튼 비치': false
};

// 목록에 추가
for (const book of getCairoTrilogy()) {
    readingList[book] = false;
}

console.log(readingList);

// 제너레이터는 클래스에 단순한 인터페이스를 제공
// 복잡한 데이터 구조를 다루는 클래스를 만들때 단순 배열처럼 데이터에 접근할 수 있게 설계 가능
class FamilyTree {
    constructor() {
        this._family = {
            name: 'Doris',
            Child: {
                name: 'Martha',
                Child: {
                    name: 'Dyan',
                    Child: {
                        name: 'Bea',
                    }
                }
            }
        }
    }
    get Family() {
        return this._family;
    }
    set Family(family) {
        this._family = family;
    }
    // 기존 함수 방식 ::::::::::::::::::::::::::::::::::::
    // 배열에 담아 return 으로 반환 명시
    getMembers() {
        const family = [];
        let node = this._family;
        while (node) {
            family.push(node.name);
            node = node.Child;
        }
        // return 반환 명시
        return family;
    }
    // 새로운 제너레이터 방식 ::::::::::::::::::::::::::::::
    // 제너레이터를 사용해 배열에 담지 않고 데이터를 바로 반환
    // *[Symbol.iterator](): 클래스의 이터러블에 제너레이터 연결
    *[Symbol.iterator]() {
        let node = this._family;
        while (node) {
            // 결과값 yield 로 넘겨주기
            yield node.name;
            node = node.Child;
        }
    }
}

const family = new FamilyTree();
console.log(family.getMembers());

// 제너레이터를 사용해 배열에 담지 않고 데이터를 바로 반환
console.log([...family]);
//export default FamilyTree;
