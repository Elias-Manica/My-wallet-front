import React from "react";

import { singUp } from "../../services/requests";

import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Container, Tittle, InputContainer, Button, Text } from "./styles";

export default function SingUpScreen() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPass, setConfirmPass] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPass) {
      alert("Senhas diferentes");
      return;
    }

    try {
      let response = await singUp({ name, email, password });
      alert(`${response.data.message}`);
      navigate("/");
    } catch (error) {
      alert(`${error.response.data.message}`);
      setLoading(false);
      setEmail("");
      setConfirmPass("");
      setName("");
      setPassword("");
    }
  }

  return (
    <Container>
      <Tittle>My wallet</Tittle>
      <form onSubmit={handleSubmit}>
        <InputContainer
          placeholder="Nome"
          disabled={loading ? true : false}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          color={loading ? "#F2F2F2" : "#FFFFFF"}
        />
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
        <InputContainer
          placeholder="Confirme a senha"
          disabled={loading ? true : false}
          type={"password"}
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
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
      </form>
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
