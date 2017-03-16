import {get} from './requester';

function loadNews(callback) {
    get('appdata', 'news', 'guestLogin')
        .then(callback);
}

export {loadNews};