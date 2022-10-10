import '../styles/Filters.css';
import getAll from '../utils/getAllPokemons';
import getByGen from '../utils/getPokemonsByGen';


function Filters(props) {
  const { set } = props;
  return (
    <div className='filters'>
      <button onClick={() => getAll(set)} type='button'>All</button>
      <button onClick={() => getByGen(set, 151, 0)} type='button'>Kanto</button>
      <button onClick={() => getByGen(set, 100, 151)} type='button'>Johto</button>
      <button onClick={() => getByGen(set, 135, 251)} type='button'>Hoenn</button>
      <button onClick={() => getByGen(set, 107, 386)} type='button'>Sinnoh</button>
      <button onClick={() => getByGen(set, 156, 493)} type='button'>Unova</button>
      <button onClick={() => getByGen(set, 72, 649)} type='button'>Kalos</button>
      <button onClick={() => getByGen(set, 88, 721)} type='button'>Alola</button>
      <button onClick={() => getByGen(set, 81, 809)} type='button'>Galar</button>
    </div>
  );
}

export default Filters;