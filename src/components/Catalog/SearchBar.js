import React, {Component} from 'react'

export default class SearchBar extends Component {
    handleSearch(event) {
        this.props.onSearch(event.target.value)
    }

    render() {
        return (
            <form>
                <input type="text" name="search" className="search-bar" placeholder="Search..." onChange={this.handleSearch.bind(this)}/>
            </form>
        )
    }
}