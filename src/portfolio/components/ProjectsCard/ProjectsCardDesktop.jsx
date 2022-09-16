export const ProjectsCardDesktop = ({ languagePage }) => {
  return (
    <>
      <div className="d-flex flex-row mt-5" id="project-1">
        <div className="col-md-8">
          <img
            src={require('../../../assets/projects/project-1.png')}
            className="img-fluid img-projects"
            alt="Project 1"
          />
        </div>
        <div className="container col-md-4">
          <div
            className="card-body d-flex flex-column justify-content-center h-100"
            style={{ float: 'right' }}
          >
            <h5 className="card-title text-end mb-4 title_project">
              {languagePage.proyecto1__title}
            </h5>
            <p className="card-text p-3 mt-2 text-card-desktop">
              {languagePage.proyecto1__description}
            </p>
            <ul
              className=" d-flex gap-2 justify-content-end card-text"
              style={{
                listStyle: 'none',
                color: 'var(--color-secondary-text)',
              }}
            >
              <li>MongoDB</li>
              <li>Express</li>
              <li>ReactJS</li>
              <li>NodeJS</li>
            </ul>
            <div className="d-flex justify-content-end gap-3">
              <a
                href={languagePage.proyecto1__url_github}
                target={'_blank'}
                rel="noreferrer "
                className=" btn-socials"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={languagePage.proyecto1__url_web}
                target={'_blank'}
                rel="noreferrer "
                className=" btn-socials"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row-reverse mt-5" id="project-2">
        <div className="col-md-8">
          <img
            src={require('../../../assets/projects/project-2.png')}
            className="img-fluid img-projects"
            alt="Project 1"
          />
        </div>
        <div className="container col-md-4">
          <div
            className="card-body d-flex flex-column justify-content-center h-100"
            style={{ float: 'left' }}
          >
            <h5 className="card-title text-start mb-4 title_project">
              {languagePage.proyecto2__title}
            </h5>
            <p className="card-text p-3 mt-2 text-card-desktop text-start">
              {languagePage.proyecto2__description}
            </p>
            <ul
              className=" d-flex gap-2 justify-content-start card-text p-0"
              style={{
                listStyle: 'none',
                color: 'var(--color-secondary-text)',
              }}
            >
              <li>ReactJS</li>
              <li>Firebase</li>
              <li>Material UI</li>
            </ul>
            <div className="d-flex justify-content-start gap-3">
              <a
                href={languagePage.proyecto2__url_github}
                target={'_blank'}
                rel="noreferrer "
                className="btn-socials"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={languagePage.proyecto2__url_web}
                target={'_blank'}
                rel="noreferrer "
                className=" btn-socials"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row mt-5" id="project-3">
        <div className="col-md-8">
          <img
            src={require('../../../assets/projects/project-3.png')}
            className="img-fluid img-projects"
            alt="Project 1"
          />
        </div>
        <div className="container col-md-4">
          <div
            className="card-body d-flex flex-column justify-content-center h-100"
            style={{ float: 'right' }}
          >
            <h5 className="card-title text-end mb-4 title_project">
              {languagePage.proyecto3__title}
            </h5>
            <p className="card-text p-3 mt-2 text-card-desktop">
              {languagePage.proyecto3__description}
            </p>
            <ul
              className=" d-flex gap-2 justify-content-end card-text"
              style={{
                listStyle: 'none',
                color: 'var(--color-secondary-text)',
              }}
            >
              <li>VueJS</li>
              <li>Vuetify</li>
              <li>Vuex</li>
            </ul>
            <div className="d-flex justify-content-end gap-3">
              <a
                href={languagePage.proyecto3__url_github}
                target={'_blank'}
                rel="noreferrer "
                className="btn-socials"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href={languagePage.proyecto3__url_web}
                target={'_blank'}
                rel="noreferrer "
                className="btn-socials"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
