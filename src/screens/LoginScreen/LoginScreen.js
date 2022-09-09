import React from "react";

import { login } from "../../services/requests";

import TokenAuth from "../../contexts/tokenContext";

import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import {
  Container,
  Tittle,
  InputContainer,
  Button,
  Text,
  Form,
} from "./styles";

export default function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { setToken } = React.useContext(TokenAuth);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      let response = await login({ email, password });
      localStorage.setItem(
        "mywallet",
        JSON.stringify({ token: `${response.data.token}` })
      );
      setToken(response.data.token);
      navigate("/home");
    } catch (error) {
      if (error.response.data.length > 0) {
        alert(`${error.response.data}`);
        setLoading(false);
        setEmail("");
        setPassword("");
        return;
      }
      alert(`${error.response.data.message}`);
      setLoading(false);
      setEmail("");

      setPassword("");
    }
  }

  return (
    <Container>
      <Tittle>My wallet</Tittle>
      <Form onSubmit={handleSubmit}>
        <InputContainer
          placeholder="E-mail"
          disabled={loading ? true : false}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          color={loading ? "#F2F2F2" : "#FFFFFF"}
        />
        <InputContainer
          placeholder="Senha"
          disabled={loading ? true : false}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          color={loading ? "#F2F2F2" : "#FFFFF"}
        />
        <Button onClick={handleSubmit}>
          {loading ? (
            <ThreeDots color="white" height={40} width={40} />
          ) : (
            "Entrar"
          )}
        </Button>
      </Form>
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
