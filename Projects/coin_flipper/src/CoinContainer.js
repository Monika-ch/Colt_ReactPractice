import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      {
        side: "tails",
        imgSrc:
          "https://i.etsystatic.com/9438932/r/il/42ef45/3555941097/il_794xN.3555941097_6xnz.jpg",
      },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      headCount: 0,
      tailCount: 0,
      totalFlips: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    let newCoin = choice(this.props.coins);
    console.log(newCoin);
    this.setState((st) => {
      return {
        currCoin: newCoin,
        totalFlips: st.totalFlips + 1,
        headCount: st.headCount + (newCoin.side === "heads" ? 1 : 0),
        tailCount: st.tailCount + (newCoin.side === "tails" ? 1 : 0),
      };
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <section className='CoinContainer'>
        <h1>Let's flip a coin</h1>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>FLIP MEEEE</button>
        <p>
          Out of {this.state.totalFlips} flips, there have been{" "}
          {this.state.headCount} heads and {this.state.tailCount} tails.
        </p>
      </section>
    );
  }
}

export default CoinContainer;
