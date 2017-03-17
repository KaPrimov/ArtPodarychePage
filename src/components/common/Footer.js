import React, {Component} from 'react';
import {Link} from 'react-router';
import logo from "../../resources/images/footer-logo.png"
import "../../resources/styles/footer-styles.css"

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="left-part-footer">
                    <div className="about-footer inside-category">
                        <h5>Арт Подаръче</h5>
                        <p>думи думи думи думи  думи думи думи думи думи думи думи думи думи думи думи </p>
                    </div>
                    <div className="product-care inside-category">
                        <h5>Информация</h5>
                        <Link to="\care">Грижа за пордуктите ни</Link>
                    </div>
                </div>
                <div className="img-container">
                    <img src={logo} alt="logo" className="footer-logo"/>
                </div>
                <div className="right-part-footer">
                    <div className="contacts inside-category">
                        <h5>Контакти</h5>
                        <p><Link to="\contacts">Контакти</Link></p>
                    </div>
                    <div className="something inside-category">
                        <h5>Забравих какво е</h5>
                        <p>Извинявай славчеееее</p>
                    </div>
                </div>

            </div>
        );
    }
}