import Pokemon from "./Pokemon";
import '../styles/Pokedex.css';

function Pokedex(props) {
  const { pokemons } = props;
  
  return (
    <div className="pokedex">
        {
          pokemons ? 
            <Pokemon pokemons={pokemons} />
          : 'loading'
        }
    </div>
  );
}

export default Pokedex;