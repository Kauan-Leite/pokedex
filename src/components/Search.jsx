import '../styles/Search.css';
import { searchPokemon } from "../Api/API";
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
    const result = await searchPokemon(pokemon);
    set([await result]);
  }

  return (
    <form onSubmit={ sendSearch }>
      <input
        type='text'
        placeholder="Digite o nome do Pokémon..."
        onChange={ handleChange }
        value={ pokemon }
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default Search;