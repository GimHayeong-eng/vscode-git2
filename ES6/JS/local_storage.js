'use strict';

// 견종을 로컬스토리지에 저장
const saveBreed = (breed) => localStorage.setItem('breed', breed);

// 저장된 견종 정보 조회
const getSavedBreed = () => localStorage.getItem('breed');

// 저장된 견종 정보 삭제
const removeBreed = () => localStorage.removeItem('breed');

const applyBreedPreference = (filters) => {
    const breed = getSavedBreed();
    console.log(breed ? true : false);
    if (breed) filters.set('breed', breed);

    return filters;
}

// 로컬 스토리지에 저장
const savePreferences = (filters) => {
    const filterString = JSON.stringify([...filters]);
    localStorage.setItem('preferences', filterString);
}

// 로컬 스토리지 조회
const retrievePreferences = () => {
    const preferences = JSON.parse(localStorage.getItem('preferences'));

    return new Map(preferences);
}

// 로컬 스토리지 초기화
const clearPreferences = () => localStorage.clear();

//saveBreed('shih tzu');
console.log(getSavedBreed());

const mapFilter = new Map([
    ['breed', 'Briard'], 
    ['color', 'white'] 
]);
console.log(`필터 원본: ${JSON.stringify(mapFilter.get('breed'))}`);
///*
//필터 breed 가 존재하면 localStorage 의 breed 값으로 대체하여 반환
applyBreedPreference(mapFilter);
console.log(`필터 변경: ${JSON.stringify(mapFilter.get('breed'))}`);
//*/


savePreferences(new Map([['preferences', 'color']]));
console.log(retrievePreferences());
clearPreferences();
console.log(getSavedBreed());
console.log(retrievePreferences());