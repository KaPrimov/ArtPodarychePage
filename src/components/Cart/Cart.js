import React, {Component} from 'react';
import {get} from '../../models/requester';
import './Cart.css'
import observer from '../../models/observer';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            activeCart: []
        };
        this.bindEventHandlers();
        // Register in the observer
        observer.addToCart = this.addToCart.bind(this);
        observer.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        let isVisible = this.state.visible;
        if (isVisible)this.setState({visible: false});
        else this.setState({visible: true})
    }


    loadProductDetails(productId, callback) {
        get('appdata', 'products/' + productId, 'kinvey')
            .then(callback);
    }

    addDetailsToCart(product) {
        let cart = this.state.activeCart;
        let _id = product._id;
        let data = product;
        let indexOfProduct = cart.findIndex(x=>x[_id] !== undefined);
        if (indexOfProduct > -1)cart[indexOfProduct][_id].cartQuantity++;
        else {
            data.cartQuantity = 1;
            cart.push({[_id]: data});
        }
        this.setState({activeCart: cart});
    }

    addToCart(event) {
        event.preventDefault();
        let productId = event.target.name;
        this.loadProductDetails(productId, this.addDetailsToCart);
        observer.showSuccess('Product was added!')
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
        let indexOfProduct = cart.findIndex(x=>x[key] !== undefined);
        let quantityBeforeClick = cart[indexOfProduct][key].cartQuantity;
        let quantityInWarehouse = cart[indexOfProduct][key].quantity;
        quantityBeforeClick++;
        if (quantityBeforeClick > quantityInWarehouse)return;
        cart[indexOfProduct][key].cartQuantity = quantityBeforeClick;
        this.setState({activeCart: cart});
    }

    decrease(event) {
        let key = event.target.name;
        let cart = this.state.activeCart;
        let indexOfProduct = cart.findIndex(x=>x[key] !== undefined);
        let quantityBeforeClick = cart[indexOfProduct][key].cartQuantity;
        quantityBeforeClick--;
        if (quantityBeforeClick === 0)
            cart.splice(indexOfProduct, 1);
        else cart[indexOfProduct][key].cartQuantity = quantityBeforeClick;
        this.setState({activeCart: cart});
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
                    <td>{product[key]._id}</td>
                    <td>{product[key].name}</td>
                    <td><img className="img-thumbnail" src={product[key].images} alt="product"></img></td>
                    <td>{product[key].price}</td>
                    <td>{product[key].cartQuantity}</td>
                    <td>
                        <a className="btn btn-danger glyphicon glyphicon-minus" name={key}
                           onClick={this.decrease}></a>
                        <a className="btn btn-info glyphicon glyphicon-plus" name={key}
                           onClick={this.increase}></a>
                    </td>
                </tr>)
        }


        return (
            <div>
                <h2>Products in cart</h2>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th width="20%" id="id">#</th>
                        <th width="15%" id="name">Name</th>
                        <th width="15%" id="imageUrl">Image</th>
                        <th width="20%" id="price">Price</th>
                        <th width="10%" id="quantity">Quantity</th>
                        <th width="20%" id="actions">Actions</th>
                    </tr>
                    {rows}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Price:</td>
                        <td>{price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><a className="checkout btn btn-info glyphicon glyphicon-shopping-cart"
                               onClick=''> Check Out</a>
                        </td>
                    </tr>
                    </tbody>


                </table>
            </div>
        )
    }
}