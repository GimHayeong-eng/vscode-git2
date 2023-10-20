/* Coupon 클래스의 생성자 부분의 코드를 생성자 함수를 이용해 객체 인스턴스 만들기
constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2 주';
}*/
// 생성자 함수: 함수명은 대문자로 시작하며, this 키워드 사용 가능하나 메서드는 복제되지 않고 prototype 속성에 메서드 추가
function Coupon(price, expiration) {
    this.price = price;
    this.expiration = expiration || '2 주';
}

const coupon = new Coupon(5, '2개월');

// 생성자명 Coupon 을 사용해 객체 인스턴스에 함수나 속성을 추가: prototype 속성에 메서드를 추가
Coupon.prototype.getExpirationMessage = function() {
    return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
};

console.log(coupon.getExpirationMessage());

// 생성자 함수 상속
class FlassCoupon extends Coupon {
    constructor(price, expiration) {
        super(price);
        this.expiration = expiration || '2시간';
    }
    getExpirationMessage() {
        return `이 쿠폰은 깜짝 쿠폰이며 ${this.expiration} 후에 만료됩니다.`;
    }
}

const flashCoupon = new FlassCoupon(100, '30 분');
console.log(flashCoupon.getExpirationMessage());
