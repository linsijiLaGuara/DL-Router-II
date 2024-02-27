import React from "react";
import { Card } from "react-bootstrap";
import { usePokemonsContext } from "../contexto/PokemonContext";
import "./PokemonCard.css";

const PokemonCard = () => {
  const { pokemons } = usePokemonsContext();

  const renderPokemons = () => {
    return pokemons.map((pokemon) => (
      <div key={pokemon.name} className="pokemon-container">
        <Card>
          <Card.Body></Card.Body>
          <Card.Img
            className="pokemon-image"
            variant="top"
            src={pokemon.img}
            alt={pokemon.name}
          />
        </Card>
      </div>
    ));
  };

  return renderPokemons();
};

export default PokemonCard;
