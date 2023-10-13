const name = {
    first: 'Lemmy',
    last: 'Kilmister'
};

function getName({first, last}) {
    return `${first} ${last}`;
}


const getNameFunc = ({ first, last }) => `${first} ${last}`;

const getFullName = ({first, last}) => ({ fullName: `${first} ${last}`});

const getNameAndLocation = ({first, last, city, state}) => ({ fullName: `${first} ${last}`, location: `${city}, ${state}`});

const comic = {
    first: 'Peter',
    last: 'Bagge',
    city: 'Seattle',
    state: 'Washington'
};

console.log(getName(name));
console.log(getNameFunc(name));
console.log(getNameFunc(comic));
console.log(getFullName(comic));
console.log(getNameAndLocation(comic));

//::: 고차함수 : 다른 함수를 반환하는 함수
/*const discounter = discount => {
    return price => {
        return price * (1 - discount);
    }
};*/
const discounter = discount => price => price * (1 - discount);

//::: 고차함수에서 반환되는 함수를 변수에 할당 후 호출
const tenPercentOff = discounter(0.1);
console.log(tenPercentOff(100));

//::: 고차함수에 연결해서 두번째 매개변수를 전달하여 바로 호출
console.log(discounter(0.3)(100));
