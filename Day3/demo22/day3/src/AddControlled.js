import React, { Component } from 'react';

class AddControlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      sum: null,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddition = () => {
    const { num1, num2 } = this.state;
    this.setState({ sum: (parseInt(num1) ) + (parseInt(num2) ) });
  };

  render() {
    return (
      <div>
        <h2>Add Two Numbers</h2>
        <input
          type="number"
          name="num1"
          value={this.state.num1}
          onChange={this.handleChange}
          placeholder="Enter first number"
        />
        <input
          type="number"
          name="num2"
          value={this.state.num2}
          onChange={this.handleChange}
          placeholder="Enter second number"
        />
        <button onClick={this.handleAddition}>Add</button>
        <h3>Result: {this.state.sum !== null ? this.state.sum : 'N/A'}</h3>
      </div>
    );
  }
}

export default AddControlled;