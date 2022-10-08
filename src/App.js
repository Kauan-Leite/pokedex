import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Pokemons from "./components/Pokemons";
import { getAllPokemons, getPokemonData } from "./Api/API";

function App() {
  const [pokeList, setPokeList] = useState([]);

  const getAll = async () => {
    const result = await getAllPokemons(10, 0);

    for(let index = 0; index < result.results.length - 1; index += 1) {
      const data = await getPokemonData(result.results[index].url);
      setPokeList(data)
    }
  }

  useEffect(() => {
    getAll();
  });

  return (
    <main>
      <Navbar />
      <Search set={ setPokeList }/>
      <Pokemons Pokemons={ pokeList }/>
    </main>
  );
}

export default App;
