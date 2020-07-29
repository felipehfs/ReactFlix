import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function handleSubmit(event) {
    event.preventDefault();

    setCategorias([{...values}, ...categorias]);

  }


  function onChangeField(event) {
    const { value, name } = event.target;

      setValues({
        ...values,
        [name]: value
      })
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome} </h1>

      <form 
        onSubmit={handleSubmit}
      >

        <FormField
          name="nome"
          type="text"
          label="Nome da Categoria:"
          value={values.nome}
          onChange={onChangeField}
        />

        <FormField 
          type="textarea"
          label="Descrição"
          name="descricao"
          value={values.descricao}
          onChange={onChangeField}
        />
        
        <FormField 
          name="cor"
          label="Cor:"
          value={values.cor}
          onChange={onChangeField}
          type="color"
        />

        <button>
          Cadastrar
        </button>
      </form>


      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria.nome}-${indice}`}>
              {categoria.nome}
            </li>
          )
        })

        }
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;