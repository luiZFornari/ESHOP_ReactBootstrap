import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProdutoContext from "./ProdutoContext";
import Tabela from "./Tabela";

import { getCategoriasAPI } from "../../../servicos/CategoriaServico";
import {
  getProdutosAPI,
  getProdutoPorCodigoAPI,
  deleteProdutoPorCodigoAPI,
  cadastraProdutoAPI,
} from "../../../servicos/ProdutoServico";
import Carregando from "../../comuns/Carregando";
import WithAuth from "../../seguranca/WithAuth";
import Form from "./Form";

function Produto() {
  let navigate = useNavigate();

  const [alerta, setAlerta] = useState({ status: "", message: "" });
  const [listaObjetos, setListaObjetos] = useState([]);
  const [listaCategorias, setListaCategorias] = useState([]);
  const [abreDialogo, setAbreDialogo] = useState(false);
  const [editar, setEditar] = useState(false);
  const [objeto, setObjeto] = useState({
    codigo: "",
    nome: "",
    descricao: "",
    sigla: "",
  });
  const [carregando, setCarregando] = useState(true);

  const novoObjeto = () => {
    setEditar(false);
    setAlerta({ status: "", message: "" });
    setObjeto({
      codigo: 0,
      nome: "",
      descricao: "",
      quantidade_estoque: "",
      valor: "",
      ativo: "",
      data_cadastro: new Date().toISOString().slice(0, 10),
      categoria: "",
    });
    setAbreDialogo(true);
  };

  const editarObjeto = async (codigo) => {
    setObjeto(await getProdutoPorCodigoAPI(codigo));
    setAbreDialogo(true);
    setEditar(true);
    setAlerta({ status: "", message: "" });
  };

  const acaoCadastrar = async (e) => {
    e.preventDefault();
    const metodo = editar ? "PUT" : "POST";
    try {
      let retornoAPI = await cadastraProdutoAPI(objeto, metodo);
      setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
      setObjeto(retornoAPI.objeto);
      if (!editar) {
        setEditar(true);
      }
    } catch (err) {
      console.error(err.message);
      window.location.reload();
      navigate("/login", { replace: true });
    }
    recuperaProdutos();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setObjeto({ ...objeto, [name]: value });
  };

  const recuperaProdutos = async () => {
    try {
      setCarregando(true);
      setListaObjetos(await getProdutosAPI());
      setCarregando(false);
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
  };

  const recuperaCategorias = async () => {
    try {
      setListaCategorias(await getCategoriasAPI());
    } catch (err) {
      window.location.reload();
      navigate("/login", { replace: true });
    }
  };

  const remover = async (codigo) => {
    if (window.confirm("Deseja remover este objeto?")) {
      try {
        let retornoAPI = await deleteProdutoPorCodigoAPI(codigo);
        setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
        recuperaProdutos();
      } catch (err) {
        window.location.reload();
        navigate("/login", { replace: true });
      }
    }
  };

  useEffect(() => {
    recuperaCategorias();
    recuperaProdutos();
  }, []);

  return (
    <ProdutoContext.Provider
      value={{
        alerta,
        setAlerta,
        listaObjetos,
        remover,
        objeto,
        editar,
        acaoCadastrar,
        handleChange,
        novoObjeto,
        editarObjeto,
        listaCategorias,
        abreDialogo,
        setAbreDialogo,
      }}
    >
      <Carregando carregando={carregando}>
        <Tabela />
      </Carregando>
      <Form />
    </ProdutoContext.Provider>
  );
}

export default WithAuth(Produto);
