import { Check, X } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../contexts/pokemon.context";
import { EditPokemonFormDTO } from "../../domains/dtos";
import { IPokemon } from "../../domains/interfaces";
import { httpClientService } from "../../services/config/provider";

interface IEditRowProps {
  pokemon: IPokemon;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditRow = ({ pokemon, setEditMode }: IEditRowProps) => {
  const [types, setTypes] = useState<string[]>([]);
  const [indetification, setIndetification] = useState<string>();
  const { register, handleSubmit } = useForm();
  const { setPokemons } = useContext(PokemonContext);

  useEffect(() => {
    setIndetification(pokemon.name);
    getTypes();
  }, []);

  async function getTypes() {
    const result = await httpClientService.get("/getTypes");
    setTypes(result);
  }

  async function onSubmit(data: EditPokemonFormDTO): Promise<void> {
    await httpClientService.post("/updatePokemon", {
      indetification,
      data,
    });

    const newPokemons = await httpClientService.get("/getPokemons");

    setEditMode(false);
    setPokemons(newPokemons);
  }

  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter pokemon image url"
            defaultValue={pokemon.image}
            {...register("image")}
          />
        </InputGroup>
      </td>
      <td>
        {" "}
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter pokemon name"
            defaultValue={pokemon.name}
            {...register("name")}
          />
        </Form.Group>
      </td>
      <td>
        <Form.Group className="mb-3">
          <Form.Select defaultValue={pokemon.type} {...register("type")}>
            {types.length > 0 &&
              types.map((type, index) => {
                return <option key={index}>{type}</option>;
              })}
          </Form.Select>
        </Form.Group>
      </td>
      <td
        style={{
          textAlign: "center",
          paddingLeft: "0rem",
          paddingRight: "0rem",
        }}
      >
        <Button variant="link" onClick={handleSubmit(onSubmit)}>
          <Check size={"1.5rem"} />
        </Button>
        <Button variant="link" onClick={() => setEditMode(false)}>
          <X color="red" weight="bold" size={"1.5rem"} />
        </Button>
      </td>
    </tr>
  );
};
