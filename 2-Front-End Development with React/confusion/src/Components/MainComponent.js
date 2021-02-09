import Header from './HeaderComponent';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes.js';
import { Component } from 'react';
import Footer from './FooterComponent';

import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component{

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }


  render() {
    const Homepage = () => {
      return (
        <Home/>
      )
    }
    return (
      <div>
          <Header/>
          <Switch>
            <Route path="/home" component={Homepage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
            <Redirect to="/home"/>
          </Switch>
          <Footer/>
      </div>
    );
  }
  
}

export default Main;
