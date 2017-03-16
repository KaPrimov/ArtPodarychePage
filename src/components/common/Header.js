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
                            <li><Link to="\clothes">Дрехи</Link></li>
                            <li><Link to="\jewelry">Бижута</Link></li>
                            <li><Link to="\decorations">Декорации</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}