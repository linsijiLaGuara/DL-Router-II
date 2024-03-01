import { Card } from "react-bootstrap";
import "./PokemonCard.css";
import PikachuImage from "../assets/img/pikachu.png";

const PokemonCard = () => {
  return (
    <div className="pokemon-container">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="pokemon-image" src={PikachuImage} alt="Pikachu" />
      </Card>
    </div>
  );
};

export default PokemonCard;
