import '../styles/Pokemon.css';

function Pokemon(props) {
  const { pokemons } = props;

  const showTypes = (poke) => {
    return poke.types.map((types) => (
      <spam className={`type ${types.type.name}`} key={`${types.type.name} from ${poke.id}`}>{types.type.name} </spam>
    ))
  }

  const showPokemon = (poke) => {
    return poke.map((pokemon) => (
      <div className= 'pokemon' key={pokemon.id}>
        <p className='number'>{pokemon.id}</p>
        <p className='name'>{pokemon.name}</p>
        <p>{showTypes(pokemon)}</p>
        <img src={pokemon.sprites.front_default} alt='teste' />
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