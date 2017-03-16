import React, {Component} from 'react';
import './HomePage.css'
import Carousel from './Carousel'
import Apps from './FBAppAndCalendar';

export default class HomePage extends Component {

    render() {

        return (
            <div>
                <Carousel />
                <Apps/>
            </div>
        );
    }
}