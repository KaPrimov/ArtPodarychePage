import React, {Component} from 'react';
import {Link} from 'react-router';
import "../../resources/styles/header-styles.css"

import logo from "../../resources/images/logo.png"

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="top-navigation">
                        <Link to="/"><img id="logo" src={logo} alt="logo"/></Link>
                        <ul className="nested-categories">
                           <li>{this.props.children}</li>
                        </ul>
                    </div>
                    <div id="bottom-categories">
                        <ul>
                            <li><Link className="link-page" to="/clothes">Текстил</Link></li>
                            <li><Link className="link-page" to="/jewelry">Бижута</Link></li>
                            <li><Link className="link-page" to="/decorations">Декорации</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}