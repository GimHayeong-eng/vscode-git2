const icon = {
    path: 'acme/bar.png'
};

//::: || 연산자 : 매개변수가 없는 경우 기본값을 끝에 추가
function getIconPath(icon) {
    //const path = (icon && icon.path) ? icon.path : 'uploads/default.png';
    const path = (icon && icon.path) || 'uploads/default.png';
    return `https://assets.foo.com/${path}`;
}
console.log(getIconPath());
console.log(getIconPath({path: ''}));
console.log(getIconPath(icon));

const userConfig = {
    Images: []
};
const userImageConfig = {
    Images: ['a.png', 'b.png', 'c.png']
};
function getImage(userConfig) {
    return (userConfig && userConfig.Images && userConfig.Images.length > 0) ? userConfig.Images[0] : 'default.png';
}
console.log(getImage());
console.log(getImage(userConfig));
console.log(getImage(userImageConfig));