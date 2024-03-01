import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../contexto/PokemonContext";

const PokemonList = () => {
  console.log("Rendering PokemonList");
  const [pokemon, setPokemon] = useState(null);

  const { pokemons } = useContext(PokemonContext);
  console.log("Pokemons from context:", pokemons);
  const pokemonNames = pokemons.map(({ name, id }) => ({
    id,
    name,
  }));

  const navigate = useNavigate();

  const handleChangePokemon = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setPokemon(Number(value));
  };

  const handleViewPokemonDetails = () => {
    if (pokemons) {
      navigate(`/Pokemon/${pokemons}`);
    } else {
      alert("¡Ey! Selecciona un Pokémon");
    }
  };

  return (
    <div>
      <h1>Elige tu Pokémon</h1>
      <div className="flex flex-wrap gap-3 p-3">
        <select
          name="pokemons"
          id="pokemons"
          onChange={handleChangePokemon}
          defaultValue="option"
        >
          <option value="option" disabled>
            Selecciona un Pokémon
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
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
