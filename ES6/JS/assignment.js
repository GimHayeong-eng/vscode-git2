const landscape = {
    title: 'Landscape',
    phtographer: 'Nathan',
    location: [32.7122222, -103.1405556]
};

const region = {
    city: 'Hobbs',
    county: 'Lea',
    state: {
        name: 'New Mexico',
        abbreviation: 'NM'
    }
};

//::: 위도와 경도를 이용해 도시와 주 정보를 반환하는 헬퍼함수
function determineCityAndState([latitude, longitude]) {
    if (latitude === landscape.location[0] && longitude === landscape.location[1])
        return region;

    return { city: '', state: '' };
}

//::: location 정보만 제거하고 나머지는 그대로 유지하여 함수 매개변수로 전달받고 싶은 경우 해체할당(...details) 사용
function getCityAndState({location, ...details}) {
    const {city, state} = determineCityAndState(location);
    return {
        city,
        state: state.abbreviation,
        ...details /* location 을 제외한 나머지 키-값 쌍 : title, photographer */
    }
}
console.log(getCityAndState(landscape));