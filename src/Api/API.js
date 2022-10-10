export const searchPokemon = async (pokemon, setLoading) => {
  try {
    setLoading(true);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    setLoading(false);

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

export const getAllPokemons = async (limit, offset) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const result = await response.json()

    const pokeData = [];

    for (let index = 0; index < result.results.length; index += 1) {
      pokeData.push(await getPokemonData(result.results[index].url));
    }

    return pokeData;

  } catch (error) {
    console.log(error);
  }
}
