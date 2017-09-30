import React, { Component } from 'react';
import { loadAllProducts } from '../../models/product';
import $ from 'jquery';
import ContactForm from './ContactForm';
import '../../resources/styles/form-styls.css'

export default class CartPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
    }

    componentDidMount() {
        $('.cart-wrapper').hide();
        $('button.link-page').hide();
        this.setState({cart: this.props.location.state.products});
    }

    componentWillUnmount() {
        $('button.link-page').show();
        $('.cart-wrapper').show();
    }

    render() {
        return <div>
            <ContactForm/>
        </div>
    }
}