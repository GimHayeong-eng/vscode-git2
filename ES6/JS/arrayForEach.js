const sailingClub = [
    'yi hong',
    'andy',
    'darcy',
    'jessi',
    'alex',
    'nathan'
];

function sendEmail(userName) {
    console.log(`send email : ${userName}`);
}
function sendMail(sailingClub) {
    for(let i = 0; i <sailingClub.length; i++) {
        sendEmail(sailingClub[i]);
    }
}
sendMail(sailingClub);

//::: 배열을 조작하는 것은 지양
//sailingClub.forEach(userName => sendEmail(userName.toUpperCase()));
//let capitalized = [];
//sailingClub.forEach(userName => capitalized.push(userName.toUpperCase));
//capitalized.forEach(userName => sendEmail(userName));
//::: 배열을 조작하지 않고 부수적인 기능(이메일 보내기)을 수행할 때 사용 권장
sailingClub.forEach(userName => sendEmail(userName));