import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Container,
  NameUser,
  Header,
  Icon,
  BoxHistoryEmpty,
  Button,
  ButtonContainer,
} from "./styles";

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <NameUser>Olá, Fulano!</NameUser>
        <Icon>
          <ion-icon name="exit-outline"></ion-icon>
        </Icon>
      </Header>
      <BoxHistoryEmpty>
        <p>Não há registros de entrada ou saída</p>
      </BoxHistoryEmpty>
      <ButtonContainer>
        <Button>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </Button>
        <Button>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
