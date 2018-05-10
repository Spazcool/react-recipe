import React, { Component } from 'react';
import Tappable from 'react-tappable';
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
      <Tappable onTap={onclick}>
        <button
          className={'button' + ' ' + this.props.type}
          onClick={onclick}>
          {this.props.type}
        </button>
      </Tappable>
    )
  }
}

export default Button;
