import * as requester from './requester';

function addComment(text, authorId, productId, username, callback) {
    let commentData = {
        text,
        authorId,
        productId,
        username
    };

    requester.post('appdata', 'comments', commentData, 'kinvey')
        .then(callback);
}

function loadProductsComments(productId, onCommentSuccess) {
    requester.get('appdata', `comments?query={"productId": "${productId}"}`, 'kinvey')
        .then(onCommentSuccess)
}

function deleteComment(id, productId, callback) {
    requester.deleteItem('appdata', 'comments', id, 'kinvey')
        .then(requester.get('appdata', `comments?query={"productId": "${productId}"}`, 'kinvey'))
        .then(callback)

}

function loadCommentDetails(commentId, onCommentSuccess) {
    requester.get('appdata', 'comments/' + commentId, 'kinvey')
        .then(onCommentSuccess);
}

function editComment(commentId, text, authorId, productId, username, callback) {
    let commentData = {
        text: text,
        authorId: authorId,
        productId: productId,
        username: username
    };
    requester.update('appdata', 'comments/' + commentId, commentData, 'kinvey')
        .then(callback(true));
}

export { addComment, loadProductsComments, deleteComment, loadCommentDetails, editComment }