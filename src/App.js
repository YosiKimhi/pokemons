import React, { useState } from 'react';
import Pokemons from './components/Pokemons/Pokemons';
import LoadingSpinner from './components/UI/LoadingSpinner';
import './App.css';
import styled from 'styled-components/macro';
import {movesConditions, typeConditions} from "./utils/tools";
import RegularParticles from "./components/Particles/Particles";

const CenterLoader = styled.div`
	position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUrls = async () => {
    setIsLoading(true);
    setError(null);
    setPokemons([]);
    const pokemonsData = [];
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=100'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      // get raw data and save it to json and deconstruct the results
      const { results } = await response.json();
      const loadedUrls = [];
      //save 100 urls in temp array
      for (const key in results) {
        loadedUrls.push(results[key].url);
      }
      for (const key in loadedUrls) {
        const pokemonData = await fetchPokemon(loadedUrls[key]);
        if (checkPokemonCriterias(filterRelevantData(pokemonData))) {
          pokemonsData.push(pokemonData);
        }
      }
    } catch (error) {
      setError(error.message);
    }
    setPokemons(pokemonsData.slice(0,10));
    setIsLoading(false);
  };

  const checkPokemonCriterias = (pokemonData) => {
    const conditions = typeConditions.some((typeCondtion) =>
        pokemonData.types.includes(typeCondtion)
    )
    const movies = movesConditions.some((moveCondition) =>
        pokemonData.moves.includes(moveCondition)
    )

    return conditions && movies;
  };

  const filterRelevantData = (pokemonData) => {

    const relevantTypes = [];
    pokemonData.types.forEach(item => {
      if(typeConditions.includes(item))
        relevantTypes.push(item)
    })
    pokemonData.types = [...relevantTypes]

    const relevantMoves = [];
    pokemonData.moves.forEach(item => {
      if(movesConditions.includes(item))
        relevantMoves.push(item)
    })
    pokemonData.moves = [...relevantMoves]

    return pokemonData;
  };

  const fetchPokemon = async (url) => {
    setIsLoading(true);
    setError(null);
    let pokemonData = [];
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong when fetching pokemon!');
      }
      // get raw data and save it to json
      const data = await response.json();

      const {
        id,
        name,
        sprites,
        height,
        weight,
        base_experience,
        types,
        moves,
      } = data;
      const typesArray = [];
      const movesArray = [];
      for (const key in types) {
        typesArray.push(types[key].type.name);
      }
      for (const key in moves) {
        movesArray.push(moves[key].move.name);
      }
      pokemonData = {
        id: id,
        name: name.toUpperCase(),
        sprites: sprites,
        height: height,
        weight: weight,
        base_experience: base_experience,
        types: typesArray,
        moves: movesArray,
      };
    } catch (error) {
      setError(error.message);
    }
    return pokemonData;
  };
  const clearPokemons = () => {
    setPokemons([]);
  };

  let content = <p></p>;

  if (isLoading) {
    content = <CenterLoader><LoadingSpinner /></CenterLoader>;
  }

  if (pokemons.length > 0) {
    content = <Pokemons pokemons={pokemons} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <RegularParticles />
      <section>
        <button onClick={fetchUrls}>Fetch</button>
        <button onClick={clearPokemons}>Clear</button>
      </section>
      <section className="cards">{content}</section>
    </React.Fragment>
  );
};

export default App;
