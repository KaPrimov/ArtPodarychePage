import React, {Component} from 'react'

export default class SearchBar extends Component {
    handleSearch(event) {
        this.props.onSearch(event.target.value)
    }

    render() {
        return (
            <div className="search-container">
                <input id="search-products" onChange={this.handleSearch.bind(this)} placeholder="Search" type="text"
                       className="form-control" aria-label="Search Appointments"/>
            </div>
        )
    }
}