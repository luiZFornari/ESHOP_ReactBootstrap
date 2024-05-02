import { useContext } from "react";
import HomeContext from "./HomeContext";
import { formatoMoeda } from "../../comuns/Uteis";
import { NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";

const CardProd = () => {
  const { listaObjetos } = useContext(HomeContext);

  const footer = (props) => (
    <>
      <h2>{formatoMoeda(props)}</h2>
    </>
  );

  const cardStyle = {
    width: "20rem",
    height: "15rem",
    display: "inline-block",
  };

  return (
    <div style={{ textAlign: "center" }}>
      {listaObjetos.length === 0 && (
        <div>
          <h5>Nenhum objeto encontrado</h5>
        </div>
      )}
      {listaObjetos.map((objeto) => (
        <div
          style={{ margin: "1%", display: "inline-block" }}
          key={objeto.codigo}
        >
          {objeto.ativo && (
            <NavLink exact to={`produto/${objeto.codigo}`}>
              <Card style={cardStyle}>
                <Card.Header as="h5">{objeto.nome}</Card.Header>
                <Card.Body>
                  <Card.Title>{footer(objeto.valor)}</Card.Title>
                  <Card.Text>
                    {objeto.categoria_nome}
                    <br />
                    Estoque: {objeto.quantidade_estoque}
                  </Card.Text>
                </Card.Body>
              </Card>
            </NavLink>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardProd;
