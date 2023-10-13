const building = {
    hours: '8 a.m. - 8 p.m.',
    address: 'Jayhawk Blvd'
};
const manager = {
    name: 'Augusto',
    phone: '555-555-5555'
};
const program = {
    name: 'Presenting Research',
    room: '415',
    hours: '3-6'
};
const exhibit = {
    name: 'Emerging Scholarship',
    contact: 'Dyan'
};

function mergeProgramInformation(building, manager, event) {
    const {hours, address} = building;
    const {name, phone} = manager;
    const defaults = {
        hours,
        address,
        contact: name, /* 변수명 contact 으로 변경 */
        phone
    };

    return {...defaults, ...event};
}

//::: 함수를 호출할 때 동일 매개변수(building, manager) 가 존재하므로 '단일 책임 매개변수' 로 변환 필요
const programInfo = mergeProgramInformation(building, manager, program);
const exhibitInfo = mergeProgramInformation(building, manager, exhibit);
console.log(JSON.stringify(programInfo));
console.log(exhibitInfo);


//::: 함수를 호출할 때 동일 매개변수(building, manager) 가 존재하므로 '단일 책임 매개변수' 로 변환 필요 => 고차함수 사용
function mergeProgramInformationParitial(building, manager) {
    const {hours, address} = building;
    const {name, phone} = manager;
    const defaults = {
        hours,
        address,
        contact: name, /* 변수명 contact 으로 변경 */
        phone,
    };

    return program => {
        return {...defaults, ...program};
    };
}

//::: 매개변수 반복 해결 못함
const programInfoParitial = mergeProgramInformationParitial(building, manager) (program);
const exhibitInfoParitial = mergeProgramInformationParitial(building, manager) (exhibit);
console.log(programInfoParitial);
console.log(exhibitInfoParitial);

console.log('=================== 매개변수 반복 해결 I ==================');
//::: 매개변수 반복 해결 : 고차함수로 한번 저장후 나중에 사용할 수 있는 새로운 함수 생성하여 재사용하여 매개변수 반복 해결
const setStrongHallProgram = mergeProgramInformationParitial(building, manager);
console.log(setStrongHallProgram(program));
console.log(setStrongHallProgram(exhibit));

console.log('=================== 매개변수 반복 해결 II ==================');
//::: 매개변수 반복 해결 : 고차함수 정보 하드코딩
const SetStrongHollProgramArrow = program => {
    const defaults = {
        hours: '8 a.m. - 8 p.m.',
        address: 'Jayhawk Blvd',
        contact: 'Augusto',
        phone: '555-555-5555',
    };

    return {...defaults, ...program};
};
console.log(SetStrongHollProgramArrow(program));
console.log(SetStrongHollProgramArrow(exhibit));


//::: 지역 대표 새 반환
function getBirds(...args) {
    console.log(args);
    return args
        .map(item => {
            switch(item) {
                case 'kansas': return 'meadowlark';
                case 'wisconsin': return 'robin';
                case 'new mexico': return 'roadrunner';
            }
        })
        .filter(item => item);
    
   /*return ['meadowlark', 'robin', 'roadrunner'];*/
}


//::: 두 배열을 결합 : [[left[0], right[0]], [left[1], right[1]], [left[1], right[1]]]
//::: 쌍이 존재하지 않으면 null
const birds = getBirds('kansas', 'wisconsin', 'new mexico');
[...birds].forEach(item => console.log(`BIRD: ${item}`));
const zip = (...left) => (...right) => {
    console.log(`LEFT: ${JSON.stringify(left)}, RIGHT: ${JSON.stringify(right)}`);
    return left.map((item, i) => [item, right[i]]);
};
console.log(JSON.stringify(zip('kansas', 'wisconsin', 'new mexico')(...birds)));