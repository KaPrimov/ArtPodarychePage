import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {login} from '../../models/user';
import observer from '../../models/observer'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', submitDisabled: false };
        this.bindEventHandlers();

    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onErrorNotification = this.onErrorNotification.bind(this)
    }

    onChangeHandler(event) {
        switch (event.target.name) {
            case 'username':
                this.setState({ username: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitDisabled: true });
        login(this.state.username, this.state.password, this.onSubmitResponse, this.onErrorNotification);
    }

    onSubmitResponse(response) {
        if (response === true) {
            observer.showSuccess('Login successful!');
            this.context.router.push('/');
        }
    }

    onErrorNotification() {
        observer.showError('Wrong credentials');
        this.setState({ submitDisabled: false });
    }
    render() {
        return (
            <div>
                <h1 className="page-header">Логин</h1>
                <LoginForm
                    username={this.state.username}
                    password={this.state.password}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

LoginPage.contextTypes = {
    router: React.PropTypes.object
};