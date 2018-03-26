import React, { Component } from 'react';
import './../App.css';
import Button from './Button';

class Card extends Component {
  render() {
    return (
      <div className="Card" key={this.props.index}>
        <h1>{this.props.recipe.name}</h1>
        <h2>Ingredients</h2>
          <ul>
            {this.props.recipe.ingredients.map((ingredient, index) => {
              return (<li key={index}>{ingredient}</li>)
            })}
          </ul>
        <h2>Directions</h2>
          <ol>
            {this.props.recipe.directions.map((direction, index) => {
              return (<li key={index}>{direction}</li>)
            })}
          </ol>
        <br />
        <div>
          <Button type={'delete'} index={this.props.index}/>
          <Button type={'update'} index={this.props.index}/>
        </div>
      </div>
    )
  }
}

export default Card;
