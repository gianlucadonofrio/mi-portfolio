export const ProjectsCardDesktop = () => {
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
              Calendar MERN
            </h5>
            <p className="card-text p-3 mt-2 text-card-desktop">
              Aplicación web de calendario colaborativo, donde se pueden ver,
              editar, crear o eliminar los eventos.
            </p>
            <ul
              className=" d-flex gap-2 justify-content-end card-text"
              style={{
                listStyle: 'none',
                color: 'var(--color-secondary-text)',
              }}
            >
              <li>React</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
            <div
              className="d-flex justify-content-end gap-3"
              style={{ fontSize: '30px' }}
            >
              <a
                href="https://github.com/gianlucadonofrio/calendar-MERN-app"
                target={'_blank'}
                rel="noreferrer "
                className=" btn-socials"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://calendar-app-two.vercel.app/"
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
              Journal App
            </h5>
            <p className="card-text p-3 mt-2 text-card-desktop text-start">
              Aplicación web de diario personal hecha con ReactJS, Sign In/Up
              con Firebase, Google Sign In. Se pueden crear, editar, eliminar y
              actualizar notas.
            </p>
            <ul
              className=" d-flex gap-2 justify-content-start card-text p-0"
              style={{
                listStyle: 'none',
                color: 'var(--color-secondary-text)',
              }}
            >
              <li>React</li>
              <li>Firebase</li>
              <li>Material UI</li>
            </ul>
            <div
              className="d-flex justify-content-start gap-3"
              style={{ fontSize: '30px' }}
            >
              <a
                href="https://github.com/gianlucadonofrio/react-course/tree/main/08-journal-app"
                target={'_blank'}
                rel="noreferrer "
                className="btn-socials"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://journal-app-beige.vercel.app"
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
              The Food Truck
            </h5>
            <p className="card-text p-3 mt-2 text-card-desktop">
              Aplicación web de pedido de comidas funcional, hecha con VueJS +
              Vuetify, con un carrito de compras, registro e inicio de sesión.
            </p>
            <ul
              className=" d-flex gap-2 justify-content-end card-text"
              style={{
                listStyle: 'none',
                color: 'var(--color-secondary-text)',
              }}
            >
              <li>Vue Js</li>
              <li>Vuetify</li>
            </ul>
            <div
              className="d-flex justify-content-end gap-3"
              style={{ fontSize: '30px' }}
            >
              <a
                href="https://github.com/gianlucadonofrio/theFoodTruck-vueJs"
                target={'_blank'}
                rel="noreferrer "
                className=" btn-socials"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://the-food-truck-vue-js.vercel.app/"
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
    </>
  );
};
