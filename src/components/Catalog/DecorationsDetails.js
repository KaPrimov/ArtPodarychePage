import React, {Component} from 'react';
import {loadDecorationsDetails} from '../../models/product';
import {addComment, loadProductsComments, deleteComment} from '../../models/comment'
import '../../resources/styles/details-styles.css';
import observer from '../../models/observer';


export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name: '',
            description: '',
            quantity: '',
            image: '',
            comments: [],
            text: '',
            canEdit: false,
            price: ''
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
        loadDecorationsDetails(this.props.params.productId, this.onProductLoadSuccess);
        // loadProductsComments(this.props.params.productId, this.onCommentsLoadSuccess)
    }

    onProductLoadSuccess(response) {
        let newState = {
            _id: response._id,
            name: response.name,
            description: response.description,
            quantity: response.quantity,
            image: response.image,
            price: response.price
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
        let properties = this.state.description;
        let arr = Array.from(properties);
        let descriptionProperties = <p className="text-info">{properties}</p>;
        let quantity = <p className="quantity-result">Не е наличен</p>;
        if(this.state.quantity !== 0) {
            quantity = <p className="quantity-result">{this.state.quantity}</p>;
        }
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
                <h2 className="titlebar">{this.state.name}</h2>
                <div className="image-container"><img src={this.state.image} alt={this.state.name + ' picture'}/></div>
                <div className="overview">
                    <h4 className="heading">Описание</h4>
                    <div className="spanner description">{descriptionProperties}</div>
                    <h4 className="heading">Количество:</h4>
                    <div className="spanner quantity">{quantity}</div>
                    <h4 className="heading">Цена:</h4>
                    <div className="spanner quantity">{this.state.price} лв.</div>
                    <button id="add-to-cart" name={key} onClick={observer.addToCart}><span>Add to Cart</span>
                    </button>
                </div>

            </div>
        )
    }
}

Details.contextTypes = {
    router: React.PropTypes.object
};