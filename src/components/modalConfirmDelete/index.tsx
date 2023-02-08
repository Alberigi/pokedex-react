import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { PokemonContext } from "../../contexts/pokemon.context";
import { httpClientService } from "../../services/config/provider";

interface ModalCreateProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  pokemonName: string;
}

export const ModalConfirmDelete = ({
  showModal,
  setShowModal,
  pokemonName,
}: ModalCreateProps) => {
  const { setPokemons } = useContext(PokemonContext);
  const handleClose = () => setShowModal(false);

  async function handlerDelete(name: string): Promise<void> {
    await httpClientService.post("/deletePokemon", { name });
    const result = await httpClientService.get("/getPokemons");
    setPokemons(result);
    handleClose();
  }

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Confirm delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete the {pokemonName}</Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={() => handlerDelete(pokemonName)}>
          delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
