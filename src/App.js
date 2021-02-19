import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Menu from './components/menu';

function App() {
  const [inputFilme, setInputFilme] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");

  const filme = useSelector((state) => state.filmeReducer.filme);

  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  
  const dispatch = useDispatch();

  function adicionarFilme(event) {
    event.preventDefault();

    const objFilme = {
      nome: inputFilme
    }

    dispatch( {type: "ADICIONAR", value: objFilme})
  }

  function alterarTitulo(event) {
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }

  return (
    <div class="container">
      <div class="jumbotron">
      <h5 class="p-2 bg-warning text-dark">React Redux</h5>
      <p class="lead">Este é um pequeno e simples projeto que utiliza o redux, como forma de comprovação de aprendizado.</p>
      <hr class="my-4"></hr>
      <p>No primeiro input abaixo é possível perceber que ele acompanha a sua digitação em tempo real.</p>
      <Menu />
      <form className="form-group">
        <label>Titulo</label>
        <input className="form-control" placeholder="Digite o Titulo desejado..." value={inputTitulo} onChange={alterarTitulo} />
      </form>
      
      <h1>{stateTitulo}</h1>
      
      <form onSubmit={adicionarFilme}>
        <p>Já aqui podemos adicionar um filme por vez, formando uma lista. </p>
        <input className="form-control"
          placeholder="Digite uma Filme..."
          value={inputFilme}
          onChange={(event) => setInputFilme(event.target.value)}
        />

        <button className="btn btn-danger btn-block">Adicionar</button>
      </form>
      {
        filme.map((filme, index) => {
          return(
            <li key={index}>{filme.nome}</li>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;