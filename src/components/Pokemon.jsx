import { Link } from 'react-router-dom';
import '../styles/Pokemon.css';

function Pokemon(props) {
  const { pokemons } = props;

  const showTypes = (poke) => {
    return poke.types.map((types) => (
      <span className={`type ${types.type.name}`} key={`${types.type.name} from ${poke.id}`}>{types.type.name} </span>
    ))
  }

  const showImage = (poke) => {
    if (poke.id < 649) {
        return <img src={poke.sprites.versions["generation-v"]["black-white"].animated.front_default} alt='teste' />
    }
    return <img src={poke.sprites.front_default} alt='teste' />
  }

  const dadosPoke = (id) => {
    console.log(`Dados from poke: ${id}`);
  }


  const showPokemon = (poke) => {
    return poke.map((pokemon) => (
        <div className= 'pokemon' key={pokemon.id} onClick={() => dadosPoke(pokemon.id)}>
            <p className='number'>{pokemon.id}</p>
            <p className='name'>{pokemon.name}</p>
          <p>{showTypes(pokemon)}</p>
          {showImage(pokemon)}
        </div>
    ))
  }

  return (
    <div className='pokemons'>
      {
        pokemons ? showPokemon(pokemons) : null
      }
    </div>
  );
}

export default Pokemon;