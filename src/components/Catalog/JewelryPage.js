import React, {Component} from 'react';
import $ from 'jquery'
import Product from './Products';
import SearchBar from './SearchBar'
import {loadClothes, loadJewelry} from '../../models/product';
import './product.css'
// import {Link} from 'react-router';

export default class JewelryPage extends Component {
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
        console.log(this.props.params.category);
        if(this.props.params.category === 'jewelry') {
            loadJewelry(this.onProductsLoadSuccess)
        } else if (this.props.params.category === 'clothes') {
            loadClothes(this.onProductsLoadSuccess)
        }
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
            queryText: text
        })
    }

    render() {
        let queryText = this.state.queryText;
        let products = [];
        this.state.products.forEach(function (item) {
            if(
                item.name.toLowerCase().indexOf(queryText) !== -1 ||
                item.tags.toLowerCase().indexOf(queryText) !== -1
            ) {
                products.push(item)
            }
        });


        return (
            <div >
                <div className="col-md-12">
                    <h1 className="page-header">Каталог</h1>
                </div>
                <SearchBar onSearch={this.handleSearch}/>
                <div id="content-holder">
                    {products.map((e, i) => {
                        return <Product
                            key={i}
                            name={e.name}
                            id={e._id}
                            price={e.price}
                            tags={e.tags}
                            uri={e.images}
                            type={e.productype}
                        />
                    })}
                </div>
            </div>
        );
    }
}