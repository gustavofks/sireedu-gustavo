import React, { useEffect, useState } from 'react';
import './Disciplinas.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

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
  const location = useLocation();
  const { userType } = location.state || {}; // Pega o tipo de usuário do estado

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/disciplinas/', {
          params: { userType },
        });
        setDisciplinas(response.data);
      } catch (err) {
        setError('Erro ao buscar disciplinas');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (userType) {
      fetchDisciplinas();
    } else {
      setError('Tipo de usuário não definido');
      setLoading(false);
    }
  }, [userType]);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  const handleDisciplinaClick = (id: number) => {
    navigate(`/app/disciplina/${id}`, { state: { userType } }); // Passa o userType ao navegar
  };

  return (
    <div className="tabela-geral">
      <h1 className="titulo-principal">Lista de Disciplinas</h1>
      <table>
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
            <tr key={disciplina.id} onClick={() => handleDisciplinaClick(disciplina.id)}>
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
