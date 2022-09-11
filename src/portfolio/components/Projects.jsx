import '../../styles/projects.css';
import { ProjectsCardDesktop } from './ProjectsCard/ProjectsCardDesktop';
import { ProjectsCardMobile } from './ProjectsCard/ProjectsCardMobile';

export const Projects = () => {
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
          Algunos proyectos que he realizado
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: '600' }}>Mis proyectos</h1>
        <div className="vbar"></div>
      </div>

      <div className="container-fluid d-flex flex-column justify-content-center">
        <div className="container d-none d-lg-block ">
          <ProjectsCardDesktop />
        </div>
        <div className="container d-lg-none">
          <ProjectsCardMobile />
        </div>
      </div>
    </div>
  );
};
