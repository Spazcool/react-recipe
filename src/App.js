import React, { Component } from 'react';
import Forms from './Components/Forms';
import Cards from './Components/Cards';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentName: '',
      currentIngredients: '',
      currentDirections: [],
      recipes: [],
      updatingCard: false,
    };
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Recipe React</h1>
        </header>

        {/* updating a card change input styling and handling function */}
        <Forms updating={this.state.updatingCard}/>
        {/* when updating a card show just that card in the cards section*/}
        <Cards
          updating={this.state.updatingCard}
          recipes={'stuff'}
          index={0}
        />

        <footer>
          <h6>Made by Doug.</h6>
        </footer>

      </div>
    );
  }
}

export default App;
