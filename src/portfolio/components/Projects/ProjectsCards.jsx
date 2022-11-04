export const ProjectsCards = ({ languagePage: data }) => {
  return (
    <>
      {data.projects__info.map((project) => (
        <section key={project.id} className="card-project-row">
          <div className="card mt-5 card-project ">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
              <div className=" d-flex justify-content-center col-lg-8 project-image">
                <img
                  src={require(`../../../assets/projects/project-${project.id}.webp`)}
                  className="card-img-top rounded"
                  alt={project.proyecto__title}
                  style={{
                    display: 'block',
                    height: '100%',
                    width: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <div
                className="card-body col-lg-4"
                style={{
                  zIndex: '2',
                }}
              >
                <h5
                  className="card-title"
                  style={{
                    fontSize: '2rem',
                    fontWeight: '600',
                  }}
                >
                  {project.proyecto__title}
                </h5>
                <p className="card-text project-description mt-3" style={{}}>
                  {project.proyecto__description}
                </p>
                <div
                  className="projects-links d-flex flex-row w-100 justify-content-center"
                  style={{ width: 'fit-content' }}
                >
                  <a
                    href={project.proyecto__url_github}
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
                    href={project.proyecto__url_web}
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <img
                      src={'./icons/external-link.svg'}
                      alt="Web Icon"
                      className="btn-socials p-2"
                    />
                  </a>
                </div>
                <ul
                  className="projects-technologies d-flex flex-wrap m-0 p-1 gap-2 justify-content-center"
                  style={{ listStyleType: 'none', height: 'fit-content' }}
                >
                  {project.proyecto__tecnologias.map((tecnologia) => (
                    <li key={tecnologia}>
                      <p className="text-technologies">{tecnologia}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr />
        </section>
      ))}
    </>
  );
};
