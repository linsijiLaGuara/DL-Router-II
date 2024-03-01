import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../contexto/PokemonContext";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";

const PokemonDetail = () => {
  const { pokemons } = useContext(PokemonContext);
  const { id } = useParams();

  const pokemonDetail = pokemons.find((pokemon) => pokemon.name === id);

  return (
    <div>
      {pokemonDetail ? (
        <>
          <Card>
            <Card.Body>
              <div className="flex flex-col gap-3 p-3 text-align-center;">
                <h1>{pokemonDetail.name}</h1>
                <Figure>
                  {pokemons.image && (
                    <Figure.Image
                      loading="lazy"
                      src={pokemons.image}
                      alt={pokemonDetail.species}
                    />
                  )}
                  <Figure.Caption>{pokemonDetail.gender}</Figure.Caption>
                </Figure>
              </div>
            </Card.Body>
          </Card>
        </>
      ) : (
        <h1>Loading Pokemon</h1>
      )}
    </div>
  );
};

export default PokemonDetail;
