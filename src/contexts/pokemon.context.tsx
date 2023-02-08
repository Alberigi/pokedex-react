import { createContext } from "react";
import { IPokemon } from "../domains/interfaces";
export interface IPokemonContext {
  pokemons: IPokemon[];
  setPokemons: React.Dispatch<React.SetStateAction<IPokemon[]>>;
}
export const PokemonContext = createContext<IPokemonContext>(
  {} as IPokemonContext
);
