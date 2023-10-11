const landscape = {
    title: 'Landscape',
    width: 200,
    height: 200,
    photographer: 'Nathan',
    equipment: 'Canon',
    format: 'digital',
    src: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSQAu_WEwlZdCo_qoDpOSzMB-hXMklczWCoAEj37cwudY7Qcqi_bxjt6gyGb9D48sa9zLsXnkFM-gQkvq-BmRA',
    location: [32.7122222, -103.1405556]
};

//::: 객체를 이용해 객체속성이름의 변수 선언 
//::: { 객체속성이름변수 } = 객체 : 변수에 할당되는 값이 객체에 있음을 { } 로 표시.
const { photographer } = landscape;
console.log(photographer);

//::: 빈객체이면 객체속성이름변수에 undefined 이 할당되나 기본값을 설정할 수 있다.
//::: { 객체속성이름변수 = '기본값' } = 객체
const emptyPhoto = {};
const { emptyPhtotographer = 'Anonymous', title } = emptyPhoto;
console.log(emptyPhtotographer, title);

//::: 객체의 src 속성 대신 url 이라는 새로운 변수명으로 객체의 src 속성값을 사용하고 싶은 경우
const { src: url } = landscape;
console.log(url);

function displayPhoto(photo) {
    const title = photo.title;
    const photographer = photo.photographer || 'Anonymous';
    const location = photo.location;
    const url = photo.src;
    const width = photo.width;
    const height = photo.height;
    const copy = {...photo};

    delete copy.title;
    delete copy.photographer;
    delete copy.location;
    delete copy.src;
    delete copy.width;
    delete copy.height;

    const additional = Object.keys(copy).map(key => `${key}:${copy[key]}`);

    return (`
        <img alt="${title} 사진 ${photographer} 촬영" src="${url}" width="${width}" height="${height}" />
        <div>${title}</div>
        <div>${photographer}</div>
        <div>위도: ${location[0]}</div>
        <div>경도: ${location[1]}</div>
        <div>${additional.join('<br />')}</div>
    `);
}

document.write(displayPhoto(landscape));