// This component will be acting as a sudo containder component
import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,      // here we have uplifted the DISHES object variable to MainComponent.js, now we can make this available to any component(here for example 'Menu' component)
    };
  }

  render() {

    const Homepage = () => {
      return(
         <Home/>
      )
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
