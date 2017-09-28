import React, {Component} from 'react';
import {loadCustomerOrders} from '../../models/news';

export default class CatalogPage extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            orders: ''
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onProductLoadSuccess = this.onProductLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadCustomerOrders(this.onProductLoadSuccess);
    }

    onProductLoadSuccess(response) {
        
        this.setState({orders: response});
    }

    render() {
        let products = [];
        return (
            <div className="orders">
                {Object.keys(this.state.orders).map((e, i) => {
                    return <div className='single-order' key={i}>
                        <img src={this.state.orders[e].image} className='order-image'></img>
                        <p className='order-name green-text'>{this.state.orders[e].name}</p>
                    </div>
                })}
            </div>
        )
    }

}