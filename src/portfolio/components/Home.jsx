import { useContext } from 'react';
import '../../styles/home.css';
import { LanguageContext } from '../context/LanguageContext';
export const Home = () => {
  const { languagePage } = useContext(LanguageContext);
  return (
    <section
      id="home"
      className="container min-vh-100 d-flex flex-column-reverse flex-md-row justify-content-center align-items-center"
    >
      <div
        className="d-flex flex-md-column align-items-center justify-content-end mt-3"
        style={{ width: 'fit-content' }}
      >
        <a
          href="https://www.linkedin.com/in/gianlucadonofrio/"
          target={'_blank'}
          rel="noreferrer"
        >
          <img
            src={'./icons/brand-linkedin.svg'}
            alt="LinkedIn Icon"
            className="btn-socials p-2"
          />
        </a>
        <a
          href="https://github.com/gianlucadonofrio"
          target={'_blank'}
          rel="noreferrer"
        >
          <img
            src={'./icons/brand-github.svg'}
            alt="GitHub Icon"
            className="btn-socials p-2"
          />
        </a>
        <a
          href="mailto: gian.donofrio2000@gmail.com"
          target={'_blank'}
          rel="noreferrer"
        >
          <img
            src={'./icons/mail.svg'}
            alt="Mail Icon"
            className="btn-socials p-2"
          />
        </a>
      </div>
      <div className="container-fluid d-flex flex-column-reverse justify-content-start align-items-center">
        <div className="container-fluid d-flex justify-content-center flex-wrap flex-md-nowrap mt-4">
          <a
            href={require('../CV/CV-Gianluca-Donofrio.pdf')}
            download="CV-Gianluca-Donofrio.pdf"
            target={'_blank'}
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <p className="btn__cv__contactme d-flex align-items-center justify-content-center">
              {languagePage.home__curriculum}
              <img
                src={'./icons/download.svg'}
                alt="Download Icon"
                className="ps-1 cv_contactme__icon"
              />
            </p>
          </a>
          <a href="#contactMe" style={{ textDecoration: 'none' }}>
            <p className="btn__cv__contactme d-flex align-items-center justify-content-center">
              {languagePage.contactame}
              <img
                src={'./icons/send.svg'}
                alt="Send Icon"
                className="ps-1 cv_contactme__icon"
                
              />
            </p>
          </a>
        </div>
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="title__description">{languagePage.home__titulo}</p>
            <h1 className="title__name">
              Gianluca
              <span>D'Onofrio</span>
            </h1>
            <p className="title__description">{languagePage.home__subtitulo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
