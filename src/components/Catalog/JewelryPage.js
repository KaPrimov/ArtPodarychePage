import React, {Component} from 'react';
import $ from 'jquery'
import Product from './Products';
import SearchBar from './SearchBar'
import {loadJewelry} from '../../models/product';
import '../../resources/styles/product-styles.css'
// import {Link} from 'react-router';

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
            queryText: ''
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onProductsLoadSuccess = this.onProductsLoadSuccess.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        loadJewelry(this.onProductsLoadSuccess)
    }

    onProductsLoadSuccess(response) {
        this.setState({products: response})
    }

    onClickHandler(event) {
        event.preventDefault();
        let id = event.target.name;
        $('div #' + id).toggle()
    }

    handleSearch(text) {
        this.setState({
            queryText: text.trim()
        })
    }

    render() {
        let queryText = this.state.queryText;
        let products = [];
        this.state.products.forEach(function (item) {
            if(
                item.name.toLowerCase().indexOf(queryText) !== -1 ||
                item.price.toString().indexOf(queryText) !== -1
            ) {
                products.push(item)
            }
        });


        return (
            <div >
                <div className="title-container">
                    <h1 className="page-header">Каталог</h1>
                </div>
                <div className="search-plugins">
                    <SearchBar onSearch={this.handleSearch}/>
                </div>
                <div id="content-holder">
                    {products.map((e, i) => {
                        return <Product
                            key={i}
                            name={e.name}
                            id={e._id}
                            price={e.price}
                            size={e.size}
                            uri={e.image}
                            category="jewelry"
                        />
                    })}
                </div>
            </div>
        );
    }
}