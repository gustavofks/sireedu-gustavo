import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetalhesDisciplina.css';

interface DetalhesDisciplina {
  id: number;
  name: string;
  // Ajuste os detalhes conforme o banco de dados
}

const DetalhesDisciplina: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetalheDisciplinas = async () => {
      try {
        // Lógica para buscar os detalhes da disciplina no banco de dados
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchDetalheDisciplinas();
  }, [id]);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  const handleAdicionarRelatorio = () => {
    navigate(`/disciplina/${id}/addturma`);
  };

  return (
    <div className="container">
      {/* Div da tabela à esquerda */}
      <div className="left-panel">
        <h2>Detalhes da Disciplina</h2>
        <div className="box">
          <h3>Informações Gerais</h3>
          <p>ID: {id}</p>
          <p>Nome da Disciplina</p>
        </div>
        <div className="table-box">
          <p>Dados da tabela relacionados à disciplina serão exibidos aqui</p>
        </div>
      </div>

      {/* Div do formulário à direita */}
      <div className="right-panel">
        <h2>Adicionar Relatório de Turma</h2>
        <button onClick={handleAdicionarRelatorio} className="btn-addturma">
          Adicionar relatório de turma
        </button>
      </div>
    </div>
  );
};

export default DetalhesDisciplina;
