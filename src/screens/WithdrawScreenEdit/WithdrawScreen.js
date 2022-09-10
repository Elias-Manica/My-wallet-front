import React, { useEffect } from "react";

import TokenAuth from "../../contexts/tokenContext";
import ValueAuth from "../../contexts/valueTransitionEdit";
import DescriptionAuth from "../../contexts/descriptionTransitionEdit";
import IdAuth from "../../contexts/idTransitionEdit";

import { postWithDrawn } from "../../services/requests";

import { useNavigate } from "react-router-dom";

import { ThreeDots } from "react-loader-spinner";

import {
  Container,
  Tittle,
  InputContainer,
  Button,
  Text,
  InputView,
} from "./styles";

export default function WithdrawScreenEdit() {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  const { token } = React.useContext(TokenAuth);
  const { valueEdit } = React.useContext(ValueAuth);
  const { descriptionEdit } = React.useContext(DescriptionAuth);
  const { idEdit } = React.useContext(IdAuth);

  const navigate = useNavigate();

  async function createDeposity() {
    setLoading(true);
    const body = {
      value,
      description,
      type: "withdraw",
    };

    try {
      let response = await postWithDrawn(body, token);
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

  useEffect(() => {
    setValue(valueEdit);
    setDescription(descriptionEdit);
  }, []);

  return (
    <Container>
      <Tittle>Atualizar saída</Tittle>
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
            "Atualizar saída"
          )}
        </Button>
      </InputView>
    </Container>
  );
}
