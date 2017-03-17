import {get, post, update} from './requester';

function loadClothes(callback) {
    get('appdata', 'Clothes', 'guestLogin')
        .then(callback);
}

function loadJewelry(callback) {
    get('appdata', 'jewelry', 'guestLogin')
        .then(callback)
}

function loadProductDetails(productId, callback) {
    get('appdata', 'products/' + productId, 'kinvey')
        .then(callback);
}

function createProduct(name, images, descriptons, tags, productype, price,
                       quantity, callback) {
    let productData = {
        images,
        name,
        descriptons,
        tags,
        productype,
        price,
        quantity,

    };

    post('appdata', 'products', productData, 'kinvey')
        .then(callback);
}

function editProduct(productId, name, images, tags, productype, price, quantity, descriptons, callback ) {
    let productData = {
        name: name,
        images: images,
        tags: tags,
        productype: productype,
        price: price,
        quantity: quantity,
        descriptons: descriptons
    };
    update('appdata', 'products/' + productId, productData, 'kinvey')
        .then(callback(true));
}

    export {loadClothes, loadJewelry, loadProductDetails, createProduct, editProduct};