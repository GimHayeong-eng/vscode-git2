function getUserPreferences(callback) {
    return setTimeout(() => {
        callback({ theme: 'dusk'});
    }, 1000);
}

// 프라미스 : 중복 콜백 호출 이슈 해결
//           비동기 작업을 전달받아 응답에 따라 두 가지 메서드 중 하나를 호출하는 객체.
//           resolve() 가 호출되면 then() 메서드에 전달된 함수가 실행됨.
//     장점) 성공과 실패에 대한 메서드를 사용하며, 콜백 중첩 대신 여러 비동기 프라미스 연결 가능.
function getUserPreferencesPromise() {
    const preferences = new Promise((resolve, reject) => {
        resolve({ theme: 'dusk' });
    });

    return preferences;
}
function getArtistPromise(album) {
    return Promise.resolve({ artist: 'Brino Eno' });
}
// 실패하는 프라미스
function failedUserPreferencesPromise() {
    const preferences = new Promise((resolve, reject) => {
        reject({ type: '접근 거부' });
    });

    return preferences;
}
function faildArtistPromise(album) {
    return Promise.reject({ type: '네트워크 오류' })
}

function log(log) {
    return console.log(log);
}

log('1. starting...');

getUserPreferences(preferences => {
    return log(`2. getUserPreferences: ${preferences.theme.toUpperCase()}`);
});



function getMusic(theme, callback) {
    return setTimeout(() => {
        if (theme === 'dusk') {
            return callback( { album: 'music form airports' });
        }

        return callback( { album: 'kind of blue' });
    }, 1000);
}

function getMusicPromise(theme) {
    if (theme === 'dusk') {
        return Promise.resolve( { album: 'music form airports' });
    }

    return Promise.resolve( { album: 'kind of blue' });
}


// 콜백 함수 중첩 이슈 (콜백지옥)
getUserPreferences(perferences => {
    return getMusic(perferences.theme, music => { console.log(`3. ${music.album}`); });
});

// 프라미스를 반환 받아 resolve() 가 호출되면 then() 메서드에 전달된 함수가 실행됨.
getUserPreferencesPromise()
    .then(preferences => {
        console.log(`4-1. RESOLVED: ${preferences.theme}`);
    })
    .catch(error => {
        console.log(`4-2. FAILED: ${error.type}`);
    });

failedUserPreferencesPromise()    
    .then(preferences => {
        console.log(`5-1. RESOLVED: ${preferences.theme}`);
    })
    .catch(error => {
        console.log(`5-2. FAILED: ${error.type}`);
    });


getMusicPromise()
    //.then(perferences => faildArtistPromise(perferences.type))
    //.then(perferences => failedUserPreferencesPromise(perferences.type))
    .then(preferences => getMusicPromise(preferences.theme))
    .then(preferences => console.log(`6. ${JSON.stringify(preferences)}`))
    .then(album => getArtistPromise(album.artist))
    .then(music => console.log(`7. ${JSON.stringify(music)}`))
    .catch(e => console.log(`8. Error: ${JSON.stringify(e)}`));

log('9. ending...');
