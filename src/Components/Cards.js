import Card from './Card';
import FadeIn from 'react-fade-in';
import React, { Component } from 'react';
import './../App.css';

class Cards extends Component {
  render() {
    const columns = ["colThree", "colTwo", "colOne"];
    if(this.props.updating){
      return (
        <FadeIn>
          <Card
            id={this.props.recipes[this.props.updateIndex].name}
            index={this.props.updateIndex}
            key={this.props.updateIndex}
            onMouseEnter={this.props.onMouseEnter}
            onMouseLeave={this.props.onMouseLeave}
            recipe={this.props.recipes[this.props.updateIndex]}
            updating={this.props.updating}
          />
        </FadeIn>
      )
    }
    return(
      <div className="columns">
      {columns.map((column, columnIndex) => {
        return(
          <div className={column}
            key={column}>
            {this.props.recipes.filter((item, index) => {
              return index % 3 === columnIndex;
              }).map((recipe, index) => {
                return (
                  <FadeIn>
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
                  </FadeIn>
                )})}
          </div>
        )})}
      </div>
    )
  }
}

export default Cards;
