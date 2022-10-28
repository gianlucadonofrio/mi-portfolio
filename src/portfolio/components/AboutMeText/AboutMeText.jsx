export const AboutMeText = () => {
  return (
    <>
      {document.documentElement.lang === 'es' ? (
        <p>
          Soy un desarrollador <strong>Web Full Stack</strong> 🚀. Me encanta
          crear sitios web funcionales y atractivos. Puedes ver algunos de mis
          proyectos en la sección de{' '}
          <a
            href="#projects"
            style={{
              textDecoration: 'none',
              color: 'var(--color-buttons)',
              fontStyle: 'italic',
              fontWeight: '600',
            }}
          >
            proyectos.
          </a>{' '}
          <br />
          Me adapto fácilmente a los cambios, soy una persona muy responsable y
          comprometida con mi trabajo.
          <br />
          Me encuentro buscando mi primer empleo como desarrollador web, donde
          pueda aplicar mis conocimientos, aprender y crecer profesionalmente.
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
      ) : (
        <p>
          I am a <strong>Full Stack Web Developer</strong> 🚀. I love to create
          functional and attractive websites. You can see some of my projects in
          the{' '}
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
          </a>{' '}
          section. <br />
          I am easy to adapt to changes, I am a very responsible person and
          committed to my job.
          <br />I am currently looking for my first job as a web developer,
          where I can apply my knowledge, learn and grow professionally. Do not
          hesitate to{' '}
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
      )}
    </>
  );
};
