import axios from 'axios';
import { useRef, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import '../../styles/contactMeForm.css';
const contactMeFormFields = {
  name: '',
  email: '',
  subjet: '',
  message: '',
};

export const ContactMeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { name, email, message, subjet, onInputChange } =
    useForm(contactMeFormFields);
  const alertSumbitMail = useRef(null);
  const alertErrorMail = useRef(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios
        .post('https://mi-portfolio-api.herokuapp.com/api/mail', {
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
          sandboxMode: true,
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
    <div
      id="contactMe"
      className="container d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between align-items-md-center pb-5 vh-100 position-relative  "
    >
      <div className="col-12 col-md-6 p-2  d-flex flex-column justify-content-center">
        <h1
          className="d-flex flex-column justify-content-center align-items-start p-md-2"
          style={{
            fontSize: '2.5rem',
            width: 'fit-content',
          }}
        >
          Ahora o nunca!
          <span className="title__contactMe">
            Contáctame.&#160;<span>&#160;</span>
          </span>
        </h1>
        <p className="p-md-2 mt-2">
          <strong>¿Tienes alguna pregunta?</strong> Envíame un mensaje y te
          contestaré lo antes posible.
        </p>
      </div>
      <div className="col-12 col-md-6 p-2">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
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
              placeholder="Correo Electronico"
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
              placeholder="Asunto"
              name="subjet"
              value={subjet}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Mensaje"
              rows="3"
              name="message"
              value={message}
              onChange={onInputChange}
              required
            ></textarea>
          </div>
          <div className="w-100 d-flex justify-content-end mt-2">
            <button
              type="submit"
              className="btn btn-submit w-100"
              disabled={!!isLoading}
            >
              {isLoading ? (
                <div className="spinner-border" role="status">
                  <span className="sr-only">Enviando...</span>
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  Enviar
                  <i className="fa-solid fa-paper-plane ps-1"></i>
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
              <strong>¡Mensaje enviado!</strong> <br />
              Te responderé lo antes posible.
            </div>
            <div
              className="alert alert-danger text-center d-none"
              role="alert"
              ref={alertErrorMail}
            >
              <strong>¡El mensaje no se pudo enviar!</strong> <br />
              Por favor, intenta nuevamente más tarde.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
