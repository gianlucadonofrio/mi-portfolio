export const ProjectsCardMobile = () => {
  const showDescription = (e) => {
    e.preventDefault();
    const description1 = document.querySelector('.project-1');
    const description2 = document.querySelector('.project-2');
    const description3 = document.querySelector('.project-3');

    if (e.target.id === 'project-1') {
      description1.classList.toggle('d-none');
    } else if (e.target.id === 'project-2') {
      description2.classList.toggle('d-none');
    } else if (e.target.id === 'project-3') {
      description3.classList.toggle('d-none');
    }
  };

  return (
    <>
      <div className="card mb-4 mt-3 project-card" id="project-1">
        <img
          src={require('../../../assets/projects/project-1.png')}
          className="card-img-top"
          alt="Project 1"
        />
        <div className="card-body">
          <div className="card-text d-flex justify-content-between align-items-center">
            <h5
              className="card-title"
              style={{ fontWeight: '600', color: 'var(--color-navbar)' }}
            >
              Calendar MERN
            </h5>
            <h6
              onClick={showDescription}
              id="project-1"
              style={{ color: 'var(  --color-buttons)' }}
            >
              Ver más...
            </h6>
            <div className="card-img-overlay project-1 text-card-img d-none d-flex flex-column justify-content-center align-items-center  text-black animate__animated animate__fadeIn animate__faster">
              <p className="text-justify pe-3">
                Aplicación web de calendario colaborativo, donde se pueden ver,
                editar, crear o eliminar los eventos.
              </p>
              <div className="d-flex gap-3" style={{ fontSize: '30px' }}>
                <a
                  href="https://github.com/gianlucadonofrio/calendar-MERN-app"
                  target={'_blank'}
                  rel="noreferrer "
                  className=" btn-socials"
                  style={{ color: 'var( --color-buttons)' }}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://calendar-app-two.vercel.app/"
                  target={'_blank'}
                  rel="noreferrer "
                  className=" btn-socials"
                  style={{ color: 'var( --color-buttons)' }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
              <i
                className="fa-solid fa-circle-xmark position-absolute top-0 d-flex justify-content-end p-2 w-100 "
                id="project-1"
                style={{ fontSize: '30px', color: 'black' }}
                onClick={showDescription}
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4 project-card" id="project-2">
        <img
          src={require('../../../assets/projects/project-2.png')}
          className="card-img-top"
          alt="Project 2"
        />
        <div className="card-body">
          <div className="card-text d-flex justify-content-between align-items-center">
            <h5
              className="card-title"
              style={{ fontWeight: '600', color: 'var(--color-navbar)' }}
            >
              Journal App
            </h5>
            <h6
              onClick={showDescription}
              id="project-2"
              style={{ color: 'var(  --color-buttons)' }}
            >
              Ver más...
            </h6>
            <div className="card-img-overlay project-2 text-card-img d-none d-flex flex-column justify-content-center align-items-center  text-black animate__animated animate__fadeIn  animate__faster">
              <p className="text-justify pe-3">
                Aplicación web de diario personal hecha con ReactJS, Sign In/Up
                con Firebase, Google Sign In. Se pueden crear, editar, eliminar
                y actualizar notas.
              </p>
              <div className="d-flex gap-3" style={{ fontSize: '30px' }}>
                <a
                  href="https://github.com/gianlucadonofrio/react-course/tree/main/08-journal-app"
                  target={'_blank'}
                  rel="noreferrer "
                  className=" btn-socials"
                  style={{ color: 'var( --color-buttons)' }}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://journal-app-beige.vercel.app"
                  target={'_blank'}
                  rel="noreferrer "
                  className=" btn-socials"
                  style={{ color: 'var( --color-buttons)' }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
              <i
                className="fa-solid fa-circle-xmark position-absolute top-0 d-flex justify-content-end p-2 w-100 "
                style={{ fontSize: '30px', color: 'black' }}
                onClick={showDescription}
                id="project-2"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div className="card project-card" id="project-3">
        <img
          src={require('../../../assets/projects/project-3.png')}
          className="card-img-top"
          alt="Project 3"
        />
        <div className="card-body">
          <div className="card-text d-flex justify-content-between align-items-center">
            <h5
              className="card-title"
              style={{ fontWeight: '600', color: 'var(  --color-navbar)' }}
            >
              The Food Truck
            </h5>
            <h6
              onClick={showDescription}
              id="project-3"
              style={{ color: 'var(  --color-buttons)' }}
            >
              Ver más...
            </h6>
            <div className="card-img-overlay text-card-img project-3 d-none d-flex flex-column justify-content-center align-items-center  text-black animate__animated animate__fadeIn animate__faster">
              <p className="text-justify">
                Aplicación web de pedido de comidas funcional, hecha con VueJS +
                Vuetify, con un carrito de compras, registro e inicio de sesión.
              </p>
              <div className="d-flex gap-3" style={{ fontSize: '30px' }}>
                <a
                  href="https://github.com/gianlucadonofrio/theFoodTruck-vueJs"
                  target={'_blank'}
                  rel="noreferrer "
                  className=" btn-socials"
                  style={{ color: 'var( --color-buttons)' }}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://the-food-truck-vue-js.vercel.app/"
                  target={'_blank'}
                  rel="noreferrer "
                  className=" btn-socials"
                  style={{ color: 'var( --color-buttons)' }}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
              <i
                className="fa-solid fa-circle-xmark position-absolute top-0 end-0 p-2"
                style={{ fontSize: '30px', color: 'black' }}
                id="project-3"
                onClick={showDescription}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
