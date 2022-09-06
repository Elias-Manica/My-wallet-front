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

export default function NewDeposityScreen() {
  const navigate = useNavigate();

  return (
    <Container>
      <Tittle>Nova Entrada</Tittle>
      <InputView>
        <InputContainer placeholder="Valor" />
        <InputContainer placeholder="Descrição" />
        <Button
          onClick={() => {
            navigate("/home");
          }}
        >
          Salvar entrada
        </Button>
      </InputView>
    </Container>
  );
}
