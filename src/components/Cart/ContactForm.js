import React, {Component} from 'react';

export default class ConstactForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler} className="register">
                    <input
                        type="text"
                        name="username"
                        placeholder="Име"
                        value={this.props.clientName}
                        className='form-contact-field'
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.props.email}
                        className='form-contact-field'
                    />
                    <input
                        type="phone"
                        name="password"
                        placeholder="Телефон"
                        value={this.props.phone}
                        className='form-contact-field'
                    />                   
                <input className='register-button' type="submit" value="Поръчайте" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}