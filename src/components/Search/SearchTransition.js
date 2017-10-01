import React, { Component } from 'react';

export default class SearchTransition extends Component {
    
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