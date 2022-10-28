export const SkillsSection = ({ languagePage }) => {
  return (
    <section>
      <h3
        className=" mt-1"
        style={{
          fontSize: '1.5rem',
          fontWeight: '600',
        }}
      >
        {languagePage.acerca_de_mi__title_habilidades}
      </h3>
      <div className="vbar"></div>
      <div className="d-flex flex-wrap flex-column flex-md-row">
        {languagePage.skills__cards.map((card) => (
          <div
            key={card.id}
            className="d-flex col-md-6 mt-1 align-items-center justify-content-center gap-3"
          >
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: '25%',
              }}
            >
              <i
                className={`fa-solid ${card.icon}`}
                style={{
                  color: 'var(--color-buttons)',
                  fontSize: '70px',
                }}
              ></i>
            </div>
            <div
              className="d-flex flex-column"
              style={{
                width: '75%',
              }}
            >
              <h5
                style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                }}
              >
                {card.title}
              </h5>
              <p
                style={{
                  fontSize: '1.6rem',
                }}
              >
                {card.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="badge bg-secondary me-2 mt-2"
                    style={{
                      padding: '10px',
                    }}
                  >
                    {skill.skill}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
