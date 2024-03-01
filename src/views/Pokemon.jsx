import React, { useContext, useState } from "react";
import { usePokemonsContext } from "../contexto/PokemonContext";
import { useNavigate } from "react-router-dom";

export const Pokemon = () => {
  const { pokemons } = usePokemonsContext();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const navigate = useNavigate();

  const handleChangePokemon = (event) => {
    const { value } = event.target;
    setSelectedPokemon(value);
  };

  const handleViewPokemonDetails = () => {
    if (selectedPokemon) {
      navigate(`/pokemons/${selectedPokemon}`);
    } else {
      alert("Ey!! Selecciona un Pokémon");
    }
  };

  return (
    <div>
      <h1>Pokémon following</h1>
      <div className="flex flex-wrap gap-3 p-3">
        <select
          name="pokemons"
          id="pokemons"
          onChange={handleChangePokemon}
          defaultValue="option"
        >
          <option value="option" disabled>
            Select a Pokémon
          </option>
          {pokemons.length &&
            pokemons.map(({ name, id }) => (
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
export default Pokemon;
