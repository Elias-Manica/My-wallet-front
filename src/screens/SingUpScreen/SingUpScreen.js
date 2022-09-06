import React from "react";

import { useNavigate } from "react-router-dom";

import { Container, Tittle, InputContainer, Button, Text } from "./styles";

export default function SingUpScreen() {
  const navigate = useNavigate();
  return (
    <Container>
      <Tittle>My wallet</Tittle>
      <InputContainer placeholder="Nome" />
      <InputContainer placeholder="E-mail" />
      <InputContainer placeholder="Senha" />
      <InputContainer placeholder="Confirme a senha" />
      <Button>Cadastrar</Button>
      <Text
        onClick={() => {
          navigate("/");
        }}
      >
        Já tem uma conta? Entre agora!
      </Text>
    </Container>
  );
}
