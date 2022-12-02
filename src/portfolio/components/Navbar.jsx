import { useEffect, useRef, useContext } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import "../../styles/navbar.css";
import { LanguageContext } from "../context/LanguageContext";

export const Navbar = () => {
  const collapseNavbar = useRef(null);
  const navbar = useRef(null);
  const [handleTheme, themeIcon] = useTheme("light");
  const [languageIcon, handleLanguage] = useLanguage("en");
  const { languagePage } = useContext(LanguageContext);
  const handleScroll = () => {
    let lastScroll;

    window.addEventListener("scroll", () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (scrollTop === 0) {
        navbar.current?.classList.add("background-navbar");
      }

      if (scrollTop > lastScroll) {
        navbar.current.style.top = "-80px";
        collapseNavbar.current.classList.remove("show");
        navbar.current?.classList.remove("background-navbar");
      } else {
        navbar.current.style.top = "0";
      }
      lastScroll = scrollTop <= 0 ? 0 : scrollTop;
    });
  };

  useEffect(() => {
    handleScroll();
  });

  return (
    <nav
      className="navbar navbar-expand-lg background-navbar"
      id="navbar"
      ref={navbar}
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
            onClick={() =>
              navbar.current?.classList.remove("background-navbar")
            }
          >
            <i className="fa-solid fa-bars menu-icon-button"></i>
          </button>
          <a
            className="navbar-brand"
            href="/"
            onClick={() => {
              collapseNavbar.current.classList.remove("show");
            }}
            aria-label="Home"
          >
            {"{ gian }"}
          </a>
        </div>
        <div className="d-flex align-items-center">
          <button
            onClick={handleLanguage}
            className="buttons-navbar d-lg-none"
            type="button"
          >
            {languageIcon}
          </button>
          <button
            className="buttons-navbar d-lg-none"
            type="button"
            onClick={handleTheme}
          >
            {themeIcon}
          </button>
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
                  collapseNavbar.current.classList.remove("show");
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
                  collapseNavbar.current.classList.remove("show");
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
                  collapseNavbar.current.classList.remove("show");
                }}
                aria-label="Contact me"
              >
                {languagePage.contactame}
              </a>
            </li>
            <li className="nav-item d-none d-lg-flex align-items-center">
              <button
                onClick={handleLanguage}
                className="buttons-navbar"
                type="button"
              >
                {languageIcon}
              </button>
            </li>
            <li className="nav-item d-none d-lg-flex align-items-center">
              <button
                className="buttons-navbar"
                type="button"
                onClick={handleTheme}
              >
                {themeIcon}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
