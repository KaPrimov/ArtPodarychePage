import React, {Component} from 'react';
import './login-styles.css';

export default class LoginForm extends Component {
    render() {
        return (
            <form className="login" onSubmit={this.props.onSubmitHandler}>
                <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.props.username}
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.props.password}
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <input className="login" type="submit" value="Login" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}