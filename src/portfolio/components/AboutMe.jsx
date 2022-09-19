import { useContext } from 'react';
import '../../styles/aboutMe.css';
import { LanguageContext } from '../context/LanguageContext';
import { SkillsCards } from './SkillsCards/SkillsCards';

export const AboutMe = () => {
  const { languagePage } = useContext(LanguageContext);

  return (
    <div
      id="aboutMe"
      className="container min-vh-100 d-flex flex-column justify-content-md-center align-items-center "
    >
      <div
        className="container-fluid d-flex flex-column align-items-center "
        id="title_about_me"
      >
        <p style={{ color: 'var(--color-secondary-text)' }} className="m-0">
          {languagePage.acerca_de_mi__text_title}
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: '600' }}>
          {languagePage.acerca_de_mi}
        </h1>
        <div className="vbar"></div>
      </div>
      <div
        className="container d-flex flex-column"
        style={{ width: 'fit-content' }}
      >
        <div className="d-flex align-items-center flex-column flex-md-row">
          <p className="text-justify mt-3 pe-md-5 ">
            {languagePage.acerca_de_mi__text}
          </p>
        </div>

        <div id="skills_dropdown d-flex align-items-center">
          <div
            className="d-flex flex-column align-items-start mt-1"
            id="title_about_me"
          >
            <h1 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              {languagePage.acerca_de_mi__title_habilidades}
            </h1>
            <div className="vbar w-100"></div>
          </div>
          <div className="container-fluid p-0">
            <SkillsCards languagePage={languagePage} />
          </div>
        </div>
      </div>
    </div>
  );
};
