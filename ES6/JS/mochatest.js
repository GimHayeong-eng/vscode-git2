//::: 의존성 주입(dependency injection: 의존성을 인수로 전달): 밀접하게 결합된 코드의 결합도를 낮추려면 외부함수를 인수로 전달
function formatPrice(user, { price, location }, getTextInformation) {
    const rate = getTextInformation(location);
    const taxes = rate ? `추가 세금 $${price * rate}` : '추가 세금';

    return `${user} 님의 합계 금액: $${price} 및 ${taxes}`;
}