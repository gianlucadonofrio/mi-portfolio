import { useContext } from 'react';
import '../../styles/aboutMe.css';
import { LanguageContext } from '../context/LanguageContext';
import { SkillsSection } from './SkillsSection/SkillsSection';

export const AboutMe = () => {
  const { languagePage } = useContext(LanguageContext);

  return (
    <section
      id="aboutMe"
      className="container min-vh-100 d-flex flex-column justify-content-md-center align-items-center "
    >
      <div
        className="container-fluid d-flex flex-column align-items-center "
        id="title_about_me"
      >
        <p style={{ color: 'var(--color-secondary-text)' }} className="m-0">
          {languagePage.acerca_de_mi__text_title}
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: '600' }}>
          {languagePage.acerca_de_mi}
        </h1>
        <div className="vbar"></div>
      </div>
      <div className=" d-flex flex-column" style={{ width: 'fit-content' }}>
        <span
          className="d-flex align-items-center flex-column flex-md-row mt-4"
          style={{
            fontSize: '1.2rem',
          }}
        >
          {document.documentElement.lang === 'es' ? (
            <p>
              Soy un desarrollador <strong>Web Full Stack</strong> 🚀.
              Actualmente estoy estudiando la especialización en desarrollo
              Frontend de la carrera Certified Tech Developer. <br />
              Construyo sitios web que son responsivos y fáciles de usar. Puedes
              ver algunos de mis proyectos en la sección de{' '}
              <a
                href="#projects"
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-buttons)',
                  fontStyle: 'italic',
                  fontWeight: '600',
                }}
              >
                Proyectos
              </a>
              . Me gusta trabajar en equipo y me adapto fácilmente a los
              cambios, soy una persona trabajadora, responsable y comprometida
              con mi trabajo.
              <br /> Estoy abierto a oportunidades de trabajo donde pueda
              aprender y crecer. No dude en{' '}
              <a
                href="#contactMe"
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-buttons)',
                  fontStyle: 'italic',
                  fontWeight: '600',
                }}
              >
                Contactarme
              </a>{' '}
              conmigo si tiene alguna pregunta.
              <br />
              <strong
                style={{
                  fontSize: '1.5rem',
                }}
              >
                ¡Gracias por visitar mi sitio web! 😊
              </strong>
            </p>
          ) : (
            <p>
              I am a <strong>Full Stack Web Developer</strong> 🚀. Currently I
              am studying the Frontend development specialization of the
              Certified Tech Developer career. <br />I build websites that are
              responsive and easy to use. You can see some of my projects in the{' '}
              <a
                href="#projects"
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-buttons)',
                  fontStyle: 'italic',
                  fontWeight: '600',
                }}
              >
                Projects
              </a>{' '}
              section. I like to work in team and I adapt easily to changes, I
              am a hard-working, responsible and committed person with my work.
              <br /> I am open to job opportunities where I can learn and grow.
              Do not hesitate to{' '}
              <a
                href="#contactMe"
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-buttons)',
                  fontStyle: 'italic',
                  fontWeight: '600',
                }}
              >
                Contact me
              </a>{' '}
              if you have any questions.
              <br />
              <strong
                style={{
                  fontSize: '1.5rem',
                }}
              >
                Thank you for visiting my website! 😊
              </strong>
            </p>
          )}
        </span>
        <SkillsSection languagePage={languagePage} />
      </div>
    </section>
  );
};
