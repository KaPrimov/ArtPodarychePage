import React, { Component } from 'react';
import picture from "../../resources/images/search-pic.jpg";
import '../../resources/styles/confirmation-styles.css'

export default class CartPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div className="title-container">
                    <h1 className="page-header">Благодарим за поръчката!</h1>
                </div>
                <div id="content-holder">
                    <div className='confrimation-result'>
                        <h2 className='heading-confirmation green'>Ще се свържем с Вас в рамките на един работен ден за потвърждение на поръчката.</h2>
                        <img alt='confirmation-wreath' src={picture} className='pic-confirmation' />
                    </div>
                </div>
            </div>
        )
    }
}