import React, {Component} from 'react'

export default class SearchBar extends Component {
    handleSearch(event) {
       this.props.onSearch(event.target.value)
    }

    render() {
        return (
            <div className="row search-appointments">
                <div className="col-sm-offset-3 col-sm-6">
                    <div className="input-group">
                        <input id="search-products" onChange={this.handleSearch.bind(this)} placeholder="Search" type="text" className="form-control" aria-label="Search Appointments"/>

                    </div>
                </div>
            </div>
        )
    }
}