import React, { Component } from 'react';
import './../App.css';

class Forms extends Component {
  render() {
    let updateCard = this.props.updating ? this.props.updatingCard : null;
    return (
      <div>
        <form
          className={this.props.updating ? 'updateCardForm' : null}
          onSubmit={(e) => {e.preventDefault(); this.props.handleRecipe(updateCard);}}>
          <ul className="addBar">
            <li>
              <label>
                Name <br />
                <textarea
                  name="currentName"
                  onChange={this.props.handleChange}
                  placeholder={"What ya cookin?"}
                  type="text"
                  value={this.props.currentName}
                />
              </label>
            </li>
            <li>
              <label>
                Ingredients <br />
                <textarea
                  name="currentIngredients"
                  onChange={this.props.handleChange}
                  placeholder={"Separate each item with any of the following puncuation . , ; : /"}
                  type="text"
                  value={this.props.currentIngredients}
                />
              </label>
            </li>
            <li>
              <label>
                Directions <br />
                <textarea
                  name="currentDirections"
                  onChange={this.props.handleChange}
                  placeholder={"Separate each step with any of the following puncuation . ! , ; : /"}
                  type="text"
                  value={this.props.currentDirections}
                />
              </label>
            </li>
          </ul>
          <input type="submit" value="Submit" className="button submit"/>
        </form>
      </div>
    );
  }
}

export default Forms;
