import React, { Component } from 'react';
import './../App.css';

class Button extends Component {
  render() {
    if(this.props.type === 'delete'){
      return (<button className="buttons delete" onClick={() => this.sendDelete()}>Delete</button>)
    }
    return (<button className="buttons update" onClick={() => this.sendUpdate()}>Update</button>)
  }
}

export default Button;
