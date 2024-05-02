import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Autenticacao from "../../seguranca/Autenticacao";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Alerta from "../../comuns/Alerta";

function Login() {
  const { pegaAutenticacao, gravaAutenticacao } = Autenticacao;

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [autenticado, setAutenticado] = useState(false);

  const acaoLogin = async (e) => {
    e.preventDefault();

    try {
      const body = {
        email: email,
        senha: senha,
      };
      await fetch(`${process.env.REACT_APP_ENDERECO_API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.auth === true) {
            setAlerta({
              status: "success",
              message: JSON.stringify(json.message),
            });
            setAutenticado(true);
            gravaAutenticacao(json);
          } else {
            setAlerta({
              status: "error",
              message: JSON.stringify(json.message),
            });
          }
        });
    } catch (err) {
      console.error(err);
    }

    try {
      const autenticacao = pegaAutenticacao();
      console.log(autenticacao);
      console.log("token: " + autenticacao.token);
      console.log("decoded: " + JSON.stringify(jwt_decode(autenticacao.token)));
    } catch {
      console.error("erro ao pegar usuario");
    }
  };

  useEffect(() => {
    const autenticacao = pegaAutenticacao();
    if (autenticacao != null) {
      console.log("autenticação não é null");
      if (autenticacao.auth === true) {
        setAutenticado(true);
      }
    }
  }, []);

  if (autenticado === true) {
    return <Navigate to="/privado" />;
  }

  return (
    <div style={{ margin: "10px" }}>
      <Alerta alerta={alerta} />

      <Stack gap={2} className="col-md-5 mx-auto">
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <Form onSubmit={acaoLogin}>
          <Form.Group
            className="mb-3"
            controlId="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
            <Form.Label>Usuário</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          >
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <Button type="submit" variant="secondary">
            Login
          </Button>
        </Form>
      </Stack>
    </div>
  );
}

export default Login;
