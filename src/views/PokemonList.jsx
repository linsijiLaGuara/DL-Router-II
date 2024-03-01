// PokemonList.js
import React, { useContext, useState } from "react";
import { PokemonContext } from "../contexto/PokemonContext";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const { pokemon } = useContext(PokemonContext);
  const pokemonNames = pokemon.map(({ name, id }) => ({ id, name }));

  const navigate = useNavigate();

  const handleChangePokemon = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setSelectedPokemon(Number(value));
  };

  const handleViewPokemonDetails = () => {
    if (selectedPokemon) {
      navigate(`/Pokemon/${selectedPokemon}`);
    } else {
      alert("¡Ey! Selecciona un Pokémon");
    }
  };

  return (
    <div>
      <h1>Busca tu Pokémon </h1>
      <div className="flex flex-wrap gap-3 p-3">
        <select
          name="pokemon"
          id="pokemon"
          onChange={handleChangePokemon}
          defaultValue="option"
        >
          <option key="default" value="option" disabled>
            Select a Pokémon
          </option>
          {pokemonNames.length &&
            pokemonNames.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col items-start p-4">
        <button
          onClick={handleViewPokemonDetails}
          className="rounded p-2 bg-green-500 font-black"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
