import React, { Component } from 'react';
import $ from 'jquery';
import ContactForm from './ContactForm';
import BoughtProductsList from './BoughtProductsList';
import '../../resources/styles/bought-products-styles.css';
import { withRouter } from 'react-router'

class CartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: [],
            price: 0,
            email: '',
            phone: '',
            username: ''
        }
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onSubmitHandler= this.onSubmitHandler.bind(this);
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.showSuccess=this.showSuccess.bind(this);
    }

    componentDidMount() {
        $('.cart-wrapper').hide();
        $('button.link-page').hide();
        let totalPrice = 0;
        for (var key in this.props.location.state.products) {
            for (var innerKey in this.props.location.state.products[key]) {
                let product = this.props.location.state.products[key][innerKey];
                totalPrice += (product.price * product.cartQuantity);
            }
        }
        this.setState({cart: this.props.location.state.products, price: totalPrice});
    }

    componentWillUnmount() {
        $('button.link-page').show();
        $('.cart-wrapper').show();
    }

    onSubmitHandler(event) {
        event.preventDefault();
        let email = this.state.email;
        let phone = this.state.phone;
        let name = this.state.username;
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'username':
                this.setState({ username: event.target.value });
                break;
            case 'phone':
                this.setState({ phone: event.target.value });
                break;
            case 'email':
                this.setState({email: event.target.value})
                break;
            default:
                break;
        }
    }

    showSuccess(response) {
        this.props.router.push({
            pathname: "/finish-order",
        });
        window.location.reload();
    }

    render() {
        return <div className='cart-page'>
            <h2 className='bought-products-header'>Закупени продукти:</h2>
            <BoughtProductsList
                products={this.state.cart}
            />
            <h2 className='total-price'>Обща сума: {this.state.price}лв.</h2>
            <ContactForm
                clientName={this.state.username}
                email={this.state.email}
                phone={this.state.phone}
                onSubmitHandler={this.onSubmitHandler} 
                onChangeHandler={this.onChangeHandler}
            />            
        </div>
    }
}

export default withRouter(CartPage)