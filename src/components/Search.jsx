import '../styles/Search.css';
import { searchPokemon, getAllPokemons } from "../Api/API";
import { useState } from 'react';
  
function Search(props) {
  const { set } = props;
  const [pokemon, setPokemon] = useState('');

  const handleChange = ({target}) => {
    const { value } = target;
    setPokemon(value)
  }

  const sendSearch = async (event) => {
    event.preventDefault();
    const result = await searchPokemon(pokemon.toLowerCase());
 
    if (result === undefined || result.name === undefined) {
      console.log('404');
      set(await getAllPokemons(9, 0))
    } else {
      set([await result]);
    }
  }

  return (
    <form onSubmit={ sendSearch }>
      <input
        type='text'
        placeholder="Digite o nome ou Nº da Pokédex do Pokémon..."
        onChange={ handleChange }
        value={ pokemon }
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default Search;