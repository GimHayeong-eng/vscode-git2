const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null
};

const book = {
    author: 'Joe Morgan',
    title: 'Simplifying JavaScript'
};

//::: defaults 매개변수 객체의 값을 book 매개변수 객체의 값으로 업데이트
function addBookDefaults(book, defaults) {
    const fields = Object.keys(defaults);
    const updated = {};
    for(let i = 0; i<fields.length; i++) {
        const field = fields[i];
        updated[field] = book[field] || defaults[field];// 연산자 || : 첫번째가 참(값이 존재)이면 첫번째값으로 업데이트하고, 거짓(값 부재)이면 기존값(defaults)
    }
    return updated;
}
//::: Object.keys 로 키값을 순회하며 해당 데이터 업데이트 후 새로운 객체 반환하여 원본 객체 변경 안됨
console.log(`UPDATE [Object.keys]: ${JSON.stringify(addBookDefaults(book, defaults))}`);

//::: Object.assign : 원본 객체가 변경됨
console.log(`SOURCE-defaults: ${JSON.stringify(defaults)}`);
console.log(`book: ${JSON.stringify(book)}`);
//console.log(`UPDATE [Object.assign]: ${JSON.stringify(Object.assign(defaults, book))}`);
//console.log(`CHANGE-defaults: ${JSON.stringify(defaults)}`);

//::: Object.assign(첫번째, 두번째) : 첫번째 매개변수 객체를 전달받고 두번째 매개변수 객체의 키-값 으로 첫번째 매개변수 객체를 업데이트 후 첫밴째 매개변수 반환
//::: Object.assign : 원본 객체가 변경되지 않도록 첫번째 매개변수에 {} 빈 객체 전달 => 중첩객체 복사 이슈 존재
console.log(`UPDATE [Object.assign]: ${JSON.stringify(Object.assign({}, defaults, book))}`);
console.log(`SOURCE-defaults: ${JSON.stringify(defaults)}`);
console.log(`book: ${JSON.stringify(book)}`);

const defaultEmployee = {
    name: {
        first: '',
        last: '',
    },
    years: 0,
};
const employee = {
    name: {
        first: 'Hong',
        last: 'Gildong'
    }
};
//::: Object.assign : 중첩객체 복사 이슈 해결 => 중첩객체 별도 Object.assign 복사 매개변수 객체 사용
console.log(JSON.stringify(Object.assign({}, defaultEmployee, {name: Object.assign({}, employee.name)})));
//console.log(JSON.stringify(Object.assign({}, defaultEmployee, {name: Object.assign({}, employee.name)}, {years: 15})));