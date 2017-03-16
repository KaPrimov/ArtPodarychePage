import React, {Component} from 'react';

export default class EditCommentForm extends Component {

    render() {
        let authorForm = '';
        if (sessionStorage.getItem('accessLevel')) {
            authorForm = (
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={this.props.username}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
            )
        }
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                {authorForm}
                <div className="form-group">
                    <label>Text:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="text"
                        value={this.props.text}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Submit changes" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}