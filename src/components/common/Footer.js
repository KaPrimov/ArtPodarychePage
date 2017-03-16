import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from "../../resources/images/footer-logo.png"
import "../../resources/styles/footer-styles.css"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p><Link to="\contacts">Контакти</Link></p>
                <img src={logo} alt="logo" className="footer-logo"/>
                <p><Link to="\care">Грижа за нашите продукти</Link></p>
            </div>
        );
    }
}