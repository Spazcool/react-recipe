import Cards from './Components/Cards';
import Forms from './Components/Forms';
import React, { Component } from 'react';
import recipes from './recipes.js'; // mock data
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDirections: [],
      currentIngredients: [],
      currentName: '',
      recipes: recipes,
      updating: false,
      updatingCard: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitDelete = this.submitDelete.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('compWillUp: nexPro ', nextProps);
    console.log('compWillUp: nexSta ', nextState);    
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitDelete(e) {
    let tempArr = this.state.recipes;
    tempArr.splice(e, 1);
    this.setState({
      recipes: tempArr,
    });
  }

  submitRecipe(e) {
    let tempArr = this.state.recipes;
    tempArr.push({
      name: this.state.currentName,
      ingredients: this.state.currentIngredients.split(/[\s.,\/\\;:\-_]/g),
      directions: this.state.currentDirections.split(/[.,!\/\\;:\-_]/g),
    });
    this.setState({
      recipes: tempArr,
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
    console.log('Parent render: ', this.state.recipes);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe React</h1>
        </header>
        <Forms
          currentDirections={this.state.currentDirections}
          currentIngredients={this.state.currentIngredients}
          currentName={this.state.currentName}
          handleChange={this.handleChange}
          handleRecipe={this.submitRecipe}
          updating={this.state.updating}
        />
        <Cards
          handleDelete={this.submitDelete}
          toggleUpdate={this.toggleUpdate}
          recipes={this.state.recipes}
          updating={this.state.updating}
          updateIndex={this.state.updatingCard}
        />
        <footer>
          <h6>Made by Doug.</h6>
        </footer>
      </div>
    );
  }
}

export default App;
