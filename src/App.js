import Menu from "./components/Menu";
import Search from "./components/Search";
import Pokedex from "./components/Pokedex";
import { getAllPokemons } from "./Api/API";
import { useState, useEffect } from "react";

function App() {
  const [pokeList, setPokeList] = useState();

  const getAll = async () => {
    try {
      const data = await getAllPokemons(9,0);
      setPokeList(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAll();
  }, [])

  return (
    <main>
      <Menu />
      <Search set={ setPokeList }/>
      <Pokedex pokemons={ pokeList }/>
    </main>
  );
}

export default App;
