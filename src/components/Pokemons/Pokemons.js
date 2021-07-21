import React from 'react';
import PokemonPassport from './PokemonPassport';
import styled from "styled-components/macro";

const FlexWrap = styled.div`
	display: flex;
    flex-wrap: wrap;
`;

const Pokemons = (props) => {
  return (
    <div>
      <FlexWrap>
      {props.pokemons.map((pokemon,index) => (
        <PokemonPassport
          index={index}
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
      </FlexWrap>
    </div>
  );
};

export default Pokemons;
