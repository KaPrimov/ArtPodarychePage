import React, {Component} from 'react';
import { loadCategories } from '../../models/product'
import observer from '../../models/observer';


export default class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            fields: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onCategoriesSuccess = this.onCategoriesSuccess.bind(this);
        this.getValue = this.getValue.bind(this)
    }

    componentDidMount() {
        loadCategories(this.onCategoriesSuccess)
    }

    onCategoriesSuccess(response) {
        console.log(response);
        this.setState({categories: response})
    }

    getValue(event) {
        let index = event.target.value;
        let group = this.state.categories[index];
        let descriptionFields = group.descriptons;
        this.setState({fields: descriptionFields})
    }

    render() {

        return (
            <div className="form-group"><br/><br/><br/><br/><br/><br/><br/>
                <label>Select option for creating element:</label>
                <select id="sel1" className="form-control" onChange={this.getValue}>
                    {this.state.categories.map((category, index) => {
                        return <option key={index} value={index}>{category.name}</option>
                    })}
                </select>
                <form onSubmit={this.props.onSubmitHandler}>
                    <div className="form-group">
                        <label>Image:</label>
                        <input
                            className="form-control"
                            type="url"
                            name="images"
                            value={this.props.images}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={this.props.name}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tags:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="tags"
                            value={this.props.tags}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Product Type:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="productType"
                            value={this.props.productType}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price:</label>
                        <input
                            className="form-control"
                            type="number"
                            name="price"
                            value={this.props.price}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity:</label>
                        <input
                            className="form-control"
                            type="number"
                            name="quantity"
                            value={this.props.quantity}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <div>Mandatory description:</div>
                    {this.state.fields.map((field, index) => {
                        return (
                            <ul>
                                <li key={index}>
                                    {field}
                                </li>
                            </ul>
                        )
                    })}
                    <div className="form-group">
                        <label>Description:</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            value={this.props.description}
                            onChange={this.props.onChangeHandler}
                        />
                    </div>
                    <input className="btn btn-default" type="submit" value="Create Product"/>
                </form>
            </div>
        )
    }
}
