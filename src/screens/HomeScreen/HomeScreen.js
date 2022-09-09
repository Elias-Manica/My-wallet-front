import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import NameAuth from "../../contexts/nameContext";
import TokenAuth from "../../contexts/tokenContext";

import { getBalanceUser } from "../../services/requests";

import {
  Container,
  Header,
  Icon,
  BoxHistoryEmpty,
  Button,
  ButtonContainer,
  Text,
  DeposityText,
  WithdrawText,
  DateText,
  BoxHistoryDontEmpty,
  TextBank,
  TittleDescription,
  BalanceContainer,
  ShowBalance,
  ShowIcon,
  HiddenBalance,
  NameUserContainer,
} from "./styles";

let balance = [{ balance: 10 }];

let messages = [
  {
    value: 39,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "13/08",
    type: "withdraw",
  },
  { value: 40, description: "Pix da mãe", date: "14/08", type: "deposity" },
];

export default function HomeScreen() {
  const [showBalance, setShowBalance] = React.useState(false);
  const [balanceUser, setBalanceUser] = React.useState("");

  const { nameUser, setNameUser } = React.useContext(NameAuth);
  const { token } = React.useContext(TokenAuth);

  const navigate = useNavigate();

  async function getBalance() {
    try {
      let response = await getBalanceUser(token);
      setNameUser(response.data.name);
      setBalanceUser(response.data.balance);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Requisição errada, tente mais tarde");
    }
  }

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <Container>
      <Header>
        <NameUserContainer>Olá, {nameUser}!</NameUserContainer>
        <Icon>
          <ion-icon name="exit-outline"></ion-icon>
        </Icon>
      </Header>
      {messages.length > 0 ? (
        <>
          <BalanceContainer>
            <h1>Saldo disponível:</h1>
            <ShowBalance>
              {showBalance ? (
                <h1>R$ {balanceUser}</h1>
              ) : (
                <h1>R$ {<HiddenBalance></HiddenBalance>}</h1>
              )}

              <ShowIcon
                onClick={() => {
                  setShowBalance(!showBalance);
                }}
              >
                {showBalance ? (
                  <ion-icon name="eye-off-outline"></ion-icon>
                ) : (
                  <ion-icon name="eye-outline"></ion-icon>
                )}
              </ShowIcon>
            </ShowBalance>
          </BalanceContainer>
          <BoxHistoryDontEmpty>
            {messages.map((item) => (
              <TextBank>
                <TittleDescription>
                  <DateText>{item.date}</DateText>
                  <Text>{item.description}</Text>
                </TittleDescription>
                {item.type === "deposity" ? (
                  <DeposityText>R$ 39</DeposityText>
                ) : (
                  <WithdrawText>R$ 39</WithdrawText>
                )}
              </TextBank>
            ))}
          </BoxHistoryDontEmpty>
        </>
      ) : (
        <BoxHistoryEmpty>
          <p>Não há registros de entrada ou saída</p>
        </BoxHistoryEmpty>
      )}

      <ButtonContainer>
        <Button
          onClick={() => {
            navigate("/deposito");
          }}
        >
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova entrada</p>
        </Button>
        <Button
          onClick={() => {
            navigate("/saque");
          }}
        >
          <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova saída</p>
        </Button>
      </ButtonContainer>
    </Container>
  );
}
