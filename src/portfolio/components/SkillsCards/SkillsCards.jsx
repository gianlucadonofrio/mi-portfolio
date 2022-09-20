export const SkillsCards = ({ languagePage }) => {
  return (
    <div className="skills-cards-container d-flex flex-column flex-md-row flex-wrap gap-4 justify-content-center">
      {languagePage.skills__cards.map((card) => (
        <div
          key={card.id}
          className="card skills-card-aboutme mt-3 position-relative"
          style={{
            overflow: 'hidden',
            boxShadow: '0 0 20px  var(--color-card-shadow)',
            backgroundColor: 'var(--color-text)',
          }}
        >
          <img
            src={require(`../../../assets/skills/${card.img_code}`)}
            alt="skill"
            className="card-img-skills"
          />
          <div className="d-flex flex-column align-items-center justify-content-center mt-5 mb-2">
            <i
              className={`fa-solid ${card.icon}`}
              style={{
                fontSize: '100px',
                color: 'var(--color-buttons)',
              }}
            ></i>
            <h5
              style={{
                fontSize: '24px',
                fontWeight: '600',
                color: 'var(--color-text-projects)',
              }}
              className="mt-4"
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
                  color: 'var(--color-text-projects)',
                  fontWeight: '600',
                  zIndex: '2',
                }}
                className="d-flex align-items-center mt-2"
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
