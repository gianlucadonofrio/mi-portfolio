export const AboutMeText = () => {
  return (
    <>
      {document.documentElement.lang === 'es' ? (
        <div>
          <p>
            Soy desarrollador <strong>Web Full Stack</strong> 🚀. Me encanta
            crear sitios web que brinden una experiencia de usuario única y
            satisfactoria. Puedes ver algunos de mis proyectos en la sección de
            <a
              href="#projects"
              style={{
                textDecoration: 'none',
                color: 'var(--color-buttons)',
                fontStyle: 'italic',
                fontWeight: '600',
              }}
            >
              {' '}
              proyectos.
            </a>
          </p>

          <p>
            Soy una persona autodidacta, responsable y comprometida con mi
            trabajo. Constantemente estoy aprendiendo nuevas tecnologías y
            herramientas para mejorar mis habilidades. Actualmente estoy
            especializándome en el desarrollo Frontend en la carrera{' '}
            <a
              href="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"
              style={{
                textDecoration: 'none',
                color: 'var(--color-buttons)',
                fontStyle: 'italic',
                fontWeight: '600',
              }}
              target="_blank"
              rel="noreferrer"
            >
              Certified Tech Developer
            </a>{' '}
            de Digital House.
          </p>
          <p>
            No dude en{' '}
            <a
              href="#contactMe"
              style={{
                textDecoration: 'none',
                color: 'var(--color-buttons)',
                fontStyle: 'italic',
                fontWeight: '600',
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
            I am a <strong>Full Stack Web Developer</strong> 🚀. I love creating
            websites that provide a unique and satisfying user experience. You
            can see some of my projects in the{' '}
            <a
              href="#projects"
              style={{
                textDecoration: 'none',
                color: 'var(--color-buttons)',
                fontStyle: 'italic',
                fontWeight: '600',
              }}
            >
              projects
            </a>
            section.
          </p>
          <p>
            I am an autodidact, responsible and committed person with my work. I
            am constantly learning new technologies and tools to improve my
            skills. Currently I am specializing in Frontend development in the
            course{' '}
            <a
              href="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer"
              style={{
                textDecoration: 'none',
                color: 'var(--color-buttons)',
                fontStyle: 'italic',
                fontWeight: '600',
              }}
              target="_blank"
              rel="noreferrer"
            >
              Certified Tech Developer
            </a>{' '}
            of Digital House.
          </p>
          <p>
            Feel free to{' '}
            <a
              href="#contactMe"
              style={{
                textDecoration: 'none',
                color: 'var(--color-buttons)',
                fontStyle: 'italic',
                fontWeight: '600',
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
