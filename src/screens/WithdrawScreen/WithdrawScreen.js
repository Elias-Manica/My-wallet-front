import React from "react";

import TokenAuth from "../../contexts/tokenContext";

import { postWithDrawn } from "../../services/requests";

import { useNavigate } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

import { Container, Tittle, InputContainer, Button, InputView } from "./styles";

import Swal from "sweetalert2";

export default function WithdrawScreen() {
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
      type: "withdraw",
    };

    try {
      await postWithDrawn(body, token);

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
      <Tittle>Nova saída</Tittle>
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
            "Nova saída"
          )}
        </Button>
      </InputView>
    </Container>
  );
}
