import {get, post, update} from './requester';

function loadProducts(callback) {
    get('appdata', 'products', 'kinvey')
        .then(callback);
}

function loadCategories(callback) {
    get('appdata', 'productType', 'kinvey')
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

    export {loadProducts, loadCategories, loadProductDetails, createProduct, editProduct};