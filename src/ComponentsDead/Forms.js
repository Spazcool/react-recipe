FORMS misbehaving code:
import React, { Component } from 'react';
import Cards from './Cards';
import './../App.css';

class Forms extends Component {
  render() {
    return (
      <div>
<form onSubmit={this.handleSubmit}>
  <ul className="addBar">
    <li>
      <label>
        Name <br />
        <textarea
          cols="50"
          rows="5"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
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
          value={this.state.ingredients}
          onChange={this.handleIngredientsChange} />
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
          value={this.state.directions}
          onChange={this.handleDirectionsChange}
        />
      </label>
    </li>
  </ul>
  <input type="submit" value="Submit" className="submit"/>
</form>
