import React, { Component } from 'react';
import { loadAllProducts } from '../../models/product'

export default class CArtPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
        // this.bindEventHandlers()
    }
}