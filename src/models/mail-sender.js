import {post} from './requester';

function sendEmail(email, phone, name, products, callback) {

  let orderData = {
    products,
    name,
    phone,
    email
};

post('appdata', 'orders', orderData, 'guestLogin')
    .then(callback);
}

module.exports = { sendEmail }
