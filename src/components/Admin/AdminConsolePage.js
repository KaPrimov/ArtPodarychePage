import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './AdminConsole.css'
import AdminConsoleSideBar from './AdminConsoleSideBar'
import AdminPanel from './AdminPanel'
// import AdminProducts from './AdminProducts'
import {getAllUsers} from '../../models/user';
import {loadProducts } from '../../models/product'
// import {Link} from 'react-router';

export default class AdminConsole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            allProducts: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onUsersSuccess = this.onUsersSuccess.bind(this)
        this.onProductsSuccess = this.onProductsSuccess.bind(this);
    }

    showAdminPanelView() {
        ReactDOM.render(
            <AdminPanel/>,
            document.getElementsByClassName('content-holder')[0]
        )
    }

    componentDidMount() {
        getAllUsers(this.onUsersSuccess)
        loadProducts(this.onProductsSuccess)
    }

    onUsersSuccess(response) {
        this.setState({allUsers: response})
    }

    onProductsSuccess(response) {
        this.setState({allProducts: response})
    }

    

    render() {

            if(sessionStorage.getItem('accessLevel')) {
                return (
                    <div>
                        <AdminConsoleSideBar
                            adminPanelClicked={this.showAdminPanelView.bind(this)}
                            usersClicked={this.showUsersView.bind(this)}
                            productsClicked={this.showProductsView.bind(this)}/>
                        <div className="content-holder"></div>
                    </div>
                );
            } else {
                return (
                    <h1>You do not have the permissions!</h1>
                )
            }

    }
}






