import React, {Component} from 'react';
import EditForm from './EditComment';
import {loadCommentDetails, editComment} from '../../models/comment';

export default class EditCommentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '', authorId: '', productId: '', username: '', submitDisabled: true};
        this.bindEventHandlers();
    }

    componentDidMount() {
        // Populate form
        loadCommentDetails(this.props.params.commentId, this.onLoadSuccess);
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({
            text: response.text,
            authorId: response.authorId,
            productId: response.productId,
            username: response.username,
            submitDisabled: false
        });
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.setState({submitDisabled: true});
        editComment(this.props.params.commentId, this.state.text, this.state.authorId, this.state.productId, this.state.username, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push('/catalog/' + this.state.productId);
        } else {
            // Something went wrong, let the user try again
            this.setState({submitDisabled: true});
        }
    }

    render() {
        return (
            <div>
                <h1>Edit Page</h1>
                <EditForm
                    text={this.state.text}
                    username={this.state.username}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />
            </div>
        );
    }
}

EditCommentPage.contextTypes = {
    router: React.PropTypes.object
};