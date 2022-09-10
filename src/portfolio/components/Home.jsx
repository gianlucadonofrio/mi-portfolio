import '../../styles/home.css';

export const Home = () => {
  return (
    <div
      id="home"
      className="container-fluid  min-vh-100 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center p-0"
    >
      <div className="container-fluid d-flex flex-column-reverse justify-content-start align-items-center">
        <div className="container-fluid d-flex justify-content-center flex-wrap p-0">
          <a
            href={require('../../assets/CV-Gianluca-Donofrio.pdf')}
            target={'_blank'}
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
            download={'CV-Gianluca-Donofrio.pdf'}
          >
            <p className="btn__cv__contactme d-flex align-items-center justify-content-center">
              Curriculum
              <i className="fa-solid fa-cloud-arrow-down ps-1"></i>
            </p>
          </a>
          <a href="#contactMe" style={{ textDecoration: 'none' }}>
            <p className="btn__cv__contactme d-flex align-items-center justify-content-center">
              Contáctame
              <i className="fa-solid fa-paper-plane ps-1"></i>
            </p>
          </a>
        </div>
        <div className="d-flex flex-row align-items-center">
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
      <div className="container-fluid">
        <img
          src={require('../../assets/profile.png')}
          alt="profile"
          className="img-profile img-fluid"
          style={{
            backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 68%)',
          }}
        />
      </div>
    </div>
  );
};
