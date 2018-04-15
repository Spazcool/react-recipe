import Card from './Card';
import React, { Component } from 'react';
import './../App.css';

class Cards extends Component {
  render() {
    if(this.props.updating){
      return (
        <Card
          index={this.props.updateIndex}
          recipe={this.props.recipes[this.props.updateIndex]}
          updating={this.props.updating}
        />
      )
    }
    return (
      this.props.recipes.map((recipe, index) => {
        return (
          <Card
            handleDelete={this.props.handleDelete}
            toggleUpdate={this.props.toggleUpdate}
            index={index}
            key={index}
            recipe={recipe}
          />
        )
      })
    )
  }
}

export default Cards;
