export const SkillsCards = ({ languagePage }) => {
  return (
    <div className="skills-cards mt-2 d-flex flex-column flex-md-row flex-wrap gap-2 justify-content-center">
      {languagePage.skills__cards.map((card) => (
        <div
          key={card.id}
          className="card skill-card-aboutme mt-3"
          style={{
            backgroundColor: card.background_color,
            overflow: 'hidden',
          }}
        >
          <img
            src={require(`../../../assets/skills/${card.img_code}`)}
            alt=""
            className="card-img-skills"
          />
          <div className="d-flex flex-column align-items-start justify-content-center mt-5">
            <i
              className={`fa-solid ${card.icon} ms-5`}
              style={{ fontSize: '100px', color: 'var(  --color-navbar)' }}
            ></i>
            <h5
              style={{ fontSize: '22px', fontWeight: '600' }}
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
                className="d-flex align-items-center mt-2"
              >
                <i
                  className="fa-solid fa-circle-check pe-2"
                  style={{ color: '#45c4b0' }}
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
