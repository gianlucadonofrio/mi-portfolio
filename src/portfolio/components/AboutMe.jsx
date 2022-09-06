import '../../styles/aboutMe.css';

export const AboutMe = () => {
  return (
    <div id="aboutMe" className="container vh-100 d-flex align-items-center">
      <div className="container">
        <div className="container d-flex justify-content-center align-items-center flex-column flex-md-row">
          <div className="title_aboutMe col-md-6 p-md-3 ">
            <h1
              className="text-center p-2"
              style={{
                backgroundColor: 'var(--color-background-image)',
                borderRadius: '5px',
                color: 'white',
                fontSize: '2.5rem',
                fontWeight: '600',
              }}
            >
              Acerca de mí
            </h1>
            <h5 className="d-flex align-items-center justify-content-center">
              <div className="vbar m-1"></div> Un poco sobre mi
              <div className="vbar m-1"></div>
            </h5>
          </div>
          <div className="text_abouyMe col-md-6">
            <p className="text-justify p-md-3 mt-3">
              Soy desarrollador web full stack, apasionado por el Front end. Me
              apasiona la tecnología y la programación, y me encanta aprender
              cosas nuevas. Me gusta trabajar en equipo y aprender de mis
              compañeros. Actualmente estoy cursando el segundo track de la
              carrera Certified Tech Developer, pensada y diseñada por Digital
              House, Mercado Libre y Globant, en la cual me estoy especializando
              en el desarrollo Frontend.
            </p>
          </div>
        </div>
        <div className="container d-flex">
          <h1>Skills</h1>
        </div>
      </div>
    </div>
  );
};
