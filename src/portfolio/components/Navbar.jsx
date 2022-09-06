import { useRef } from 'react';
import { useState } from 'react';
import '../../styles/navbar.css';

export const Navbar = () => {
  const collapseNavbar = useRef(null);
  const [isDark, setIsDark] = useState('light_mode');

  const changeMode = () => {
    if (isDark === 'light_mode') {
      setIsDark('dark_mode');
      document.body.classList.toggle('light-theme');
    } else {
      setIsDark('light_mode');
      document.body.classList.toggle('light-theme');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container d-flex align-content-lg-center">
        <a
          className="navbar-brand"
          href="#home"
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
            <span className="material-symbols-outlined change-mode-icon">
              {isDark}
            </span>
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
            <span className="material-symbols-outlined navbar-icon">menu</span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-lg-end"
          ref={collapseNavbar}
          id="navbarNav"
        >
          <ul className="navbar-nav d-lg-flex align-items-lg-center">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#aboutMe"
                onClick={() => {
                  collapseNavbar.current.classList.remove('show');
                }}
              >
                Acerca de mí
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={() => {
                  collapseNavbar.current.classList.remove('show');
                }}
              >
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contactMe"
                onClick={() => {
                  collapseNavbar.current.classList.remove('show');
                }}
              >
                Contáctame
              </a>
            </li>
            <li className="nav-item d-none d-lg-block">
              <button
                onClick={changeMode}
                className="button-change-mode"
                type="button"
              >
                <span className="material-symbols-outlined change-mode-icon">
                  {isDark}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
