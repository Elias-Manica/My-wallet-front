import { useNavigate } from "react-router-dom";

import { useContext } from "react";

import TokenAuth from "../contexts/tokenContext";

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("mywallet"));
  const { token } = useContext(TokenAuth);
  console.log(token, "token");
  console.log(auth, "storage");

  const navigate = useNavigate();

  if (auth.token === token) {
    return <>{children}</>;
  } else {
    return (
      <>
        <h1>SEM ACESSO</h1>
      </>
    );
  }
}
