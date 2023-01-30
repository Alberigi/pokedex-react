import { useEffect, useState } from "react";
import { TablePokemons } from "../components/table";
import { PokemonContext } from "../contexts/pokemon.context";
import { httpClientService } from "../services/config/provider";

export const ListPokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    const result = await httpClientService.get("/getPokemons");
    setPokemons(result);
  }

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      <TablePokemons />
    </PokemonContext.Provider>
  );
};
