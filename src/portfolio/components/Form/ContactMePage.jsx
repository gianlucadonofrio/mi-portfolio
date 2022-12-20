import { useContext } from 'react'
import '../../../styles/contactMeForm.css'
import { LanguageContext } from '../../context/LanguageContext'
import { Form } from './Form'

const styleIconsScrollDown = {
  fontSize: '1.6rem',
  color: 'var(--color-buttons)',
}

export const ContactMePage = () => {
  const { languagePage } = useContext(LanguageContext)

  return (
    <section
      id='contactMe'
      className='container min-vh-100 d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-between align-items-md-center position-relative'
    >
      <div className=' col-12 col-md-6 d-flex flex-column justify-content-center'>
        <h1
          className='d-flex flex-column justify-content-center align-items-start w-100 align-items-md-start p-md-2'
          style={{
            fontSize: '2.5rem',
            width: 'fit-content',
          }}
        >
          {languagePage.contactme__subtitle}
          <span className='title__contactMe'>
            {languagePage.contactame}.&#160;<span>&#160;</span>
          </span>
        </h1>
        <p className='p-md-2 mt-2'>{languagePage.contactme__text}</p>
        <div className='d-flex align-items-center'>
          <a
            href='mailto: gian.donofrio2000@gmail.com'
            target={'_blank'}
            rel='noreferrer'
            aria-label='email'
          >
            <i className='fa-regular fa-envelope icon-social'></i>
          </a>
          <p
            style={{
              fontSize: '1.1 rem',
              margin: '0',
              fontWeight: 'bold',
            }}
          >
            gian.donofrio2000@gmail.com
          </p>
        </div>
        <p
          className='container position-absolute bottom-0 start-0 d-none d-md-block'
          style={{
            fontSize: '1.3rem',
            marginBottom: '100px',
          }}
        >
          <i
            className='fa-solid fa-computer-mouse pe-2'
            style={{ ...styleIconsScrollDown }}
          ></i>
          scroll down
          <i
            className='fa-solid fa-arrow-down arrow-down-icon p-2'
            style={{ ...styleIconsScrollDown }}
          ></i>
        </p>
      </div>
      <div className=' col-12 col-md-6'>
        <Form />
        <p
          className='d-flex justify-content-center d-md-none align-items-center mt-2'
          style={{ fontSize: '1.3rem' }}
        >
          <i
            className='fa-solid fa-computer-mouse pe-2'
            style={{ ...styleIconsScrollDown }}
          ></i>
          scroll down
          <i
            className='fa-solid fa-arrow-down arrow-down-icon p-2'
            style={{ ...styleIconsScrollDown }}
          ></i>
        </p>
      </div>
    </section>
  )
}
