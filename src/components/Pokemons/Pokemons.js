import React from 'react';
import PokemonPassport from './PokemonPassport';

const Pokemons = (props) => {
  return (
    <React.Fragment>
      {props.pokemons.map((pokemon) => (
        <PokemonPassport
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          sprites={pokemon.sprites}
          height={pokemon.height}
          weight={pokemon.weight}
          baseExperience={pokemon.base_experience}
          types={pokemon.types}
          moves={pokemon.moves}
        />
      ))}
    </React.Fragment>
  );
};

export default Pokemons;
