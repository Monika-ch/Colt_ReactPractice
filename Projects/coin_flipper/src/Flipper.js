import React, { Component } from "react";
import "./Flipper.css";

class Flipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHead: null,
      headCount: 0,
      tailCount: 0,
    };
    this.handleFlip = this.handleFlip.bind(this);
  }
  handleFlip() {
    let randFlip = Math.floor(Math.random() * 2);
    randFlip
      ? this.setState({ isHead: false, tailCount: this.state.tailCount + 1 })
      : this.setState({ isHead: true, headCount: this.state.headCount + 1 });
  }
  render() {
    let src = this.state.isHead
      ? "https://tinyurl.com/react-coin-heads-jpg"
      : "https://i.etsystatic.com/9438932/r/il/42ef45/3555941097/il_794xN.3555941097_6xnz.jpg";
    let alt = this.state.isHead ? "head" : "tail";
    let totalFlips =
      this.state.isHead === null
        ? 0
        : this.state.headCount + this.state.tailCount;
    return (
      <section className='Flipper'>
        <h1>Let's flip a coin</h1>
        <div>{totalFlips > 0 && <img src={src} alt={alt} />} </div>
        <button onClick={this.handleFlip}>FLIP MEEEE</button>
        <p>
          Out of {totalFlips} flips, there have been {this.state.headCount}{" "}
          heads and {this.state.tailCount} tails.
        </p>
      </section>
    );
  }
}

export default Flipper;
