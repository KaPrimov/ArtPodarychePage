import $ from 'jquery';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_rJ_cD2Ejg";
const kinveyAppSecret = "f6cca9652a7e425f9eeff169a868c4c0";

function makeAuth(type) {
    switch (type) {
        case 'basic':
            return {'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret)};
        case 'kinvey':
            return {'Authorization': "Kinvey " + sessionStorage.getItem('authToken')};
        case 'guestLogin':
            return {'Authorization': "Kinvey 4b126cca-f84c-49b5-afa9-06b0417d72fc.cqw80f6XahnvnbOlMUyHCR4SD4F5ebd4tc2ho9wAG6I="};
        case 'superUser':
            return {'Authorization': "Basic " + btoa(kinveyAppKey + ":75f08a9169054ee890a60d4169628b04")};
        default:
            break;
    }
}


function get(module, uri, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    return $.ajax({
        method: "GET",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    });
}

function post(module, uri, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "POST",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    };

    if (data !== null) {
        request.data = data;
    }
    return $.ajax(request);
}

function deleteProduct(id) {
    const kinveyAuthHeaders = makeAuth('superUser');

    return $.ajax({
        method: "DELETE",
        url:kinveyBaseUrl + "appdata/" +
        kinveyAppKey + "/products/" + id,
        headers: kinveyAuthHeaders
    });

}

function deleteUser(userId, auth) {
    const kinveyAuthHeaders = makeAuth(auth);

    return $.ajax({
        method: "DELETE",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/" + userId + '?hard=true',
        headers: kinveyAuthHeaders
    })
}

function getAllUsers(auth) {
    const kinveyAuthHeaders = makeAuth(auth);
    return $.ajax({
        method: "GET",
        url: kinveyBaseUrl + 'user/' + kinveyAppKey,
        headers: kinveyAuthHeaders
    });
}

function update(module, uri, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "PUT",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders,
        data: data
    };

    return $.ajax(request);
}

function deleteItem(module, uri, id, auth) {
    const kinveyDeleteUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri + '/' + id;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "DELETE",
        url: kinveyDeleteUrl,
        headers: kinveyAuthHeaders
    };

    return $.ajax(request);
}

function getMatchingProducts(module, uri, auth, regex) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" +
        uri + `?query={"name":{"$regex":"^.*${regex}.*"}}`;
    const kinveyAuthHeaders = makeAuth(auth);

    return $.ajax({
        method: "GET",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    });
}

export {get, post, update, getAllUsers, deleteUser, deleteProduct, deleteItem, getMatchingProducts};