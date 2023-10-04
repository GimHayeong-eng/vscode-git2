const txtRate = 0.1;
const shipping = 5.0;
let total = 100 + (100 * txtRate);
if (shipping > 0) total += shipping;
console.log(`TOTAL: ${total}`);

const cart = [{
    title: 'A',
    discountAvailable: false
},
{
    title: 'B',
    discountAvailable: true
},
{
    title: 'C',
    discountAvailable: false
},
{
    title: 'D',
    discountAvailable: true
}
];
const discountable = [];
for(let i = 0; i<cart.length; i++) {
    if(cart[i].discountAvailable === true) {
        discountable.push(cart[i]);
    }
}
console.log(JSON.stringify(discountable));

const discountable2 = cart.filter(item => item.discountAvailable);
console.log(JSON.stringify(discountable2));

const lst = [
    {
        inventory: 0,
        price: 3,
        salePrice: 0,
        saleInventory: 0
    },
    {
        inventory: 3,
        price: 3,
        salePrice: 2,
        saleInventory: 1
    },
    {
        inventory: 3,
        price: 3,
        salePrice: 2,
        saleInventory: 0
    }
];

for(let item of lst) {
    if (item.inventory < 1) {
        //재고가 없으면 0
        console.log(`${JSON.stringify(item)} => Inventory: 0`);
        continue;
    }
    else {
        if (item.salePrice > 0) {
            //할인중이면
            if (item.inventory > 0 && item.saleInventory > 0) {
                //할인중이고 재고가 있다면 할인가격
                // + 할인중이라도 할인상품의 재고가 없다면 정상가격(할인중이고 할인상품의 재고가 있다면 할인가격)
                //즉, 할인중이고 재고도 있고 할인상품 재고도 있으면 할인가격
                console.log(`${JSON.stringify(item)} => 할인중 재고있음(SalePrice): ${item.salePrice}`);
                continue;
            }
        }
        //할인중이라도 할인상품의 재고가 없다면 정상가격            
        //할인중이 아니면 정상가격
        console.log(`${JSON.stringify(item)} => 할인재고없음(Price): ${item.price}`);
        continue;
    }
}