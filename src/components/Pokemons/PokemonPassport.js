import Card from '../UI/Card';
import classes from './PokemonPassport.module.css';
import CardWrapper from "../UI/CardWrapper";
const PokemonPassport = (props) => {  
  return (
      <CardWrapper key={props.index} index={props.index}>
          <Card index={props.index}>
              <img
                  className={classes.pic}
                  src={props.sprites.other.dream_world['front_default']}
                  alt={props.name}
              />
              <h2>{props.name}</h2>
              <p>ID: {props.id}</p>
              <p>Height: {props.height}</p>
              <p>Weight: {props.weight}</p>
              <p>Base Exprience: {props.baseExperience}</p>
              <p>Types: {props.types.map((type) => type + ' ')}</p>
              <p>Moves: {props.moves.map((move) => move + ' ')}</p>
          </Card>
      </CardWrapper>

  );
};

export default PokemonPassport;
