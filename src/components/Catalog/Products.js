
import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Product extends Component {
    render() {
        return(
            <div className="product-container" id={this.props.type}>
                <Link to={"/"+ this.props.category + "/" + this.props.id}>
                    <img src={this.props.uri} className="product-img" alt={this.props.model}/>
                    <div className="product-thumb" >
                        <h3>{this.props.name}</h3>
                        <h3 className="product-price">Цена: {this.props.price}лв.</h3>
                    </div>
                </Link>
            </div>
        )
    }
}