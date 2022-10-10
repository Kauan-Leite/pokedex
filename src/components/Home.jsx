import Menu from "./Menu";
import Filters from "./Filters";
import Search from "./Search";
import Pokedex from "./Pokedex";
import { useState, useEffect } from "react";
import '../styles/Home.css';
import getAll from "../utils/getAllPokemons";


function Home() {
  const [pokeList, setPokeList] = useState();

  useEffect(() => {
    getAll(setPokeList);
  }, [])

    return (
    <main>
      <Menu />
      <Filters set= { setPokeList }/>
      <Search set={ setPokeList }/>
      <Pokedex pokemons={ pokeList }/>
    </main>
  );
}

export default Home;