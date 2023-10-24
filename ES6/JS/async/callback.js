'use strict';

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('on access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id:');
const password = prompt('enter your password:');
userStorage.loginUser(
    id
    , password    
    , (user) => {
        userStorage.getRoles(
            user
            //콜백지옥으로....
            , (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
            }
            , (error) => {
                console.log(`ROLE: ${error}`);
            }
        )
    }
    , (error) => {
        console.log(`LOGIN: ${error}`);
    });