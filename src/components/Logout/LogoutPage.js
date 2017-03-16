import React, {Component} from 'react';
import {logout} from '../../models/user';
import observer from '../../models/observer';


export default class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.logout();
    }

    logout() {
        logout(this.onSubmitResponse.bind(this));
    }

    onSubmitResponse(response) {
        if (response) {
            observer.showSuccess('Logout successful!');
            this.context.router.push('/');
        } else {
            observer.showError('Logout unsuccessful!');
        }
    }

    render() {
        return (
            <div>
                <span>Logout Page</span>
            </div>
        );
    }
}

LogoutPage.contextTypes = {
    router: React.PropTypes.object
};