import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../contexto/PokemonContext";

export const PokemonDetail = () => {
  const { pokemons } = useContext(PokemonContext);
  const { id } = useParams();

  const pokemonDetail = pokemons.find((pokemon) => pokemon.name === id);

  return (
    <div>
      {pokemonDetail ? (
        <>
          <h1>Pokémon Detail / {id}</h1>
          <div className="flex flex-col gap-3 p-3">
            <h1>{pokemonDetail.name}</h1>
            <figure>
              <img
                loading="lazy"
                src={pokemonDetail.img}
                alt={pokemonDetail.name}
              />
              <figcaption>{pokemonDetail.species}</figcaption>
            </figure>

            <div>
              <p>Status: {pokemonDetail.status}</p>
            </div>

            <div>
              <p>
                Type:{" "}
                {pokemonDetail.type ? pokemonDetail.type : "Doesn't have type"}
              </p>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading Pokémon</h1>
      )}
    </div>
  );
};
export default PokemonDetail;
