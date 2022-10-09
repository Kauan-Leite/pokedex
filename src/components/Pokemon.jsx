import '../styles/Pokemon.css';
import { getPokemonData } from '../Api/API'

function Pokemon(props) {
  const { pokemons } = props;

  const teste = (poke) => {
    return poke.map((pokemon) => (
      <div key={pokemon.name}>
        <p>{pokemon.name}</p>
        <p>{pokemon.url}</p>
        <img src={pokemon.sprites.front_default} alt='teste' />
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