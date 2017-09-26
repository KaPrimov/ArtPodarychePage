import React, {Component} from 'react';

export default class News extends Component {
    render() {
        return (
            <div className="news-wrapper">
                <h4 className="single-new-title">{this.props.title}</h4>
                <p className="news-venue">{this.props.venue}</p>
                <p className="news-datetime">{this.props.time}</p>                
            </div>
        )
    }
}