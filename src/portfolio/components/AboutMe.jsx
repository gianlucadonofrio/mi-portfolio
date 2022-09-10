import { useState } from 'react';
import '../../styles/aboutMe.css';

export const AboutMe = () => {
  const [isDownFront, setIsDownFront] = useState(false);
  const [isDownBack, setIsDownBack] = useState(false);
  const [isDownOther, setIsDownOther] = useState(false);

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
      className="container-fluid min-vh-100 d-flex flex-column justify-content-md-center align-items-center"
    >
      <div
        className="container-fluid d-flex flex-column align-items-center "
        id="title_about_me"
      >
        <p style={{ color: 'var(--color-secondary-text)' }} className="m-0">
          Quien soy
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: '600' }}>
          Acerca de mí
        </h1>
        <div className="vbar"></div>
      </div>
      <div
        className="container d-flex flex-column"
        style={{ width: 'fit-content' }}
      >
        <p className="text-justify mt-3">
          Soy desarrollador web Fullstack, apasionado por el{' '}
          <strong style={{ color: 'var( --color-buttons' }}>
            Frontend ❤️.
          </strong>
          <br />
          Me encanta la tecnología, la programación, y aprender cosas nuevas. Me
          gusta trabajar en equipo y aprender de mis compañeros.
          <br />
          Actualmente estoy cursando el segundo track de la carrera Certified
          Tech Developer, pensada y diseñada por Digital House, Mercado Libre y
          Globant, en la cual me estoy especializando en el desarrollo Frontend.
          Recientemente me recibí de Professional Developer, en donde, con un
          grupo de compañeros, desarrollamos una aplicación web como proyecto
          final del primer track, en la cual me desempeñé como{' '}
          <strong>Desarrollador Frontend.</strong>
        </p>
        <div id="skills_dropdown d-flex align-items-center">
          <div
            className="d-flex flex-column align-items-start mt-1"
            id="title_about_me"
          >
            <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Habilidades
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
                  Frontend Developer
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
                <div className="container ps-5">
                  <p className="text_card_title">Tecnologías</p>
                  <p className="card-text text_card">
                    HTML | CSS | JavaScript | TypeScript.
                  </p>
                  <p className="text_card_title">Librerías</p>
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
                  Backend Developer
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
                <div className="container ps-5">
                  <p className="text_card_title">Tecnologías</p>
                  <p className="card-text text_card">
                    Java | SQL | JavaScript | NodeJs | Express Js.
                  </p>
                  <p className="text_card_title">Librerías</p>
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
                  Otras Tecnologías
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
                <div className="container ps-5">
                  <p className="text_card_title">Tecnologías</p>
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
