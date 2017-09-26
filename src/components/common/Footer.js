import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from "../../resources/images/footer-logo.png"
import "../../resources/styles/footer-styles.css"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="left-part-footer">
                    <div className="inside-category">
                        <h5>Art Подаръче</h5>
                        <p>Ръчно рисувани дрешки, чанти и кецки. Авторски бижута и декорации за дома.</p>
                    </div>                    
                </div>
                <div className="img-container">
                    <img src={logo} alt="logo" className="footer-logo"/>
                </div>
                <div className="right-part-footer">
                    <div className="inside-category">
                        <h5>Контакти</h5>
                        <p>
                        Телефон: +359 887 806 256<br/>
                        Email: art.podaryche@gmail.com
                        </p>
                    </div>                    
                </div>
                <p className="copy-mark">&copy; 2017 - Art Подаръче</p>
            </div>
        );
    }
}