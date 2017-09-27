import {get} from './requester';

function loadNews(callback) {
    get('appdata', 'news', 'guestLogin')
        .then(callback);
}

function loadCustomerOrders(callback) {
    get('appdata', 'customersOrders', 'guestLogin')
        .then(callback);
}

export {loadNews, loadCustomerOrders};