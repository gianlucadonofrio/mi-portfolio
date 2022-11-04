import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const Footer = () => {
  const { languagePage } = useContext(LanguageContext);
  return (
    <section className="w-100">
      <hr />
      <div className="container d-flex flex-column align-items-center pt-3 ">
        <h3 className="mt-2 p-4 text-center">{languagePage.thanks}</h3>
        <a
          href="#contactMe"
          className="mt-3"
          style={{
            textDecoration: 'none',
            color: 'var(--color-icons-skills-and-text-important)',
            fontStyle: 'italic',
            fontWeight: '600',
            fontSize: '2rem',
          }}
        >
          {languagePage.contactame}
        </a>
        <p className="p-4 text-center">{languagePage.footer__subtitulo}</p>
        <div className="d-flex justify-content-center flex-row">
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
      </div>
      <p
        className="container mt-3 p-3"
        style={{
          fontWeight: '600',
        }}
      >
        {languagePage.footer__texto}
      </p>
    </section>
  );
};
