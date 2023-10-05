const cart = ['Naming and Necessity', 'Alice in Wonderland'];
const copyCart = [...cart];
function removeItem(items, removable) {
    const updated = [];
    for(let i=0; i<items.length; i++) {
        if(items[i] !== removable) {
            updated.push(items[i]);
        }
    }
    return updated;
}
console.log(JSON.stringify(removeItem(cart, 'Alice in Wonderland')));
console.log(JSON.stringify(cart));

const books = ['practical vim', 'moby dick', 'the dark tower'];
const copyBooks = [...books];
//::: splice 의 원본 배열 조작 이슈
function removeItemBySplice(items, removable) {
    const index = items.indexOf(removable);
    items.splice(index, 1);
    return items;
}
//::: slice 원본 배열을 조작하지 않고 새로운 배열 생성 반환 : 개발자가 코드를 통해 반환 값 추정 어려움
function removeItemBySliceConcat(items, removable) {
    const index = items.indexOf(removable);    
    return items.slice(0, index).concat(items.slice(index + 1));
}
//::: slice 원본 배열을 조작하지 않고 새로운 배열 생성 반환
function removeItemBySliceSpread(items, removable) {
    const index = items.indexOf(removable);    
    return [...items.slice(0, index), ...items.slice(index + 1)];
}
console.log(JSON.stringify(removeItemBySplice(copyBooks, 'moby dick')));
console.log(JSON.stringify(copyBooks));
console.log(JSON.stringify(removeItemBySliceConcat(books, 'moby dick')));
console.log(JSON.stringify(books));
console.log(JSON.stringify(removeItemBySliceSpread(books, 'moby dick')));
console.log(JSON.stringify(books));

const book = ['Reasons and Persons', 'Derek Parfit', 19.99];
function formatBook(title, author, price) {
    return `${title} by ${author} $${price}`;
}
console.log(formatBook(book[0], book[1], book[2]));
//::: Spread 연산자를 이용해  배열을 인수 목록으로 빠르게 변환
console.log(formatBook(...book));