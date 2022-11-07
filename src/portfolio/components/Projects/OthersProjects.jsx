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
      <div
        className="d-flex flex-column flex-md-row mt-4 flex-md-wrap align-items-center justify-content-center"
        style={{
          gap: '15px',
        }}
      >
        {data.others__projects.map((project, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-start card-box-others-projects"
          >
            <div
              className="d-flex justify-content-between align-items-center w-100"
              style={{
                height: '60px',
              }}
            >
              <i className="fa-regular fa-folder icon-others-projects"></i>
              <div className="d-flex gap-4">
                <a
                  href={project.proyecto__url_github}
                  target={'_blank'}
                  rel="noreferrer"
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
                    aria-label="web"
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
              <h3
                className="mt-2"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                }}
              >
                {project.proyecto__title}
              </h3>
              <p
                style={{
                  fontSize: '1rem',
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
                      fontSize: '0.8rem',
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
        ))}
      </div>
    </div>
  );
};
