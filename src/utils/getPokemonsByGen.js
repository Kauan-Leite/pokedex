import { getAllPokemons } from "../Api/API";

const getByGen = async (setPokeList, setLoading, setNotFound, limit, offset) => {
  try {
    setNotFound(false);
    setLoading(true);
    const data = await getAllPokemons(limit, offset);
    setPokeList(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}

export default getByGen;