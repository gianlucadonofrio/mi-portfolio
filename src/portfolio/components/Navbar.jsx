import { useEffect } from 'react';
import { useContext } from 'react';
import { useState, useRef } from 'react';
import '../../styles/navbar.css';
import { LanguageContext } from '../context/LanguageContext';

export const Navbar = () => {
  const collapseNavbar = useRef(null);
  const [isDark, setIsDark] = useState('🌚');
  const [language, setLanguage] = useState('🇪🇸');
  const [languageCollapsed, setLanguageCollapsed] = useState('🇺🇸');
  const { languagePage, setLanguagePage, us, es } = useContext(LanguageContext);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-theme');
      setIsDark('🌝');
    }
    if (localStorage.getItem('lang') === 'en') {
      document.documentElement.setAttribute('lang', 'en');
      setLanguage('🇺🇸');
      setLanguageCollapsed('🇪🇸');
      setLanguagePage(us);
    }
  }, [setLanguagePage, us]);

  const changeMode = () => {
    if (isDark === '🌚') {
      setIsDark('🌝');
      document.body.classList.toggle('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDark('🌚');
      document.body.classList.toggle('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  const changeLanguage = () => {
    if (document.documentElement.lang === 'es') {
      document.documentElement.setAttribute('lang', 'en');
      localStorage.setItem('lang', 'en');
      setLanguage('🇺🇸');
      setLanguageCollapsed('🇪🇸');
      setLanguagePage(us);
    } else {
      document.documentElement.setAttribute('lang', 'es');
      localStorage.setItem('lang', 'es');
      setLanguage('🇪🇸');
      setLanguageCollapsed('🇺🇸');
      setLanguagePage(es);
    }
  };
  return (
    <nav className=" navbar navbar-expand-lg">
      <div className="container d-flex align-content-lg-center">
        <a
          className="navbar-brand"
          href="/"
          style={{ fontWeight: 'semi-bold', fontSize: '22px' }}
          onClick={() => {
            collapseNavbar.current.classList.remove('show');
          }}
        >
          Gianluca.
        </a>
        <div className="d-flex align-items-center">
          <button
            onClick={changeMode}
            className="buttons-navbar navbar-toggler"
            type="button"
          >
            <span className="material-symbols-outlined change-mode-icon ">
              {isDark}
            </span>
          </button>
          <div className="dropdown w-100 pe-1">
            <button
              className="btn-navbar-shadow navbar-toggler text-light dropdown-toggle w-100 buttons-navbar "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: '17px' }}
            >
              {language}
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end  menu-language"
              style={{
                minWidth: '60px',
              }}
            >
              <li
                  style={{
                  textAlign: 'center',
                }}
              >
                <button
                  className="dropdown-item"
                  onClick={changeLanguage}
                  style={{
                    fontSize: '18px',
                  }}
                >
                  {languageCollapsed}
                </button>
              </li>
            </ul>
          </div>
          <button
            className="btn-navbar-shadow navbar-toggler buttons-navbar "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src={'./icons/menu.svg'}
              alt="Menu Icon"
              className="menu-icon"
              style={{
                width: '25px',
                height: '25px',
              }}
            />
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
                {languagePage.acerca_de_mi}
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
                {languagePage.navbar__proyectos}
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
                {languagePage.contactame}
              </a>
            </li>
            <li className="dropdown nav-item d-none d-lg-block pe-1">
              <button
                className="buttons-navbar btn-navbar-shadow text-light dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '17px' }}
              >
                {language}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    className="dropdown-item menu-language"
                    onClick={changeLanguage}
                  >
                    {languageCollapsed}
                  </button>
                </li>
              </ul>
            </li>
            <li className="nav-item d-none d-lg-block">
              <button
                onClick={changeMode}
                className="buttons-navbar"
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
