const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit'
};
//::: 객체 spread 연산자는 객체의 키-값 쌍의 목록 반환
//::: 동일한 키에 서로 다른 값을 추가하면 가장 마지막에 선언한 값을 사용
const update = {...book, year: 1984};
console.log(JSON.stringify(update));
const updateTitle = {...book, title: 'Reasons & Persons'};
console.log(JSON.stringify(updateTitle));

const defaults = {
    author: '',
    title: '',
    year: 2017,
    rating: null
};
//::: 객체 spread 연산자로 업데이트
const bookWithDefaults = {...defaults, ...book};
console.log(JSON.stringify(bookWithDefaults));

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
//::: spread 연산자 이용 중첩객체 복사 이슈 해결 => 중첩객체 별도 spread 연산자 
console.log(JSON.stringify({...defaultEmployee, name: {...employee.name}}));
//::: Object.assign : 중첩객체 복사 이슈 해결 => 중첩객체 별도 Object.assign 복사 매개변수 객체 사용
//console.log(JSON.stringify(Object.assign({}, defaultEmployee, {name: Object.assign({}, employee.name)})));
//console.log(JSON.stringify(Object.assign({}, defaultEmployee, {name: Object.assign({}, employee.name)}, {years: 15})));