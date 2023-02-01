import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { TableItem } from "./tableItem";
import { PokemonContext } from "../../contexts/pokemon.context";

export const TablePokemons = () => {
  const { pokemons } = useContext(PokemonContext);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Type</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon, index) => (
          <TableItem pokemon={pokemon} key={index} index={index + 1} />
        ))}
      </tbody>
    </Table>
  );
};
