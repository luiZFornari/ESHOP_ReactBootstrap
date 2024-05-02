import Spinner from "react-bootstrap/Spinner";

function Carregando(props) {
  const indicatorSize = 80;
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Opcional: define a altura da div para ocupar toda a altura da tela
  };

  return (
    <div style={divStyle}>
      {!props.carregando ? (
        props.children
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export default Carregando;
