import { useContext } from 'react';
import '../../styles/projects.css';
import { LanguageContext } from '../context/LanguageContext';
import { ProjectsCardDesktop } from './ProjectsCard/ProjectsCardDesktop';
import { ProjectsCardMobile } from './ProjectsCard/ProjectsCardMobile';

export const Projects = () => {
  const { languagePage } = useContext(LanguageContext);
  return (
    <div
      id="projects"
      className="container min-vh-100 d-flex flex-column justify-content-md-center align-items-center mt-5 mb-5"
    >
      <div
        className="container-fluid d-flex flex-column align-items-center "
        id="title_about_me"
      >
        <p style={{ color: 'var(--color-secondary-text)' }} className="m-0">
          {languagePage.proyecto_text_titulo}
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: '600' }}>
          {languagePage.proyecto_titulo}
        </h1>
        <div className="vbar"></div>
      </div>

      <div className="container-fluid d-flex flex-column justify-content-center">
        <div className="container d-none d-lg-block ">
          <ProjectsCardDesktop languagePage={languagePage} />
        </div>
        <div className="container d-lg-none">
          <ProjectsCardMobile languagePage={languagePage} />
        </div>
      </div>
    </div>
  );
};
