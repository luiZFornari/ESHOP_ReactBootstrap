import { useContext, useMemo } from "react";
import { Button, Table } from "react-bootstrap";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import CategoriaContext from "./CategoriaContext";

function Tabela() {
  const { listaObjetos, remover, editarObjeto, novoObjeto } =
    useContext(CategoriaContext);

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
          className="d-grid gap-2"
          aria-label="Nova Categoria"
          onClick={() => novoObjeto()}
          style={{ margin: "5px" }}
        >
          Nova Categoria
        </Button>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {listaObjetos.map((item) => (
            <tr key={item.codigo}>
              <td>{item.codigo}</td>
              <td>{item.nome}</td>
              <td>{botoes(item)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Tabela;
