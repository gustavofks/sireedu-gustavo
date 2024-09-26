import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Disciplinas from './routes/Disciplinas.tsx';
import DetalhesDisciplina from './routes/DetalhesDisciplina.tsx';
import AddTurma from './routes/AddTurma.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Disciplinas />,
      },
      {
        path: 'disciplina/:id',  // Rota dinâmica com o ID da disciplina
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
)
