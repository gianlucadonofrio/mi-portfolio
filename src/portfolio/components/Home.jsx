import '../../styles/home.css';

export const Home = () => {
  return (
    <div
      id="home"
      className="container-fluid min-vh-100 d-flex flex-column-reverse flex-md-row justify-content-end align-items-center"
    >
      <div
        className="container d-flex flex-column align-items-center justify-content-center d-none d-md-flex"
        id="socials-desktop"
        style={{ width: 'fit-content' }}
      >
        <a
          href="https://www.linkedin.com/in/gianlucadonofrio/"
          target={'_blank'}
          className="btn-socials"
          rel="noreferrer"
        >
          <i
            className="fa-brands fa-linkedin p-1"
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
            className="fa-brands fa-github p-1"
            style={{ fontSize: '35px' }}
          ></i>
        </a>
      </div>
      <div className="container d-flex flex-column-reverse justify-content-start align-items-center col-md-6 p-0">
        <div className="container d-flex justify-content-center w-100 flex-wrap">
          <a
            href="https://drive.google.com/file/d/1AjktKDYo-TKXjJK4B9k8fREygwsy9sle/view?usp=sharing"
            target={'_blank'}
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button
              className="btn btn__cv__contactme d-flex align-items-center justify-content-center"
              style={{ width: '160px' }}
            >
              Curriculum
              <i className="fa-solid fa-cloud-arrow-down ps-1"></i>
            </button>
          </a>
          <a href="#contactMe" style={{ textDecoration: 'none' }}>
            <button
              className="btn btn__cv__contactme d-flex align-items-center justify-content-center"
              style={{ width: '160px' }}
            >
              Contáctame
              <i className="fa-solid fa-paper-plane ps-1"></i>
            </button>
          </a>
        </div>
        <div className="d-flex flex-row align-items-center">
          {/* <div
            className="container d-flex flex-column d-sm-none p-0"
            style={{ width: 'fit-content' }}
            id="socials-mobile"
          >
            <a
              href="https://www.linkedin.com/in/gianlucadonofrio/"
              target={'_blank'}
              className="btn-socials"
              rel="noreferrer"
            >
              <i
                className="fa-brands fa-linkedin p-1"
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
                className="fa-brands fa-github p-1"
                style={{ fontSize: '35px' }}
              ></i>
            </a>
          </div> */}
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="w-100 text-center ps-md-3 mt-2">
              Hola 👋🏼, soy
              <br />
              <span className="title__name"> Gianluca.</span>
            </h1>
            <p className="title__description ps-3">
              Fullstack Developer, apasionado por el Frontend.
            </p>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-end col-md-5">
        <img
          src={require('../../assets/profile.png')}
          alt="profile"
          className="img-profile mt-3"
          style={{
            backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 68%)',
          }}
        />
      </div>
    </div>
  );
};
