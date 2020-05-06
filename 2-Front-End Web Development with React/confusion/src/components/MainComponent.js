// This component will be acting as a sudo containder component
import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,      // here we have uplifted the DISHES object variable to MainComponent.js, now we can make this available to any component(here for example 'Menu' component)
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }

  render() {

    const Homepage = () => {
      return(
         <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      )
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={Homepage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
