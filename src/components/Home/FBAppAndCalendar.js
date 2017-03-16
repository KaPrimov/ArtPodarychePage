import {FBPage} from 'facebook-plugins';
import React, {Component} from 'react';
import {loadNews} from '../../models/news'
import News from './News'

export default class Apps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onNewsLoadSuccess = this.onNewsLoadSuccess.bind(this);
    }

    componentDidMount() {
        loadNews(this.onNewsLoadSuccess);
    }

    onNewsLoadSuccess(response) {
        this.setState({news: response})
    }


    render() {
        let news = [];
        this.state.news.forEach(function (item) {
            news.push(item);
        });
        return (
            <div>
                <div className="apps-wrapper">
                <FBPage appId="415316255491800"
                        href="https://www.facebook.com/Art.Podaryche/"
                        tabs={['timeline', 'events', 'messages']}/>
                    <div className="news">
                        <h1>Новини</h1>
                        <div className="news-content-holder">
                            {
                                news.map((e, i) => {
                                    return <News
                                        key={i}
                                        title={e.title}
                                        detetime={e.time}
                                        venue={e.place}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}