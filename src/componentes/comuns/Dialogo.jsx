import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alerta from "./Alerta";

function Dialogo(props) {
  return (
    <Modal show={props.open} onHide={() => props.setOpen(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.titulo}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Alerta alerta={props.alerta} />
        <Form id={props.idform} onSubmit={props.acaoCadastrar}>
          {props.children}
          <Button type="submit">Salvar</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
export default Dialogo;
