const staff = [
    {
        name: 'Joe',
        years: 10
    },
    {
        name: 'Theo',
        years: 5
    },
    {
        name: 'Dyan',
        years: 10
    }
];
const staffCopied = [...staff];
function sortByYears(a, b) {
    if (a.years === b.years) return 0;

    return a.years - b.years;
}
const sortByName = (a, b) => {
    if (a.name === b.name) return 0;

    return a.name > b.name ? 1 : -1;
};

//::: sort: 배열을 정렬할 때 해당 배열이 변경되는 이슈
console.log(`sortByYears-1: ${JSON.stringify(staff.sort(sortByYears))}`);
console.log(`sortByName-1: ${JSON.stringify(staff.sort(sortByName))}`);
console.log(`sortByYears-2: ${JSON.stringify(staff.sort(sortByYears))}`);
console.log(`sortByName-2: ${JSON.stringify(staff.sort(sortByName))}`);

//::: sort: 배열을 정렬할 때 해당 배열이 변경되는 이슈 => spread 연산자로 원본배열 변경 이슈 해결
console.log(`...sortByYears-1: ${JSON.stringify([...staffCopied].sort(sortByYears))}`);
console.log(`...sortByName-1: ${JSON.stringify([...staffCopied].sort(sortByName))}`);
console.log(`...sortByYears-2: ${JSON.stringify([...staffCopied].sort(sortByYears))}`);
console.log(`...sortByName-2: ${JSON.stringify([...staffCopied].sort(sortByName))}`);
