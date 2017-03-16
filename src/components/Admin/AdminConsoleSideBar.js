import React, {Component} from 'react';

export default class AdminConsoleSideBar extends Component {

    render() {
        return (
            <div >
                <nav className="navbar navbar-default sidebar" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a name="admin-panel" onClick={this.props.adminPanelClicked}>Admin Panel
                                        <span className="iconSize pull-right hidden-xs showopacity glyphicon glyphicon-home">
                                        </span>
                                    </a>

                                </li>
                                <li>
                                    <a name="users" onClick={this.props.usersClicked}>Users
                                    <span className="iconSize pull-right hidden-xs showopacity glyphicon glyphicon-user">
                                    </span>
                                </a>
                                </li>
                                <li >
                                    <a name="productsAdmin" onClick={this.props.productsClicked}>Products
                                        <span className="iconSize pull-right hidden-xs showopacity glyphicon glyphicon-folder-open">
                                        </span>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}