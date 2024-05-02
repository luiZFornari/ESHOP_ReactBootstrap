import { useContext } from "react";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";
import ProdutoContext from "./ProdutoContext";
import CampoSelect from "../../comuns/CampoSelect";

function Form() {
  const {
    objeto,
    handleChange,
    acaoCadastrar,
    listaCategorias,
    alerta,
    abreDialogo,
    setAbreDialogo,
  } = useContext(ProdutoContext);

  return (
    <>
      <Dialogo
        id="modalEdicao"
        titulo="Produto"
        open={abreDialogo}
        setOpen={setAbreDialogo}
        acaoCadastrar={acaoCadastrar}
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
          id="txtNome"
          label="Nome"
          tipo="text"
          name="nome"
          value={objeto.nome}
          onChange={handleChange}
          requerido={true}
          readonly={false}
          maxlength={50}
          msgvalido="Nome OK"
          msginvalido="Informe o nome"
        />
        <CampoEntrada
          value={objeto.descricao}
          id="txtDescricao"
          name="descricao"
          label="Descricao"
          tipo="text"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe a descricao"
          requerido={true}
          readonly={false}
          maxCaracteres={40}
        />
        <CampoEntrada
          value={objeto.quantidade_estoque}
          id="txtEstoque"
          name="quantidade_estoque"
          label="Estoque"
          tipo="number"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe a quantidade em estoque"
          requerido={true}
          readonly={false}
          maxCaracteres={5}
        />
        <CampoSelect
          id="selectCategoria"
          label="Categoria"
          idLabel="labelCategoria"
          name="categoria"
          value={objeto.categoria}
          onChange={handleChange}
          requerido={true}
          msgvalido="Nota OK"
          msginvalido="Informe a categoria"
        >
          {listaCategorias.map((categoria) => (
            <option value={categoria.codigo} key={categoria.codigo}>
              {categoria.nome}
            </option>
          ))}
        </CampoSelect>
        <CampoEntrada
          value={objeto.valor}
          id="idValor"
          name="valor"
          label="Valor"
          tipo="number"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe o valor"
          requerido={true}
          readonly={false}
          maxCaracteres={12}
        />
        <CampoSelect
          value={objeto.ativo}
          id="txtAtivo"
          name="ativo"
          label="Ativo"
          onChange={handleChange}
          msgvalido="OK certo"
          msginvalido="Informe se está ativo"
          requerido={true}
        >
          <option value={true} name="ativo" key={1}>
            Sim
          </option>
          <option value={false} name="ativo" key={2}>
            Não
          </option>
        </CampoSelect>
        <CampoEntrada
          value={objeto.data_cadastro}
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
