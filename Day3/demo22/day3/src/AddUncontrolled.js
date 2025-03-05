import React, { Component, createRef } from 'react';

class AddUncontrolled extends Component {
  constructor(props) {
    super(props);
    this.num1 = React.createRef();
    this.num2 = React.createRef();
    this.result = React.createRef();
    this.state = { sum: null };
  }

  handleAddition = () => {
    const num1 = parseInt(this.num1.current.value) ;
    const num2 = parseInt(this.num2.current.value) ;
    const sum = num1 + num2;
    this.setState({ sum });
  };

  render() {
    return (
      <div>
        <h2>Add Two Numbers</h2>
        <input type="number" ref={this.num1} placeholder="Enter first number" />
        <input type="number" ref={this.num2} placeholder="Enter second number" />
        <button onClick={this.handleAddition}>Add</button>
        <h3>Result: {this.state.sum !== null ? this.state.sum : 'N/A'}</h3>
      </div>
    );
  }
}

export default AddUncontrolled;