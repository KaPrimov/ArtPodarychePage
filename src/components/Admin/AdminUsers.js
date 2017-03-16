import React, {Component} from 'react';
import './AdminUsers'
import {deleteUser} from '../../models/requester';
import CreateUser from './CreateUserPage'
import ReactDOM from 'react-dom'
import observer from '../../models/observer';


export default class Users extends Component{


    deleteUserFunc(event) {
        let key = event.target.name;
        deleteUser(key, 'superUser');
        observer.showSuccess('User was deleted!');
    }

    showCreateUserView() {

            ReactDOM.render(
                <CreateUser/>,
                document.getElementsByClassName('content-holder')[0]
            )
    }

    render() {

        let properties = this.props.users;
        let rows = [];

        for (let obj of properties) {
            rows.push(<tr key={obj._id}>
                <td className="hidden-xs">{obj._id}</td>
                <td>{obj.username}</td>
                <td>{obj.access}</td>
                <td>
                    <a className="btn btn-danger glyphicon glyphicon-trash" name={obj._id} onClick={this.deleteUserFunc}></a>
                </td>
            </tr>)
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-1">
                            <div className="panel panel-default panel-table">
                                <div className="panel-heading">
                                    <div className="row">
                                        <div className="col col-xs-6">
                                            <h3 className="panel-title">Manage users</h3>
                                        </div>
                                        <div className="col col-xs-6 text-right">
                                            <button type="button" className="btn btn-sm btn-primary btn-create" onClick={this.showCreateUserView}>Create New User</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-striped table-bordered table-list">
                                        <thead>
                                        <tr>
                                            <th width="20%">ID</th>
                                            <th width="20%">Username</th>
                                            <th width="10%">AccessLevel</th>
                                            <th width="5%">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {rows}
                                        </tbody>
                                    </table>

                                </div>
                                <div className="panel-footer">
                                    <div className="row">
                                        <div className="col col-xs-4">HELLO
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}