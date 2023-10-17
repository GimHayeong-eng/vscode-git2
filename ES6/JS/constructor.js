class Coupon {
    /** 클래스 생성자 */
    constructor(price, expiration) {
        this.price = price;
        this.expiration = expiration || '2 주';
    }
    getPriceText() {
        return `$ ${this.price}`;
    }
    getExpirationMessage() {
        return `이 쿠폰은 ${this.expiration} 후에 만료됩니다.`;
    }
    toString() {
        return `price: ${this.price}, expiration: ${this.expiration}`;
    }
}
const coupon = new Coupon(5);
console.log(coupon.toString());
console.log(coupon);
console.log(coupon.getPriceText());
console.log(coupon.getExpirationMessage());
