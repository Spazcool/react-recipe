import Card from './Card';
import React, { Component } from 'react';
import './../App.css';

class Cards extends Component {
  render() {
    if(this.props.updating){
      {/*TODO will need to rethink where the index is coming from*/}
      return (
        <Card
          handleDelete={this.props.handleDelete}
          handleUpdate={this.props.handleUpdate}
          index={this.props.updateIndex}
          recipe={this.props.recipes[this.props.updateIndex]}
          />
      )
    }
    return (
      this.props.recipes.map((recipe, index) => {
        return (
          <Card
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
            index={index}
            recipe={recipe}
          />
        )
      })
    )
  }
}

export default Cards;
