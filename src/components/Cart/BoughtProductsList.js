import React, { Component } from 'react';
import '../../resources/styles/bought-products-styles.css';

export default class CartPage extends Component {

    render() {
        return (
            <div className='bought-products-wrapper'>
                {this.props.products.map((p, i) => {
                    let product = p[Object.keys(p)[0]];
                    let total = product.price * product.cartQuantity;
                    return <div className='single-product-sold' key={i}>
                        <h4>{product.name}</h4>
                        <img src={product.image} alt={product.name}></img>
                        <p>Брой: {product.cartQuantity} x {product.price} лв.</p>
                        <p className='total-price'><strong>Цена: {total}лв.</strong></p>
                    </div>
                })}
            </div>
        )
    }
}