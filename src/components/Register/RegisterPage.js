import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../models/user';
import observer from '../../models/observer';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            repeat: '',
            firstName: '',
            lastName: '',
            address: '',
            access: '',
            submitDisabled: false
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }


    onSubmitHandler(event) {
        event.preventDefault();
        if (this.state.password !== this.state.repeat) {
            alert("Passwords don't match");
            return;
        }
        this.setState({submitDisabled: true});
        register(this.state.username, this.state.email, this.state.password, this.state.firstName, this.state.lastName, this.state.address, this.state.access, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            observer.showSuccess('You are registered!');
            this.context.router.push('/');
        } else {
            observer.showError('Exists user with this username! Please try again!');
            this.setState({submitDisabled: true});
        }
    }

    render() {
        return (
            <div>
                <h1 className="page-header-register">Register here</h1>
                <RegisterForm
                    username={this.state.username}
                    email={this.state.email}
                    password={this.state.password}
                    repeat={this.state.repeat}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    address={this.state.address}
                    access={this.state.access}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

RegisterPage.contextTypes = {
    router: React.PropTypes.object
};