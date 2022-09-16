import { useContext } from 'react';
import '../../styles/home.css';
import { LanguageContext } from '../context/LanguageContext';

export const Home = () => {
  const { languagePage } = useContext(LanguageContext);
  return (
    <div
      id="home"
      className="container min-vh-100 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center p-0"
    >
      <div
        className="d-flex flex-md-column align-items-center justify-content-end mb-5"
        style={{ width: 'fit-content' }}
      >
        <a
          href="https://www.linkedin.com/in/gianlucadonofrio/"
          target={'_blank'}
          className="btn-socials "
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin-in p-2"></i>
        </a>
        <a
          href="https://github.com/gianlucadonofrio"
          target={'_blank'}
          className="btn-socials"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github p-2"></i>
        </a>
        <a
          href="mailto: gian.donofrio2000@gmail.com"
          target={'_blank'}
          className="btn-socials"
          rel="noreferrer"
        >
          <i className="fa-solid fa-envelope p-2"></i>
        </a>
      </div>
      <div className="container-fluid d-flex flex-column-reverse justify-content-start align-items-center">
        <div className="container-fluid d-flex justify-content-center flex-wrap p-0 flex-md-nowrap gap-1">
          <a
            href={require('../../assets/CV-Gianluca-Donofrio.pdf')}
            target={'_blank'}
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
            download={'CV-Gianluca-Donofrio.pdf'}
          >
            <p className="btn__cv__contactme d-flex align-items-center justify-content-center">
              {languagePage.home__curriculum}
              <i className="fa-solid fa-cloud-arrow-down ps-1"></i>
            </p>
          </a>
          <a href="#contactMe" style={{ textDecoration: 'none' }}>
            <p className="btn__cv__contactme d-flex align-items-center justify-content-center">
              {languagePage.contactame}
              <i className="fa-solid fa-paper-plane ps-1"></i>
            </p>
          </a>
        </div>
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="w-100 text-center ps-md-3 mt-2">
              {languagePage.home__titulo}
              <br />
              <span className="title__name"> Gianluca.</span>
            </h1>
            <p className="title__description ps-3">
              {languagePage.home__subtitulo}
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <img
          src={require('../../assets/profile.png')}
          alt="profile"
          className="img-profile img-fluid mt-2 mt-md-0"
          style={{
            backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 68%)',
          }}
        />
      </div>
    </div>
  );
};
