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
      currentIngredients: '',
      currentName: '',
      recipes: recipes,
      updating: false,
      updatingCard: 0,
    };
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  submitDelete(e) {
    console.log("this is delete: ", e);
    // let removedArr = this.state.recipes;
    // removedArr.splice(e, 1);
    // this.setState({
    //   recipes: removedArr
    // });
  }

  submitUpdate(e) {
    if(!this.state.updating){
      this.setState({
        updating: true,
        updatingCard: e,
      });
    }else{
      this.setState({
        updating: false,
        updatingCard: 0,
      });
    }
    console.log("this is update: ", e);
    console.log("state of update: ", this.state.updating);
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Recipe React</h1>
        </header>

        {/* updating a card change input styling and handling function */}
        <Forms updating={this.state.updating}/>

        {/* when updating a card show just that card in the cards section*/}
        <Cards
          handleDelete={this.submitDelete}
          handleUpdate={this.submitUpdate}
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
