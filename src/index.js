import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePage from './components/Home/HomePage';
import ContactsPage from './components/Contacts/ContactsPage';
import RegisterPage from './components/Register/RegisterPage';
import LoginPage from './components/Login/LoginPage'
import LogoutPage from './components/Logout/LogoutPage'
import CatalogPage from './components/Catalog/CatalogPage'
import AdminConsolePage from './components/Admin/AdminConsolePage'
import Details from './components/Catalog/Details'
import EditCommentPage from './components/Edit/EditCommentPage'
import AdminEditPage from './components/Admin/AdminEditPage'
import './index.css';
import '../node_modules/slick-carousel/slick/slick.css'

import {IndexRoute, Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path='register' component={RegisterPage}/>
            <Route path='login' component={LoginPage}/>
            <Route path='logout' component={LogoutPage}/>
            <Route path='admin' component={AdminConsolePage}>
                <Route path="/editProduct/:productId" component={AdminEditPage}/>
            </Route>
            <Route path='contacts' component={ContactsPage}/>
            <Route path='catalog'>
                <IndexRoute component={CatalogPage}/>
                <Route path=":productId" component={Details}/>
            </Route>
            <Route path="edit/:commentId" component={EditCommentPage}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
