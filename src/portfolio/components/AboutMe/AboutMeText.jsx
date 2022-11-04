export const AboutMeText = () => {
  const textStyles = {
    textDecoration: 'none',
    color: 'var( --color-icons-skills-and-text-important)',
    fontStyle: 'italic',
    fontWeight: '600',
  };

  return (
    <>
      {document.documentElement.lang === 'es' ? (
        <div>
          <p>
            Soy desarrollador <strong>Web Full Stack</strong>. Me encanta crear
            sitios web que brinden una experiencia de usuario única y
            satisfactoria. Puedes ver algunos de mis proyectos en la sección de
            <a
              href="#projects"
              style={{
                ...textStyles,
              }}
            >
              {' '}
              proyectos.
            </a>
          </p>

          <p>
            Soy una persona autodidacta, responsable y comprometida con mi
            trabajo. Constantemente estoy aprendiendo nuevas tecnologías y
            herramientas para mejorar mis habilidades. De bajo, puede ver mis
            habilidades y tecnologías que uso.
          </p>
          <p>
            No dude en{' '}
            <a
              href="#contactMe"
              style={{
                ...textStyles,
              }}
            >
              contactarse
            </a>{' '}
            conmigo si tiene alguna pregunta.
          </p>
        </div>
      ) : (
        <div>
          <p>
            I am a <strong>Full Stack Web Developer</strong>. I love creating
            websites that provide a unique and satisfying user experience. You
            can see some of my projects in the{' '}
            <a
              href="#projects"
              style={{
                ...textStyles,
              }}
            >
              projects
            </a>{' '}
            section.
          </p>
          <p>
            I am an autodidact, responsible and committed person with my work. I
            am constantly learning new technologies and tools to improve my
            skills. Below, you can see my skills and technologies that I use.
          </p>
          <p>
            Feel free to{' '}
            <a
              href="#contactMe"
              style={{
                ...textStyles,
              }}
            >
              contact me
            </a>{' '}
            if you have any questions.
          </p>
        </div>
      )}
    </>
  );
};
