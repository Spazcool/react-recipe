import Card from './Card';
import React, { Component } from 'react';
import './../App.css';

class Cards extends Component {
  render() {
    if(this.props.updating){
      return (
        <Card
          id={this.props.recipes[this.props.updateIndex].name}
          index={this.props.updateIndex}
          onMouseEnter={this.props.onMouseEnter}
          onMouseLeave={this.props.onMouseLeave}
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
            id={recipe.name}
            index={index}
            key={index}
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave}
            recipe={recipe}
          />
        )
      })
    )
  }
}

export default Cards;
