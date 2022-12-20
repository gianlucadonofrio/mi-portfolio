import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import '../../styles/footer.css'

export const Footer = () => {
  const { languagePage } = useContext(LanguageContext)
  return (
    <section className='w-100'>
      <div className='line-project'></div>
      <div className='container d-flex flex-column align-items-center pt-3 '>
        <p
          className='mt-2 p-4 text-center'
          style={{
            fontSize: '1.6rem',
          }}
        >
          {languagePage.thanks}
        </p>
        <a
          href='#contactMe'
          className='mt-3 contactme-footer'
          aria-label='contactme'
        >
          {languagePage.contactame}
        </a>
        <p className='p-4 text-center'>{languagePage.footer__subtitulo}</p>
        <div className='d-flex justify-content-center flex-row'>
          <a
            href='https://www.linkedin.com/in/gianlucadonofrio/'
            target={'_blank'}
            rel='noreferrer'
            aria-label='linkedin'
          >
            <i className='fa-brands fa-linkedin-in icon-social'></i>
          </a>
          <a
            href='https://github.com/gianlucadonofrio'
            target={'_blank'}
            rel='noreferrer'
            aria-label='github'
          >
            <i className='fa-brands fa-github-alt icon-social'></i>
          </a>

          <a href='#contactMe' rel='noreferrer' aria-label='email'>
            <i className='fa-regular fa-envelope icon-social'></i>
          </a>
        </div>
      </div>
      <p
        className='container mt-3 p-3'
        style={{
          fontWeight: '600',
        }}
      >
        {languagePage.footer__texto}
      </p>
    </section>
  )
}
