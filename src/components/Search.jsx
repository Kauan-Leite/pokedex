import { useState } from "react";
import { searchPokemon } from "../Api/API";
  
function Search(props) {
  const { set } = props;
  const [pokemon, setPokemon] = useState('');

  const handleChange = ({target}) => {
    setPokemon(target.value);
  }

  const search = async (event) => {
    event.preventDefault();
    const result = await searchPokemon(pokemon);
    set([await result])
  }

  return (
    <form onSubmit={ search }>
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