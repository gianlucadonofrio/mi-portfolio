export const SkillsSection = ({ languagePage }) => {
  return (
    <section className="mt-5">
      <div className="d-flex flex-column flex-md-row flex-wrap text-center">
        {languagePage.skills__cards.map((card) => (
          <div
            key={card.id}
            className="d-flex col-md-6 flex-column align-items-center justify-content-center gap-2"
          >
            <div className="box-icons-skills">
              <i
                className={`fa-solid ${card.icon}`}
                style={{
                  WebkitBoxReflect:
                    'below 3px linear-gradient(transparent, transparent, transparent, #04060f25)',
                }}
              ></i>
            </div>
            <div
              className="d-flex flex-column"
              style={{
                width: '75%',
              }}
            >
              <p
                style={{
                  fontSize: '2.3rem',
                  fontWeight: '600',
                }}
                className="text-center"
              >
                {card.title}
              </p>
              <p
                style={{
                  fontSize: '1.6rem',
                  height: '150px',
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
