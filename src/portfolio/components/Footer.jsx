export const Footer = () => {
  return (
    <div className="w-100">
      <hr />
      <div className="container d-flex flex-column align-items-center pt-3">
        <h2>Contáctame :) </h2>
        <p className="mt-5">O también puedes seguirme en mis redes sociales:</p>
        <div className="d-flex justify-content-center flex-row">
          <a
            href="https://www.linkedin.com/in/gianlucadonofrio/"
            target={'_blank'}
            className="btn-socials"
            rel="noreferrer"
          >
            <i
              className="fa-brands fa-linkedin p-2"
              style={{ fontSize: '35px' }}
            ></i>
          </a>
          <a
            href="https://github.com/gianlucadonofrio"
            target={'_blank'}
            className="btn-socials"
            rel="noreferrer"
          >
            <i
              className="fa-brands fa-github p-2"
              style={{ fontSize: '35px' }}
            ></i>
          </a>
        </div>
      </div>
      <p className="container mt-3 p-3"> Hecho con ❤️ por Gianluca D'Onofrio</p>
    </div>
  );
};
