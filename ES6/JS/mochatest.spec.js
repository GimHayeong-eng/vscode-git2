import expect from 'expect';


import { fromPrice } from './mocha';

//::: 의존성 주입을 통해 스텁을 생성하지 않고 보다 간단한 테스트 코드 작성 가능
describe('가격 표시', () => {
    it('세금 정보가 없으면 세금 추가를 안내해야 한다', () => {
        const item = { price: 30, location: 'Oklahoma'};
        const user = 'Aaron Cometbus';
        const message = formatPrice(user, item, () => null);
        const expectedMessage = 'Aaron Cometbus님의 합계 금액: $30 및 추가 세금';
        expect(message).toEqual(expectedMessage);
    });

    it('세금 정보가 있으면 세금 금액을 알려줘야 한다', () => {
        const item = { price: 30, location: 'Oklahoma'};
        const user = 'Aaron Cometbus';
        const message = formatPrice(user, item, () => 0.1);
        const expectedMessage = 'Aaron Cometbus님의 합계 금액: $30 및 추가 세금 $3';
        expect(message).toEqual(expectedMessage);
    });
});