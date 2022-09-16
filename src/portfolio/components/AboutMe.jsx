import { useContext, useState } from 'react';
import '../../styles/aboutMe.css';
import { LanguageContext } from '../context/LanguageContext';

export const AboutMe = () => {
  const [isDownFront, setIsDownFront] = useState(false);
  const [isDownBack, setIsDownBack] = useState(false);
  const [isDownOther, setIsDownOther] = useState(false);
  const { languagePage } = useContext(LanguageContext);
  const dropDownMenu = (e) => {
    const dropDownFrontend = document.getElementById('frontend_skills');
    const dropDownBackend = document.getElementById('backend_skills');
    const dropDownOther = document.getElementById('otherTechnologies_skills');

    if (e.target.id === 'frontend_button') {
      dropDownFrontend.classList.toggle('d-none');
      setIsDownFront(!isDownFront);
    } else if (e.target.id === 'backend_button') {
      dropDownBackend.classList.toggle('d-none');
      setIsDownBack(!isDownBack);
    } else if (e.target.id === 'otherTechnologies_button') {
      dropDownOther.classList.toggle('d-none');
      setIsDownOther(!isDownOther);
    }
  };
  return (
    <div
      id="aboutMe"
      className="container min-vh-100 d-flex flex-column justify-content-md-center align-items-center "
    >
      <div
        className="container-fluid d-flex flex-column align-items-center "
        id="title_about_me"
      >
        <p style={{ color: 'var(--color-secondary-text)' }} className="m-0">
          {languagePage.acerca_de_mi__text_title}
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: '600' }}>
          {languagePage.acerca_de_mi}
        </h1>
        <div className="vbar"></div>
      </div>
      <div
        className="container d-flex flex-column"
        style={{ width: 'fit-content' }}
      >
        <div className="d-flex align-items-center flex-column flex-md-row">
          <p className="text-justify mt-3 pe-md-5 ">
            {languagePage.acerca_de_mi__text}
          </p>
        </div>

        <div id="skills_dropdown d-flex align-items-center">
          <div
            className="d-flex flex-column align-items-start mt-1"
            id="title_about_me"
          >
            <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {languagePage.acerca_de_mi__title_habilidades}
            </h1>
            <div className="vbar w-100"></div>
          </div>
          <div className="container">
            <div id="frontend-container-skills">
              <div
                className="btn-container"
                onClick={dropDownMenu}
                id="frontend_button"
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="btn-skills d-flex  align-items-center"
                  id="frontend_button"
                >
                  <i
                    className="fa-solid fa-code icon_card pe-2"
                    id="frontend_button"
                  ></i>
                  {languagePage.acerca_de_mi__frontend}
                </div>
                <i
                  className={
                    isDownFront
                      ? 'fa-solid fa-chevron-up icon_card'
                      : 'fa-solid fa-chevron-down icon_card'
                  }
                  id="frontend_button"
                ></i>
              </div>

              <div className="d-none" id="frontend_skills">
                <div className="container">
                  <p className="text_card_title">
                    {languagePage.acerca_de_mi__tecnologias}
                  </p>
                  <p className="card-text text_card">
                    HTML | CSS | JavaScript | TypeScript.
                  </p>
                  <p className="text_card_title">
                    {languagePage.acerca_de_mi__librerias}
                  </p>
                  <p className="card-text text_card">
                    React JS | Vue JS | Bootstrap | Vuetify | Redux.
                  </p>
                </div>
              </div>
            </div>

            <div id="backend_container-skills">
              <div
                className="btn-container"
                onClick={dropDownMenu}
                id="backend_button"
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="btn-skills d-flex align-items-center"
                  id="backend_button"
                >
                  <i
                    className="fa-solid fa-server icon_card pe-2"
                    id="backend_button"
                  ></i>
                  {languagePage.acerca_de_mi__backend}
                </div>
                <i
                  id="backend_button"
                  className={
                    isDownBack
                      ? 'fa-solid fa-chevron-up icon_card'
                      : 'fa-solid fa-chevron-down icon_card'
                  }
                ></i>
              </div>
              <div className="d-none" id="backend_skills">
                <div className="container">
                  <p className="text_card_title">
                    {languagePage.acerca_de_mi__tecnologias}
                  </p>
                  <p className="card-text text_card">
                    Java | SQL | JavaScript | NodeJs | Express Js.
                  </p>
                  <p className="text_card_title">
                    {languagePage.acerca_de_mi__librerias}
                  </p>
                  <p className="card-text text_card">
                    Spring Boot | Mongoose | Rest API.
                  </p>
                </div>
              </div>
            </div>

            <div id="otherTechnologies_container-skills">
              <div
                className="btn-container"
                onClick={dropDownMenu}
                id="otherTechnologies_button"
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="btn-skills d-flex align-items-center"
                  id="otherTechnologies_button"
                >
                  <i
                    className="fa-solid fa-gears icon_card pe-2"
                    id="otherTechnologies_button"
                  ></i>
                  {languagePage.acerca_de_mi__otras_tecnologias}
                </div>
                <i
                  id="otherTechnologies_button"
                  className={
                    isDownBack
                      ? 'fa-solid fa-chevron-up icon_card'
                      : 'fa-solid fa-chevron-down icon_card'
                  }
                ></i>
              </div>
              <div className="d-none" id="otherTechnologies_skills">
                <div className="container">
                  <p className="card-text text_card">
                    Junit | Jest | Postman | GitHub | GitLab | UX/UI |
                    Metodologías Ágiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
