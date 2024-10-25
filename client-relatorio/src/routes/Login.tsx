import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [userType, setUserType] = useState<string>(''); // Estado para armazenar o tipo de usuário
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userType) {
      navigate('/app/disciplinas', { state: { userType } }); // Passa o tipo de usuário para a rota de disciplinas
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">SIRE.EDU</h1>
        <select
          onChange={(e) => setUserType(e.target.value)}
          value={userType}
          className="login-select"
        >
          <option value="">Selecione o tipo de usuário</option>
          <option value="coordenador">Coordenador</option>
          <option value="professor">Professor</option>
          <option value="gestor">Gestor</option>
        </select>
        <button onClick={handleLogin} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
