//::: 문자일 길이를 모두 만족하면 true, 하나라도 만족하지 않으면 false 반환
function validateCharacterCount(max, items) {
    return items.every(item => item.length < max);
}

//::: 나머지 매개변수를 사용하여 알수 없는 개수의 매개변수를 받아오기
function validateCharacterCountParams(max, ...items) {
    //return items.filter(item => item.length >= max).length === 0;
    return items.every(item => item.length < max);
}

//::: 나머지 매개변수를 사용하여 알수 없는 개수의 매개변수를 받아오기
function validateCharacterCountArgs(max, ...arguments) {
    const items = Array.prototype.slice.call(arguments, 1);
    return items.every(item => item.length < max);
}

//::: 배열 매개변수
console.log(validateCharacterCount(10, ['Hobbs', 'Engles']));
console.log(validateCharacterCount(10, ['Hobbs', 'Engles', 'abcdefghijklmnopqrstuvwxyz']));
//console.log(validateCharacterCount(10, 'Hobbs'));//TypeError
console.log(validateCharacterCount(10, ['Hobbs']));
//console.log(validateCharacterCount(10, 'Hobbs', 'Engles'));//TypeError
//console.log(validateCharacterCount(10, 'Hobbs', 'Engles', 'abcdefghijklmnopqrstuvwxyz'));//TypeError

//::: 나머지 매개변수
console.log(validateCharacterCountParams(10, 'Hobbs', 'Engles'));
console.log(validateCharacterCountParams(10, 'Hobbs', 'Engles', 'abcdefghijklmnopqrstuvwxyz'));
console.log(validateCharacterCountParams(10, 'Hobbs'));
console.log(validateCharacterCountArgs(10, 'Hobbs', 'Engles'));
console.log(validateCharacterCountArgs(10, 'Hobbs', 'Engles', 'abcdefghijklmnopqrstuvwxyz'));
console.log(validateCharacterCountArgs(10, 'Hobbs'));
