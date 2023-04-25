import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
  render() {
    // let paddedId = this.props.id;
    // if (paddedId >= 0 && paddedId <= 9) {
    //   paddedId = `00${paddedId}`;
    // }
    // if (paddedId >= 10 && paddedId <= 99) {
    //   paddedId = `0${paddedId}`;
    // }
    // let imgSrc = `${POKE_API}${paddedId}.png`;

    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;

    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'> {this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div className='Pokecard-data'> Type: {this.props.type}</div>
        <div className='Pokecard-data'> EXP: {this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
