import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { httpClientService } from "../../services/config/provider";

interface CreateFormProps {
  register: UseFormRegister<FieldValues>;
}

export const CreateForm = ({ register }: CreateFormProps) => {
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    getTypes();
  }, []);

  async function getTypes() {
    const result = await httpClientService.get("/getTypes");
    setTypes(result);
  }

  return (
    <Form>
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
    </Form>
  );
};
