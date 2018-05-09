import Cards from './Components/Cards';
import FadeIn from 'react-fade-in';
import Forms from './Components/Forms';
import React, { Component } from 'react';
import recipes from './recipes.js'; // mock data || starting recipes
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDirections: '',
      currentIngredients: '',
      currentName: '',
      recipes: recipes,
      updating: false,
      updatingCard: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.submitDelete = this.submitDelete.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  mouseEnter(id) {
    document.getElementById(id).classList.add("focusCard");
  }

  mouseLeave(id) {
    document.getElementById(id).classList.remove("focusCard");
  }

  submitDelete(e) {
    let tempArr = this.state.recipes;
    tempArr.splice(e, 1);
    this.setState({
      recipes: tempArr,
    });
  }

  submitRecipe(updating) {
    let tempArr = this.state.recipes;
    if(!updating && this.state.currentName){
      tempArr.push({
        name: this.state.currentName,
        ingredients: this.state.currentIngredients.split(/[.,/\\;:\-_]/g),
        directions: this.state.currentDirections.split(/[.,!/\\;:\-_]/g),
      });
    }else if(updating && this.state.currentName){
      tempArr[updating].name = this.state.currentName;
      tempArr[updating].ingredients = this.state.currentIngredients.split(/[.,/\\;:\-_]/g);
      tempArr[updating].directions = this.state.currentDirections.split(/[.,!/\\;:\-_]/g);
    }
    this.setState({
      currentDirections: '',
      currentIngredients: '',
      currentName: '',
      recipes: tempArr,
      updating: false,
    });
  }

  toggleUpdate(e) {
    let newState = this.state.updating === true ? false : true;
    this.setState({
      updating: newState,
      updatingCard: e,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FadeIn>
            <div className="App-title">
              <a href="https://www.freecodecamp.org/challenges/build-a-recipe-box">React Recipe</a>
            </div>
            <div className="home">
              <a href="http://www.spazcool.com">Home</a>
            </div>
            <div className="credits">
              Made by <a href="https://github.com/Spazcool/">Doug</a>.
            </div>
          </FadeIn>
        </header>
        <Forms
          currentDirections={this.state.currentDirections}
          currentIngredients={this.state.currentIngredients}
          currentName={this.state.currentName}
          handleChange={this.handleChange}
          handleRecipe={this.submitRecipe}
          recipes={this.state.recipes}
          updating={this.state.updating}
          updatingCard={this.state.updatingCard}
        />
        <Cards
          handleDelete={this.submitDelete}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          recipes={this.state.recipes}
          toggleUpdate={this.toggleUpdate}
          updating={this.state.updating}
          updateIndex={this.state.updatingCard}
        />
      </div>
    );
  }
}

export default App;
