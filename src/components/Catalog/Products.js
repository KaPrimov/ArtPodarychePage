import React, {Component} from 'react';
import {Link} from 'react-router';
import observer from '../../models/observer'
// import './Team.css';

export default class Laptop extends Component {
    render() {
        return(
            <div className="col-md-4" id={this.props.type}>
                <Link to={"/catalog/" + this.props.id} className="thumbnail product">
                    <img src={this.props.uri} className="product-thumb" alt={this.props.model}/>
                    <div className="product-thumb" >
                        <h3>{this.props.name}</h3>
                        <p>{this.props.tags}</p>
                        <h3 className="product-price pull-right">Price: {this.props.price}$</h3>
                        <p><a name={this.props.id} className="chekout btn btn-info glyphicon glyphicon-shopping-cart"
                              onClick={observer.addToCart}></a></p>

                    </div>
                </Link>
            </div>
        )
    }
}