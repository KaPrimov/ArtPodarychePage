import React, { Component } from 'react';
import {Link} from 'react-router';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Infobox from './components/common/Infobox'
import Cart from './components/Cart/Cart'
import './index.css';

import observer from './models/observer';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {loggedIn: false, username: '', admin: false, cart: []};
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);
    }

  componentDidMount() {
      this.onSessionUpdate();
      document.title = "Art Podaryche";
  }

  onSessionUpdate() {
      let name = sessionStorage.getItem('username');
      if(name){
          this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
      } else {
          this.setState({ loggedIn: false, username: '' });
      }
      let adminLevel = sessionStorage.getItem('accessLevel');
      if(adminLevel) {
          this.setState({admin: true})
      } else {
          this.setState({admin: false})
      }
  }



  render() {
      let navbar = {};
      if (!this.state.loggedIn) {
          navbar = (
              <Navbar>
                  <Link to="/login" className="link-page">Логин</Link>
                  <Link to="/register" className="link-page">Регистрация</Link>
                  <Link to="/cart"  className="link-page">Количка</Link>
              </Navbar>
          );
      } else if(this.state.admin){
          navbar = (
              <Navbar>
                  <Link to="/logout" className="link-page">Отписване</Link>
                  <Link to="/cart"  className="link-page">Количка</Link>
                  <Link to="/admin"  className="link-page">Admin</Link>
              </Navbar>
          );
      } else {
          navbar = (
              <Navbar>
                  <Link to="/logout" className="link-page">Отписване</Link>
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
              <Infobox/>
          </div>
      )
  }
}

export default App;
