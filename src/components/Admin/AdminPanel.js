import React, {Component} from 'react';
import CreateForm from './AdminCreateProduct'
import {createProduct} from '../../models/product';


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
            quantity: ''
        };
        this.bindEventHandlers();
    }


    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'images':
                this.setState({ images: event.target.value });
                break;
            case 'name':
                this.setState({ name: event.target.value });
                break;
            case 'description':
                this.setState({ description: event.target.value });
                break;
            case 'tags':
                this.setState({ tags: event.target.value });
                break;
            case 'productType':
                this.setState({ productType: event.target.value });
                break;
            case 'price':
                this.setState({ price: event.target.value });
                break;
            case 'quantity':
                this.setState({ quantity: event.target.value });
                break;
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        createProduct(
            this.state.name,
            this.state.images,
            this.state.description,
            this.state.tags,
            this.state.productType,
            this.state.price,
            this.state.quantity,
            this.onSubmitResponse
        );
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from register page
            this.context.router.push('/admin');
        }
    }

    render() {
        return (
            <div><h2>Admin Console</h2>
                <CreateForm
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