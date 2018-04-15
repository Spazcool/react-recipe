import React, { Component } from 'react';
import './../App.css';

class Button extends Component {
  render() {
    if(this.props.type === 'delete'){
      return (
        <button
          className="buttons delete"
          onClick={() => this.props.handleDelete(this.props.index)}>
          Delete
        </button>
      )
    }
    return (
      <button
        className="buttons update"
        onClick={() => this.props.toggleUpdate(this.props.index)}>
        Update
      </button>
    )
  }
}

export default Button;
