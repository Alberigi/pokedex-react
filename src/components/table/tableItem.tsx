export const TableItem = ({ pokemon, index }) => {
  return (
    <tr>
      <td>{index}</td>
      <td>{pokemon.name}</td>
      <td>{pokemon.type}</td>
      <td>
        <img src={pokemon.image}></img>
      </td>
    </tr>
  );
};
