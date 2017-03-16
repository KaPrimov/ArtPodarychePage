import React, {Component} from 'react';

export default class EditForm extends Component {
    render() {

        return (
            <div className="form-group"><br/><br/><br/><br/><br/><br/><br/>
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
                    <input className="btn btn-default" type="submit" value="Edit Product"/>
                </form>
            </div>
        )
    }
}
