import { useEffect, useContext, useState, useRef } from 'react';
import '../../styles/navbar.css';
import { LanguageContext } from '../context/LanguageContext';

export const Navbar = () => {
  const collapseNavbar = useRef(null);
  const [isDark, setIsDark] = useState('🌚');
  const [language, setLanguage] = useState('🇪🇸');
  const { languagePage, setLanguagePage, us, es } = useContext(LanguageContext);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-theme');
      setIsDark('🌝');
    }
    if (localStorage.getItem('lang') === 'en') {
      document.documentElement.setAttribute('lang', 'en');
      setLanguage('🇺🇸');
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
  const handleScroll = () => {
    let lastScroll;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (scrollTop === 0) {
        navbar.classList.add('navbar-background-transparent');
      }

      if (scrollTop > lastScroll) {
        navbar.style.top = '-80px';
        navbar.classList.remove('navbar-background-transparent');
        collapseNavbar.current.classList.remove('show');
      } else {
        navbar.style.top = '0';
      }
      lastScroll = scrollTop <= 0 ? 0 : scrollTop;
    });
  };

  useEffect(() => {
    handleScroll();
  });

  const changeLanguage = () => {
    if (document.documentElement.lang === 'es') {
      document.documentElement.setAttribute('lang', 'en');
      localStorage.setItem('lang', 'en');
      setLanguage('🇺🇸');
      setLanguagePage(us);
    } else {
      document.documentElement.setAttribute('lang', 'es');
      localStorage.setItem('lang', 'es');
      setLanguage('🇪🇸');
      setLanguagePage(es);
    }
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-background-transparent"
      id="navbar"
    >
      <div className="container d-flex align-content-lg-center h-100">
        <div className="d-flex align-items-center gap-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars menu-icon-button"></i>
          </button>
          <a
            className="navbar-brand"
            href="/"
            onClick={() => {
              collapseNavbar.current.classList.remove('show');
            }}
            aria-label="Home"
          >
            Gianluca.
          </a>
        </div>
        <div className="d-flex align-items-center">
          <button
            onClick={changeMode}
            className="buttons-navbar d-lg-none"
            type="button"
          >
            {isDark}
          </button>

          {language === '🇺🇸' ? (
            <button
              onClick={changeLanguage}
              className="buttons-navbar d-lg-none"
            >
              {language}
            </button>
          ) : (
            <button
              onClick={changeLanguage}
              className="buttons-navbar d-lg-none"
            >
              {language}
            </button>
          )}
        </div>

        <div
          className="collapse navbar-collapse d-lg-flex justify-content-lg-end h-100"
          ref={collapseNavbar}
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex align-items-center h-100">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#aboutMe"
                onClick={() => {
                  collapseNavbar.current.classList.remove('show');
                }}
                aria-label="About me"
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
                aria-label="Projects"
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
                aria-label="Contact me"
              >
                {languagePage.contactame}
              </a>
            </li>
            <li className="nav-item d-none d-lg-flex align-items-center">
              {language === '🇺🇸' ? (
                <button onClick={changeLanguage} className="buttons-navbar">
                  {language}
                </button>
              ) : (
                <button onClick={changeLanguage} className="buttons-navbar">
                  {language}
                </button>
              )}
            </li>
            <li className="nav-item d-none d-lg-flex align-items-center">
              <button
                onClick={changeMode}
                className="buttons-navbar"
                type="button"
              >
                {isDark}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
