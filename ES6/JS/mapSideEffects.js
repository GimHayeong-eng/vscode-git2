const defaults = new Map()
                .set('색상', '갈색')
                .set('견종', '비글')
                .set('지역', '캔자스');
const filters = new Map()
                .set('색상', '검정색');
function consoleLogMap(map) {
    for(const [key, value] of map) {
        console.log(`${key}:${value}`);
    }
}
console.log('defaults:');
consoleLogMap(defaults);
console.log('filters:')
consoleLogMap(filters);
//console.log(JSON.stringify(defaults.get('지역')));
//::: defaults 를 map 으로 업데이트하여 반환                            
function applyDefaults(map, defaults) {
    for (const [key, value] of defaults) {
        if (!map.has(key)) {
            map.set(key, value);
        }
    }
    return map;
}                
console.log('applyDefaults:');
consoleLogMap(applyDefaults(filters, defaults));
//::: 동일키가 존재하면 마지막에 선언된 키의 값이 사용되므로 ...map 의 값으로 업데이트 됨
function applyMapDefaults(map, defaults) {
    return new Map([...defaults, ...map]);
}
console.log('applyMapDefaults:');
consoleLogMap(applyMapDefaults(filters, defaults));
