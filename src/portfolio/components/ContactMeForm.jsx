import axios from 'axios';
import { useContext, useRef, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import '../../styles/contactMeForm.css';
import { LanguageContext } from '../context/LanguageContext';

const contactMeFormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
};
const styleIconsScrollDown = {
  fontSize: '1.6rem',
  color: 'var(--color-buttons)',
};

export const ContactMeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, message, subjet, onInputChange } =
    useForm(contactMeFormFields);
  const alertSumbitMail = useRef(null);
  const alertErrorMail = useRef(null);
  const { languagePage } = useContext(LanguageContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios
        .post('https://mi-portfolio-api.vercel.app/api/mail', {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          to: 'gian.donofrio2000@gmail.com',
          from: email,
          subject: subjet,
          text: message,
          html: `
                <h1>Nombre: ${name}</h1>
                <h1>Email: ${email}</h1>
                <p>Mensaje: ${message}</p>
                `,
        })
        .then(({ status }) => {
          if (status === 201) {
            alertSumbitMail.current.classList.remove('d-none');
            setTimeout(() => {
              alertSumbitMail.current.classList.add('d-none');
            }, 3000);
          }
        });
    } catch ({ message }) {
      alertErrorMail.current.classList.remove('d-none');
      setTimeout(() => {
        alertErrorMail.current.classList.add('d-none');
      }, 3000);
    }
    setIsLoading(false);
  };

  return (
    <section
      id="contactMe"
      className="container d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between align-items-md-center position-relative min-vh-100"
    >
      <div className=" col-12 col-md-6 d-flex flex-column justify-content-center">
        <h1
          className="d-flex flex-column justify-content-center align-items-start w-100 align-items-md-start p-md-2"
          style={{
            fontSize: '2.5rem',
            width: 'fit-content',
          }}
        >
          {languagePage.contactme__subtitle}
          <span className="title__contactMe">
            {languagePage.contactame}.&#160;<span>&#160;</span>
          </span>
        </h1>
        <p className="p-md-2 mt-2">{languagePage.contactme__text}</p>
        <p
          className="container position-absolute bottom-0 start-0 d-none d-md-block"
          style={{
            fontSize: '1.3rem',
            marginBottom: '100px',
          }}
        >
          <i
            className="fa-solid fa-computer-mouse pe-2"
            style={{ ...styleIconsScrollDown }}
          ></i>
          scroll down
          <i
            className="fa-solid fa-arrow-down arrow-down-icon p-2"
            style={{ ...styleIconsScrollDown }}
          ></i>
        </p>
      </div>
      <div className=" col-12 col-md-6">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={languagePage.contactme__form__nombre}
              name="name"
              value={name}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder={languagePage.contactme__form__email}
              name="email"
              value={email}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={languagePage.contactme__form__asunto}
              name="subjet"
              value={subjet}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder={languagePage.contactme__form__mensaje}
              rows="4"
              name="message"
              value={message}
              onChange={onInputChange}
              required
            ></textarea>
          </div>
          <div className="w-100 d-flex justify-content-end mt-2">
            <button
              type="submit"
              className="btn btn-media w-100"
              disabled={!!isLoading}
              style={{
                margin: '0',
              }}
            >
              {isLoading ? (
                <div className="spinner-border" role="status"></div>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  {languagePage.contactme__form__enviar}
                  <i className="fa-solid fa-paper-plane ms-2"></i>
                </div>
              )}
            </button>
          </div>
          <div className=" d-flex justify-content-center align-content-end pt-4">
            <div
              className="alert alert-success text-center d-none"
              role="alert"
              ref={alertSumbitMail}
            >
              <strong>{languagePage.contactme__form__mensajeEnviado}</strong>
              <br />
              {languagePage.contactme__form__mensajeEnviadoTexto}
            </div>
            <div
              className="alert alert-danger text-center d-none"
              role="alert"
              ref={alertErrorMail}
            >
              <strong>{languagePage.contactme__form__mensajeError}</strong>
              <br />
              {languagePage.contactme__form__mensajeErrorTexto}
            </div>
          </div>
        </form>
        <p
          className="d-flex justify-content-center d-md-none align-items-center mt-2"
          style={{ fontSize: '1.3rem' }}
        >
          <i
            className="fa-solid fa-computer-mouse pe-2"
            style={{ ...styleIconsScrollDown }}
          ></i>
          scroll down
          <i
            className="fa-solid fa-arrow-down arrow-down-icon p-2"
            style={{ ...styleIconsScrollDown }}
          ></i>
        </p>
      </div>
    </section>
  );
};
