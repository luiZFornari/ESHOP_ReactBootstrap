import { useContext } from "react";
import Autenticacao from "../../seguranca/Autenticacao";
import AvaliacaoContext from "./AvaliacaoContext";
import { Accordion, Button, Stack } from "react-bootstrap";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

function AcordionAvaliacao(props) {
  const { novoObjeto, listaAvaliacoes, editarObjeto, remover } =
    useContext(AvaliacaoContext);

  let mediaAvaliacao = 0;
  if (listaAvaliacoes.length > 0) {
    listaAvaliacoes.map((objeto) => (mediaAvaliacao += objeto.nota));
    mediaAvaliacao = mediaAvaliacao / listaAvaliacoes.length;
  }

  const autenticacao = Autenticacao.pegaAutenticacao();

  return (
    <Accordion defaultActiveKey="0" style={{ margin: "1%" }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Avaliações</Accordion.Header>
        <Accordion.Body>
          <div className="d-grid gap-2">
            <Button
              className="w-full justify-content-center "
              onClick={() => novoObjeto()}
            >
              Nova Avaliação
            </Button>
          </div>
          <Accordion defaultActiveKey="1" style={{ margin: "1%" }}>
            {listaAvaliacoes.map((objeto) => (
              <Accordion.Item eventKey={objeto.codigo}>
                <Accordion.Header>
                  <Stack direction="horizontal" gap={3}>
                    <div className="p-2 ms-auto">{objeto.autor}</div>

                    <div className="p-2 ms-auto">{objeto.nota}/5</div>
                  </Stack>
                </Accordion.Header>
                <Accordion.Body style={{ textAlign: "center" }}>
                  {objeto.texto}
                  <hr />
                  {objeto.data}
                  {autenticacao && (
                    <div className="p-2 ms-auto">
                      <Button
                        key="editar"
                        onClick={() => editarObjeto(objeto.codigo)}
                        aria-label="Editar"
                        size="sm"
                        style={{ margin: "2px" }}
                      >
                        <BsFillPencilFill />
                      </Button>
                      <Button
                        key="remover"
                        onClick={() => remover(objeto.codigo)}
                        aria-label="Apagar"
                        severity="danger"
                        size="sm"
                        style={{ margin: "2px" }}
                      >
                        <BsFillTrashFill />
                      </Button>
                    </div>
                  )}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AcordionAvaliacao;
