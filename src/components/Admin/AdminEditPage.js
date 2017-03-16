import React, {Component} from 'react';
import EditForm from './AdminEditForm'
import {loadProductDetails, editProduct} from '../../models/product';
import observer from '../../models/observer';

export default class AdminPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            images: '',
            name: '',
            description: '',
            tags: '',
            productType:'',
            price: '',
            quantity: '',
            submitDisabled: true
        };
        this.bindEventHandlers();
    }

    onLoadSuccess(response) {

        this.setState({
            name: response.name,
            images: response.images,
            description: response.descriptons,
            tags: response.tags,
            productType: response.productype,
            price: response.price,
            quantity: response.quantity,
            submitDisabled: false
        });
    }

    componentDidMount() {
        loadProductDetails(this.props.productId, this.onLoadSuccess)
    }


    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        editProduct(
            this.props.productId,
            this.state.name,
            this.state.images,
            this.state.tags,
            this.state.productType,
            this.state.price,
            this.state.quantity,
            this.state.description,
            this.onSubmitResponse);

    }

    onSubmitResponse(response) {
        if (response === true) {
            observer.showSuccess('The product was edited!');
            this.context.router.push('/admin');
        } else {
            observer.showError('The product was not edited!');
            this.setState({submitDisabled: true});
        }
    }

    render() {
        return (
            <div><h2>Edit Product</h2>
                <EditForm
                    images={this.state.images}
                    name={this.state.name}
                    description={this.state.description}
                    tags={this.state.tags}
                    productType={this.state.productType}
                    price={this.state.price}
                    quantity={this.state.quantity}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        )
    }

}

AdminPanel.contextTypes = {
    router: React.PropTypes.object
};