import { useState } from 'react';
import '../../styles/navbar.css';

export const Navbar = () => {
  const [isDark, setIsDark] = useState('fa-sun');

  const changeMode = () => {
    if (isDark === 'fa-sun') {
      setIsDark('fa-moon');
      document.body.classList.toggle('light-theme');
    } else {
      setIsDark('fa-sun');
      document.body.classList.toggle('light-theme');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container d-flex align-content-lg-center">
        <a
          className="navbar-brand"
          href="/"
          style={{ fontWeight: 'semi-bold', fontSize: '26px' }}
        >
          Gianluca.
        </a>
        <div>
          <button
            onClick={changeMode}
            className="button-change-mode navbar-toggler"
            type="button"
          >
            <i className={`fa-solid ${isDark} change-mode-icon`}></i>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars navbar-icon"></i>
          </button>
        </div>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-lg-end align-content-lg-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="\">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contacto
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <button
                onClick={changeMode}
                className="button-change-mode"
                type="button"
              >
                <i className={`fa-solid ${isDark} change-mode-icon`}></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
