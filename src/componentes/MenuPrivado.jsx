import Autenticacao from "./seguranca/Autenticacao";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const MenuPrivado = () => {
  const [autenticado, setAutenticado] = useState(
    Autenticacao.pegaAutenticacao()
  );

  useEffect(() => {
    // Atualiza o estado local quando a autenticação mudar em algum lugar da sua aplicação
    setAutenticado(Autenticacao.pegaAutenticacao());
  }, []);

  const handleLogout = () => {
    Autenticacao.logout();
    setAutenticado(false); // Define autenticado como false após o logout
  };

  const [current, setCurrent] = useState("mail");

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Adicione um ouvinte de evento de redimensionamento ao montar o componente
    window.addEventListener("resize", handleResize);

    // Remova o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const items = [
    {
      key: "1",
      label: (
        <NavLink rel="noopener noreferrer" exact to="/">
          Home
        </NavLink>
      ),
    },
    {
      key: "2",
      label: autenticado ? "Usuário: " + autenticado.nome_usuario : "Usuário",
      children: [
        {
          label: autenticado ? (
            <NavLink exact to="/" rel="noopener noreferrer">
              Logout
            </NavLink>
          ) : (
            <NavLink exact to="login" rel="noopener noreferrer">
              {autenticado ? "Usuário: " + autenticado.nome_usuario : "Usuário"}
            </NavLink>
          ),
          command: autenticado ? handleLogout : undefined,
        },
      ],
    },
    {
      key: "3",
      label: (
        <NavLink rel="noopener noreferrer" exact to="sobre">
          Sobre
        </NavLink>
      ),
    },
    {
      key: "4",
      label: "Manutenções",
      children: [
        {
          label: (
            <NavLink to="produtos" rel="noopener noreferrer">
              Produtos
            </NavLink>
          ),
        },
        {
          label: (
            <NavLink to="categorias" rel="noopener noreferrer">
              Categorias
            </NavLink>
          ),
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">EShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/privado">Home</Nav.Link>
              <NavDropdown
                title={
                  autenticado
                    ? "Usuário: " + autenticado.nome_usuario
                    : "Usuário"
                }
                id="basic-nav-dropdown"
              >
                {autenticado ? (
                  <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/login">
                    {autenticado
                      ? "Usuário: " + autenticado.nome_usuario
                      : " Usuário"}
                  </NavDropdown.Item>
                )}
              </NavDropdown>
              <Nav.Link href="/sobre">Sobre</Nav.Link>
              <NavDropdown title="Manutenções" id="basic-nav-dropdown">
                <NavDropdown.Item href="/privado/produtos">
                  Produtos
                </NavDropdown.Item>
                <NavDropdown.Item href="/privado/categorias">
                  Categorias
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};
export default MenuPrivado;
