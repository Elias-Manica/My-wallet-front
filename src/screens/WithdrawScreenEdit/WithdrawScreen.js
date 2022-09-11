import React, { useEffect } from "react";

import TokenAuth from "../../contexts/tokenContext";
import ValueAuth from "../../contexts/valueTransitionEdit";
import DescriptionAuth from "../../contexts/descriptionTransitionEdit";
import IdAuth from "../../contexts/idTransitionEdit";

import { editTransition } from "../../services/requests";

import { useNavigate } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

import { Container, Tittle, InputContainer, Button, InputView } from "./styles";

import Swal from "sweetalert2";

export default function WithdrawScreenEdit() {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  const { token } = React.useContext(TokenAuth);
  const { valueEdit } = React.useContext(ValueAuth);
  const { descriptionEdit } = React.useContext(DescriptionAuth);
  const { idEdit } = React.useContext(IdAuth);

  const navigate = useNavigate();

  async function editDeposity() {
    setLoading(true);

    if (valueEdit === value && descriptionEdit === description) {
      Swal.fire("Nenhuma informação foi modificada", "erro!", "warning");
      setLoading(false);
      return;
    }

    try {
      await editTransition(idEdit, value, description, token);

      setLoading(false);
      navigate("/home");
    } catch (error) {
      if (error.response.data.length > 0) {
        Swal.fire(`${error.response.data}`, "erro!", "error");
        setLoading(false);
        return;
      }
      Swal.fire(`${error.response.data.message}`, "erro!", "error");
      setLoading(false);
    }
  }

  useEffect(() => {
    setValue(valueEdit);
    setDescription(descriptionEdit);
  }, [valueEdit, descriptionEdit]);

  return (
    <Container>
      <Tittle>Editar saída</Tittle>
      <InputView>
        <InputContainer
          placeholder="Valor"
          disabled={loading ? true : false}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          color={loading ? "#F2F2F2" : "#FFFFFF"}
        />
        <InputContainer
          placeholder="Descrição"
          disabled={loading ? true : false}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          color={loading ? "#F2F2F2" : "#FFFFFF"}
        />
        <Button
          onClick={() => {
            editDeposity();
          }}
        >
          {loading ? (
            <ThreeDots color="white" height={40} width={40} />
          ) : (
            "Atualizar saída"
          )}
        </Button>
      </InputView>
    </Container>
  );
}
