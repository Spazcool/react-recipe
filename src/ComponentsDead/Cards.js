import React, { Component } from 'react';
import UpdatePopUp from './UpdatePopUp';
import './../App.css';

class Cards extends Component {
  constructor() {
       super();
       this.state = {
         loopHack: true,
       };
       this.sendDelete = this.sendDelete.bind(this);
       this.sendUpdate = this.sendUpdate.bind(this);

   }

  sendDelete(index) {
    this.props.handleDelete(index);
  }

  sendUpdate(index) {
    this.props.handleUpdate(index);
  }

  passUpdate(n,i,d) {
    this.props.submitU(n,i,d)
  }

  render() {
    const recipes = this.props.recipes;
    if(this.props.update){
      return (
        <UpdatePopUp data={this.props.updateData} pass={this.passUpdate}/>
      )
    }
    return (
      recipes.map((recipe, index) => {
        return (
          <div className="Card" key={index}>
            <h1>{recipe.name}</h1>
            <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => {
                  return (<li key={index}>{ingredient}</li>)
                })}
              </ul>
            <h2>Directions</h2>
              <ol>
                {recipe.directions.map((direction, index) => {
                  return (<li key={index}>{direction}</li>)
                })}
              </ol>
            <br />
            <div>
              <button className="buttons delete" onClick={() => this.sendDelete(index)}>Delete</button>
              <button className="buttons edit" onClick={() => this.sendUpdate(index)}>Edit</button>
            </div>
          </div>
        )
      })
    )
  }
}

export default Cards;
