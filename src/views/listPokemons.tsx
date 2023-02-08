import { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TablePokemons } from "../components/table";
import { PokemonContext } from "../contexts/pokemon.context";
import { IPokemon } from "../domains/interfaces";
import { httpClientService } from "../services/config/provider";

export const ListPokemons = () => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    const result = await httpClientService.get("/getPokemons");
    setPokemons(result);
  }

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      <div style={{ display: "inline", width: "100%", padding: "0px 4rem" }}>
        <div style={{ margin: "2rem 0px 4rem" }}>
          <h1>Pokemons Lists</h1>
        </div>
        <Button>
          <Link
            to={"/createPokemons"}
            style={{ color: "white", textDecoration: "none" }}
          >
            Create Pokemon
          </Link>
        </Button>
        <div style={{ paddingTop: "2rem" }}>
          <TablePokemons />
        </div>
      </div>
    </PokemonContext.Provider>
  );
};
