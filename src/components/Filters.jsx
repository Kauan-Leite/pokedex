import '../styles/Filters.css';
import getByGen from '../utils/getPokemonsByGen';


function Filters(props) {
  const { set, loading, notFound } = props;
  return (
    <div className='filters'>
      <button onClick={() => getByGen(set, loading, notFound, 151, 0)} type='button'>Kanto</button>
      <button onClick={() => getByGen(set, loading, notFound, 100, 151)} type='button'>Johto</button>
      <button onClick={() => getByGen(set, loading, notFound, 135, 251)} type='button'>Hoenn</button>
      <button onClick={() => getByGen(set, loading, notFound, 107, 386)} type='button'>Sinnoh</button>
      <button onClick={() => getByGen(set, loading, notFound, 156, 493)} type='button'>Unova</button>
      <button onClick={() => getByGen(set, loading, notFound, 72, 649)} type='button'>Kalos</button>
      <button onClick={() => getByGen(set, loading, notFound, 88, 721)} type='button'>Alola</button>
      <button onClick={() => getByGen(set, loading, notFound, 81, 809)} type='button'>Galar</button>
    </div>
  );
}

export default Filters;