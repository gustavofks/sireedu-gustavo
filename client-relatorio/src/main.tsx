import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Disciplinas from './routes/Disciplinas.tsx';
import DetalhesDisciplina from './routes/DetalhesDisciplina.tsx';
import AddTurma from './routes/AddTurma.tsx';
import Login from './routes/Login.tsx'; // Importando a página de Login

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />, // A rota '/' agora renderiza a página de Login
  },
  {
    path: '/app', // Adicionando uma nova rota para as páginas protegidas
    element: <App />,
    children: [
      {
        path: 'disciplinas', // Acesso para a página de Disciplinas
        element: <Disciplinas />,
      },
      {
        path: 'disciplina/:id', // Rota dinâmica com o ID da disciplina
        element: <DetalhesDisciplina />,
      },
      {
        path: 'disciplina/:id/addturma', // Nova rota para adicionar relatório
        element: <AddTurma />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
