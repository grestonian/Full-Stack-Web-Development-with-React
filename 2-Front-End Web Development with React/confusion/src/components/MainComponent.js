// This component will be acting as a sudo containder component
import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import { DISHES } from '../shared/dishes';
import Footer from './FooterComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,      // here we have uplifted the DISHES object variable to MainComponent.js, now we can make this available to any component(here for example 'Menu' component)
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main;
