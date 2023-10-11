const firms = new Map()
                .set(10, 'Ivie Group')
                .set(23, 'Soundscaping Source')
                .set(31, 'Big 6');
firms.forEach(item => console.log(`${item}`));

function isAvailable(id) {
    console.log(`id: ${id}`);
    return (id % 2 === 0);
}

const entries = [...firms];
//::: [id, name]
function getValidEntries(entries) {
    let rtn = '';
    for(let i=0; i<entries.length; i++) {
        const [id, name] = entries[i];
        if(!isAvailable(id)) {
            rtn += `${name}는 사용할 수 없습니다.\r\n`;
        }
    }
    return (rtn === '') ? '모든 회사를 사용할 수 있습니다.' : rtn;
}
//console.log(getValidEntries(entries));

//::: [id, name]
const unavailable = [...firms].find(firm => {
    const [id] = firm;
    return !isAvailable(id);
});
if (unavailable) {
    console.log(`RESULT: ${unavailable[1]}는 사용할 수 없습니다.`);
} else {
    console.log('RESULT: All firms are available.');
}

const message = [...firms].reduce((availablity, firm) => {
    const [id, name] = firm;
    if (!isAvailable(id)) {
        return `${name}는 사용할 수 없습니다.`;
    }
    return availablity;
}, '모든 회사를 사용할 수 있습니다.');
//console.log(message);

const valid = [...firms].filter(firm => {
    const [id, name] = firm;
    return !isAvailable(id);
}).map(member => {
    const [id, name] = member;
    return `${name}는 사용할 수 없습니다.`;    
});
//console.log(valid || '모든 회사를 사용할 수 있습니다.');

//::: for ... of : 배열로 변환없이 이터러블로 아이템을 순회 (배열 변환 불필요)
function getValidEntriesForOf(firms) {
    for (const firm of firms) {
        const [id, name] = firm;
        if (!isAvailable(id)) {
            return `${name}는 사용할 수 없습니다.`;
        }
    }
    return '모든 회사를 사용할 수 있습니다.';
}
//console.log(getValidEntriesForOf(firms));

//::: for ... in : 배열로 변환하여 Object.keys 를 통해  순회
function getValidEntriesForIn(firms) {
    for (const idx in firms) {
        if (!isAvailable(idx)) {
            return `${firms[idx]}는 사용할 수 없습니다.`;
        }
    }
    return '모든 회사를 사용할 수 있습니다.';
}
console.log(getValidEntriesForIn([...firms]));