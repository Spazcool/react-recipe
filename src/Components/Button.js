import React, { Component } from 'react';
import './../App.css';

class Button extends Component {
  render() {
    let onclick;
    if(this.props.type === 'delete'){
      onclick = () => this.props.handleDelete(this.props.index);
    }else{
      onclick = () => this.props.toggleUpdate(this.props.index);
    }
    return (
      <button
        className={'button' + ' ' + this.props.type}
        onClick={onclick}>
        {this.props.type}
      </button>
    )
  }
}

export default Button;
