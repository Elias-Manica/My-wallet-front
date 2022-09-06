import React from "react";
import { Container, Tittle, InputContainer, Button, Text } from "./styles";

export default function LoginScreen() {
  return (
    <Container>
      <Tittle>My wallet</Tittle>
      <InputContainer placeholder="E-mail" />
      <InputContainer placeholder="Senha" />
      <Button>Entrar</Button>
      <Text>Primeira vez? Cadastre-se!</Text>
    </Container>
  );
}
