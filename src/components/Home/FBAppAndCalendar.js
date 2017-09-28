/*global FB*/
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
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '415316255491800',
                xfbml: false,
                version: 'v2.1'
            });
            document.dispatchEvent(new Event('fb_init'));
        };(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=415316255491800";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        window.FB.XFBML.parse();
    }

    onNewsLoadSuccess(response) {
        this.setState({news: response})
    }


    render() {
        let news = [];
        this.state.news.sort(function(x, y) {
            return ((x._id < y._id) ? 1 : ((x._id > y._id) ? -1 : 0));
        })
        .slice(0, 3).forEach(function (item) {
            news.push(item);
        });
        return (
            <div>
                <div className="apps-wrapper">
                <div className="fb-page" 
                data-href="https://www.facebook.com/Art.Podaryche"
                data-width="380" 
                data-hide-cover="false"
                data-show-facepile="true"
                data-tabs='timeline,events,messages'></div>
                    <div className="news">
                        <h1>Новини</h1>
                        <div className="news-content-holder">
                            {
                                news.map((e, i) => {
                                    return <News
                                        key={i}
                                        title={e.title}
                                        time={e.time}
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