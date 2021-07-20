import Card from '../UI/Card';
import classes from './PokemonPassport.module.css';
const PokemonPassport = (props) => {
  return (
    <Card>
      <img
        className={classes.pic}
        src={props.sprites.other.dream_world['front_default']}
        alt={props.name}
      />
      <h2>{props.name}</h2>
      <p>Height: {props.height}</p>
      <p>Weight: {props.weight}</p>
      <p>Base Exprience: {props.baseExperience}</p>
      <p>Types: {props.types.map((type) => type + ' ')}</p>
      <p>Moves: {props.moves.map((move) => move + ' ')}</p>
    </Card>
  );
};

export default PokemonPassport;
