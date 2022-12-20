import axios from 'axios'
import { useContext, useRef, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { LanguageContext } from '../../context/LanguageContext'

const contactMeFormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export const Form = () => {
  const { languagePage } = useContext(LanguageContext)
  const [isLoading, setIsLoading] = useState(false)
  const { name, email, message, subject, onInputChange, onResetForm } =
    useForm(contactMeFormFields)
  const alertSumbitMail = useRef(null)
  const alertErrorMail = useRef(null)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await axios
        .post('https://mi-portfolio-api.vercel.app/api/mail', {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          to: 'gian.donofrio2000@gmail.com',
          from: email,
          subject,
          text: message,
          html: `
                    <h1>Nombre: ${name}</h1>
                    <h1>Email: ${email}</h1>
                    <p>Mensaje: ${message}</p>
                    `,
        })
        .then(({ status }) => {
          if (status === 201) {
            alertSumbitMail.current.classList.remove('d-none')
            setTimeout(() => {
              alertSumbitMail.current.classList.add('d-none')
            }, 3000)
          }
        })
    } catch ({ message }) {
      alertErrorMail.current.classList.remove('d-none')
      setTimeout(() => {
        alertErrorMail.current.classList.add('d-none')
      }, 3000)
    }
    onResetForm()
    setIsLoading(false)
  }

  return (
    <form onSubmit={handleFormSubmit} id='myForm'>
      <div className='mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder={languagePage.contactme__form__nombre}
          name='name'
          value={name}
          onChange={onInputChange}
          required
        />
      </div>
      <div className='mb-3'>
        <input
          type='email'
          className='form-control'
          placeholder={languagePage.contactme__form__email}
          name='email'
          value={email}
          onChange={onInputChange}
          required
        />
      </div>
      <div className='mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder={languagePage.contactme__form__asunto}
          name='subject'
          value={subject}
          onChange={onInputChange}
          required
        />
      </div>
      <div className='mb-3'>
        <textarea
          className='form-control'
          placeholder={languagePage.contactme__form__mensaje}
          rows='4'
          name='message'
          value={message}
          onChange={onInputChange}
          required
        ></textarea>
      </div>
      <div className='w-100 d-flex justify-content-end mt-2'>
        <button
          type='submit'
          className='btn btn-media w-100'
          disabled={!!isLoading}
          style={{
            margin: '0',
          }}
        >
          {isLoading ? (
            <div className='spinner-border' role='status'></div>
          ) : (
            <div className='d-flex justify-content-center align-items-center'>
              {languagePage.contactme__form__enviar}
              <i className='fa-solid fa-paper-plane ms-2'></i>
            </div>
          )}
        </button>
      </div>
      <div className=' d-flex justify-content-center align-content-end pt-4'>
        <div
          className='alert alert-success text-center d-none'
          role='alert'
          ref={alertSumbitMail}
        >
          <strong>{languagePage.contactme__form__mensajeEnviado}</strong>
          <br />
          {languagePage.contactme__form__mensajeEnviadoTexto}
        </div>
        <div
          className='alert alert-danger text-center d-none'
          role='alert'
          ref={alertErrorMail}
        >
          <strong>{languagePage.contactme__form__mensajeError}</strong>
          <br />
          {languagePage.contactme__form__mensajeErrorTexto}
        </div>
      </div>
    </form>
  )
}
