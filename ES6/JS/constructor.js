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
    isRewardsEligible(user) {
        return user.rewardsEligible && user.active;
    }
    getRewards(user) {
        if (this.isRewardsEligible(user)) {
            this.price = this.price * 0.9;
        }
    }
    toString() {
        return `price: ${this.price}, expiration: ${this.expiration}`;
    }
}

/** 모듈 개체가 하나만 존재하면 export default class 클래스 { } */
export default Coupon;







/*
const coupon = new Coupon(5);
console.log(coupon.toString());
console.log(coupon);
console.log(coupon.getPriceText());
console.log(coupon.getExpirationMessage());
*/