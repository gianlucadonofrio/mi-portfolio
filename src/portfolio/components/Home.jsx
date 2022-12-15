import { useContext } from "react";
import "../../styles/home.css";
import { LanguageContext } from "../context/LanguageContext";
export const Home = () => {
  const { languagePage } = useContext(LanguageContext);
  return (
    <section id="home" className="container vh-100">
      <div className="container-fluid d-flex flex-column-reverse justify-content-center align-items-center position-relative h-100">
        <div className="box-social-media">
          <ul className="list-icons-socials">
            <li>
              <a
                href="https://www.linkedin.com/in/gianlucadonofrio/"
                target={"_blank"}
                rel="noreferrer"
                aria-label="linkedin"
              >
                <i className="fa-brands fa-linkedin-in icon-social"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/gianlucadonofrio"
                target={"_blank"}
                rel="noreferrer"
                aria-label="github"
              >
                <i className="fa-brands fa-github-alt icon-social"></i>
              </a>
            </li>
            <li>
              <a href="#contactMe" rel="noreferrer" aria-label="email">
                <i className="fa-regular fa-envelope icon-social"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="container-fluid d-flex justify-content-center flex-wrap flex-md-nowrap ">
          <a
            href="https://drive.google.com/drive/folders/14HEezWEgyIcWqDcJboZday1oUzzNpm7I?usp=share_link"
            target={"_blank"}
            rel="noreferrer"
            aria-label="download cv"
            style={{ textDecoration: "none" }}
          >
            <p className="d-flex align-items-center justify-content-center btn-media">
              {languagePage.home__curriculum}
              <i className="fa-solid fa-download ps-2"></i>
            </p>
          </a>

          <a
            href="#contactMe"
            style={{ textDecoration: "none" }}
            aria-label="contact me"
          >
            <p className="d-flex align-items-center justify-content-center btn-media">
              {languagePage.contactame}
              <i className="fa-solid fa-paper-plane ps-2"></i>
            </p>
          </a>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center position-relative">
          <p className="title__description">{languagePage.home__titulo}</p>
          <h1 className="title__name">
            Gianluca
            <span>D'Onofrio.</span>
          </h1>
          <p className="title__description ps-4">
            {languagePage.home__subtitulo}
          </p>
        </div>
      </div>
    </section>
  );
};
