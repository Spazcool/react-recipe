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
      <div>
        <div className="colThree">
          {this.props.recipes.filter((item, index) => {
            return index % 3 === 0;
          }).map((recipe, index) => {
            return (
              <Card
                handleDelete={this.props.handleDelete}
                toggleUpdate={this.props.toggleUpdate}
                id={recipe.name}
                index={this.props.recipes.findIndex(x => x.name === recipe.name)}
                key={this.props.recipes.findIndex(x => x.name === recipe.name)}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                recipe={recipe}
              />
            )
          })}
        </div>
        <div className="colTwo">
          {this.props.recipes.filter((item, index) => {
            return index % 3 === 1;
          }).map((recipe, index) => {
            return (
              <Card
                handleDelete={this.props.handleDelete}
                toggleUpdate={this.props.toggleUpdate}
                id={recipe.name}
                index={this.props.recipes.findIndex(x => x.name === recipe.name)}
                key={this.props.recipes.findIndex(x => x.name === recipe.name)}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                recipe={recipe}
              />
            )
          })}
        </div>
        <div className="colOne">
          {this.props.recipes.filter((item, index) => {
            return index % 3 === 2;
          }).map((recipe, index) => {
            return (
              <Card
                handleDelete={this.props.handleDelete}
                toggleUpdate={this.props.toggleUpdate}
                id={recipe.name}
                index={this.props.recipes.findIndex(x => x.name === recipe.name)}
                key={this.props.recipes.findIndex(x => x.name === recipe.name)}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                recipe={recipe}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Cards;
