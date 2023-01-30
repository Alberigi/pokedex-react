import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PokemonContext } from "../../contexts/pokemon.context";
import { CreatePokemonFormDTO } from "../../domains/dtos/create-pokemon-formDTO";
import { httpClientService } from "../../services/config/provider";
import { CreateForm } from "../createForm";

interface ModalCreateProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCreate = ({ showModal, setShowModal }: ModalCreateProps) => {
  const { pokemons, setPokemons } = useContext(PokemonContext);
  const handleClose = () => setShowModal(false);
  const { register, handleSubmit } = useForm();

  async function onSubmit(data: CreatePokemonFormDTO): Promise<void> {
    await httpClientService.post("/savePokemon", data);
    console.log("pokemons", pokemons);
    setPokemons([...pokemons, data]);
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
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateForm register={register} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
