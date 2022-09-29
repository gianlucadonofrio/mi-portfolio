import { useContext } from 'react';
import '../../styles/projects.css';
import { LanguageContext } from '../context/LanguageContext';
import { ProjectsCards } from './ProjectsCards/ProjectsCards';

export const Projects = () => {
  const { languagePage } = useContext(LanguageContext);
  return (
    <div
      id="projects"
      className="container min-vh-100 d-flex flex-column justify-content-md-center align-items-center mt-5 mb-5"
    >
      <div
        className="d-flex flex-column align-items-center "
        id="title_about_me"
      >
        <p style={{ color: 'var(--color-secondary-text)' }} className="m-0">
          {languagePage.proyecto_text_titulo}
        </p>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '600' }}>
          {languagePage.proyecto_titulo}
        </h1>
        <div className="vbar"></div>
      </div>

      <div className="d-flex flex-column justify-content-center">
        <ProjectsCards languagePage={languagePage} />
      </div>
    </div>
  );
};
