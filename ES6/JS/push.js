const cart = [
    {
        name: 'The Foundation Triology',
        price: 19.99,
        discount: false
    },
    {
        name: 'Godel, Escher, Bach',
        price: 15.99,
        discount: false
    },
    {
        name: 'Red Mars',
        price: 5.99,
        discount: true
    }
];
const reward = {
    name: 'Guide to Science Fiction',
    price: 0,
    discount: true
}
//::: 함수에 전달된 값 cart 가 변경되어 잠재적 오류 가능성 존재.
function addFreeGiftError(cart) {
    if (cart.length > 2) {
        return cart.push(reward);
    }
    return cart;
}
//::: 함수를 호출할 때는 함수에 전달한 값을 변경하지 않을 것이라는 신뢰가 필요함.
function addFreeGift(cart) {
    if (cart.length > 2) {
        return [...cart, reward];
    }
    return cart;
}
function summarizeCartError(cart) {
    const discountable = cart.filter(item => item.discount);
    if (discountable.length > 1) {
        return {
            error: '할인 상품은 하나만 주문할 수 있습니다.'
        };
    }
    //::: cartWithReward 변수를 discountable 을 추출하기 전인 해당 메서드 최상단으로 이동하면 cart 가 조작되어 reward 상품이 추가되지 않는 오류 잠재
    const cartWithReward = addFreeGiftError(cart);
    return {
        DISCOUNTS: discountable.length,
        ITEMS: cartWithReward.length,
        CART: cartWithReward
    };
}
function summarizeCart(cart) {
    //const cartWithReward = addFreeGiftError(cart);
    //::: addFreeGift 함수로 전달된 cart 가 변경되지 않도록 spread 연산자 사용
    const cartWithReward = addFreeGift(cart);
    const discountable = cart.filter(item => item.discount);
    if (discountable.length > 1) {
        return {
            error: '할인 상품은 하나만 주문할 수 있습니다.'
        };
    }
    return {
        DISCOUNTS: discountable.length,
        ITEMS: cartWithReward.length,
        CART: cartWithReward
    };
}
console.log(JSON.stringify(summarizeCart(cart)));

const titles = ['Moby Dick', 'White Teeth'];

//::: 원본배열 끝에 추가한 새로운 배열
const moreTitles = [...titles, 'The Conscious Wind'];
console.log(`titles: ${JSON.stringify(titles)}`);
console.log(`moreTitles: ${JSON.stringify(moreTitles)}`);

//::: 원본배열 첫번째 삭제
console.log(`titles.shift: ${JSON.stringify(titles.shift())}`);
console.log(`titles: ${JSON.stringify(titles)}`);

//::: 원본배열 첫번째에 추가한 새로운 배열
const evenMoreTitles = ['The Conscious Wind', ...moreTitles];
console.log(`evenMoreTitles: ${JSON.stringify(evenMoreTitles)}`);

//::: 원본배열 복제1 : slice
const toCopy = ['Moby Dick', 'White Teeth'];
const sliceCopied = toCopy.slice();
console.log(`slice copy: ${sliceCopied}`);
//::: 원본배열 복제2 : spread
const moreCopies = ['Moby Dick', 'White Teeth'];
const spreadCopied = [...moreCopies];
console.log(`spread copy: ${spreadCopied}`);