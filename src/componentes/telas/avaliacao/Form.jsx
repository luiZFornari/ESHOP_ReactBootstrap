import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import AvaliacaoContext from "./AvaliacaoContext";
import CampoSelect from "../../comuns/CampoSelect";

function Form() {
  const {
    objeto,
    handleChange,
    acaoCadastrarAvaliacao,
    alerta,
    abreDialogo,
    setAbreDialogo,
  } = useContext(AvaliacaoContext);

  const notas = [
    { name: "1", code: 1 },
    { name: "2", code: 2 },
    { name: "3", code: 3 },
    { name: "4", code: 4 },
    { name: "5", code: 5 },
  ];

  return (
    <>
      <Dialogo
        id="modalEdicao"
        titulo="Avalição"
        open={abreDialogo}
        setOpen={setAbreDialogo}
        acaoCadastrar={acaoCadastrarAvaliacao}
        idform="formulario"
        maxWidth="sm"
        alerta={alerta}
      >
        <CampoEntrada
          id="txtCodigo"
          label="Codigo"
          tipo="number"
          name="codigo"
          value={objeto.codigo}
          onChange={handleChange}
          requerido={false}
          readonly={true}
        />
        <CampoEntrada
          id="txtAutor"
          label="Autor"
          tipo="text"
          name="autor"
          value={objeto.autor}
          onChange={handleChange}
          requerido={true}
          readonly={false}
          maxlength={50}
          msgvalido="Autor OK"
          msginvalido="Informe o autor"
        />
        <CampoEntrada
          value={objeto.email}
          id="txtEmail"
          name="email"
          label="Email"
          tipo="text"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe o email"
          requerido={true}
          readonly={false}
          maxCaracteres={40}
        />
        <CampoEntrada
          id="txtTexto"
          label="Texto"
          tipo="text"
          name="texto"
          value={objeto.texto}
          onChange={handleChange}
          requerido={true}
          readonly={false}
          maxlength={250}
          msgvalido="Texto OK"
          msginvalido="Informe o texto"
        />
        <CampoSelect
          id="selectNota"
          label="Nota"
          idLabel="txtNota"
          name="nota"
          value={objeto.nota}
          onChange={handleChange}
          requerido={true}
          msgvalido="Nota OK"
          msginvalido="Informe a nota"
          optionValue="code"
          optionLabel="name"
        >
          {notas.map((nota) => (
            <option value={nota.code} key={nota.code}>
              {nota.name}
            </option>
          ))}
        </CampoSelect>
        <CampoEntrada
          value={objeto.data}
          id="txtDataCadastro"
          name="data"
          label="Data de Cadastro"
          tipo="date"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe a data de cadastro"
          requerido={true}
          readonly={false}
          maxCaracteres={12}
        />
      </Dialogo>
    </>
  );
}

export default Form;
