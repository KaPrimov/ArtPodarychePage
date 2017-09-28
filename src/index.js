import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePage from './components/Home/HomePage';
import ContactsPage from './components/Contacts/ContactsPage';
import ClothesPage from './components/Catalog/ClothesPage'
import JewelryPage from './components/Catalog/JewelryPage'
import DecorationsPage from './components/Catalog/DecorationsPage'
import AdminConsolePage from './components/Admin/AdminConsolePage'
import ClothesDetails from './components/Catalog/ClothesDetails'
import JewelryDetails from './components/Catalog/JewelryDetails'
import DecorationsDetails from './components/Catalog/DecorationsDetails'
import EditCommentPage from './components/Edit/EditCommentPage'
import SearchResultPage from './components/Search/SearchResultPage'
import AdminEditPage from './components/Admin/AdminEditPage'
import FaqPage from './components/FAQ/FAQ'
import './resources/styles/index.css';
import '../node_modules/slick-carousel/slick/slick.css'

import {IndexRoute, Router, Route, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path='admin' component={AdminConsolePage}>
                <Route path="/editProduct/:productId" component={AdminEditPage}/>
            </Route>
            <Route path='clothes/:productId' component={ClothesDetails}/>
            <Route path='jewelry/:productId' component={JewelryDetails}/>
            <Route path='decorations/:productId' component={DecorationsDetails}/>
            <Route path='contacts' component={ContactsPage}/>
            <Route path='clothes' component={ClothesPage}/>
            <Route path='jewelry' component={JewelryPage}/>
            <Route path='decorations' component={DecorationsPage}/>
            <Route path="edit/:commentId" component={EditCommentPage}/>
            <Route path="faq" component={FaqPage}/>
            <Route path="search-results" component={SearchResultPage}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
