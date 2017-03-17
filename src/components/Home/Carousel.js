import React, {Component} from 'react';
import Slider from 'nuka-carousel';


import pic1 from './products-pics/1.jpg';
import pic2 from './products-pics/2.jpg';
import pic3 from './products-pics/3.jpg';


export default class Carousel extends Component {
    render() {
        return (
                <Slider>
                    <div><img className="carrousel-pic" alt="logo" src={pic1}/></div>
                    <div><img className="carrousel-pic" alt="logo" src={pic2}/></div>
                    <div><img className="carrousel-pic" alt="logo" src={pic3}/></div>
                </Slider>
                );
            }
        }
