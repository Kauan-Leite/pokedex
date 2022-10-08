import '../styles/Pokemon.css';
import { getPokemonData } from '../Api/API'

function Pokemon(props) {
  const { pokemons } = props;

  const getData = async () => {
    return await getPokemonData(pokemons[0].url);
  }
  
  const teste = (poke) => {
    return poke.map((pokemon) => (
      <div key={pokemon.name}>
        <p>{pokemon.name}</p>
        <p>{pokemon.url}</p>
      </div>
    ))
  }

  return (
    <div className='pokemon'>
      {
        pokemons ? teste(pokemons) : null
      }
    </div>
  );
}

export default Pokemon;