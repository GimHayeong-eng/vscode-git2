class Coupon {
    constructor(price, expiration) {
        this._price = price;
        this.expiration = expiration || '2주';
    }
    //getter 와 setter 는 짝을 맞춰 작성 권장
    //getter 와 setter 와 같은 이름을 가진 속성 불가 : 무한 호출 스택 쌓임 현상 발생(범위오류: 호출 스택의 최대치를 초과함)
    //getter 와 setter 의 비공개 변수는 _변수명 형태로 비공개임을 표시함 (javascript 비공개 속성 지원하지 않음)
    get price() {
        return this._price;
    }
    set price(price) {
        console.log(`IN: ${price}`);
        const newPrice = price
                            .toString()
                            .replace(/[^\d]/g, '');
        console.log(`RESULT: ${newPrice}`);
        this._price = parseInt(newPrice, 10);
    }
    getPriceText() {
        return `$ ${this._price}`;
    }
    getExpirationMessage() {
        return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
    }
}

const coupon = new Coupon(5);
//coupon.setPrice('$10');
coupon.price = '$10';
console.log(coupon.getPriceText());