import * as requester from './requester';
import observer from './observer';


function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);

    if (userInfo.access === 1) {
        sessionStorage.setItem('accessLevel', 'admin');
    }

    observer.onSessionUpdate();
}

// user/login
function login(username, password, callback, catchErr) {
    let userData = {
        username,
        password
    };

    requester.post('user', 'login', userData, 'basic')
        .then(loginSuccess).catch(catchErr);

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true)
    }
}

// user/register
function register(username,email, password, firstName, lastName, address, access, callback) {
    access = Number(access);
    let userData = {
        username, email, password, firstName, lastName, address, access
    };

    requester.post('user', '', userData, 'basic')
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        observer.showSuccess('Successful registration.');
        saveSession(userInfo);
        callback(true);
    }
}

// user/logout
function logout(callback) {
    requester.post('user', '_logout', null, 'kinvey')
        .then(logoutSuccess);


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        callback(true);
    }
}

// get all users :
function getAllUsers(callback) {
    requester.get('user', '', 'kinvey')
        .then(callback)
}



export {login, register, logout, getAllUsers};