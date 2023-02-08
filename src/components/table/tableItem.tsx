import { useState } from "react";
import { ModalConfirmDelete } from "../modalConfirmDelete";
import { EditRow } from "./editRow";
import { ReadRow } from "./readRow";

export const TableItem = ({ pokemon }) => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function renderRow(): JSX.Element {
    return editMode ? (
      <EditRow pokemon={pokemon} setEditMode={setEditMode} />
    ) : (
      <ReadRow
        pokemon={pokemon}
        setEditMode={setEditMode}
        setShowModal={setShowModal}
      />
    );
  }

  return (
    <>
      <ModalConfirmDelete
        setShowModal={setShowModal}
        showModal={showModal}
        pokemonName={pokemon.name}
      />
      {renderRow()}
    </>
  );
};
