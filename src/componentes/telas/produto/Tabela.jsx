import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import ProdutoContext from "./ProdutoContext";
import { formatoMoeda } from "../../comuns/Uteis";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function Tabela() {
  const { alerta, listaObjetos, remover, editarObjeto, novoObjeto } =
    useContext(ProdutoContext);

  const moeda = (product) => {
    return formatoMoeda(product.valor);
  };

  const ativo = (product) => {
    return product.ativo ? "Sim" : "Nao";
  };

  const botoes = (objeto) => {
    return (
      <>
        <Button
          key="editar"
          onClick={() => editarObjeto(objeto.codigo)}
          aria-label="Editar"
          style={{ margin: "5px" }}
        >
          <BsFillPencilFill />
        </Button>
        <Button
          key="remover"
          onClick={() => remover(objeto.codigo)}
          aria-label="Apagar"
          style={{ margin: "5px" }}
        >
          <BsFillTrashFill />
        </Button>
      </>
    );
  };

  return (
    <div style={{ margin: "10px" }}>
      <div className="d-grid gap-2">
        <Button
          aria-label="Novo Produto"
          onClick={() => novoObjeto()}
          style={{ margin: "5px" }}
        >
          Novo produto
        </Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Ativo</th>
            <th>Cadastro</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaObjetos.map((item) => (
            <tr key={item.codigo}>
              <td>{item.codigo}</td>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
              <td>{item.quantidade_estoque}</td>
              <td>{moeda(item)}</td>
              <td>{ativo(item)}</td>
              <td>{item.data_cadastro}</td>
              <td>{item.categoria_nome}</td>
              <td>{botoes(item)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tabela;
