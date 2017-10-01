import React, {Component} from 'react';
import '../../resources/styles/form-styls.css';

export default class ConstactForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler} className="register">
                <h3 className='form-header'>Форма за поръчка</h3>
                    <input
                        type="text"
                        name="username"
                        placeholder="Име"
                        value={this.props.clientName}
                        className='form-contact-field'
                        onChange={this.props.onChangeHandler}
                        required={true}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.props.email}
                        className='form-contact-field'
                        onChange={this.props.onChangeHandler}
                        required={true}
                    />
                    <input
                        type="phone"
                        name="phone"
                        placeholder="Телефон"
                        value={this.props.phone}
                        className='form-contact-field'
                        onChange={this.props.onChangeHandler}
                        required={true}
                    />                   
                <input className='register-button' type="submit" value="Поръчайте" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}