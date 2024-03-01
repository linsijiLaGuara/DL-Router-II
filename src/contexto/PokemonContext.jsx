import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);

  const FetchPokemon = async () => {
    const pokemonsJson = await fetch("https://pokeapi.co/api/v2/pokemon");
    const { results } = await pokemonsJson.json();
    const pokemonData = results.map(
      ({ id, name, status, species, type, gender, image }) => {
        return {
          id,
          name,
          status,
          species,
          type,
          gender,
          image,
        };
      }
    );

    setPokemon(pokemonData);
  };

  useEffect(() => {
    FetchPokemon();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
