import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const Footer = () => {
  const { languagePage } = useContext(LanguageContext);
  return (
    <div className="w-100">
      <hr />
      <div className="container d-flex flex-column align-items-center pt-3">
        <h2>{languagePage.contactame} :)</h2>
        <p className="mt-5">{languagePage.footer__subtitulo}</p>
        <div className="d-flex justify-content-center flex-row">
          <a
            href="https://www.linkedin.com/in/gianlucadonofrio/"
            target={'_blank'}
            className="btn-socials"
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
      </div>
      <p className="container mt-3 p-3"> {languagePage.footer__texto}</p>
    </div>
  );
};
