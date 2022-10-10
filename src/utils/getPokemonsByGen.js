import { getAllPokemons } from "../Api/API";

const getByGen = async (setPokeList, limit, offset) => {
  try {
    const data = await getAllPokemons(limit, offset);
    setPokeList(data);
  } catch (error) {
    console.log(error);
  }
}

export default getByGen;