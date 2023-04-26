import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title = this.props.isWinner ? (
      <h1 className='Pokedex-winner'>WINNING HAND</h1>
    ) : (
      <h1 className='Pokedex-loser'>LOSING HAND</h1>
    );

    return (
      <div className='Pokedex'>
        {title}
        <h4>Total Experience: {this.props.exp}</h4>
        <div className='Pokedex-cards'>
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
