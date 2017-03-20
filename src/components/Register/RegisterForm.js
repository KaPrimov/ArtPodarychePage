import React, {Component} from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler} className="register">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.props.email}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                    <input
                        type="password"
                        name="repeat"
                        value={this.props.repeat}
                        placeholder="Repeat Password"
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.props.firstName}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.props.lastName}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                <input className='register-button' type="submit" value="Register" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}