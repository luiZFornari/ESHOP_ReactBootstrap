import Alert from "react-bootstrap/Alert";
import { useState, useEffect } from "react";

const Alerta = ({ alerta }) => {
  const [exibir, setExibir] = useState(false);

  useEffect(() => {
    setExibir(true);
    setTimeout(() => {
      setExibir(false);
    }, 4000);
  }, [alerta]);

  return (
    <>
      {alerta.message.length > 0 && exibir && (
        <Alert type={alerta.status === "error" ? "danger" : "success"}>
          {alerta.message}
        </Alert>
      )}
    </>
  );
};

export default Alerta;
