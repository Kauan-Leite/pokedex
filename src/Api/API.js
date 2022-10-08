export const searchPokemon = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);

    return await response.json();

  } catch (error) {
    console.log(error);
  }
}

export const getAllPokemons = async (limit, offset) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);

    return await response.json();

  } catch (error) {
    console.log(error);
  }
}

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);

    return await response.json();

  } catch (error) {
    console.log(error);
  }
}