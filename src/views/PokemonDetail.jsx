import React, { useContext } from "react";
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
          <h1>User Detail / {id}</h1>
          <div className="flex flex-col gap-3 p-3">
            <h1>{pokemonDetail.name}</h1>
            <figure>
              {pokemons.image && (
                <img
                  loading="lazy"
                  src={pokemons.image}
                  alt={pokemonDetail.species}
                />
              )}
              <figcaption>{pokemonDetail.gender}</figcaption>
            </figure>

            <div>
              <p>{pokemonDetail.status}</p>
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
        <h1>Loading Pokemon</h1>
      )}
    </div>
  );
};

export default PokemonDetail;
