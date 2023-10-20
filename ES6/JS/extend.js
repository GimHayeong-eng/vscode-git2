//import { Coupon } from './JS/constructor'; //export 클래스 { }

import Coupon from './JS/constructor.js'; //export default 클래스 { }
/* class Coupon {

    // 클래스 생성자
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
}*/

class FlashCoupon extends Coupon {
    constructor(price, expiration) {
        super(price);
        this.expiration = expiration || '2시간';
    }
    //부모 클래스의 메서드와 동일한 메서드를 새로 작성하면 부모 클래스의 메서드를 대체 (override: 부모 메서드 재정의)
    getExpirationMessage() {
        return `이 쿠폰은 깜짝 쿠폰이며 ${this.expiration} 후에 만료됩니다.`;
    }
    isRewardsEligible(user) {
        return super.isRewardsEligible(user) && this.price > 20;
    }
    getRewards(user) {
        if (this.isRewardsEligible(user)) {
            this.price = this.price * 0.8;
        }
    }
}
export { FlashCoupon };
//const flash = new FlashCoupon(10);
//console.log(flash.getExpirationMessage());

