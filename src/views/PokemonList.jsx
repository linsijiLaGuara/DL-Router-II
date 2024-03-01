import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../contexto/PokemonContext";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState("");
  const { pokemons } = useContext(PokemonContext);
  const pokemonNames = pokemons.map(({ id, name }) => ({ id, name }));
  const navigate = useNavigate();

  const handleChangePokemon = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setPokemon(value);
  };

  useEffect(() => {
    if (pokemon) {

      navigate(`/Pokemon/${pokemon}`);
    }
  }, [pokemon, navigate]);

  return (
    <div>
      <h1>Elige tu Pokémon</h1>
      <div className="flex flex-wrap gap-3 p-3">
        <select
          name="pokemons"
          id="pokemons"
          onChange={handleChangePokemon}
          value={pokemon}
        >
          <option value="" disabled>
            Selecciona un Pokémon
          </option>
          {pokemonNames.length &&
            pokemonNames.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default PokemonList;
