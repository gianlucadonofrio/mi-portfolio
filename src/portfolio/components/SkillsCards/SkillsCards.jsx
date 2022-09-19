export const SkillsCards = ({ languagePage }) => {
  return (
    <div className="skills-cards-container mt-2 d-flex flex-column flex-md-row flex-wrap gap-4 justify-content-center">
      {languagePage.skills__cards.map((card) => (
        <div
          key={card.id}
          className="card skills-card-aboutme mt-3"
          style={{
            backgroundColor: '#161b22',
            overflow: 'hidden',
            boxShadow: '0 0 15px 0px var(--color-card-shadow)',
          }}
        >
          <img
            src={require(`../../../assets/skills/${card.img_code}`)}
            alt="skill"
            className="card-img-skills"
          />
          <div className="d-flex flex-column align-items-start justify-content-center mt-5">
            <i
              className={`fa-solid ${card.icon} ms-5`}
              style={{
                fontSize: '100px',
                color: 'var(--color-text-navbar)',
                zIndex: '2',
              }}
            ></i>
            <h5
              style={{
                fontSize: '22px',
                fontWeight: '600',
                color: 'var(  --color-text-navbar)',
              }}
              className="mt-3 ps-2"
            >
              {card.title}
            </h5>
          </div>
          <ul className="skills-grid">
            {card.skills.map((skill) => (
              <li
                key={skill.id}
                style={{
                  listStyleType: 'none',
                  color: 'var(--color-text-navbar)',
                  fontWeight: '600',
                }}
                className="d-flex align-items-center mt-3"
              >
                <i
                  className="fa-solid fa-circle-check pe-2"
                  style={{ color: 'var(--color-buttons)' }}
                ></i>
                {skill.skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
