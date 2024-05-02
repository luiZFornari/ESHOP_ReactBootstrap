import React from "react";
import Form from "react-bootstrap/Form";

function CampoEntrada({
  id,
  label,
  tipo,
  value,
  requerido,
  readonly,
  maxlength,
  msginvalido,
  placeholder,
  onChange,
  name,
}) {
  return (
    <div>
      <Form.Group className="mb-3" controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          name={name}
          type={tipo}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          readOnly={readonly}
          required={requerido}
          maxLength={maxlength}
          isInvalid={(requerido && value === "") || value <= 0}
        />
        {((requerido && value === "") || value <= 0) && (
          <Form.Control.Feedback type="invalid">
            {msginvalido}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </div>
  );
}

export default CampoEntrada;
