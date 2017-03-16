import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './AdminProducts.css'
import {deleteProduct} from '../../models/requester';
import AdminEditPage from  './AdminEditPage'
import observer from '../../models/observer'

export default class AdminProducts extends Component {

    deleteProductFunc(event) {
        deleteProduct(event.target.name);
        observer.showSuccess('Product was deleted!');
    }

    editProductFunc(event){
        ReactDOM.render(
            <AdminEditPage
            productId= {event.target.name}/>,
            document.getElementsByClassName('content-holder')[0]
        )
    }

    render() {
        let properties= this.props.productsAdmin;
        let rows = [];

        for (let obj of properties) {
            rows.push(<tr key={obj._id}>
                <td>{obj._id}</td>
                <td>{obj.name}</td>
                <td><img className="img-thumbnail" src={obj.images} alt="product"></img></td>
                <td>{obj.price}</td>
                <td>{obj.quantity}</td>
                <td>
                    <a className="btn btn-danger glyphicon glyphicon-trash" name={obj._id} onClick={this.deleteProductFunc}></a>
                    <a className="btn btn-info glyphicon glyphicon-edit" name={obj._id} onClick={this.editProductFunc}></a>
                </td>
            </tr>)
        }




        return (
            <div>
                <h2>Products</h2>

                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <th width="20%" id="id">#</th>
                        <th width="15%" id="name">Name</th>
                        <th width="15%" id="imageUrl">Image</th>
                        <th width="20%" id="price">Price</th>
                        <th width="10%" id="quantity">Quantity</th>
                        <th width="20%" id="actions">Actions</th>
                    </tr>
                    {rows}
                    </tbody>


                </table>
            </div>
        )
    }
}