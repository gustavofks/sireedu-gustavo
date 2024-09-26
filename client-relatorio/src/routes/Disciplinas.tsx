import React, { useEffect, useState } from 'react';
import './Disciplinas.css';
import { useNavigate } from 'react-router-dom';

interface Disciplina {
  id: number;
  description: string;
  semester: number;
  year: number;
}

const Disciplinas: React.FC = () => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/disciplinas/');
        if (!response.ok) {
          throw new Error('Erro ao buscar disciplinas');
        }

        const data = await response.json();
        setDisciplinas(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchDisciplinas();
  }, []);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  const handleDisciplinaClick = (id: number) => {
    navigate(`/disciplina/${id}`);
  };

  return (
    <div className="tabela-geral">
      <h1 className="titulo-principal">Lista de Disciplinas</h1> {/* Título principal */}
      <table className="disciplinas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Semestre</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((disciplina) => (
            <tr key={disciplina.id} onClick={() => handleDisciplinaClick(disciplina.id)} className="disciplina-row">
              <td>{disciplina.id}</td>
              <td>{disciplina.description}</td>
              <td>{disciplina.semester}</td>
              <td>{disciplina.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Disciplinas;
