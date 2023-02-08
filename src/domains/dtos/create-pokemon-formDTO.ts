import { IPokemon } from "../interfaces";

export interface CreatePokemonFormDTO extends Omit<IPokemon,'id'>{}