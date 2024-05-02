import Form from "react-bootstrap/Form";

function CampoSelect(props) {
  return (
    <Form.Group className="mb-3" controlId={props.id} key={props.id}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Select
        aria-label="select"
        onChange={props.onChange}
        required={props.requerido}
        name={props.name}
        readOnly={props.readonly}
        isInvalid={props.requerido && props.value === ""}
        value={props.value}
      >
        {props.children}
      </Form.Select>
      <Form.Control.Feedback>
        {(props.value === "" && props.value === null) ||
        (!props.value && props.requerido === true)
          ? props.msginvalido
          : " OK"}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default CampoSelect;
