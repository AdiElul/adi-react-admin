import React from "react";

export default class amountControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counte: 0
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  increase() {
    this.setState({ counte: this.state.counte + 1 });
  }
  decrease() {
    this.setState({ counte: this.state.counte - 1 });
  }

  render() {
    return (
      <div>
        <button class="btn btn-success" onClick={this.increase}>+</button>
        <button class="btn btn-danger" onClick={this.decrease}>-</button>
        <h1>{this.state.counte}</h1>  
      </div>
    );
  }
}
