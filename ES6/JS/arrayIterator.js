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

const scores = [30, 82, 70, 45];
function getNumberOfPassingScores(scores) {
    const passing = scores.filter(score => score > 59);
    console.log(JSON.stringify(passing));
    return passing.length;
}
getNumberOfPassingScores(scores);