function getProvidor() {
    return 'i.milkt.co.kr';
}
function generateLink(image, width) {
    //const widthInt = parseInt(width, 10);
    //return 'https://' + getProvidor() + '/' + image + '?width=' + widthInt;
    return `https://${getProvidor()}/${image}?width=${parseInt(width, 10)}`;
}
console.log(generateLink('flower.png', 100));