import React, { createContext, useContext, useState, useEffect } from "react";

const PokemonsContext = createContext();

export const PokemonsProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [seleccion, setSeleccion] = useState([]);
  const fetchPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const { name, sprites } = await response.json();
      const frontDefaultSprite =
        sprites?.front_default ||
        sprites?.other["official-artwork"]?.front_default;

      const pokemonData = {
        name,
        img: frontDefaultSprite,
      };

      setPokemons([pokemonData]);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{ pokemons, setPokemons, seleccion, setSeleccion }}
    >
      {children}
    </PokemonsContext.Provider>
  );
};

export const usePokemonsContext = () => {
  return useContext(PokemonsContext);
};
