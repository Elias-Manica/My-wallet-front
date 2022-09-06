import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Container,
  Tittle,
  InputContainer,
  Button,
  Text,
  InputView,
} from "./styles";

export default function WithdrawScreen() {
  const navigate = useNavigate();

  return (
    <Container>
      <Tittle>Nova saída</Tittle>
      <InputView>
        <InputContainer placeholder="Valor" />
        <InputContainer placeholder="Descrição" />
        <Button
          onClick={() => {
            navigate("/home");
          }}
        >
          Salvar saída
        </Button>
      </InputView>
    </Container>
  );
}
