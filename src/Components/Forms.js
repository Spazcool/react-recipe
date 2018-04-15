import React, { Component } from 'react';
import './../App.css';

class Forms extends Component {
  render() {
    return (
      <div>
        <form
          className={this.props.updating ? 'updateCardForm' : null}
          onSubmit={() => this.props.handleRecipe()}
        >
          <ul className="addBar">
            <li>
              <label>
                Name <br />
                <textarea
                  cols="50"
                  name="currentName"
                  onChange={this.props.handleChange}
                  placeholder="What ya cookin?"
                  rows="5"
                  type="text"
                  value={this.props.currentName}
                />
              </label>
            </li>
            <li>
              <label>
                Ingredients <br />
                <textarea
                  cols="50"
                  name="currentIngredients"
                  onChange={this.props.handleChange}
                  placeholder="Separate each item with any of the following puncuation . ! , ; : / \ or a space"
                  rows="5"
                  type="text"
                  value={this.props.currentIngredients}
                />
              </label>
            </li>
            <li>
              <label>
                Directions <br />
                <textarea
                  cols="50"
                  name="currentDirections"
                  onChange={this.props.handleChange}
                  placeholder="Separate each step with any of the following puncuation . ! , ; : / \"
                  rows="5"
                  type="text"
                  value={this.props.currentDirections}
                />
              </label>
            </li>
          </ul>
          <input type="submit" value="Submit" className="submit"/>
        </form>
      </div>
    );
  }
}

export default Forms;
