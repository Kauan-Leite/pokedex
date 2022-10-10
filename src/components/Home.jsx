import Menu from "./Menu";
import Filters from "./Filters";
import Search from "./Search";
import Pokedex from "./Pokedex";
import NotFound from "./NotFound";
import Loading from "./Loading";
import getByGen from '../utils/getPokemonsByGen';
import { useState, useEffect } from "react";
import '../styles/Home.css';


function Home() {
  const [pokeList, setPokeList] = useState();
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);


  useEffect(() => {
    getByGen(setPokeList, setLoading, setNotFound, 151, 0);
  }, [])

    return (
    <main>
      <Menu />
      <Filters set= { setPokeList } loading={ setLoading } notFound={ setNotFound }/>

      {
        loading ? <Loading /> : 
        <>
          <Search set={ setPokeList } loading={ setLoading } notFound={ setNotFound }/>
          {notFound ? <NotFound /> : null}
          <Pokedex pokemons={ pokeList }/>
        </>
      }
    </main>
  );
}

export default Home;