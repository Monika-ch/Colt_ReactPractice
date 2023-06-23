import React, { Component } from "react";
import BetterNumberItem from "./BetterNumberItem";

class BetterNumberList extends Component {
  constructor(props) {
    super(props);
    this.state = { nums: [1, 2, 2, 2, 3, 4, 4, 5, 5, 5] };
    this.remove = this.remove.bind(this)
  }

  remove(num) {
    this.setState((st) => ({ nums: st.nums.filter((n) => n !== num) }));
  }

  render() {
    let nums = this.state.nums.map((n, idx) => (
      // KEY NEEDS TO BE UNIQUE!!!
      // FOR DUPLICATE DATA (AS IN ABOVE ARRAY), DO NOT USE DATA VALUE AS KEY
      // DO NOT USE INDEX AS KEY IF DATA NEEDS TO RE-ORDERED/CHANGED (can cause issues)
      <BetterNumberItem key={idx} value={n} remove={this.remove} />
    ));
    return (
      <div>
        <h1>Better Number List</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default BetterNumberList;
