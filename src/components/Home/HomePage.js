import React, {Component} from 'react';
import '../../resources/styles/HomePage.css'
import Carousel from './Carousel'
import Apps from './FBAppAndCalendar';

export default class HomePage extends Component {

    render() {

        return (
            <div>
                <div className="slider-container">
                    <Carousel />
                </div>
                <h1 className="section-heading">Свежи предложения</h1>
                <Apps/>
            </div>
        );
    }
}