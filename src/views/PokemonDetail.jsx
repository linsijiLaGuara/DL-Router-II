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
           
                <h1>{pokemonDetail.name}</h1>
              
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
