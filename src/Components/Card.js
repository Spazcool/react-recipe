import Button from './Button';
import React, { Component } from 'react';
import './../App.css';

class Card extends Component {
  render() {
    let Buttons;
    let MouseEnter;
    let MouseLeave;
    let updating;
    if(!this.props.updating){
      Buttons =
      <div>
        <Button type={'delete'} index={this.props.index} handleDelete={this.props.handleDelete}/>
        <Button type={'update'} index={this.props.index} toggleUpdate={this.props.toggleUpdate}/>
      </div>;
      MouseEnter = () => this.props.onMouseEnter(this.props.id);
      MouseLeave = () => this.props.onMouseLeave(this.props.id);
      updating = "card";
    }
    if(this.props.updating){
      updating = "card focusCard";
    }
    return (
      <div
        className={updating}
        id={this.props.id}
        key={this.props.index}
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}>
        <h1>{this.props.recipe.name}</h1>
        <div className="hiddenInfo">
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
          {Buttons}
        </div>
      </div>
    )
  }
}

export default Card;
