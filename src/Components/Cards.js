import React, { Component } from 'react';
import './../App.css';
import Card from './Card';

// mock data
import recipes from './../recipes.js';

class Cards extends Component {
  render() {
    if(this.props.updating){
      return (<Card recipe={recipes[this.props.index]} index={this.props.index}/>)
    }
    return (
      recipes.map((recipe, index) => {
        return (<Card recipe={recipe} index={index}/>)
      })
    )
  }
}

export default Cards;
