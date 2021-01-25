import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './Components/MainComponent';
import { DISHES } from './shared/dishes.js';
import { Component } from 'react';

class App extends Component{


  render() {
    return (
      <div>
        <Main/>
      </div>
    );
  }
  
}

export default App;
