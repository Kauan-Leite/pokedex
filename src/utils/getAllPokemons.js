import { getAllPokemons } from "../Api/API";

const getAll = async (setPokeList) => {
  try {
    const data = await getAllPokemons(890,0);
    setPokeList(data);
  } catch (error) {
    console.log(error);
  }
}

export default getAll;