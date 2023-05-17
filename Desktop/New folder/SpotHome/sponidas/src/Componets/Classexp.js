import React, { Component } from "react";

export default class Example extends Component {
  constructor() {
    super();
    this.state = {
      name: "sreekanth",
      age: 1,
      Array: [1, 2, 3, 4, 5],
    };
  }
  changeStatus = () => {
      this.setState({
          age: this.state.age * 2,
          name: "sree"

      });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button onClick={this.changeStatus}> change status in class </button>
      </div>
    );
  }
}
