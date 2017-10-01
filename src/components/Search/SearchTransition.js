import React, { Component } from 'react';
import { withRouter } from 'react-router'

export default class SearchTransition extends Component {
    constructor(props) {
        super(props)        
    }

    componentWillMount() {
        
        this.props.router.push({
            pathname: "/search-results",
            state: {query: this.props.location.state.query}  
        });
    }

    render() {
        return <div></div>
    }
}