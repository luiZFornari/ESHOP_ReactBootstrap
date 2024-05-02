import Spinner from "react-bootstrap/Spinner";

function Carregando(props) {
  const indicatorSize = 80;
  return (
    <>
      {!props.carregando ? (
        props.children
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
}

export default Carregando;
