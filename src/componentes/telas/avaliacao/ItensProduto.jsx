import { useContext } from "react";
import { formatoMoeda } from "../../comuns/Uteis";
import AvaliacaoContext from "./AvaliacaoContext";
import { Accordion } from "react-bootstrap";

function ItensProduto() {
  const { produto } = useContext(AvaliacaoContext);

  return (
    <>
      <div style={{ padding: "1%", textAlign: "center" }}>
        <h3>{produto.nome}</h3>
        <div>
          <div>
            <div>Estoque: {produto.quantidade_estoque}</div>
            <div>Lançamento: {produto.data_cadastro}</div>
          </div>
          <div>{produto.ativo ? "Disponivel" : "Indisponivel"}</div>
          <div>{formatoMoeda(produto.valor)}</div>
        </div>
      </div>
      <Accordion defaultActiveKey="0" style={{ margin: "1%" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Descrição</Accordion.Header>
          <Accordion.Body>{produto.descricao}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default ItensProduto;
