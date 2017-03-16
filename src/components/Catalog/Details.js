import React, {Component} from 'react';
import {loadProductDetails} from '../../models/product';
import {addComment, loadProductsComments, deleteComment} from '../../models/comment'
import {Link} from 'react-router';
import Comment from '../Comment/Comments'
import './Details.css';
import observer from '../../models/observer';


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name: '',
            description: '',
            quantity: '',
            tags: [],
            images: [],
            comments: [],
            text: '',
            canEdit: false
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onProductLoadSuccess = this.onProductLoadSuccess.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onCommentsLoadSuccess = this.onCommentsLoadSuccess.bind(this);
        this.deleteComment = this.deleteComment.bind(this)
    }

    statusChange(response) {
        this.context.router.push('/');
    }

    componentDidMount() {
        loadProductDetails(this.props.params.productId, this.onProductLoadSuccess);
        loadProductsComments(this.props.params.productId, this.onCommentsLoadSuccess)
    }

    onProductLoadSuccess(response) {
        let newState = {
            _id: response._id,
            name: response.name,
            description: response.descriptons,
            quantity: response.quantity,
            tags: response.tags,
            images: response.images
        };
        if (sessionStorage.getItem('accessLevel')) {
            newState.canEdit = true;
        }
        this.setState(newState);
    }

    onCommentsLoadSuccess(response) {
        this.setState({comments: response});
    }

    onSubmitHandler(event) {
        event.preventDefault();
        let userId = sessionStorage.getItem('userId');
        let itemId = this.props.params.productId;
        let username = sessionStorage.getItem('username');
        addComment(this.state.text, userId, itemId, username, loadProductsComments(this.props.params.productId, this.onCommentsLoadSuccess));
        loadProductsComments(this.props.params.productId, this.onCommentsLoadSuccess);
        this.setState({text: ''});
        observer.showSuccess('The comment was added!')
    }

    onChangeHandler(event) {
        this.setState({text: event.target.value})
    }

    deleteComment(event) {
        deleteComment(event.target.name, this.props.params.productId);
        loadProductsComments(this.props.params.productId, this.onCommentsLoadSuccess);
        observer.showSuccess('The comment was deleted!')
    }

    render() {

        let title = 'Product details';
        if (this.state.name !== '') {
            title = this.state.name + ' details';
        }

        let properties = this.state.description;
        let arr = Array.from(properties);
        let descriptionProperties = <p className="text-info">{properties}</p>;
        if (typeof properties !== "string") {
            descriptionProperties = arr.map((element, idx) => {
                let propertyName = Object.keys(element);
                let propertyValue = element[propertyName];
                return (
                    <p key={idx} className="text-info">{propertyName}: {propertyValue}</p>
                )
            });
        }
        let key = this.state._id;

        return (
            <div className="details-box">
                <h2 className="titlebar">{title}</h2>
                <img src={this.state.images} alt={this.state.name + ' picture'}/>
                <div className="spanner">Description:</div>
                {descriptionProperties}
                <div className="spanner">Tags:</div>
                <p className="text-info">{this.state.tags}</p>
                <div className="spanner">Quantity:</div>
                <p className="text-info">{this.state.quantity}</p>
                <div className="spanner">Comments for the product:</div>
                <ul>
                    {this.state.comments.map((comment, index) => {
                        let userId = sessionStorage.getItem('userId');
                        if (sessionStorage.getItem('accessLevel')) {
                            return (
                                <li key={index}>{comment.text + ' posted by: ' + comment.username}
                                    <button name={comment._id} className="btn btn-default" onClick={this.deleteComment}>
                                        Delete
                                    </button>
                                    <Link to={"/edit/" + comment._id} className="btn btn-default">Edit info</Link>
                                </li>
                            )
                        } else if (comment.authorId === userId) {
                            return (
                                <li key={index}>{comment.text + ' posted by: ' + comment.username}
                                    <Link to={"/edit/" + comment._id} className="btn btn-default">Edit info</Link>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index}>{comment.text + ' posted by: ' + comment.username}</li>
                            )

                        }

                    })}
                </ul>
                <button className="btn btn-default" id="add-to-cart" name={key} onClick={observer.addToCart}>Add to Cart
                </button>
                <Comment
                    text={this.state.text}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}/>

            </div>
        )
    }
}

Details.contextTypes = {
    router: React.PropTypes.object
};