import React, { Component } from 'react';
import { loadProductDetails } from '../../models/product';
import '../../resources/styles/cart.css'
import observer from '../../models/observer';
import $ from 'jquery';
import { withRouter } from 'react-router'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            activeCart: [],
            size: '',
            productsSizes: {},
            showButton: false
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
        for (let i = 0; i < this.state.activeCart.length; i++) {
            for (var key in this.state.activeCart[i]) {
                if (key === product._id) {
                    if (product.quantity < this.state.activeCart[i][key]['cartQuantity'] + 1) {
                        return;
                    }
                }
            }
        }
        if (product.boughtProducts === undefined) {
            product.boughtProducts = [];
        }

        let cart = this.state.activeCart;
        $('#cart-products-value').text(Number($('#cart-products-value').text()) + 1);
        let _id = product._id;
        let data = product;
        let indexOfProduct = cart.findIndex(x => x[_id] !== undefined);
        if (indexOfProduct > -1) {
            cart[indexOfProduct][_id].cartQuantity++;
        } 
        else {
            data.cartQuantity = 1;
            cart.push({ [_id]: data });
        }
        indexOfProduct = cart.findIndex(x => x[_id] !== undefined);
        let tempSizes = this.state.productsSizes;
        if (!(_id in tempSizes)) {
            tempSizes[_id] = []
        }
        tempSizes[_id].push(this.state.size)
        cart[indexOfProduct][_id].boughtProducts = tempSizes[_id];
        this.setState({
            activeCart: cart,
            productsSizes: tempSizes
        });
    }

    addToCart(event) {
        event.preventDefault();
        let productId = event.target.getAttribute('name');
        let productType = event.target.getAttribute('datatype')
        let select = document.getElementsByClassName('sizes-selector')[0];
        if (select !== undefined) {
            this.setState({ size: select.options[select.selectedIndex].value })
        } else {
            this.setState({ size: ' - ' })
        }
        loadProductDetails(productId, productType, this.addDetailsToCart);
        this.setState({showButton: true})
    }


    bindEventHandlers() {
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.addDetailsToCart = this.addDetailsToCart.bind(this);
        this.handleOrderClick = this.handleOrderClick.bind(this);
    }

    increase(event) {
        let cart = this.state.activeCart;
        let key = event.target.name;
        let indexOfProduct = cart.findIndex(x => x[key] !== undefined);
        let quantityBeforeClick = cart[indexOfProduct][key].cartQuantity;
        let quantityInWarehouse = cart[indexOfProduct][key].quantity;
        quantityBeforeClick++;
        if (quantityBeforeClick > quantityInWarehouse) return;
        let tempSizes = this.state.productsSizes;
        let lastSize = tempSizes[key][tempSizes[key].length - 1];
        tempSizes[key].push(lastSize);
        cart[indexOfProduct][key].boughtProducts = tempSizes[key];
        $('#cart-products-value').text(Number($('#cart-products-value').text()) + 1);
        cart[indexOfProduct][key].cartQuantity = quantityBeforeClick;
        this.setState({ activeCart: cart, productsSizes: tempSizes });
    }

    decrease(event) {
        let cart = this.state.activeCart;
        let key = event.target.name;
        let indexOfProduct = cart.findIndex(x => x[key] !== undefined);
        let quantityBeforeClick = cart[indexOfProduct][key].cartQuantity;
        quantityBeforeClick--;
        if (quantityBeforeClick === 0) {
            cart.splice(indexOfProduct, 1);
            $('#cart-products-value').text(Number($('#cart-products-value').text()) - 1);
        }
        else {
            cart[indexOfProduct][key].cartQuantity = quantityBeforeClick;
            $('#cart-products-value').text(Number($('#cart-products-value').text()) - 1);
        }
        let tempSizes = this.state.productsSizes;
        tempSizes[key].pop();
        if (cart[indexOfProduct] !== undefined) {
            cart[indexOfProduct][key].boughtProducts = tempSizes[key];
        }
        this.setState({ activeCart: cart, productsSizes: tempSizes });
        if (this.state.activeCart.length === 0) {
            this.setState({showButton: false})
        }
    }

    handleOrderClick(event) {
        event.preventDefault();
        this.props.router.push({
            pathname: "/cart",
            state: { products: this.state.activeCart }
        })
    }

    render() {
        let styles = ['cart-wrapper']
        if (this.state.visible) {
            styles.push('show-cart')
        };

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
                    <td className='quantity-column'>
                        <a className="minus" name={key} onClick={this.decrease}>- </a>
                        <div className='quantity-value'>{product[key].cartQuantity}</div>
                        <a className="plus" name={key} onClick={this.increase}> +</a>

                    </td>
                    <td>
                        {this.state.productsSizes[key].join(', ')}
                    </td>
                </tr>)
        }
        let button = '';
        if (this.state.showButton) {
            button =
                <a className='button' onClick={this.handleOrderClick}>
                    <span>Поръчайте</span>
                </a>
        } else {
            button = ''
        }

        return (
            <div className={styles.join(' ')}>
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
                    <p className='cart-price'>Обща сума: {price}лв.</p>
                    {button}
                </div>
            </div>
        )
    }
}

export default withRouter(Cart)
