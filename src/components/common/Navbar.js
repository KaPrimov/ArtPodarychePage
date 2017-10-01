import React, {Component} from 'react';
import { withRouter, browserHistory } from 'react-router'

class Navbar extends Component {

    constructor(props) {
        super(props);        
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onSubmitHandler = this.onSubmitHandler.bind(this);        
    }

    onSubmitHandler(event) {
        event.preventDefault();
        let data = document.getElementsByClassName('input-search')[0].value;
        document.getElementsByClassName('input-search')[0].value = '';
        browserHistory.push('/search-results');
        this.props.router.push({
            pathname: "/search",
            state: {query: data}  
        });
        // window.location.reload()
        
    }

    render() {
        return (
            <div>
                <form className='search-input' onSubmit={this.onSubmitHandler}>
                    <input type='text' className='input-search'></input>
                </form>
                {this.props.children}
            </div>
        );
    }    
}

export default withRouter(Navbar)