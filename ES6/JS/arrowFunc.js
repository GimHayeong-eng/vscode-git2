function capitalizeFunc(name) {
    return name[0].toUpperCase() + name.slice(1);
}
console.log(capitalizeFunc('abcdef'));

const capitalizeAnonymous = function(name) {
    return name[0].toUpperCase() + name.slice(1);
};
console.log(capitalizeAnonymous('abcdef'));

const capitalize = name => {
    return name[0].toUpperCase() + name.slice(1);
};
console.log(capitalize('abcdef'));

function keyFunc() {
    return 'abc123';
}
console.log(keyFunc());

const keyAnonymous = function() {
    return 'abc123';
};
console.log(keyAnonymous());

const key = () => {
    return 'abc123';
};
console.log(key());

function greetFunc(first, last) {
    return `안녕하세요, ${capitalize(first)} ${last}님`;
}

const greet = (first, last) => {
    return `안녕하세요, ${capitalize(first)} ${last}님`;
};
console.log(greet('hong', 'gildong'));

function formatUserFunc(name) {
    return `${capitalize(name)}님이 로그인했습니다.`;
}
const formatUser = (name) => {
    return `${capitalize(name)}님이 로그인했습니다.`;
};
console.log(formatUser('홍길동'));

function applyCustomGreetingFunc(name, callback) {
    return callback(capitalize(name));
}
console.log(applyCustomGreetingFunc('밀크티', formatUser));

const applyCustomGreetingAnonymous = (name, function(name) {
    return `Hi, ${name}`;
});
console.log(applyCustomGreetingAnonymous('밀크T아이'));

const applyCustomGreeting = (name, (name) => { return `Hi, ${name}`; });
console.log(applyCustomGreeting('밀크T', formatUser));