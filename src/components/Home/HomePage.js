import React, {Component} from 'react';
import './HomePage.css'
import Carousel from './Carousel'
import '../../../node_modules/slick-carousel/slick/slick.css'

export default class HomePage extends Component {
    render() {

        return (
            <div>
                <Carousel />
            </div>
        );
    }
}