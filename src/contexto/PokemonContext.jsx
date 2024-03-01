import React, { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
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

      setPokemons(pokemonData);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};
