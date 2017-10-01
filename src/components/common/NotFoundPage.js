import React from 'react';
import picture from "../../resources/images/search-pic.jpg";
import '../../resources/styles/confirmation-styles.css'

const NotFound = () =>
            <div>
                <div className="title-container">
                    <h1 className="page-header">Страницата не е намерена!</h1>
                </div>
                <div id="content-holder">
                    <div className='confrimation-result'>
                        <img alt='confirmation-wreath' src={picture} className='pic-confirmation' />
                    </div>
                </div>
            </div>

export default NotFound;
    