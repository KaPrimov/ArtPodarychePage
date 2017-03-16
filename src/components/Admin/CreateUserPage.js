import React, {Component} from 'react';
import RegisterForm from '../Register/RegisterForm'
import {register} from '../../models/user';
import $ from 'jquery';
import observer from '../../models/observer';

export default class CreateUser extends Component{

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
            access: 0,
            submitDisabled: false
        };
        this.bindEventHandlers();
    }

    componentDidMount() {
        $('#access').css('display', 'inline-block');
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
            observer.showSuccess('User was created!');
            this.context.router.push('/');
        } else {
            observer.showError('User was not created! Try with another username!');
            this.setState({submitDisabled: true});
        }
    }

    render() {

        return (
            <div><br/><br/><br/><br/><br/><br/><br/><br/>
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
        )
    }
}