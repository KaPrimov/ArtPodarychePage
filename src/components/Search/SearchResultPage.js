import React, { Component } from 'react';
import { loadAllProducts } from '../../models/product';
import Product from '../Catalog/Products';
import picture from "../../resources/images/search-pic.jpg";

export default class SearchResultPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clothes: [],
            jewelry: [],
            decorations: [],
            query: ''
        }
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onClothesLoadSuccess = this.onClothesLoadSuccess.bind(this);
        this.onDecorationsLoadSuccess = this.onDecorationsLoadSuccess.bind(this);
        this.onJewelryLoadSuccess = this.onJewelryLoadSuccess.bind(this);
    }

    componentDidMount() {
        this.setState({query: this.props.location.state.query});
        loadAllProducts('Clothes', this.props.location.state.query, this.onClothesLoadSuccess);
        loadAllProducts('Decorations', this.props.location.state.query, this.onDecorationsLoadSuccess);
        loadAllProducts('jewelry', this.props.location.state.query, this.onJewelryLoadSuccess);
    }

    onClothesLoadSuccess(response) {
        this.setState({ clothes: response });
    }

    onDecorationsLoadSuccess(response) {
        this.setState({ decorations: response });
    }

    onJewelryLoadSuccess(response) {
        this.setState({ jewelry: response });
    }

    render() {
        if (this.state.clothes.length !== 0 || this.state.jewelry.length !== 0 || this.state.decorations.length !== 0) {

            return (<div >
                <div className="title-container">
                    <h1 className="page-header">Намерени резултати:</h1>
                </div>
                <div id="content-holder">
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
                    </div>
            </div>);
        } else {
            return (<div >
                <div className="title-container">
                    <h1 className="page-header">Намерени резултати:</h1>
                </div>
                <div id="content-holder">
                    <div className='no-search-results'>
                        <h2 className='heading-search-no-products green'>Няма намерени продукти!</h2>
                        <img alt='search-wreath' src={picture} className='pic-search-no-products' />
                    </div>
                </div>
            </div>);

        }

    }
}