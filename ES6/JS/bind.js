class Validator {
    constructor() {
        this.message = '가 유효하지 않습니다.';
        //해결1 비권장) 콜백메서드 속성 변경 및 화살표함수 정의
        //             화살표함수는 새로운 this 바인딩을 생성하지 않음.
        this.setInvalidMessage = field => `${field}${this.message}`;
    }

    /*
    //TypeError: Cannot read properties of undefined (reading 'message')
    setInvalidMessage(field) {
        return `${field}${this.message}`;
    }
    */

    // 메서드 호출시 클래스에 대한 this 바인딩 생성
    setInvalidMessages(...fields) {

        //해결1 비권장) map(this.콜백) : 콜백 메서드를 속성으로 변경하고 화살표함수로 변경
        //map(this.콜백) : setInvalidMessage 콜백 메서드 실행시 this 는 클래스가 아닌 배열 메서드의 문맥으로 새로운 바인딩 생성
        return fields.map(this.setInvalidMessage);

        
    }

    //해결2 차선책) 함수를 생성자가 아닌 함수 선언 위치에 정의하여 생성자가 비대해지거나 메서드를 속성이 아닌 메서드로 유지 가능
    sayMessage(field) {
        return `${field}${this.message}`;
    }

    //해결2 차선책) bind() 메서드를 이용하여 문맥을 명시적으로 설정하므로 this로 참조 위치 항상 일정하므로 클래스에 대한 this 바인딩 생성
    sayMessages(...fields) {
        // 콜백.bind(<<this로 접근할 객체>>)
        return fields.map(this.sayMessage.bind(this));
    }
}

const validator = new Validator();
console.log(validator.setInvalidMessages('도시'));
console.log(validator.sayMessages('도시'));




//해결2 최선책) 클래스 속성 설정 명세 적용
class ValidatorProperties {
    message = '가 유효하지 않습니다.';
    sayMessage = field => `${field}${this.message}`;
    sayMessages = (...fields) => fields.map(this.sayMessage);
}

const validatorProp = new ValidatorProperties();
console.log(validatorProp.sayMessages('도시'));