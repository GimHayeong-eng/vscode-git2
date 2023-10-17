const validator = {
    message: '는 유효하지 않습니다.',
    setInvalidMessage(field) {
        return `${field}${this.message}`;
    },
};

console.log(validator.setInvalidMessage('도시'));

const validatorFuncError = {
    message: '는 유효하지 않습니다.',
    /* 객체에 담긴 함수를 화살표 함수로 재정의하면 this 사용 불가 */
    setInvalidMessage: field => `${field}${this.message}`,
};
console.log(validatorFuncError.setInvalidMessage('도시'));//undefined

const validatorCallbackError = {
    message: '는 유효하지 않습니다.',
    /* 객체에 담긴 함수를 setTimeout(), setInterval(), map(), filter() 등 다른 함수의 콜백함수로 사용하면 콜백함수의 문맥에 영향을 줌 */
    setInvalidMessages(...fields) {
        return fields.map(function(field) {
            return `${field}${this.message}`;
        });        
    },
};

console.log(validatorCallbackError.setInvalidMessages('도시', '시골'));//undefined

const validatorContext = {
    message: '는 유효하지 않습니다.',
    setInvalidMessages(...fields) {
        /* 화살표 함수로 map() 콜백함수 재작성 */
        return fields.map(field => {
            return `${field}${this.message}`;
        });        
    },
};

console.log(validatorContext.setInvalidMessages('도시', '시골'));
