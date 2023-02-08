import { Pencil, Trash } from "phosphor-react";
import { Button } from "react-bootstrap";
import { IPokemon } from "../../domains/interfaces";

interface IReadRowProps {
  pokemon: IPokemon;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ReadRow = ({
  pokemon,
  setShowModal,
  setEditMode,
}: IReadRowProps) => {
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <img style={{ width: "4rem" }} src={pokemon.image}></img>
      </td>
      <td>{pokemon.name}</td>
      <td>{pokemon.type}</td>
      <td
        style={{
          textAlign: "center",
          paddingLeft: "0rem",
          paddingRight: "0rem",
        }}
      >
        <Button variant="link" onClick={() => setEditMode(true)}>
          <Pencil size={"1.5rem"} />
        </Button>
        <Button variant="link" onClick={() => setShowModal(true)}>
          <Trash color="red" weight="bold" size={"1.5rem"} />
        </Button>
      </td>
    </tr>
  );
};
