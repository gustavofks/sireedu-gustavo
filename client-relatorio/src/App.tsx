import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <nav className="navbar">
          <div className="navbar-left">
            <h2 id="logo">SIRE.EDU</h2>
          </div>
          <div className="navbar-links">
            <Link to="http://localhost:8080/#/home">Home</Link>
            <Link to="/">Disciplinas</Link>
          </div>
      </nav>
      
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default App;
