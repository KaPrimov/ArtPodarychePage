import React, {Component} from 'react';
import {loadAllProducts} from '../../models/product'
import Product from '../Catalog/Products'

export default class SearchResultPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clothes: [],
            jewelry: [],
            decorations: []
        }
        this.bindEventHandlers()
    }

    bindEventHandlers() {
        this.onClothesLoadSuccess = this.onClothesLoadSuccess.bind(this);
        this.onDecorationsLoadSuccess = this.onDecorationsLoadSuccess.bind(this);
        this.onJewelryLoadSuccess = this.onJewelryLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadAllProducts('Clothes', this.props.location.state.query, this.onClothesLoadSuccess);
        loadAllProducts('Decorations', this.props.location.state.query, this.onDecorationsLoadSuccess);
        loadAllProducts('jewelry', this.props.location.state.query, this.onJewelryLoadSuccess);
    }

    onClothesLoadSuccess(response) {
        this.setState({clothes: response});
    }

    onDecorationsLoadSuccess(response) {
        this.setState({decorations: response});
    }

    onJewelryLoadSuccess(response) {
        this.setState({jewelry: response});
    }

    render() {
        let products = [];
        products.push(this.state.clothes);
        products.push(this.state.jewelry);
        products.push(this.state.decorations);

        return (<div >
                <div className="title-container">
                    <h1 className="page-header">Каталог</h1>
                </div>
                <div id="content-holder">
                    {this.state.clothes.map((e, i) => {
                        return <Product
                            key={i}
                            name={e.name}
                            id={e._id}
                            uri={e.image}
                            price={e.price}
                            category="clothes"
                        />
                    })}
                    {this.state.jewelry.map((e, i) => {
                        return <Product
                            key={i}
                            name={e.name}
                            id={e._id}
                            uri={e.image}
                            price={e.price}
                            category="jewelry"
                        />
                    })}
                    {this.state.decorations.map((e, i) => {
                        return <Product
                            key={i}
                            name={e.name}
                            id={e._id}
                            uri={e.image}
                            price={e.price}
                            category="decorations"
                        />
                    })}
                </div>
            </div>);
    }
 }