//::: 객체: 값 변화가 없고 구조화된 키-값 데이터에 유용
const colors = {
    red: '#d10202',
    green: '#19d836',
    blue: '#0e33d8'
};
/*export*/ const config = {
    endpoint: 'http://pragprog.com',
    key: 'secretkey'
};
let total = 0;
function twoWeeksFromNow() {
    const today = new Date();
    return today.setDate(today.getDate() + 14);
}
function calculateTotal(price) {
    total += price;
    return total;
}
function dateFormatString(date) {
    const today = new Date(date);
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const hours = ('0' + today.getHours()).slice(-2); 
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2); 

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
function getBill(item) {
    return {
        name: item.name,
        due: twoWeeksFromNow(),
        total: calculateTotal(item.price)
    };
}
const bill = getBill({
    name: '객실 청소',
    price: 30
});
function displayBill(bill) {
    return `${bill.name} - cost: $${bill.total}, date: ${dateFormatString(bill.due)}`;
}
console.log(displayBill(bill));