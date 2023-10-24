'use strict';

const getUserPreferences = (name) => {
    console.log(`getUserPreferences(${name})`);
    return new Promise((resolve, reject) => {
        resolve({ theme: name || 'dusk' });
    });
}

const getMusic = (theme) => {
    console.log(`getMusic(${theme.theme})`);
    if (theme.theme === 'dusk') {
        return Promise.resolve( { album: 'music for airports' });
    }

    return Promise.resolve( { album: 'kind of blue' });
}

const getArtist = (album) => {
    console.log(`getArtist(${album.album})`);
    if (album.album === 'music for airports') {
        return Promise.resolve( { artist: 'Brian Eno' });
        //return Promise.reject(new Error('invalid artist'));
    }

    return Promise.resolve( { artist: 'Miles Dewey Davis III' });
}

async function getTheme() {
    const { theme } = await getUserPreferences();
    return theme;
}

async function getArtistByPreference(name) {
    ///*
    // 1. 순차적으로 실행되어야 하는 비동기
    return getUserPreferences(name)
        .then(getMusic)
        .then(getArtist)
        //.then(artist => artist.artist)
        ;
    //*/    



    /*
    // 2. 실행순서 관계없이 여러 프라미스의 비동기 : Promise.all([...])
    //    순서대로 실행되어야 하므로 아래 방식으로 비동기를 실행하면 원하는 artist 를 반환받지 못함
    const { theme } = await getUserPreferences();
    const { album } = await getMusic(theme);
    const { artist } = await getArtist(album);

    return artist;
    //*/
}



console.log('start...');
/*
//프라미스로 비동기 호출
getUserPreferences()
    .then(preferences => console.log(preferences.theme))
    .catch(console.log);
*/

/*
//async 함수로 비동기 호출
getTheme()//
    .then(console.log);
*/

console.log('end...');

///*
getArtistByPreference()
    .then(console.log)
    .catch(console.log);
//*/


getArtistByPreference('JAZZ')
    .then(console.log)
    .catch(console.log);    
//*/

