import React from "react";

import { useNavigate } from "react-router-dom";

import TokenAuth from "../../contexts/tokenContext";

import { postTransition } from "../../services/requests";

import { ThreeDots } from "react-loader-spinner";

import {
  Container,
  Tittle,
  InputContainer,
  Button,
  Text,
  InputView,
} from "./styles";

export default function NewDeposityScreen() {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  const { token } = React.useContext(TokenAuth);

  const navigate = useNavigate();

  async function createDeposity() {
    setLoading(true);
    const body = {
      value,
      description,
      type: "deposity",
    };

    try {
      let response = await postTransition(body, token);
      console.log(response);
      setLoading(false);
      navigate("/home");
    } catch (error) {
      if (error.response.data.length > 0) {
        alert(`${error.response.data}`);
        setLoading(false);
        return;
      }
      alert(`${error.response.data.message}`);
      setLoading(false);
      alert("Requisição errada, tente mais tarde");
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
