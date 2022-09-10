import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import NameAuth from "../../contexts/nameContext";
import TokenAuth from "../../contexts/tokenContext";

import {
  getBalanceUser,
  getTransitionUser,
  singOut,
  deleteTransition,
} from "../../services/requests";

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
  DivValues,
  IconDelete,
} from "./styles";

export default function HomeScreen() {
  const [showBalance, setShowBalance] = React.useState(false);
  const [balanceUser, setBalanceUser] = React.useState("");
  const [transitionUser, setTransitionUser] = React.useState([]);

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

  async function getTransition() {
    try {
      let response = await getTransitionUser(token);
      setTransitionUser(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Problema ao pegar suas transações, tente mais tarde");
    }
  }

  async function functionsingOut() {
    try {
      let response = await singOut(token);
      console.log(response);
      localStorage.removeItem("mywallet");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(`${error.response.data.message}`);
    }
  }

  async function deleteTransitionFunction(id) {
    console.log(token);
    try {
      let response = await deleteTransition(id, token);
      console.log(response);
      getBalance();
      getTransition();
      alert("Transição deletada");
    } catch (error) {
      console.log(error);
      alert(`${error.response.data.message}`);
    }
  }

  function navigateToEditPage(type) {
    if (type === "deposity") {
      navigate("/editar-deposito");
    } else {
      navigate("/editar-saque");
    }
  }

  useEffect(() => {
    getBalance();
    getTransition();
  }, []);

  return (
    <Container>
      <Header>
        <NameUserContainer>Olá, {nameUser}!</NameUserContainer>
        <Icon
          onClick={() => {
            if (window.confirm("Você realmente quer sair?")) {
              functionsingOut();
            }
          }}
        >
          <ion-icon name="exit-outline"></ion-icon>
        </Icon>
      </Header>
      {transitionUser.length > 0 ? (
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
            {transitionUser.map((item) => (
              <TextBank>
                <TittleDescription
                  onClick={() => navigateToEditPage(item.type)}
                >
                  <DateText>{item.date}</DateText>
                  <Text>{item.description}</Text>
                </TittleDescription>
                {item.type === "withdraw" ? (
                  <DivValues>
                    <DeposityText>R$ {item.value}</DeposityText>
                    <IconDelete
                      onClick={() => {
                        if (
                          window.confirm(
                            "Você realmente quer excluir essa transição?"
                          )
                        ) {
                          deleteTransitionFunction(item._id);
                        }
                      }}
                    >
                      <ion-icon name="close-outline"></ion-icon>
                    </IconDelete>
                  </DivValues>
                ) : (
                  <DivValues>
                    <WithdrawText>R$ {item.value}</WithdrawText>
                    <IconDelete
                      onClick={() => {
                        if (
                          window.confirm(
                            "Você realmente quer excluir essa transição?"
                          )
                        ) {
                          deleteTransitionFunction(item._id);
                        }
                      }}
                    >
                      <ion-icon name="close-outline"></ion-icon>
                    </IconDelete>
                  </DivValues>
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
