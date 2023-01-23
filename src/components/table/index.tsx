import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { TableItem } from "../tableItem/tableItem";
import { httpClientService } from "../../services/config/provider";

export const TablePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    getPokemons();
  }, []);

  async function getPokemons() {
    const result = await httpClientService.get("/getPokemons");
    setPokemons(result);
  }

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
          <TableItem pokemon={pokemon} index={index + 1} />
        ))}
      </tbody>
    </Table>
  );
};
