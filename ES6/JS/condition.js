const employee = {
    name: 'Eric',
    equipmentTraining: true
};

function listCerts(employee) {
    if (employee.equipmentTraining) {
        employee.certificates = ['Equipment'];

        delete employee.equipmentTraining;
    }
}

//::: (!불린값) 보다는 (불린값 !== ture) 의 엄격한 일치를 사용 권장
function checkAuthorization() {
    if(employee.equipmentTraining !== true) {
        return '기계를 작동할 권한이 없습니다.';
    }

    return `반값습니다, ${employee.name} 님`;
}

console.log(JSON.stringify(employee));
listCerts(employee);
console.log(JSON.stringify(employee));
console.log(checkAuthorization(employee));

//::: 삼항 연산자를 이용하여 변수의 재할당을 줄임
function getPermissions(title) {
    return title === '과장' ? ['근로시간', '수당'] : ['근로시간'];    
}
console.log(JSON.stringify(getPermissions('과장')));
console.log(JSON.stringify(getPermissions('직원')));

//::: 삼항 연산자를 중첩해 사용해야 하는 경우는 if 문 사용 권장
function getTimePermissions(title) {
    if (title === '과장') {
        return ['근로시간', '초과근무승인', '수당'];
    } else if (title === '부장') {
        return ['근로시간', '초과근무승인'];
    } else {
        return ['근로시간'];
    }
}
console.log(JSON.stringify(getTimePermissions('과장')));
console.log(JSON.stringify(getTimePermissions('부장')));
console.log(JSON.stringify(getTimePermissions('직원')));
