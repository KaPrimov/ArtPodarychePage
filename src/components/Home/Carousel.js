import React, {Component} from 'react';
import Slider from 'react-slick';


import pic1 from './products-pics/1.jpg';
import pic2 from './products-pics/2.jpg';
import pic3 from './products-pics/3.jpg';


export default class Carousel extends Component {
    render() {
        let settings = {
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        };
        return (
                <Slider {...settings}>
                    <div><img className="carrousel-pic" src={pic1}/></div>
                    <div><img className="carrousel-pic" src={pic2}/></div>
                    <div><img className="carrousel-pic" src={pic3}/></div>
                </Slider>
                );
            }
        }
