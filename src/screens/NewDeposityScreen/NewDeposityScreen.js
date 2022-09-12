import React from "react";

import { useNavigate } from "react-router-dom";

import TokenAuth from "../../contexts/tokenContext";

import { postTransition } from "../../services/requests";

import { ThreeDots } from "react-loader-spinner";

import { Container, Tittle, InputContainer, Button, InputView } from "./styles";

import Swal from "sweetalert2";

export default function NewDeposityScreen() {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  const { token } = React.useContext(TokenAuth);

  const navigate = useNavigate();

  async function createDeposity() {
    setLoading(true);

    const body = {
      value: value.replace(",", "."),
      description,
      type: "deposity",
    };

    try {
      await postTransition(body, token);

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

  return (
    <Container>
      <Tittle>Nova entrada</Tittle>
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
            createDeposity();
          }}
        >
          {loading ? (
            <ThreeDots color="white" height={40} width={40} />
          ) : (
            "Nova entrada"
          )}
        </Button>
      </InputView>
    </Container>
  );
}
