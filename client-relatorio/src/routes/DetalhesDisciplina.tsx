import React, { useEffect, useState } from 'react'; 
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './DetalhesDisciplina.css';
import axios from 'axios';

interface Disciplina {
  id: number;
  description: string;
  semester: number;
  year: number;
  code: string;
}

const DetalhesDisciplina: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtém o ID da disciplina da URL
  const location = useLocation();
  const { userType } = location.state || {}; // Pega o userType do estado de navegação
  const [disciplina, setDisciplina] = useState<Disciplina | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisciplina = async () => {
      try {
        // Certifique-se de que a URL está correta
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/disciplinas/${id}/`, {
          params: { userType },
        });
        setDisciplina(response.data);  // Armazena os dados da disciplina no estado
      } catch (err) {
        setError('Erro ao buscar detalhes da disciplina');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    

    if (userType && id) {
      fetchDisciplina();  // Chama a API quando o ID e userType estão definidos
    } else {
      setError('Tipo de usuário ou ID da disciplina não definido');
      setLoading(false);
    }
  }, [userType, id]);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <div className="left-panel">
        <h1><strong>{disciplina ? disciplina.description : 'Disciplina não encontrada'}</strong></h1>
        <div className="box">
          {disciplina ? (
            <>
              <p><strong>Código:</strong> {disciplina.code}</p>
              <p><strong>Ano:</strong> {disciplina.year}</p>
              <p><strong>Semestre:</strong> {disciplina.semester}</p>
            </>
          ) : (
            <p>Disciplina não encontrada</p>
          )}
        </div>
      </div>

      <div className="right-panel">
        <div className="table-box">
          <p>Outras informações podem ser exibidas aqui...</p>
        </div>
        <button className="btn-addturma" onClick={() => navigate(`/app/disciplina/${id}/addturma`)}>
          Adicionar Turma
        </button>
      </div>
    </div>
  );
};

export default DetalhesDisciplina;
