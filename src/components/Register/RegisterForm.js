import React, {Component} from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>E-mail:</label>
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={this.props.email}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={this.props.password}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Repeat Password:</label>
                    <input
                        className="form-control"
                        type="password"
                        name="repeat"
                        value={this.props.repeat}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>First name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="firstName"
                        value={this.props.firstName}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Last name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="lastName"
                        value={this.props.lastName}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <textarea
                        className="form-control"
                        name="address"
                        value={this.props.address}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group" id="access" style={{display: 'none'}}>
                    <label>Access Level:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="access"
                        value={this.props.access}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Register" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}