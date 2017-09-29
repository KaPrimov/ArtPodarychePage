import React, { Component } from 'react';
import { loadProductDetails } from '../../models/product';
import '../../resources/styles/cart.css'
import observer from '../../models/observer';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            activeCart: [],
            size: ''
        };
        this.bindEventHandlers();
        // Register in the observer
        observer.addToCart = this.addToCart.bind(this);
        observer.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        let isVisible = this.state.visible;
        if (isVisible) this.setState({ visible: false });
        else this.setState({ visible: true })
    }

    addDetailsToCart(product) {
        let cart = this.state.activeCart;
        let _id = product._id;
        let data = product;
        product.size = this.state.size;
        let indexOfProduct = cart.findIndex(x => x[_id] !== undefined);
        if (indexOfProduct > -1) cart[indexOfProduct][_id].cartQuantity++;
        else {
            data.cartQuantity = 1;
            cart.push({ [_id]: data });
        }
        this.setState({ activeCart: cart });
    }

    addToCart(event) {
        event.preventDefault();
        let productId = event.target.getAttribute('name');
        let productType = event.target.getAttribute('datatype')
        let select = document.getElementsByClassName('sizes-selector')[0];
        if (select !== undefined) {
            this.setState({ size: select.options[select.selectedIndex].value })
        } else {
            this.setState({size: 'One Size'})
        }
        loadProductDetails(productId, productType, this.addDetailsToCart);
        // observer.showSuccess('Product was added!')
    }


    bindEventHandlers() {
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.addDetailsToCart = this.addDetailsToCart.bind(this);
    }

    increase(event) {
        let key = event.target.name;
        let cart = this.state.activeCart;
        let indexOfProduct = cart.findIndex(x => x[key] !== undefined);
        let quantityBeforeClick = cart[indexOfProduct][key].cartQuantity;
        let quantityInWarehouse = cart[indexOfProduct][key].quantity;
        quantityBeforeClick++;
        if (quantityBeforeClick > quantityInWarehouse) return;
        cart[indexOfProduct][key].cartQuantity = quantityBeforeClick;
        this.setState({ activeCart: cart });
    }

    decrease(event) {
        let key = event.target.name;
        let cart = this.state.activeCart;
        let indexOfProduct = cart.findIndex(x => x[key] !== undefined);
        let quantityBeforeClick = cart[indexOfProduct][key].cartQuantity;
        quantityBeforeClick--;
        if (quantityBeforeClick === 0)
            cart.splice(indexOfProduct, 1);
        else cart[indexOfProduct][key].cartQuantity = quantityBeforeClick;
        this.setState({ activeCart: cart });
    }


    render() {
        if (!this.state.visible) return null;

        let products = this.state.activeCart;
        let rows = [];
        let price = 0;

        for (let product of products) {
            let key = Object.keys(product)[0];
            price += product[key].price * product[key].cartQuantity;
            rows.push(
                <tr key={key}>
                    <td>{product[key].name[0].toUpperCase() + product[key].name.substring(1)}</td>
                    <td><img className="img-cart" src={product[key].image} alt="product"></img></td>
                    <td>{product[key].price}</td>                    
                    <td>{product[key].cartQuantity}</td>
                    <td>
                        {product[key].size}
                    </td>                 
                </tr>)
        }


        return (
            <div className='cart-wrapper'>
                <h2 className='cart-header'>Какво си харесахте:</h2>

                <table className="table">
                    <thead>
                        <tr>
                            <th width="40%" id="name">Име</th>
                            <th width="10%" id="image-url">Снимка</th>
                            <th width="20%" id="price">Цена</th>
                            <th width="10%" id="quantity">Количество</th>
                            <th width="20%" id="actions">Размер</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}                        
                    </tbody>
                </table>
                <div className='cart-data'>
                    <p className='cart-price'>Цена: {price}</p>
                    <a className='button'>
                        <span>Купете</span>
                    </a>
                </div>
            </div>
        )
    }
}
