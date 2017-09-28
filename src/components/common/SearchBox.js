import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import {loadClothes} from '../../models/product'

const KEYS_TO_FILTERS = ['name', 'description', 'price']
export default class SearcBox extends Component {
    constructor (props) {
        super(props)
        this.state = {
        searchTerm: '',
        products: []
        }
        // this.searchUpdated = this.searchUpdated.bind(this)
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onProductsLoadSuccess = this.onProductsLoadSuccess.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this)
    }

    componentDidMount() {
        loadClothes(this.onProductsLoadSuccess)
    }

    onProductsLoadSuccess(response) {
        this.setState({products: response})
    }
    render () {
        const filteredEmails = this.state.products.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
        return (
        <div>
            <SearchInput className="search-input" onChange={this.searchUpdated} />
            {filteredEmails.map(email => {
            return (
                <div className="mail" key={email._id}>
                <div className="from">{email.name}</div>
                <div className="subject">{email.description}</div>
                </div>
            )
            })}
        </div>
        )
    }

    searchUpdated (term) {
        this.setState({searchTerm: term})
    }
}