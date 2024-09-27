import React from 'react';
//import { useParams } from 'react-router-dom';
import './AddTurma.css';

const AddTurma: React.FC = () => {
  //const { id } = useParams<{ id: string }>(); // Pegando o ID da disciplina a partir da URL

  return (
    <div className="container">
      {/* Div da tabela à esquerda */}
      <div className="left-panel">
        <h2>Análise de dados</h2>
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar..." />
        </div>
        <div className="table-box">
          <p>Tabela de turmas da mesma disciplina</p>
        </div>
      </div>

      {/* Div do formulário à direita */}
      <div className="right-panel">
        <h2>Insira as informações necessárias</h2>
        <form>
          <input type="text" placeholder="Curso" />
          <input type="text" placeholder="Disciplina" />
          <input type="date" placeholder="Data" />
          <div className="upload-box">
            <p>Enviar arquivo .CSV</p>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </div>
    </div>
  );
};

export default AddTurma;
