import React, {Component} from 'react';
import observer from '../../models/observer'

export default class News extends Component {
    render() {
        return (
            <div className="news-wrapper">
                <h4 className="single-new-title">{this.props.title}</h4>
                <p className="news-datetime">{this.props.datetime}</p>
                <p className="news-venue">{this.props.venue}</p>
            </div>
        )
    }
}