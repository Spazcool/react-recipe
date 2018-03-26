import React, { Component } from 'react';
import './../App.css';

class Forms extends Component {
  render() {
    return (
      <div>
        <form className={this.props.updating ? 'updateCardForm' : null} onSubmit={this.handleSubmit}>
          <ul className="addBar">
            <li>
              <label>
                Name <br />
                <textarea
                  cols="50"
                  rows="5"
                  name="name"
                  type="text"
                />
              </label>
            </li>
            <li>
              <label>
                Ingredients <br />
                <textarea
                  cols="50"
                  rows="5"
                  placeholder="Separate each item with any of the following puncuation . ! , ; : / \ or a space"
                  name="ingredients"
                  type="text"
                />
              </label>
            </li>
            <li>
              <label>
                Directions <br />
                <textarea
                  cols="50"
                  rows="5"
                  placeholder="Separate each step with any of the following puncuation . ! , ; : / \"
                  name="directions"
                  type="text"
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
