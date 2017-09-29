import {get, post, update, getMatchingProducts} from './requester';

function loadClothes(callback) {
    get('appdata', 'Clothes', 'guestLogin')
        .then(callback);
}

function loadJewelry(callback) {
    get('appdata', 'jewelry', 'guestLogin')
        .then(callback)
}

function loadDecorations(callback) {
    get('appdata', 'Decorations', 'guestLogin')
        .then(callback)
}

function loadClothesDetails(productId, callback) {
    get('appdata', 'Clothes/' + productId, 'guestLogin')
        .then(callback);
}

function loadJewelryDetails(productId, callback) {
    get('appdata', 'jewelry/' + productId, 'guestLogin')
        .then(callback);
}

function loadDecorationsDetails(productId, callback) {
    get('appdata', 'Decorations/' + productId, 'guestLogin')
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

function loadAllProducts(collection, query, callback) {
    getMatchingProducts('appdata', collection, 'guestLogin', query)
        .then(callback)    
}

    export {loadClothes, loadJewelry, loadClothesDetails, createProduct, 
        editProduct, loadDecorations, loadJewelryDetails, loadDecorationsDetails, loadAllProducts};