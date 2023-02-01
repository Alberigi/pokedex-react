import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
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
      <div style={{ display: "inline", width: "100%" }}>
        <div style={{ margin: "50px 10px 50px" }}>
          <h1>Pokemons Lists</h1>
        </div>
        <div style={{ padding: "24px" }}>
          <TablePokemons />
        </div>
      </div>
    </PokemonContext.Provider>
  );
};
