import Pokemon from "./Pokemon";
import '../styles/Pokedex.css';

function Pokedex(props) {
  const { pokemons } = props;
  
  return (
    <div className="pokedex">
      <p>Pokedex</p>

      {
        pokemons ? 
          <Pokemon pokemons={pokemons} />
        : 'vasco'
      }

      <Pokemon />
    </div>
  );
}

export default Pokedex;