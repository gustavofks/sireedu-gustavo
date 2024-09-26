import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importando useNavigate
import './DetalhesDisciplina.css';

interface DetalhesDisciplina {
  id: number;
  name: string;
  // Arrumar detalhes do banco
}

const DetalhesDisciplina: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Capturando o ID da disciplina a partir da URL
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook para navegar entre rotas

  useEffect(() => {
    const fetchDetalheDisciplinas = async () => {
      try {
        // Lógica pra puxar os detalhes da disciplina do banco
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
    navigate(`/disciplina/${id}/addturma`); // Navegando para a nova página
  };

  return (
    <div className="detalhes-disciplina">
      <h2>Detalhes da Disciplina</h2>
      <div className="box">
        <h3>Informações Gerais</h3>
        <p>ID: </p>
        <p>Nome: </p>
        {/* <p>ID: {disciplina?.id ?? 'ID da disciplina'}</p> */}
        {/* <p>Nome: {disciplina?.name ?? 'Nome da disciplina'}</p> */}
      </div>

      <div className="box">
        <p>Dados desta tabela serão exibidos aqui</p>
      </div>

      <button onClick={handleAdicionarRelatorio} className="btn-addturma">
        Adicionar relatório de turma
      </button>
    </div>
  );
};

export default DetalhesDisciplina;
