import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CreatePokemonFormDTO } from "../domains/dtos";
import { httpClientService } from "../services/config/provider";

export const CreatePokemons = () => {
  const [types, setTypes] = useState<string[]>([]);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getTypes();
  }, []);

  async function getTypes() {
    const result = await httpClientService.get("/getTypes");
    setTypes(result);
  }

  async function onSubmit(data: CreatePokemonFormDTO): Promise<void> {
    await httpClientService.post("/savePokemon", data);
    navigate("/Pokemons");
  }

  return (
    <div style={{ display: "inline", width: "100%", padding: "0 4rem" }}>
      <div style={{ margin: "2rem 0px 4rem" }}>
        <h1>Create Pokemon</h1>
      </div>
      <Form style={{ width: "32rem" }} onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pokemon name"
            {...register("name")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select {...register("type")}>
            {types.length > 0 &&
              types.map((type, index) => {
                return <option key={index}>{type}</option>;
              })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pokemon image url"
            {...register("image")}
          />
        </Form.Group>
        <Form.Group style={{ textAlign: "right" }}>
          <Button style={{ width: "8rem" }} className="btn-danger">
            Cancel
          </Button>
          <Button style={{ width: "8rem", marginLeft: "2rem" }} type="submit">
            Salve
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
