import React, {Component} from 'react';

export default class CatalogNavbar extends Component {

    render() {
        let categories = this.props.categories.map((category, id) => {
            return (
                <button key={id} className="btn btn-outline-primary" name={category.name} onClick={this.props.onClickHandler}>{category.name}</button>
            )
        });
        return (
            <div className="navbar">
                {categories}
            </div>
        );
    }
}