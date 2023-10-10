const prices = ['1.0', 'negotiable', '2.15'];

function forLoop() {
    const formattedPrices = [];
    for(let i = 0; i < prices.length; i++) {
        const price = parseFloat(prices[i]);
        if (price) { formattedPrices.push(price); }
    }
    console.log(JSON.stringify(formattedPrices));
}
forLoop();

const formattedPrices = prices
                        .map(price => parseFloat(price))    //map(): 원본의 길이와 동일한 길이의 결과
                        .filter(price => price);            //filter(): false 제거

console.log(JSON.stringify(formattedPrices));

const band = [
    {
        name: 'corbett',
        instrument: 'guitar'
    },
    {
        name: 'evan',
        instrument: 'guitar'
    },
    {
        name: 'sean',
        instrument: 'bass'
    },
    {
        name: 'brett',
        instrument: 'drums'
    }
];

function getInstrument(band) {
    const instruments = [];
    for (let i = 0; i < band.length; i++) {
        instruments.push(band[i].instrument);
    }
    console.log(JSON.stringify(instruments));
}
getInstrument(band);

const instruments = band.map(member => member.instrument);
console.log(JSON.stringify(instruments));

const team = [
    'Michelle B',
    'Dave L',
    'Dave C',
    'Courtney B',
    'Davina M'
];

console.log(JSON.stringify('Dave'.match(/Dav/)));
console.log(JSON.stringify('Michelle'.match(/Dav/)));

function getDev(team) {
    const deves = [];
    for (let i = 0; i < team.length; i++) {
        if (team[i].match(/Dav/)) {
            deves.push(team[i]);
        }
    }
    console.log(JSON.stringify(deves));
}

getDev(team);
console.log(JSON.stringify(team.filter(member => member.match(/Dav/))));

//::: filter 는 배열의 각 항목을 순회할 때 조건이 참값을 반환하면 배열의 값을 결과 배열에 추가하고 거짓이면 결과 배열에 담지 않음
//::: 참값에 해당하는 값만 새로운 배열에 담음 : [82, 72]
//::: 참값이 하나도 없으면 빈 배열을 반환 : []
const scores = [30, 82, 70, 45];
function getNumberOfPassingScores(scores) {
    const passing = scores.filter(score => score > 59);
    console.log(JSON.stringify(passing));
    return passing.length;
}
getNumberOfPassingScores(scores);

function getPerfectScores(scores) {
    const perfect = scores.filter(score => score === 100);
    console.log(JSON.stringify(perfect));
}
getPerfectScores(scores);

//::: find : 참값을 반환하는 첫번째 값을 반환
//::: 참값이 하나도 없으면 undefined 반환 : OR 연산자로 보완
//:::  ㄴ undefined || '[기본값]' 방식으로 사용 가능
const instructors = [
    {
        name: '짐',
        libraries: ['미디어교육정보 도서관']
    },
    {
        name: '새라',
        libraries: ['기념 도서관', '문헌정보 도서관']
    },
    {
        name: '엘리엇',
        libraries: ['중앙 도서관']
    }
];
function getMemoriealInstructor(instructors) {
    for(let i = 0; i<instructors.length; i++) {
        if (instructors[i].libraries.includes('기념 도서관')) {
            console.log(JSON.stringify(instructors[i]));
            break;
        }
    }
}
getMemoriealInstructor(instructors);

const librarian = instructors.find(instructor => {
    return instructor.libraries.includes('기념 도서관');
});
console.log(JSON.stringify(librarian));

const defaultLibrarian = instructors.find(instructor => {
    return instructor.libraries.includes('존재하지 않는 도서관');
});
console.log(JSON.stringify(defaultLibrarian || '기본 도서관'));