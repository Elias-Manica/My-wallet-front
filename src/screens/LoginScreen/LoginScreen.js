import React from "react";

import { useNavigate } from "react-router-dom";

import { Container, Tittle, InputContainer, Button, Text } from "./styles";

export default function LoginScreen() {
  const navigate = useNavigate();

  return (
    <Container>
      <Tittle>My wallet</Tittle>
      <InputContainer placeholder="E-mail" />
      <InputContainer placeholder="Senha" />
      <Button>Entrar</Button>
      <Text
        onClick={() => {
          navigate("/cadastro");
        }}
      >
        Primeira vez? Cadastre-se!
      </Text>
    </Container>
  );
}
