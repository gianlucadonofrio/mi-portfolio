export const OthersProjects = ({ languagePage: data }) => {
  const icons_styles = {
    fontSize: '1.9rem',
    margin: '0 0.1rem',
  };
  return (
    <div className="mt-5">
      <div className="d-flex flex-column align-items-center">
        <h1
          className="text-center"
          style={{
            fontSize: '2.3rem',
            fontWeight: '600  ',
          }}
        >
          {data.others__projects__title}
        </h1>
        <div className="vbar"></div>
      </div>
      <div className="row mt-4">
        {data.others__projects.map((project) => (
          <div
            className="col-12 col-md-6 col-lg-4 mb-3 d-flex align-items-stretch"
            key={project.id}
          >
            <div className="card p-3 ">
              <div className="d-flex justify-content-between align-align-items-center">
                <i className="fa-regular fa-folder icon-others-projects"></i>
                <div className="d-flex align-items-center gap-3">
                  <a
                    href={project.proyecto__url_github}
                    target={'_blank'}
                    rel="noreferrer"
                    role={'button'}
                    aria-label="github"
                  >
                    <i
                      className="fa-brands fa-github-alt icon-social"
                      style={{ ...icons_styles }}
                    ></i>
                  </a>
                  {project.proyecto__url_web && (
                    <a
                      href={project.proyecto__url_web}
                      target={'_blank'}
                      rel="noreferrer"
                      role={'button'}
                      aria-label="web-other-project"
                    >
                      <i
                        className="fa-solid fa-arrow-up-right-from-square icon-social"
                        style={{ ...icons_styles }}
                      ></i>
                    </a>
                  )}
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center h-100 align-items-start">
                <p
                  className="mt-2"
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                  }}
                >
                  {project.proyecto__title}
                </p>
                <p
                  style={{
                    fontSize: '0.9rem',
                    textAlign: 'start',
                  }}
                >
                  {project.proyecto__description}
                </p>
              </div>
              <ul
                className="d-flex flex-wrap m-0 p-1 gap-2 w-100 justify-content-center"
                style={{ listStyleType: 'none', height: 'fit-content' }}
              >
                {project.proyecto__tecnologias.map((tecnologia) => (
                  <li key={tecnologia}>
                    <p
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--color-text-technologies)',
                        fontWeight: '600',
                      }}
                    >
                      {tecnologia}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
