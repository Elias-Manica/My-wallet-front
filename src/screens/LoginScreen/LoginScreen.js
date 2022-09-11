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
  TextSingUp,
  Form,
} from "./styles";

import Swal from "sweetalert2";

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
        Swal.fire(`${error.response.data}`, "erro!", "error");
        setLoading(false);
        setEmail("");
        setPassword("");
        return;
      }
      Swal.fire(`${error.response.data.message}`, "erro!", "error");
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
        <Button>
          {loading ? (
            <ThreeDots color="white" height={40} width={40} />
          ) : (
            "Entrar"
          )}
        </Button>
      </Form>
      <TextSingUp
        onClick={() => {
          navigate("/cadastro");
        }}
      >
        Primeira vez? Cadastre-se!
      </TextSingUp>
    </Container>
  );
}
