function roundToDecimalPlace(data, roundTo) {
    console.log(`roundToDecimalPlace(data: ${data}, roundTo: ${roundTo})`)
    const round = roundTo || 0;
    
    return Number.parseFloat(data).toFixed(round);
}
function convertWeight(weight, ounces, roundTo) {
    //::: ounces 매개변수가 없으면 기본값 0
    const oz = ounces ? ounces / 16 : 0;
    const total = weight + oz;
    const conversion = total / 2.2;
    //::: roundTo 매개변수가 없는지 또는 0인지 명확히 할 필요가 있으므로 undefined 체크 필요. 매개변수가 없으면 기본값 2
    const round = roundTo === undefined ? 2 : roundTo;
    return roundToDecimalPlace(conversion, round);
}

console.log(`120 pound : ${convertWeight(120)} kilogram`);
console.log(`120 pound 11 ounces : ${convertWeight(120, 11)} kilogram`);
console.log(`120 pound 11 ounces : ${convertWeight(120, 11, 5)} kilogram`);