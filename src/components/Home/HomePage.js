import React, {Component} from 'react';
import '../../resources/styles/home-page.css'
import Carousel from './Carousel'
import Apps from './FBAppAndCalendar';
import CustomerOrders from './CustomersOrders'

export default class HomePage extends Component {

    render() {

        return (
            <div>
                <h1 className="home-main-header">Ръчно изработени изкушения</h1>
                <div className="slider-container">
                    <Carousel />
                </div>
                <h1 className="section-heading">Дрешки по поръчка</h1>
                <CustomerOrders/>
                <Apps/>
            </div>
        );
    }
}