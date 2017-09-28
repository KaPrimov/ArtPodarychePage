import React, { Component } from 'react';
import {Link} from 'react-router';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Infobox from './components/common/Infobox'
import Cart from './components/Cart/Cart'
import './resources/styles/index.css';

import observer from './models/observer';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { username: '', admin: false, cart: []};
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

  componentDidMount() {
      this.onSessionUpdate();
      document.title = "Art Podaryche";
  }

  onSessionUpdate() {      
      let adminLevel = sessionStorage.getItem('accessLevel');
      if(adminLevel) {
          this.setState({admin: true})
      } else {
          this.setState({admin: false})
      }
  }



  render() {
      let navbar = {};
      if(this.state.admin){
          navbar = (
              <Navbar>
                  <Link to="/admin" className="link-page">Администратор</Link>
                  <Link to="/faq"  className="link-page">FAQ</Link>
                  <Link to="/cart"  className="link-page">Количка</Link>
              </Navbar>
          );
      } else {
          navbar = (
              <Navbar>
                  <Link to="/faq"  className="link-page">FAQ</Link>
                  <Link to="/cart"  className="link-page">Количка</Link>
              </Navbar>
          );
      }

      return (
          <div className="container">
              <Cart/>
              <Header loggedIn={this.state.loggedIn} user={this.state.username}>
                {navbar}
            </Header>
              {this.props.children}
              <Footer />
              {/*<Infobox/>*/}
          </div>
      )
  }
}

export default App;
