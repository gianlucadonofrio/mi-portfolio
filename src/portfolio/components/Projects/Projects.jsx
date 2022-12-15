import { useContext } from "react";
import "../../../styles/projects.css";
import { LanguageContext } from "../../context/LanguageContext";
import { UnderConstruction } from "../UnderConstruction";
import { OthersProjects } from "./OthersProjects";
import { ProjectsCards } from "./ProjectsCards";

export const Projects = () => {
  const { languagePage } = useContext(LanguageContext);
  return (
    <section id="projects" className="container vh-100">
      <div
        className="d-flex flex-column align-items-center "
        id="title_about_me"
      >
        <p style={{ color: "var(--color-secondary-text)" }} className="m-0">
          {languagePage.proyecto_text_titulo}
        </p>
        <h1 style={{ fontSize: "2.8rem", fontWeight: "600" }}>
          {languagePage.proyecto_titulo}
        </h1>
        <div className="vbar"></div>
      </div>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        {languagePage.projects__info.length === 0 ? (
          <UnderConstruction />
        ) : (
          <>
            <div className="d-flex flex-column justify-content-center">
              <ProjectsCards languagePage={languagePage} />
            </div>
            <div className="container ">
              <OthersProjects languagePage={languagePage} />
            </div>
          </>
        )}
      </div>
    </section>
  );
};
